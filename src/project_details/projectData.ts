import EcommerceImg from "../assets/MyProjects/ECommerceWebsite.jpg";
import BussinessImg from "../assets/MyProjects/BussinessWebsite.jpg";
import StartupImg from "../assets/MyProjects/StartupWebsite.jpg";
import PersonalImg from "../assets/MyProjects/PersonalWebsite.jpg";
import PortfolioImg from "../assets/MyProjects/PortfolioWebsite.jpg";
export interface projectDataType {
  id: number;
  img: string;
  title: string;
  content: string;
  alt: string;
}

export const projectData: projectDataType[] = [
  {
    id: 12,
    img: BussinessImg,
    title: "Bussiness Websites",
    content: "Scalable business websites focused on performance, maintainability, clear user experience",
    alt: "bussiness-image",
  },
  {
    id: 11,
    img: EcommerceImg,
    title: "ECommerse Websites",
    content: "High-performance e-commerce platforms with optimized state management and seamless user flows",
    alt: "ecommerce-image",
  },

  {
    id: 14,
    img: PersonalImg,
    title: "Personal Websites",
    content: "Clean and responsive personal websites with a focus on simplicity and user engagement",
    alt: "personal-website-image",
  },
  {
    id: 15,
    img: PortfolioImg,
    title: "Portfolio Websites",
    content: "Modern portfolio websites designed to showcase projects with clarity and strong visual structure",
    alt: "porfolio-image",
  },
  {
    id: 13,
    img: StartupImg,
    title: "StartUp Websites",
    content: "Flexible and scalable frontend solutions tailored for fast-growing startup products",
    alt: "startup-image",
  },
];


