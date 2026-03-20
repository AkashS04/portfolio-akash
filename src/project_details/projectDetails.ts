export interface whatIbuilt {
  wId: number;
  data: string;
}

export interface whatILearned {
  wLId: number;
  data: string;
}
export interface techUsed {
  tId: number;
  techName: string;
}

export interface projectExplaination {
  eId: number;
  projectName: string;
  projectRole: string;
  techUsed: techUsed[];
  projectOverView: string;
  whatIbuilt: whatIbuilt[];
  whatILearned: whatILearned[];
}

export const projectDetails: projectExplaination[] = [
  {
    eId: 56,
    projectName: "Server Management System",
    projectRole: "React Frontend Developer",
    techUsed: [
      { tId: 26, techName: "React" },
      { tId: 27, techName: "TypeScript" },
      { tId: 28, techName: "Redux Toolkit" },
      { tId: 29, techName: "RESTful APIs" },
      { tId: 30, techName: "Tailwind CSS" },
    ],
    projectOverView:
      "Built a system to manage server assets, track inventory, and monitor server status in real-time, improving operational efficiency and reducing downtime",
    whatIbuilt: [
      {
        wId: 61,
        data: "Designed reusable and scalable component architecture using React",
      },
      {
        wId: 62,
        data: "Structured state management using Redux Toolkit to handle complex data flows",
      },
      {
        wId: 63,
        data: "Integrated REST APIs and handled asynchronous data efficiently using Axios and Redux Thunk",
      },
      {
        wId: 64,
        data: "Improved application performance using lazy loading and memoization to reduce unnecessary re-renders",
      },
      {
        wId: 65,
        data: "Built maintainable and modular UI system to support scalability",
      },
    ],
    whatILearned: [
      { wLId: 71, data: "Designed scalable fronend architecture" },
      { wLId: 72, data: "Handling complex asynchronous data flows" },
      { wLId: 73, data: "Writing modular and maintainable component systems" },
    ],
  },
  {
    eId: 57,
    projectName: "Asset Management System",
    projectRole: "React Frontend Developer",
    techUsed: [
      { tId: 21, techName: "React" },
      { tId: 22, techName: "TypeScript" },
      { tId: 23, techName: "Redux Toolkit" },
      { tId: 24, techName: "RESTful APIs" },
      { tId: 25, techName: "Material UI" },
    ],
    projectOverView:
      "Built an asset management system to track and manage organizational resources such as printers, switches, cameras, and storage devices. The application handles asset allocation, movement, and user assignment across departments, improving visibility and operational efficiency ",
    whatIbuilt: [
      {
        wId: 41,
        data: "Developed responsive and user-friendly interfaces with focus on usability",
      },
      {
        wId: 42,
        data: "Implemented advanced features such as search, filtering, sorting for better data handling",
      },
      {
        wId: 43,
        data: "Created reusable logic using custom hooks to improve code maintainability",
      },
      {
        wId: 44,
        data: "Managed application state efffectively using Redux Toolkit",
      },
      {
        wId: 45,
        data: "Implemented form validation using React Hook Form to ensure data integrity",
      },
    ],
    whatILearned: [
      {
        wLId: 31,
        data: "Managing component-level and global state efficiently",
      },
      {
        wLId: 32,
        data: "Reducing prop drilling using better state structuring",
      },
      {
        wLId: 33,
        data: "Writing cleaner and reusable code for scalable applications",
      },
    ],
  },
];
