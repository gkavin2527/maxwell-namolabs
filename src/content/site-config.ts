// COMPLIANCE-REVIEW: All business and licensing details must match FMA public register verbatim.
export const siteConfig = {
  name: "Maxwell Financial Services",
  legalName: "Maxwell Financial Services Limited",
  fspNumber: "FSP737512",
  licenceType: "Class 2 Licence",
  regulator: "Financial Markets Authority (FMA)",
  
  // Public contact information
  phone: {
    mobile: "(021) 592 786",
    mobileTel: "tel:+6421592786",
    office: "(09) 215 2423",
    officeTel: "tel:+6492152423",
  },
  email: "info@maxwellinsurance.co.nz",
  address: {
    street: "81 Gardner Avenue",
    suburb: "New Lynn",
    city: "Auckland",
    postcode: "0600",
    country: "New Zealand",
    postalAddress: "PO Box 151077, New Lynn, Auckland 0640",
  },
  hours: "Monday – Friday: 8:30am – 5:30pm (After hours by appointment)",

  // Regulatory paragraph mandatory on footer and legal pages
  // COMPLIANCE-REVIEW: Verbatim from FMA disclosure requirements
  regulatoryStatement:
    "Maxwell Financial Services Limited (FSP737512) holds a Class 2 Licence issued by the Financial Markets Authority to provide financial advice. The following adviser can give advice under our Class 2 Licence – Roger Venkatesh (FSP 539026).",

  // Dispute Resolution Scheme
  disputeResolution: {
    name: "Financial Services Complaints Limited (FSCL)",
    phone: "0800 347 257",
    email: "info@fscl.org.nz",
    website: "https://www.fscl.org.nz",
    postal: "P.O. Box 5967, Wellington 6011",
  },

  // External integration URLs
  towerQuoteUrl: process.env.NEXT_PUBLIC_TOWER_QUOTE_URL || "https://my.tower.co.nz/quote/bundle-builder?agentcode=MYSOL142",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-W4TSBGJD",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://maxwellinsurance.co.nz",
};
