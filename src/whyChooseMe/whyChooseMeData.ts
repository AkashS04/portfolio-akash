import ProblemSolving from "../assets/skillsIcons/problem-solving.png";
import TeamPlayer from "../assets/skillsIcons/team.png";
import ProjectPlaning from "../assets/skillsIcons/project.png";
import Research from "../assets/skillsIcons/research.png";
import MultiTasking from "../assets/skillsIcons/multitask.png";

export interface whyChooseMeDataType {
  uId: number;
  skillIcon: string;
  title: string;
  name: string;
  alt: string;
}
export const whyChooseMeData: whyChooseMeDataType[] = [
  {
    uId: 111,
    skillIcon: ProblemSolving,
    title: "Problem Solving",
    name: "Implement creative ideas for Analyzed and Recognized core issues",
    alt: "problem-solving-image",
  },
  {
    uId: 222,
    skillIcon: TeamPlayer,
    title: "Team & Collabration",
    name: "Add values for the team efforts and Assistive for others to achieving team objectives",
    alt: "team-player-image",
  },
  {
    uId: 333,
    skillIcon: ProjectPlaning,
    title: "Project Planning",
    name: "Developing and detailing outline or strategy for the project with Arranged tasks,resources,and schedules effectively",
    alt: "project-planing-image",
  },
  {
    uId: 444,
    skillIcon: Research,
    title: "Research",
    name: "collective and organize data or examine data and information to draw conclusions ",
    alt: "research-image",
  },
  {
    uId: 555,
    skillIcon: MultiTasking,
    title: "Multitasking",
    name: "Manage multiple task with responsibility and took care of various tasks efficiently at the same time",
    alt: "multitasking-image",
  },
];
