export interface whatIbuilt {
  wId: number;
  data: string;
}

export interface whatILearned {
  wLId: number;
  data: string;
}
export interface techUsed{
  tId:number;
  techName:string
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
    projectRole: "Front End Developer",
    techUsed:[ {tId:26,techName:"React"}, {tId:27,techName:"TypeScript"}, {tId:28,techName:"Redux Toolkit"}, {tId:29,techName:"RESTful APIs"}, {tId:30,techName:"Tailwind CSS"},],
    projectOverView:
      "Handling the inward and outward flow of server assets, managing inventory, tracking server locations, and generating reports. The system streamlines server allocation, monitors maintenance schedules, and provides real-time updates on server status, enhancing operational efficiency and reducing downtime.",
    whatIbuilt: [
      {
        wId: 61,
        data: "Developed reusable and scalable components using React",
      },
      {
        wId: 62,
        data: "Implemented API integration with Axios",
      },
      {
        wId: 63,
        data: "Managed global state using Redux Toolkit",
      },
      {
        wId: 64,
        data: "Integrated with redux-thunk",
      },
      {
        wId: 65,
        data: "Improved load time using lazy loading",
      },
      {
        wId: 66,
        data: "optimized performance using memoization",
      },
    ],
    whatILearned: [
      { wLId: 71, data: "Clean architecture" },
      { wLId: 72, data: "Handling async API flows" },
      { wLId: 73, data: "Component composition patterns" },
    ],
  },
  {
    eId: 57,
    projectName: "Asset Management System",
    projectRole: "Front End Developer",
    techUsed: [{tId:21,techName:"React"}, {tId:22,techName:"TypeScript"}, {tId:23,techName:"Redux Toolkit"}, {tId:24,techName:"RESTful APIs"}, {tId:25,techName:"Material UI"},],
    projectOverView:
      "Manages organizational assets such as printers, switches, cameras, fingerprint devices, and storage components. Tracks asset allocatoin, movement, user assignments, and location details accross departments.",
    whatIbuilt: [
      {
        wId: 41,
        data: "Built responsive UI",
      },
      {
        wId: 42,
        data: "Implemented search, filters, sorting",
      },
      {
        wId: 43,
        data: "Used custom hooks for reusable logic",
      },
      {
        wId: 44,
        data: "Managed global state using Redux Toolkit",
      },
      {
        wId: 45,
        data: "Added form validation using React Hook Form",
      },
    ],
    whatILearned: [
      { wLId: 31, data: "Managing component state and prop drilling" },
      { wLId: 32, data: "Writing cleaner reusable code" },
    ],
  },
];
