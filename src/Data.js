import { FaHtml5, FaCss3, FaNode, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaGithub, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiFirebase, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import { SiMongodb } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";

export const navLinks = ["home", "about", "skills", "portfolio", "contact", "blog"]

export const socialIcons = [
  {
    id:1,
    icon: <FaLinkedin />,
    key: 'linkedin',
    value: "https://www.linkedin.com/in/md-soliman-alam/"
  },
  {
    id:2,
    icon: <FaGithub/>,
    key: 'Github',
    value: "https://github.com/Soliman-soad"
  } 
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "MD Soliman Alam"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+8801515275356"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "solimanalam@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <TbBrandJavascript />,<FaNode/>, <FaReact /> ,<SiMongodb/>, <AiFillGithub/>, <SiTailwindcss/>, <FaBootstrap/>, <SiFirebase/>, <SiNextdotjs/>,<FaSass/>]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm"
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm"
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm"
  }
]
export const finishes = [
  {
    id: 1,
    number: '6+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    gitHub: "https://github.com/Soliman-soad/tyro-edu",
    live: "https://tyro-edu.web.app/",
    details: "This is a online educational platform. Here firebase authentication system has been used. Without log in user can’t enroll course,User can change his profile easily, and theme changing button so user can change theme easily"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    gitHub: "https://github.com/Soliman-soad/Side-kick",
    live: "https://sidekick-f1b2d.firebaseapp.com/",
    details:"This is a tour guide's portfolio which is MongoDB CRUD operation supported. User can add services by logging in to the website. User can give review and comments if user is logged in. User can change or delete his comment."
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    gitHub: "https://github.com/Soliman-soad/Relic-Book",
    live: "https://relic-book-16d28.web.app/",
    details: "This is a online book selling Platform where User can log in as buyer or seller which has different dashboard and seller can add sell post. Admin can delete buyer and seller. Stripe used as payment and React leaflet used to show map."

  }
]


export const workNavs = [
  "All"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Sylhet, Bangladesh"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "solimanalam1999@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+8801515275356"
  }
]
