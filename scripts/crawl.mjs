// Crawls the current maxwellinsurance.co.nz site into content/scraped/*.md via Firecrawl.
import fs from 'node:fs';

const key = fs.readFileSync('.env.local', 'utf8').match(/FIRECRAWL_API_KEY=(\S+)/)[1];
const headers = { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
const api = 'https://api.firecrawl.dev/v2';

const start = await fetch(`${api}/crawl`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    url: 'https://maxwellinsurance.co.nz/',
    limit: 60,
    scrapeOptions: { formats: ['markdown'], onlyMainContent: false },
  }),
}).then((r) => r.json());
if (!start.success) throw new Error(JSON.stringify(start));
console.log('crawl started', start.id);

let job;
do {
  await new Promise((r) => setTimeout(r, 5000));
  job = await fetch(`${api}/crawl/${start.id}`, { headers }).then((r) => r.json());
  console.log(job.status, `${job.completed}/${job.total}`);
} while (job.status === 'scraping');

let pages = job.data ?? [];
for (let next = job.next; next; ) {
  const more = await fetch(next, { headers }).then((r) => r.json());
  pages = pages.concat(more.data ?? []);
  next = more.next;
}

fs.mkdirSync('content/scraped', { recursive: true });
for (const p of pages) {
  const url = p.metadata?.sourceURL ?? p.metadata?.url;
  const slug = new URL(url).pathname.replace(/^\/|\/$/g, '').replace(/[^a-z0-9]+/gi, '-') || 'home';
  fs.writeFileSync(`content/scraped/${slug}.md`, `<!-- source: ${url} -->\n# ${p.metadata?.title ?? ''}\n\n${p.markdown}`);
  console.log(slug, '<-', url);
}
