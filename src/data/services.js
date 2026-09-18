import defaultImage from '../logo/download.jpg';
// ─── Real HY-Tech Service Categories ─────────────────────────────────
export const categories = [
  {
    id: 1,
    icon: 'Monitor',
    iconColor: '#7C3AED',
    title: 'Online Services',
    subtitle: 'PAN, Aadhaar, Voter ID, Passport & more',
    count: 9,
    bg: '#EDE7FB',
    slug: 'online',
    services: [

      { name: 'PAN Card', image: defaultImage },
      { name: 'Aadhaar Update', image: defaultImage },
      { name: 'Voter ID', image: defaultImage },
      { name: 'Passport', image: defaultImage },
      { name: 'Driving Licence', image: defaultImage },
      { name: 'Ayushman Card', image: defaultImage },
      { name: 'E-Shram Card', image: defaultImage },
      { name: 'PM Kisan', image: defaultImage },
      { name: 'Income / Caste / NCL Certificate', image: defaultImage },
    
    ],
    // Aadhaar Update sub-services (shown as children under Aadhaar Update)
    subServices: {
      'Aadhaar Update': [
        'Mobile Number Link',
        'Biometric Update',
        'Address Update',
        'Name Correction',
        'DOB Correction',
        'Aadhaar Download',
        'e-Aadhaar / PVC Card',
      ],
    },
  },
  {
    id: 2,
    icon: 'GraduationCap',
    iconColor: '#2563EB',
    title: 'Education Services',
    subtitle: 'Admissions, Scholarship, Exam & Resume',
    count: 6,
    bg: '#DCEEFB',
    slug: 'education',
    note: 'Includes forms for Shree Vanraj Arts & Commerce College, Dharampur',
    services: [

      { name: 'GCAS Registration & Admission', image: defaultImage },
      { name: 'College Admission Forms', image: defaultImage },
      { name: 'Hostel Admission Forms', image: defaultImage },
      { name: 'Scholarship Forms', image: defaultImage },
      { name: 'University Exam Forms', image: defaultImage },
      { name: 'Resume / CV Making', image: defaultImage },
    
    ],
  },
  {
    id: 3,
    icon: 'Briefcase',
    iconColor: '#059669',
    title: 'Job Services',
    subtitle: 'Govt Jobs, Railway, SSC, Police & more',
    count: 4,
    bg: '#DFF5E9',
    slug: 'jobs',
    services: [

      { name: 'Government Job Forms', image: defaultImage },
      { name: 'Railway Recruitment', image: defaultImage },
      { name: 'SSC / UPSC / GPSC', image: defaultImage },
      { name: 'Police / Army / Talati / Clerk', image: defaultImage },
    
    ],
  },
  {
    id: 4,
    icon: 'Printer',
    iconColor: '#EA580C',
    title: 'Printing Services',
    subtitle: 'Xerox, Lamination, PVC Card & more',
    count: 6,
    bg: '#FDEAD9',
    slug: 'printing',
    services: [

      { name: 'Xerox & Printout', image: defaultImage },
      { name: 'Lamination', image: defaultImage },
      { name: 'Scanning', image: defaultImage },
      { name: 'Spiral Binding', image: defaultImage },
      { name: 'PVC Card Printing', image: defaultImage },
      { name: 'Passport Photo Print', image: defaultImage },
    
    ],
  },
  {
    id: 5,
    icon: 'Laptop',
    iconColor: '#DB2777',
    title: 'Computer Courses',
    subtitle: 'CCC, MS Office, Tally, Typing & more',
    count: 5,
    bg: '#FBE3EC',
    slug: 'courses',
    services: [

      { name: 'CCC Course', image: defaultImage },
      { name: 'MS Office', image: defaultImage },
      { name: 'Tally Prime with GST', image: defaultImage },
      { name: 'Typing Course', image: defaultImage },
      { name: 'Internet Training', image: defaultImage },
    
    ],
  },
  {
    id: 6,
    icon: 'Globe',
    iconColor: '#CA8A04',
    title: 'Other Services',
    subtitle: 'Recharge, Bill Pay, Ticket Booking & more',
    count: 4,
    bg: '#FDF4D9',
    slug: 'other',
    services: [

      { name: 'Money Transfer', image: defaultImage },
      { name: 'Mobile Recharge', image: defaultImage },
      { name: 'Online Bill Payment', image: defaultImage },
      { name: 'Train / Bus / Flight Ticket Booking', image: defaultImage },
    
    ],
  },
];

// ─── All services flat list (for dropdowns, daily work entry, etc.) ───
export const allServices = categories.flatMap((cat) =>
  cat.services.map((svc) => ({
    name: svc.name,
    image: svc.image,
    category: cat.title,
    categorySlug: cat.slug,
    // Include Aadhaar sub-services if present
    subServices: cat.subServices?.[svc.name] ?? [],
  }))
);

// ─── Featured Service Cards (for ExploreServices section) ─────────────
export const services = [
  {
    id: 1,
    badge: 'Popular',
    badgeColor: '#1E1B2E',
    category: 'ONLINE SERVICES',
    level: 'Standard',
    title: 'PAN Card Application & Update',
    staff: 'Hiren Yadav',
    steps: 3,
    days: '2–3 Days',
    families: '2.1k',
    points: '+20 Pts',
    rating: '4.9',
    reviews: '500+',
    oldPrice: '₹300',
    price: '₹200',
    bg: '#2D1B69',
    tag: '#7C3AED',
    image: '/category_online.jpg',
  },
  {
    id: 2,
    badge: 'New',
    badgeColor: '#059669',
    category: 'ONLINE SERVICES',
    level: 'Guided',
    title: 'Aadhaar Card Update (Address / Mobile / Biometric)',
    staff: 'Yash Patel',
    steps: 4,
    days: '3–5 Days',
    families: '1.8k',
    points: '+15 Pts',
    rating: '4.7',
    reviews: '300+',
    oldPrice: '₹250',
    price: '₹150',
    bg: '#1a3a5c',
    tag: '#3B82F6',
    image: '/category_online.jpg',
  },
  {
    id: 3,
    badge: 'Trending',
    badgeColor: '#D97706',
    category: 'EDUCATION',
    level: 'Assisted',
    title: 'Scholarship Form Filling & Submission',
    staff: 'Komal Shah',
    steps: 5,
    days: '1–2 Days',
    families: '980',
    points: '+25 Pts',
    rating: '4.8',
    reviews: '200+',
    oldPrice: '₹200',
    price: '₹100',
    bg: '#1a3d5c',
    tag: '#0EA5E9',
    image: '/category_education.jpg',
  },
];

// ─── Partners / Trust Logos ───────────────────────────────────────────
export const partners = [
  'UIDAI', 'NSDL', 'Passport Seva', 'DigiLocker', 'MCA21',
  'Income Tax', 'GSTN', 'MSME', 'NIC India',
];
