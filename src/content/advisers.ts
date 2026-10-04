export interface Adviser {
  name: string;
  legalName?: string;
  role: string;
  fspNumber?: string;
  experience: string;
  bio: string[];
  photo: string;
  photoAlt: string;
  phone: string;
  email: string;
}

export const advisers: Adviser[] = [
  {
    name: "Roger Venkatesh",
    legalName: "Raja Venkatesh",
    role: "Director and Financial Adviser",
    fspNumber: "FSP 539026",
    experience: "19+ years industry experience (former banker with 12 years in banking; insurance adviser since 2017)",
    bio: [
      "Roger is a former banker with 12 years of experience in the banking industry and has operated as a licensed Risk Adviser since 2017, bringing over 19 years of combined financial industry experience.",
      "He founded Maxwell Financial Services Limited in 2017 to help New Zealand families and business owners protect their assets, health, and loved ones while saving time and money.",
      "His goal is to drive premiums down through expert management of the entire insurance process — including personalized support, structured underwriting, and benefit maximization. Roger also provides ongoing peace-of-mind claims advocacy, personally assisting you through any insurance claims requirements."
    ],
    photo: "/images/roger-venkatesh.png",
    photoAlt: "Roger Venkatesh, Director and Financial Adviser (FSP 539026)",
    phone: "(021) 592 786",
    email: "info@maxwellinsurance.co.nz",
  },
  {
    name: "Kiri Venkatesh",
    legalName: "Krithika Sachin Venkatesh",
    role: "Key Account Manager and Financial Adviser",
    fspNumber: "FSP 1007043",
    experience: "Experienced in client support, operations, and regulatory compliance",
    bio: [
      "Working alongside Roger, Kiri has a passion for helping clients achieve their financial protection goals with a steadfast commitment to ethical and transparent advice.",
      "With her strong administrative background and attentive approach, she delivers exceptional end-to-end support to our clients throughout their insurance journey.",
      "Kiri plays a vital role in ensuring operations, policy reviews, and FMA compliance run smoothly for all Maxwell Financial Services clients."
    ],
    photo: "/images/kiri-venkatesh.png",
    photoAlt: "Kiri Venkatesh, Key Account Manager (FSP 1007043)",
    phone: "(021) 592 786",
    email: "info@maxwellinsurance.co.nz",
  },
];
