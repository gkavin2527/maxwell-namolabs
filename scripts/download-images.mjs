import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/images');

fs.mkdirSync(targetDir, { recursive: true });

const images = [
  // Logo
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2018/09/Maxwell-Financial-Services-Logo-2x.png', dest: 'logo.png' },
  // Advisers
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2016/09/Raja-Venkatesh-Director.jpg', dest: 'roger-venkatesh.jpg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/Raja-Venkatesh.png', dest: 'roger-venkatesh.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/kiri-venkatesh.png', dest: 'kiri-venkatesh.png' },
  // Products
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/life-insurance.webp', dest: 'products/life-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/trauma-insurance.webp', dest: 'products/trauma-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/income-protection-insurance.webp', dest: 'products/income-protection-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/permanent-disability-insurance.webp', dest: 'products/permanent-disability-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/Health-Insurance.webp', dest: 'products/health-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/home-insurance.webp', dest: 'products/home-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/car-insurance.webp', dest: 'products/car-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/contents-insurnace.webp', dest: 'products/contents-insurance.webp' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/09/Business-Insurance.webp', dest: 'products/business-insurance.webp' },
  // Process icons
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2017/02/Options.png', dest: 'process/options.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2017/02/Information.png', dest: 'process/information.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2017/02/Meeting.png', dest: 'process/meeting.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2017/02/Ticking.png', dest: 'process/ticking.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2017/02/Covered.png', dest: 'process/covered.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2017/02/Insured.png', dest: 'process/insured.png' },
  // Partners
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2016/09/nib-Insurance.png', dest: 'partners/nib.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2025/09/chubb-logo-1.jpg', dest: 'partners/chubb.jpg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/08/momentum-life-insurance.jpg', dest: 'partners/momentum.jpg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/08/generate-insurance-logo.jpg', dest: 'partners/generate.jpg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/08/tower-logo.jpg', dest: 'partners/tower.jpg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2023/09/aia-nz-logo.gif', dest: 'partners/aia.gif' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2023/09/fidelity-2023.jpg', dest: 'partners/fidelity.jpg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2016/09/Partners-Life.png', dest: 'partners/partners-life.png' },
  // Trust
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2021/04/fscl-member-logo.png', dest: 'trust/fscl-member-logo.png' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/08/top-achiever-award-001.jpeg', dest: 'trust/award-001.jpeg' },
  { url: 'https://maxwellinsurance.co.nz/wp-content/uploads/2026/08/top-achiever-award-002.jpeg', dest: 'trust/award-002.jpeg' }
];

async function downloadAll() {
  for (const item of images) {
    const fullDest = path.join(targetDir, item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.warn(`Failed to fetch ${item.url}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(fullDest, buffer);
      console.log(`Saved ${item.dest} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.url}:`, err.message);
    }
  }
}

downloadAll();
