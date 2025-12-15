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
    content: "Robust Bussiness Websites for Clients",
    alt: "bussiness-image",
  },
  {
    id: 11,
    img: EcommerceImg,
    title: "ECommerse Websites",
    content: "Robust ECommerce Websites for Clients",
    alt: "ecommerce-image",
  },

  {
    id: 14,
    img: PersonalImg,
    title: "Personal Websites",
    content: "Robust Personal Websites for Clients",
    alt: "personal-website-image",
  },
  {
    id: 15,
    img: PortfolioImg,
    title: "Portfolio Websites",
    content: "Robust Portfolio Websites for Clients",
    alt: "porfolio-image",
  },
  {
    id: 13,
    img: StartupImg,
    title: "StartUp Websites",
    content: "Robust StartUp Websites for Clients",
    alt: "startup-image",
  },
];


