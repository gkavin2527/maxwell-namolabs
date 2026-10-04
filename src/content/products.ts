export interface Product {
  slug: string;
  title: string;
  category: "personal" | "general" | "commercial";
  shortDescription: string;
  image: string;
  imageAlt: string;
  whatIsIt: string[];
  benefits: string[];
  eligibility: string[];
  whatIsCovered: string[];
  whatIsNotCovered: string[];
  factorsToConsider?: string[];
  hasTowerCTA: boolean;
  towerDescription?: string;
}

export const products: Product[] = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    category: "personal",
    shortDescription:
      "A lump sum paid in the event of death or terminal illness diagnosis. Essential to protect your family, your business, or other financial commitments.",
    image: "/images/products/life-insurance.webp",
    imageAlt: "Life insurance protection for New Zealand families",
    whatIsIt: [
      "A lump sum paid in the event of death. Essential to protect your family, your business or any other financial commitments you may have. Life insurance simply creates an asset when it is needed most.",
      "Apart from providing a lump sum on your death, it also provides a lump sum on the diagnosis of a terminal illness. While no amount of money can ever replace a loved one, it can provide surviving family members with financial security at a time when they are at their most vulnerable."
    ],
    benefits: [
      "Pay off the mortgage and other debts",
      "Provide for your children's current and future education needs",
      "Act as a safeguard for your family's ongoing financial wellbeing",
      "Cancel out business guarantees and liabilities",
      "Provide an asset to generate future replacement income for your dependents"
    ],
    eligibility: [
      "Anyone between the ages of 16 & 74 who is either a New Zealand Citizen or permanent resident.",
      "If you are in New Zealand on a work visa and currently in the process of applying for residency, you may also be eligible — contact us for details.",
      "New Zealand Citizens or permanent residents who currently reside overseas may also be eligible."
    ],
    whatIsCovered: [
      "Provides cover in the event of death by any reason (e.g. illness, health conditions, or accident).",
      "Terminal illness benefit providing early payout upon terminal diagnosis."
    ],
    whatIsNotCovered: [
      "Suicide is excluded for the first 13 months of all contracts.",
      "Non-disclosure of pre-existing medical conditions during application."
    ],
    factorsToConsider: [
      "Mortgage payments, personal or investment loans, and credit cards",
      "The number of dependents you have and their ages",
      "Your level of savings and existing investments",
      "The amount of any existing insurance cover",
      "Immediate lump sums needed for funeral and transition expenses"
    ],
    hasTowerCTA: false,
  },
  {
    slug: "trauma-insurance",
    title: "Trauma Insurance",
    category: "personal",
    shortDescription:
      "A tax-free lump sum payout upon diagnosis of a critical illness or serious condition like cancer, heart attack, or stroke.",
    image: "/images/products/trauma-insurance.webp",
    imageAlt: "Trauma and critical illness insurance cover",
    whatIsIt: [
      "Trauma Insurance (or Critical Illness Insurance) pays a lump sum in the event that you suffer a specified critical illness or condition.",
      "Trauma policies cover conditions such as cancer, heart attack, stroke, and many other debilitating medical conditions. The payout allows you to focus on recovery without financial stress."
    ],
    benefits: [
      "Lump sum payment independent of medical expenses",
      "Covers specialized treatments or overseas therapy not funded by the public system",
      "Provides debt reduction while you take time off work to recuperate",
      "Funds lifestyle modifications, home alterations, or full-time care"
    ],
    eligibility: [
      "New Zealand citizens and permanent residents aged 16 to 65.",
      "Valid work visa holders on path to residency may also be eligible upon review."
    ],
    whatIsCovered: [
      "Major illnesses including cancer, heart attack, stroke, coronary artery bypass surgery, and kidney failure.",
      "Over 40 specified serious medical conditions depending on the insurer's policy terms."
    ],
    whatIsNotCovered: [
      "Pre-existing conditions that are not disclosed or expressly excluded.",
      "Conditions occurring within the standard 90-day qualifying stand-down period after policy commencement."
    ],
    factorsToConsider: [
      "Medical history and family health background",
      "Financial reserves available to support months off work",
      "Need to fund alternative therapies or non-Pharmac funded medicines"
    ],
    hasTowerCTA: false,
  },
  {
    slug: "income-protection",
    title: "Income / Mortgage Protection Insurance",
    category: "personal",
    shortDescription:
      "A monthly benefit replacing up to 75% of your gross income if you cannot work due to illness or injury.",
    image: "/images/products/income-protection-insurance.webp",
    imageAlt: "Income and mortgage protection insurance",
    whatIsIt: [
      "Income Protection pays a monthly benefit if you are unable to work due to sickness or accident. It is designed to replace up to 75% of your gross pre-disability income.",
      "Mortgage Protection is a targeted form of cover specifically designed to cover your ongoing home loan repayments and related household expenses if you fall ill or suffer an accident."
    ],
    benefits: [
      "Maintains your family's standard of living while you are off work",
      "Ensures mortgage payments are met, preventing home repossession",
      "Covers ongoing household utility bills, rates, food, and tuition",
      "Helps fund rehabilitation and return-to-work programmes"
    ],
    eligibility: [
      "Actively working in paid employment or self-employed for at least 25–30 hours per week.",
      "Ages 18 to 60 (with cover often continuing to age 65 or 70)."
    ],
    whatIsCovered: [
      "Inability to perform your usual occupation due to illness, disease, injury, or surgery.",
      "Partial disability benefits if you can return to work in a reduced capacity."
    ],
    whatIsNotCovered: [
      "Redundancy or voluntary unemployment (unless an optional redundancy rider is specifically added).",
      "Normal uncomplicated pregnancy and childbirth.",
      "Self-inflicted injuries or conditions resulting from criminal acts."
    ],
    factorsToConsider: [
      "Waiting period (e.g. 4, 8, 13, or 26 weeks) before payments begin",
      "Benefit payment period (e.g. 2 years, 5 years, or to age 65)",
      "Agreed value vs indemnity policy structures"
    ],
    hasTowerCTA: false,
  },
  {
    slug: "permanent-disability-insurance",
    title: "Permanent Disability Insurance",
    category: "personal",
    shortDescription:
      "A lump sum payment if you suffer a total and permanent disability and are unlikely to ever work again.",
    image: "/images/products/permanent-disability-insurance.webp",
    imageAlt: "Total and permanent disability insurance",
    // NOTE(audit C-1): The scraped source had copy-pasted Life Insurance text here.
    // TODO(client): Verify client's preferred permanent disability marketing wording.
    whatIsIt: [
      "Total and Permanent Disability (TPD) Insurance provides a one-off lump sum payment if you become permanently disabled due to an illness or injury and cannot return to work.",
      "This financial buffer helps you clear mortgages, pay for ongoing medical and personal care, and make necessary modifications to your home and vehicle."
    ],
    benefits: [
      "Provides long-term financial security when future earning capacity is permanently lost",
      "Allows full settlement of mortgages, personal debts, and commercial liabilities",
      "Funds home renovations such as wheelchair ramps, accessible bathrooms, and specialized equipment",
      "Provides capital to generate replacement income for your dependents"
    ],
    eligibility: [
      "New Zealand residents aged 16 to 65 in full-time or part-time employment.",
      "Available under 'own occupation' or 'any occupation' definitions depending on underwriting."
    ],
    whatIsCovered: [
      "Complete and irreversible inability to perform work suited by education, training, or experience.",
      "Loss of independent existence (inability to perform activities of daily living) or loss of limbs/sight."
    ],
    whatIsNotCovered: [
      "Temporary disabilities that allow eventual return to employment.",
      "Intentional self-inflicted injury.",
      "Non-disclosed pre-existing medical conditions."
    ],
    factorsToConsider: [
      "Own occupation vs Any occupation definitions",
      "Standalone cover vs cover bundled with Life Insurance",
      "Ongoing personal care and medical costs"
    ],
    hasTowerCTA: false,
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    category: "personal",
    shortDescription:
      "Private medical cover providing faster access to private hospitals, specialists, diagnostic imaging, and non-Pharmac treatments.",
    image: "/images/products/health-insurance.webp",
    imageAlt: "Private health and medical insurance cover",
    whatIsIt: [
      "Health Insurance (Private Medical Cover) ensures you and your family have prompt access to private surgical and medical care without enduring lengthy public hospital waiting lists.",
      "It gives you the freedom to choose your specialist, hospital, and timing of treatment, ensuring optimal recovery."
    ],
    benefits: [
      "Avoid long public health waiting lists for elective surgeries and diagnostics",
      "Choice of qualified medical specialists and private hospitals throughout New Zealand",
      "Coverage for advanced diagnostic procedures (MRI, CT scans, PET scans)",
      "Optional add-ons for GP visits, dental, optical, and non-Pharmac subsidized cancer medications"
    ],
    eligibility: [
      "Available to individuals, couples, and families residing in New Zealand.",
      "Children can be added to family policies from birth."
    ],
    whatIsCovered: [
      "Private hospital admissions, surgical procedures, and theatre fees.",
      "Specialist consultations, diagnostic testing, and post-operative care.",
      "Cancer care treatments including chemotherapy and radiotherapy."
    ],
    whatIsNotCovered: [
      "Pre-existing conditions (unless covered after a moratorium period or accepted by the underwriter).",
      "Cosmetic surgery not deemed medically necessary.",
      "Acute emergency care (handled by the New Zealand public hospital system)."
    ],
    factorsToConsider: [
      "Excess levels ($0 up to $4,000) to balance premiums and affordability",
      "Inclusion of non-Pharmac chemotherapy and breakthrough drug cover",
      "Day-to-day care add-on module vs major surgical/hospital-only cover"
    ],
    hasTowerCTA: false,
  },
  {
    slug: "home-insurance",
    title: "Home Insurance",
    category: "general",
    shortDescription:
      "Protection for your most valuable physical asset against fire, natural disasters, weather events, and accidental damage.",
    image: "/images/products/home-insurance.webp",
    imageAlt: "Home and residential property insurance",
    whatIsIt: [
      "Home Insurance protects your residential building, outbuildings, fences, and fixtures against sudden and accidental loss or damage.",
      "Whether you own a standalone house, townhouse, or rental investment, comprehensive home insurance is vital for safeguarding your equity and meeting bank mortgage criteria."
    ],
    benefits: [
      "Sum-insured rebuild cover reflecting actual current New Zealand construction costs",
      "Natural disaster protection working alongside the Natural Hazards Commission (Tokatū Ake NHC)",
      "Temporary accommodation allowance if your home becomes uninhabitable after an event",
      "Owner's liability protection for accidental property damage or bodily injury to third parties"
    ],
    eligibility: [
      "Owner-occupiers, landlords, and holiday home owners in New Zealand.",
      "Applicable to houses, townhouses, and residential apartments."
    ],
    whatIsCovered: [
      "Loss or damage from fire, storm, flood, earthquake, and landslip.",
      "Accidental breakage of fixed glass, sanitary fittings, and underground pipes.",
      "Hidden gradual water damage from internal plumbing (up to policy sub-limits)."
    ],
    whatIsNotCovered: [
      "Gradual deterioration, dry rot, wear and tear, or faulty workmanship.",
      "Damage caused by insects, vermin, or domestic pets.",
      "Unrepaired damage from previous earthquakes or claims."
    ],
    factorsToConsider: [
      "Accurate Cordell Sum-Insured calculator valuation",
      "Excess options and special geographic risks (coastal/flood zones)",
      "Direct online quotes available through our partner Tower Insurance"
    ],
    hasTowerCTA: true,
    towerDescription: "Get an instant online quote directly with our partner Tower Insurance or speak with Roger for personalized guidance."
  },
  {
    slug: "car-insurance",
    title: "Car Insurance",
    category: "general",
    shortDescription:
      "Comprehensive, third-party fire & theft, and third-party property damage vehicle cover for New Zealand drivers.",
    image: "/images/products/car-insurance.webp",
    imageAlt: "Comprehensive motor vehicle and car insurance",
    whatIsIt: [
      "Car Insurance protects your vehicle against accidents, theft, fire, vandalism, and accidental damage, as well as covering your liability for damage caused to other people's property.",
      "Cover options range from Comprehensive (the highest protection) to Third Party, Fire & Theft and basic Third Party Property Damage."
    ],
    benefits: [
      "Comprehensive protection covering your car and any third-party damage you cause",
      "Agreed value or market value settlement options",
      "Windscreen and window glass cover with no excess on selected comprehensive policies",
      "24/7 roadside breakdown assistance and emergency towing"
    ],
    eligibility: [
      "Drivers holding valid New Zealand or international driver licences.",
      "Vehicles registered and garaged in New Zealand."
    ],
    whatIsCovered: [
      "Accidental collision damage, rollovers, and weather damage.",
      "Theft, attempted theft, and malicious damage/vandalism.",
      "Third-party legal liability up to policy limits (commonly $20M)."
    ],
    whatIsNotCovered: [
      "Mechanical or electrical breakdown not resulting from an accident.",
      "Incidents occurring while the driver is under the influence of alcohol or drugs.",
      "Unlicensed drivers or drivers operating outside licence conditions."
    ],
    factorsToConsider: [
      "Named driver policies vs open driver policies for under-25 drivers",
      "Voluntary excess options to adjust annual premium costs",
      "Instant bundle builder and quotation via our partner Tower Insurance"
    ],
    hasTowerCTA: true,
    towerDescription: "Quote your vehicle in minutes through our partner Tower Insurance online quote engine."
  },
  {
    slug: "contents-insurance",
    title: "Contents Insurance",
    category: "general",
    shortDescription:
      "Cover for your furniture, appliances, electronics, clothing, and personal belongings inside and outside your home.",
    image: "/images/products/contents-insurance.webp",
    imageAlt: "Household contents and personal belongings insurance",
    whatIsIt: [
      "Contents Insurance protects the personal items that turn a house into your home — furniture, technology, clothing, sports gear, and jewellery — against theft, fire, flood, and accidental loss.",
      "It also provides worldwide cover for portable valuables like laptops, phones, and bicycles when you take them out of the house."
    ],
    benefits: [
      "Replacement cover on appliances, electronic equipment, and furniture",
      "Worldwide cover for everyday portable items like smartphones and spectacles",
      "Occupier's personal legal liability cover (e.g. if you accidentally cause fire or water damage to rented property)",
      "Frozen food spoiled by power failure or refrigerator breakdown"
    ],
    eligibility: [
      "Homeowners, renters, tenants, and flatmates living in New Zealand.",
      "Applicable whether you live in your own home, rented property, or shared flat."
    ],
    whatIsCovered: [
      "Loss or damage from burglary, fire, storms, floods, and natural hazards.",
      "Accidental damage to electronic equipment and household furniture.",
      "Temporary accommodation expenses if your contents cannot be used."
    ],
    whatIsNotCovered: [
      "Normal wear and tear, cosmetic scratching, and denting.",
      "Unspecified high-value individual items exceeding policy sub-limits (e.g. expensive jewellery over $3,000 without valuation).",
      "Motorized vehicles, caravans, or marine craft."
    ],
    factorsToConsider: [
      "Itemizing high-value jewellery, watches, and specialized sports gear",
      "Combining with Home and Car for multi-policy discounts with Tower Insurance"
    ],
    hasTowerCTA: true,
    towerDescription: "Protect your belongings with an instant online quote from Tower Insurance."
  },
  {
    slug: "business-insurance",
    title: "Business Insurance",
    category: "commercial",
    shortDescription:
      "Customized risk management solutions for New Zealand SMEs, commercial enterprises, sole traders, and key person protection.",
    image: "/images/products/business-insurance.webp",
    imageAlt: "Commercial and business risk insurance solutions",
    whatIsIt: [
      "Business Insurance safeguards your company, employees, commercial assets, and revenue against operational disruptions, liabilities, and unexpected crises.",
      "Maxwell Financial Services assists business owners with both commercial property/liability protection and vital business succession/key person risk planning."
    ],
    benefits: [
      "Key Person Protection to keep the business solvent if a vital director or specialist falls ill",
      "Shareholder and Partnership buyout protection funded through buy-sell insurance agreements",
      "Public & Statutory Liability protecting against lawsuits, fines, and claims from third parties",
      "Business Interruption cover maintaining operational cash flow and wages during rebuilding"
    ],
    eligibility: [
      "Sole traders, partnerships, trusts, and registered New Zealand companies of all sizes."
    ],
    whatIsCovered: [
      "Public liability, professional indemnity, and statutory liability.",
      "Commercial buildings, plant, machinery, stock, and commercial fleet vehicles.",
      "Key Person revenue replacement and capital debt retirement upon death or disablement."
    ],
    whatIsNotCovered: [
      "Known disputes, fraudulent activities, or intentional illegal acts.",
      "Standard trading losses, market fluctuations, or bad debts.",
      "Cyber incidents unless a dedicated Cyber Liability policy is put in place."
    ],
    factorsToConsider: [
      "Valuation of key personnel contributions to gross revenue",
      "Structuring buy-sell agreements with appropriate cross-ownership trusts",
      "Tailored consultation with Roger Venkatesh for complete risk audit"
    ],
    hasTowerCTA: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
