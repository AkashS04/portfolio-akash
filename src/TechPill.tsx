const TechPill = ({skill,color}:{skill:string,color:string}) => {

  const pillColors:any ={
color:[{
  type:"blue",
  backGroundColor:"#0000ff5e",
  textColor:"#0032ff"
},{
  type:"green",
  backGroundColor:"rgb(0 255 80 / 37%)",
  textColor:"rgb(20 255 0)"
},
{
  type:"yellow",
  backGroundColor:"rgb(255 204 0 / 37%)",
  textColor:"rgb(255 198 0)"
}]
}

  const matched = pillColors?.color?.find((c: any) => c.type === color);

  if (!matched) return null;

  return <span
      style={{
        backgroundColor: `${matched.backGroundColor}`,
        color: `${matched.textColor}`,
        fontSize: "18px",
        padding: "8px 16px",
        border: "1px solid",
        borderRadius: "18px",
        fontFamily: "Inter",
      }}
    >
      {skill}
    </span>
    
  
};

export default TechPill;
