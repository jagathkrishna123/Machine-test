import Appstoreimg1 from '../assets/appstoreimg1.svg'
import Appstoreimg2 from '../assets/appstoreimg2.svg'
import Playstore from '../assets/playstore.svg'
import Appstore from '../assets/appstore.svg'
import Msstore from '../assets/mstore.svg'


export const footer_data = [
      {
          title: "Quick Links",
          links: ["Home", "Who We Are", "Products", "Our Location", "Contact Us"]
      },
      {
          title: "Contacts",
          links: ["info@xxx.com", "+91 98461 xxxxxx", "2nd Floor, Tihama Centre, Near Ernakulam Medical Centre, NH 66, Palarivattom, Kochi - 682028"]

      }
  ];

  export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export const cardTitles = [
  { id: 1, title: "Iron And Steel" },
  { id: 2, title: "Paint" },
  { id: 3, title: "Tile" },
  { id: 4, title: "Sanitary" },
  { id: 5, title: "Lifestyle" },
  { id: 6, title: "Electrical" },
  { id: 7, title: "Textiles" },
  { id: 8, title: "Hardware" },
  { id: 9, title: "Iron And Steel" },
  { id: 10, title: "Distributor" },
  { id: 11, title: "Electronics" },
  { id: 12, title: "Electronics" },
];

export const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal.",
  },
  {
    question: "Vivamus luctus eros aliquet convallis ultricies?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Suspendisse potenti. Donec at neque sed justo sodales.",
  },
  {
    question: "Maecenas vel magna sodales, scelerisque eros ut, finibus velit?",
    answer:
      "Maecenas vel magna sodales, scelerisque eros ut, finibus velit. Sed vitae orci nec velit.",
  },
  {
    question: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id?",
    answer:
      "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Curabitur non justo nec urna.",
  },
  {
    question: "Vivamus luctus eros aliquet convallis ultricies?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Integer posuere erat a ante.",
  },
  {
    question: "Vivamus luctus eros aliquet convallis ultricies?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Integer posuere erat a ante.",
  },
];

export const downloadCards = [
  {
    id: 1,
    title: "Nulla tristique efficitur nisi, at Nulla tristique",
    titleColor: "text-black",
    bgColor: "bg-[#F2F2F2]",
    image: Appstoreimg1,
    stores: [
      { id: 1, img: Playstore, alt: "Google Play" },
      { id: 2, img: Appstore, alt: "App Store" },
    ],
  },
  {
    id: 2,
    title: "Nulla tristique efficitur nisi, at Nulla tristique",
    titleColor: "text-white",
    bgColor: "bg-[#231F20]",
    image: Appstoreimg2,
    stores: [
      { id: 1, img: Msstore, alt: "Microsoft Store" },
    ],
  },
];
