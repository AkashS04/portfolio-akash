export enum skillTypes {
  FRONTEND = "Front-end",
  TOOLS = "Tools",
  OTHER = "Other",
}

export interface stacks{
  stId:number,
  skill:string,
}

export interface techStacksType{
  tId:number,
  type:skillTypes | "",
  color:string,
  stacks:stacks[]
  
}
export const techStacks:techStacksType[] =[
  { tId:11,
    type:skillTypes.FRONTEND,
    color:"blue",
    stacks:[
      {stId:121, skill:"React"},{stId:122,skill:"TypeScript"},{stId:123,skill:"Tailwind CSS"},{stId:124,skill:"Redux"},{stId:125,skill:"HTML5"},{stId:126,skill:"CSS3"},{stId:127,skill:"Javascript"},{stId:128,skill:"Material UI"},{stId:129,skill:"Bootstrap"}
    ]
  },
    { tId:12,
    type:skillTypes.TOOLS,
    color:"green",
    stacks:[
      {stId:129, skill:"Git"},{stId:130,skill:"Vite"},{stId:131,skill:"Jest"},{stId:132,skill:"Playwright"},{stId:133,skill:"JIRA"}
    ]
  },
    { tId:13,
    type:skillTypes.OTHER,
    color:"yellow",
    stacks:[
      {stId:141, skill:"Rest APIs"},{stId:142,skill:"Axios"},{stId:143,skill:"CI/CD"},{stId:144,skill:"SEO"}
    ]
  }
]
