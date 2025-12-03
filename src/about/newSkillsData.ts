export enum skillTypes {
  FRONTEND = "Front-end",
  TOOLS = "Tools",
  OTHER = "Other",
}
export interface skillValues {
  uID: number;
  title: string;
  value: number;
  percentage: string;
}
export interface skillLevels {
  typeID: number;
  type: skillTypes | "";
  skills: skillValues[];
}

export const newSkillsData: skillLevels[] = [
  {
    typeID: 11,
    type: skillTypes.FRONTEND,
    skills: [
      {
        uID: 125,
        title: "React",
        value: 90,
        percentage: "90%",
      },
      {
        uID: 124,
        title: "TypeScript",
        value: 90,
        percentage: "90%",
      },
      {
        uID: 135,
        title: "Tailwind CSS",
        value: 85,
        percentage: "85%",
      },
      {
        uID: 131,
        title: "Redux",
        value: 85,
        percentage: "85%",
      },
      {
        uID: 121,
        title: "HTML5",
        value: 95,
        percentage: "95%",
      },
      {
        uID: 122,
        title: "CSS3",
        value: 90,
        percentage: "90%",
      },
      {
        uID: 123,
        title: "JavaScript",
        value: 90,
        percentage: "90%",
      },
      {
        uID: 126,
        title: "Material-UI",
        value: 70,
        percentage: "70%",
      },
      {
        uID: 127,
        title: "Bootstrap",
        value: 80,
        percentage: "80%",
      },
    ],
  },
  {
    typeID: 12,
    type: skillTypes.TOOLS,
    skills: [
      {
        uID: 129,
        title: "GitHub",
        value: 80,
        percentage: "80%",
      },
      {
        uID: 140,
        title: "Git",
        value: 80,
        percentage: "80%",
      },
      {
        uID: 133,
        title: "Vite",
        value: 75,
        percentage: "75%",
      },
      {
        uID: 132,
        title: "Jest + React Testing Library",
        value: 80,
        percentage: "80%",
      },
      {
        uID: 136,
        title: "Playwright",
        value: 75,
        percentage: "75%",
      },
      {
        uID: 130,
        title: "JIRA",
        value: 70,
        percentage: "70%",
      },
    ],
  },
  {
    typeID: 13,
    type: skillTypes.OTHER,
    skills: [
      {
        uID: 134,
        title: "GitHub Actions",
        value: 75,
        percentage: "75%",
      },
      {
        uID: 128,
        title: "RESTful APIs",
        value: 90,
        percentage: "90%",
      },
      {
        uID: 137,
        title: "Axios",
        value: 90,
        percentage: "90%",
      },
      {
        uID: 138,
        title: "Performance Optimization",
        value: 75,
        percentage: "75%",
      },
    ],
  },
];
