import { Box } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, memo } from "react";

const Framer = memo(({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    } else {
      const rect = ref.current?.getBoundingClientRect();
      // only reset if element is below viewport, not above
      if (rect && rect.top > 0) {
        controls.set({ opacity: 0, y: 60 });
      }
    }
  }, [isInView]); // controls is stable, no need in deps

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      {children}
    </Box>
  );
});

export default Framer;