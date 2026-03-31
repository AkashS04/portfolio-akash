import { Box } from "@mui/material";
import { useMemo } from "react";

export default function TechBatch({
  data,
  key,
}: {
  data: string;
  key: number;
}) {
  const colors: string[] = [
    "#0506ff85",
    "#ff050585",
    "#05ff2f85",
    "#eeff0585",
    "#ff05fb85",
    "#ff058685",
    "#ff7a0585",
  ];
  const randomColor: any = useMemo(() => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }, []);
  return (
      <Box
        key={key}
        sx={{
          padding: "2px 12px",
          background: randomColor,
          fontFamily: "Inter",
          fontWeight: "300",
          fontSize: "16px",
          color: "#c7c7c7",
          letterSpacing: "0pt",
          textAlign: "justify",
          lineHeight: "1.59",
          mb: { lg: 4, md: 3, sm: 2, xs: 2 },
          borderRadius:"16px 0px 18px 16px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
          WebkitBoxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
          MozBoxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
        }}
      >
        {data}
      </Box>
  );
}
