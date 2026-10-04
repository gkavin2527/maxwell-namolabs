// COMPLIANCE-REVIEW: Regulated disclosure document under Financial Markets Conduct Act 2013.
// Character-for-character fidelity with scraped source.

import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Public Disclosure Statement | Maxwell Financial Services Ltd",
  description:
    "Official Financial Advice Provider (FAP) disclosure statement for Maxwell Financial Services Limited (FSP737512, Class 2 Licence). Advisers: Roger Venkatesh and Kiri Venkatesh.",
};

export default function DisclosureStatementPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-[#ffffff] border-b border-[#e9e9e9] py-4">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] text-[#787878]">
            <Link href="/" className="hover:text-[#006cff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1b2045] font-semibold">Disclosure Statement</span>
          </nav>
        </Container>
      </div>

      <Container narrow>
        <article className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm space-y-8 text-[15px] text-[#4f4f4f] leading-relaxed">
          <header className="space-y-4 pb-6 border-b border-[#e9e9e9]">
            <Tag variant="glacial">Regulatory Document</Tag>
            <Heading as="h1" size="display">
              Disclosure Statement
            </Heading>
            <p className="text-[14px] text-[#787878]">
              Maxwell Financial Services Limited &bull; Dated: 01/08/2026
            </p>
          </header>

          {/* Licensing Information */}
          <section className="space-y-3">
            <Heading as="h2" size="heading">
              Licensing Information
            </Heading>
            <p>
              Maxwell Financial Services Limited (FSP737512) holds a Class 2 Licence issued by the Financial Markets Authority to provide financial advice.
            </p>
            <p className="font-semibold text-[#1b2045]">
              The following advisers can give advice under our Class 2 License:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Raja Venkatesh (FSP539026)</li>
              <li>Krithika Sachin Venkatesh (FSP1007043)</li>
            </ul>
            <div className="pt-2 text-[14px] space-y-1">
              <p><strong>Address:</strong> 81 Gardner Avenue, New Lynn, Auckland, 0600</p>
              <p><strong>Ph:</strong> <a href="tel:+6421592786" className="text-[#006cff] hover:underline">+64 21 592 786</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@maxwellinsurance.co.nz" className="text-[#006cff] hover:underline">info@maxwellinsurance.co.nz</a></p>
            </div>
          </section>

          {/* Duties under FMC Act */}
          <section className="space-y-3">
            <Heading as="h2" size="heading">
              Our duties (under the Financial Markets Conduct Act 2013) and promise to you:
            </Heading>
            <ol className="list-decimal pl-5 space-y-2">
              <li>We will educate and provide you expert advice to help you execute a protection plan and achieve security.</li>
              <li>We will be fair and honest with you.</li>
              <li>We will only provide advice that is suitable to your needs.</li>
              <li>We are not aligned with any one provider so you can be assured that our advice is tailored to your individual needs.</li>
              <li>We will at all times protect your privacy and confidential information.</li>
              <li>We will meet and maintain the competence, knowledge and skill that are set out in the Code of Professional Conduct for Financial Advice Services (Code).</li>
              <li>We will maintain the ethical and behavioural standards, as well as duties of care that are required by New Zealand law.</li>
              <li>We are here to help, not only set up your policy but also if something unfortunate happens and you need to make a claim.</li>
              <li>We will build a relationship with you to support you, your family and your needs and goals.</li>
            </ol>
          </section>

          {/* Types of Financial Advice */}
          <section className="space-y-3">
            <Heading as="h2" size="heading">
              Types of Financial Advice we provide:
            </Heading>
            <p className="font-semibold text-[#1b2045]">Personal Risk Insurance products such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Life Insurance</li>
              <li>Trauma Cover</li>
              <li>Disability Cover</li>
              <li>Income / Mortgage type covers</li>
              <li>Medical / Health Insurance</li>
            </ul>

            <p className="font-semibold text-[#1b2045] pt-2">Services offered through referral partners:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fire &amp; General Insurance</li>
              <li>Mortgage and Lending Advice</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
              <div className="bg-[#f9f9f9] p-4 rounded-[20px] border border-[#e9e9e9]">
                <p className="font-semibold text-[#1b2045] mb-2">For personal risk insurance, we work with:</p>
                <ul className="list-disc pl-5 space-y-1 text-[14px]">
                  <li>Fidelity</li>
                  <li>Chubb</li>
                  <li>Partners Life</li>
                  <li>AIA</li>
                  <li>NIB</li>
                  <li>Momentum Life</li>
                </ul>
              </div>

              <div className="bg-[#f9f9f9] p-4 rounded-[20px] border border-[#e9e9e9]">
                <p className="font-semibold text-[#1b2045] mb-2">For health insurance, we work with:</p>
                <ul className="list-disc pl-5 space-y-1 text-[14px]">
                  <li>NIB</li>
                  <li>Partners Life</li>
                  <li>AIA</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#f9f9f9] p-4 rounded-[20px] border border-[#e9e9e9]">
                <p className="font-semibold text-[#1b2045] mb-1">For KiwiSaver:</p>
                <p className="text-[14px]">Generate</p>
              </div>
              <div className="bg-[#f9f9f9] p-4 rounded-[20px] border border-[#e9e9e9]">
                <p className="font-semibold text-[#1b2045] mb-1">For General insurance:</p>
                <p className="text-[14px]">Tower Insurance, Howden</p>
              </div>
              <div className="bg-[#f9f9f9] p-4 rounded-[20px] border border-[#e9e9e9]">
                <p className="font-semibold text-[#1b2045] mb-1">For Business insurance:</p>
                <p className="text-[14px]">Blanket Insurance</p>
              </div>
            </div>
          </section>

          {/* Commissions and Fees */}
          <section className="space-y-4">
            <Heading as="h2" size="heading">
              Commission and Fees:
            </Heading>
            <p>
              If you choose to implement an insurance policy through us, we are paid commission by the insurer. Please see the tables below for a comprehensive list of how much different providers pay us.
            </p>

            <h3 className="text-[16px] font-bold text-[#1b2045]">
              Risk insurances (Life, trauma/critical illness, permanent disability, income/mortgage/rent protection):
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] text-left border border-[#e9e9e9] rounded-[16px] overflow-hidden">
                <thead className="bg-[#f9f9f9] text-[#1b2045] border-b border-[#e9e9e9]">
                  <tr>
                    <th className="p-3 font-semibold">Company</th>
                    <th className="p-3 font-semibold">Upfront</th>
                    <th className="p-3 font-semibold">Upfront for Level</th>
                    <th className="p-3 font-semibold">Trail</th>
                    <th className="p-3 font-semibold">Trail for Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e9e9e9]">
                  <tr><td className="p-3 font-medium">Fidelity Life</td><td className="p-3">230%</td><td className="p-3">184%</td><td className="p-3">7.5%</td><td className="p-3">7.5%</td></tr>
                  <tr><td className="p-3 font-medium">Chubb Life</td><td className="p-3">220%</td><td className="p-3">190%</td><td className="p-3">7.5%</td><td className="p-3">7.5%</td></tr>
                  <tr><td className="p-3 font-medium">AIA</td><td className="p-3">220%</td><td className="p-3">180%</td><td className="p-3">10%</td><td className="p-3">3%</td></tr>
                  <tr><td className="p-3 font-medium">Nib</td><td className="p-3">230%</td><td className="p-3">N/A</td><td className="p-3">7.5%</td><td className="p-3">N/A</td></tr>
                  <tr><td className="p-3 font-medium">Momentum Life</td><td className="p-3">70%</td><td className="p-3">N/A</td><td className="p-3">8%</td><td className="p-3">N/A</td></tr>
                  <tr><td className="p-3 font-medium">Partners Life (Post 27/10/2025)</td><td className="p-3">230%</td><td className="p-3">190%</td><td className="p-3">7.5%</td><td className="p-3">7.5%</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[16px] font-bold text-[#1b2045] pt-4">
              Health Insurance Commissions:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] text-left border border-[#e9e9e9] rounded-[16px] overflow-hidden">
                <thead className="bg-[#f9f9f9] text-[#1b2045] border-b border-[#e9e9e9]">
                  <tr>
                    <th className="p-2.5 font-semibold">Company</th>
                    <th className="p-2.5 font-semibold">Medical Upfront</th>
                    <th className="p-2.5 font-semibold">GP Upfront</th>
                    <th className="p-2.5 font-semibold">Dental Upfront</th>
                    <th className="p-2.5 font-semibold">Medical Trail</th>
                    <th className="p-2.5 font-semibold">GP Trail</th>
                    <th className="p-2.5 font-semibold">Dental Trail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e9e9e9]">
                  <tr><td className="p-2.5 font-medium">AIA</td><td className="p-2.5">130%</td><td className="p-2.5">N/A</td><td className="p-2.5">N/A</td><td className="p-2.5">5%</td><td className="p-2.5">N/A</td><td className="p-2.5">N/A</td></tr>
                  <tr><td className="p-2.5 font-medium">Nib*</td><td className="p-2.5">155%</td><td className="p-2.5">5% - 10%</td><td className="p-2.5">5% - 10%</td><td className="p-2.5">5%</td><td className="p-2.5">2.5% - 7.5%</td><td className="p-2.5">Nil</td></tr>
                  <tr><td className="p-2.5 font-medium">Partners Life (Pre 27/10/2025)</td><td className="p-2.5">155%</td><td className="p-2.5">N/A</td><td className="p-2.5">N/A</td><td className="p-2.5">7.5%</td><td className="p-2.5">N/A</td><td className="p-2.5">N/A</td></tr>
                  <tr><td className="p-2.5 font-medium">Partners Life (Post 27/10/2025)</td><td className="p-2.5">115%</td><td className="p-2.5">N/A</td><td className="p-2.5">N/A</td><td className="p-2.5">5%</td><td className="p-2.5">N/A</td><td className="p-2.5">N/A</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#787878] italic">
              *These commissions are for the Ultimate Health &amp; Ultimate Health max products only. We will send you the commission for the other products if we recommend them separately.
            </p>
          </section>

          {/* Referral commissions */}
          <section className="space-y-3">
            <h3 className="text-[16px] font-bold text-[#1b2045]">For KiwiSaver:</h3>
            <p>
              I may refer you to other service providers, including Generate KiwiSaver and Generate Managed Funds. Therefore, I need to disclose that if you decide to invest with Generate, I will receive a commission of $50-$300 for KiwiSaver and an ongoing payment of 0.125% on funds invested for Managed Funds accounts. This fee is paid to me by Generate from the revenue they receive from the fees you pay.
            </p>

            <h3 className="text-[16px] font-bold text-[#1b2045] pt-2">For General Insurance:</h3>
            <p>
              I may refer you to other service providers, including Tower Insurance and Howden. Therefore, I need to disclose that if you decide to take a policy with Tower Insurance, I will receive a commission of 10- 15% upfront commission (paid as earned) and 10% – 15% renewal for the life of the policy.
            </p>
            <p>
              On occasion, product providers may treat us to an occasional coffee or tea. Due to the volume of business that we do with some companies (most notably Fidelity Life) they may provide us with complimentary attendance at conferences or management retreats which may have a value of up to $5000 p.a.
            </p>
          </section>

          {/* Clawback / Fees */}
          <section className="space-y-3">
            <Heading as="h2" size="heading">
              One-off Fees for Insurance:
            </Heading>
            <p>
              We do not expect to charge any one-off fees relating to any financial advice provided to our clients.
            </p>
            <p className="bg-[#f9f9f9] p-4 rounded-[20px] border border-[#e9e9e9]">
              <strong>However, if you cancel or materially reduce your insurance policy premiums within the first 2 years of issue, I may have to repay commission to the insurer which is called a clawback fee. If this happens, we may charge you for up to 10 hours of work at $250 per hour plus GST for the work done in advising and implementing the cover for you.</strong>
            </p>
            <p className="text-[14px] text-[#787878]">
              We will inform you of the exact amount if the situation arises. We do not aim to charge this fee unnecessarily.
            </p>
          </section>

          {/* Conflicts & Complaints */}
          <section className="space-y-3">
            <Heading as="h2" size="heading">
              Conflicts of Interest &amp; Complaints:
            </Heading>
            <p>
              To ensure that our advisers prioritise our clients’ interests above their own, we follow an advice process that ensures our recommendations are made on the basis of each client’s goals and circumstances. All our advisers undergo annual training about how to manage conflicts of interest. We undertake a compliance audit, and a review of our compliance programme annually by our internal compliance team and reputable external compliance firm.
            </p>
            <p>
              Maxwell Financial Services Ltd maintains registers to track any conflicts of interests and any gifts or incentives the company or staff might receive.
            </p>
          </section>

          {/* Disputes / FSCL */}
          <section className="space-y-4">
            <Heading as="h2" size="heading">
              What should you do if you are unhappy with something?
            </Heading>
            <p>
              If you have a problem, concern, or complaint about any part of our service or your product performance, please contact us in the first instance by either email <a href="mailto:info@maxwellinsurance.co.nz" className="text-[#006cff] underline">info@maxwellinsurance.co.nz</a> or phone <a href="tel:+6421592786" className="text-[#006cff] underline">+64 21 592 786</a> so that we may try to fix the problem.
            </p>
            <p>
              You can also send your concerns to us in writing at our address: 81 Gardner Avenue New Lynn, Auckland, 0600. We will contact you within 3 business days and aim to resolve your complaint within 10 working days.
            </p>
            <p>
              If we can’t resolve your complaint, or you are not satisfied with the way we propose to do so, you can contact <strong>Financial Services Complaints Ltd (FSCL) – A Financial Ombudsman Service</strong>.
            </p>
            <div className="bg-[#f9f9f9] p-6 rounded-[24px] border border-[#e9e9e9] space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/trust/fscl-member-logo.png"
                  alt="FSCL Financial Services Complaints Ltd"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-[14px]">
                FSCL is our independent external ombudsman and dispute resolution service approved by the Minister of Consumer Affairs under the Financial Service Providers (Registration and Dispute Resolution) Act 2008. Their service costs you nothing.
              </p>
              <div className="text-[14px] space-y-1 pt-1">
                <p><strong>Email:</strong> info@fscl.org.nz</p>
                <p><strong>Telephone:</strong> 0800 347 257 or 04 472 3725</p>
                <p><strong>Address:</strong> PO Box 5967, Lambton Quay, Wellington 6148</p>
              </div>
            </div>
          </section>

          {/* Privacy Statement in Disclosure */}
          <section className="space-y-4 pt-4 border-t border-[#e9e9e9]">
            <Heading as="h2" size="heading">
              Privacy Statement
            </Heading>
            <p>
              Maxwell Financial Services is committed to protecting your privacy in accordance with the New Zealand Privacy Act 2020. We collect, store, and process your personal and health information solely to formulate insurance recommendations, submit applications to insurers, and assist with claims.
            </p>
            <p>
              For our complete privacy and data handling practices, please read our dedicated{" "}
              <Link href="/privacy-policy" className="text-[#006cff] underline hover:text-[#4672ff]">
                Privacy Policy
              </Link>.
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}
