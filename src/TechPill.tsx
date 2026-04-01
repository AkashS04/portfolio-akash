const TechPill = ({ label }: { label: string }) => {
  return (
    <span
      style={{
        backgroundColor: "#0000ff5e",
        color: "#0032ff",
        fontSize: "18px",
        padding: "8px 16px",
        border: "1px solid",
        borderRadius: "18px",
        fontFamily: "Inter",
      }}
    >
      {label}
    </span>
  );
};

export default TechPill;
