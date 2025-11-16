"use client"

import Box from "@mui/material/Box"
import { motion, Variants } from "motion/react"

function LoadingThreeDotsJumping() {
    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.78,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <>
            <Box sx={{ background: "#000000e4", padding: "16px", height: "100vh" }}>
                <Box sx={{ border: "0.25px #d52e2edc solid" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItem: "center", height: "calc(100vh - 32px)" }}>
                        <motion.div
                            animate="jump"
                            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                            className="container"
                        >
                            <motion.div className="dot" variants={dotVariants} />
                            <motion.div className="dot" variants={dotVariants} />
                            <motion.div className="dot" variants={dotVariants} />
                            <motion.div className="dot" variants={dotVariants} />
                            <motion.div className="dot" variants={dotVariants} />
                            <motion.div className="dot" variants={dotVariants} />
                            <motion.div className="dot" variants={dotVariants} />
                            <StyleSheet />
                        </motion.div>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
                width: 0.25px;
                height: 50px;
                border-radius: 8px 2px;
                background-color:#d52e2e;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingThreeDotsJumping
