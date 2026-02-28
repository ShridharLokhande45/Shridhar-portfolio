"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";

export default function GlobalSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`
    radial-gradient(
    12px circle at ${smoothX}px ${smoothY}px,
    rgba(255,255,255,1),
    rgba(255,255,255,0.4) 40%,
    transparent 80%
    )
  `;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ background }}
    />
  );
}