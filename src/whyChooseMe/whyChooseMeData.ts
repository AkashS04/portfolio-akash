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
    name: "I approach problems by breaking them into smaller parts, identifying root causes, and Implementing scalable, maintainable solutions",
    alt: "problem-solving-image",
  },
  {
    uId: 222,
    skillIcon: TeamPlayer,
    title: "Collaboration",
    name: "I work closely with designers, backend developers, and teams to deliver consistent and reliable user experiences",
    alt: "team-player-image",
  },
  {
    uId: 333,
    skillIcon: ProjectPlaning,
    title: "Architecture & Planning",
    name: "I focus on structuring applications using feature-based architecture to ensure scalability, reusability, and maintainability",
    alt: "project-planing-image",
  },
  {
    uId: 444,
    skillIcon: Research,
    title: "Performance Focus",
    name: "I continuously optimize application by reducing unnecessary re-renders, improving load times, and enhancing overall responsiveness",
    alt: "research-image",
  },
  {
    uId: 555,
    skillIcon: MultiTasking,
    title: "Execution & Ownership",
    name: "I handle multiple responsibilities with clear prioritization, ensuring tasks are completed efficiently without compromising quality",
    alt: "multitasking-image",
  },
];
