"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";
import { Flame, Clock, Laptop } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { TrendingUp  } from "lucide-react";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { ArrowUp } from "lucide-react"; 
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { LuMousePointer2 } from "react-icons/lu";
import { VscCode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { Code2 } from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaJava,
  FaPython,
  FaPhp,
  FaGitAlt
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiFigma,
  SiFramer,
  SiN8N,
  SiOpenai
} from "react-icons/si";



export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 450, damping: 35 });
  const smoothY = useSpring(mouseY, { stiffness: 450, damping: 35 });

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
      20px circle at ${smoothX}px ${smoothY}px,
      rgba(255, 255, 255, 0.51),
      transparent 100%
    )
  `;

  return (
    <>
    
      {/* ================= HERO SECTION ================= */}
      
      <section 
       id="home"
       className="relative min-h-[80vh] md:h-[80vh] h-[80vh] bg-black text-white overflow-hidden flex flex-col justify-between">

        {/* GRID BACKGROUND */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        /> */}

        {/* TOP BAR */}
<div className="flex justify-between items-center px-10 py-6 text-sm tracking-wider relative z-10">

  {/* LEFT SIDE – Social Buttons */}
  <div className="flex items-center gap-4">

    <motion.a
      href="https://www.linkedin.com/in/shridhar-lokhande-b2aa0a343"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center 
                 border border-white rounded-full 
                 hover:bg-white hover:text-black 
                 transition duration-300"
    >
      <FaLinkedinIn size={16} />
    </motion.a>

    <motion.a
      href="https://github.com/ShridharLokhande45"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center 
                 border border-white rounded-full 
                 hover:bg-white hover:text-black 
                 transition duration-300"
    >
      <FaGithub size={18} />
    </motion.a>

  </div>

  {/* RIGHT SIDE – Contact Button */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="border px-6 py-2 rounded-full 
               hover:bg-white hover:text-black 
               transition cursor-pointer"
  >
    <Link href="/contact">
      CONTACT NOW
    </Link>
  </motion.div>

</div>

        {/* CENTER TEXT */}
        <div className="relative z-10 flex justify-center items-center flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[20vw] sm:text-[16vw] md:text-[15vw] font-bold tracking-tight leading-[0.9]"
          >
            SHRIDHAR
          </motion.h1>
        </div>

        {/* BOTTOM INFO */}
        <motion.div
          className="relative z-10 grid md:grid-cols-3 text-center pb-12 text-sm tracking-wide gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delay: 1.5,
              }
            }
          }}
        >

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <Laptop size={20} className="text-gray-400" />
            <p className="text-white">FULL STACK DEVELOPER</p>
            <p className="text-gray-500">JAVA, PYTHON, FAST API</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <Flame   size={20} className="text-gray-400" />
            <p className="text-white">BUILDING SCALABLE WEB APPLICATIONS</p>
            {/* <p className="text-gray-500">AVAILABLE NOW</p> */}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <Clock size={20} className="text-gray-400" />
            <p className="text-white">OPEN TO FULL-STCASK DEVELOPER OPPORTUNITIES</p>
            <p className="text-gray-500">AVAILABLE NOW</p>
          </motion.div>

        </motion.div>

      </section>

      {/* ================= IMAGE SECTION ================= */}
    <section className="relative bg-black px-6 md:px-16 pb-24 overflow-hidden">

  <div className="relative w-full h-[350px] sm:h-[450px] md:h-[750px] rounded-3xl overflow-hidden">
    <Image
      src="/profile1.png"
      alt="Shridhar"
      fill
      className="object-cover object-[center_25%]"
      priority
    />
    </div>
  </section> 


{/* ================= APPROACH SECTION ================= */}
<section className="bg-black text-white px-6 md:px-16 pt-0 pb-10 relative">

  {/* ABOUT LABEL */}
  <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-16 text-left text-gray-400">
    ABOUT
  </h2>

  {/* Massive Heading */}
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.08 }}
    className="text-[11vw] sm:text-[8vw] md:text-[5vw] text-center px-2 font-bold leading-[1] tracking-tight text-gray-200 max-w-6xl mx-auto flex flex-wrap justify-center gap-x-2 sm:gap-x-4"
  >
    {"I'M SHRIDHAR LOKHANDE BASED IN PUNE, MAHARASHTRA, INDIA."
      .split(" ")
      .map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mt-8 max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed text-center"
  >
    On a mission to build intelligent, real-time, and user-centric software 
    solutions that empower people and businesses to succeed in the digital age.
  </motion.p>

  {/* IMAGE */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex justify-center mt-16"
  >
    <div className="relative w-[220px] md:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-black">
      <Image
        src="/profile.png"
        alt="Shridhar"
        fill
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="mt-12 text-xl md:text-2xl font-semibold text-white leading-snug tracking-wide text-center max-w-4xl mx-auto"
  >
    I'M A SHRIDHAR FULL-STACK DEVELOPER FROM INDIA.
    MY PASSION FOR CRAFTING SCALABLE SYSTEMS, CLEAN CODE, AND INTUITIVE
    USER EXPERIENCES SHINES THROUGH IN EVERY PROJECT I DELIVER.
  </motion.h2>

  {/* PARAGRAPH */}
  <motion.p
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto"
  >
    Whether that's extending capabilities with Chrome plugins, automating workflows with
    no-code/AI tools, or architecting scalable systems. With an insatiable curiosity, I embrace
    unconventional approaches, believing that the right perspective can elevate code into
    meaningful experiences that truly resonate.
  </motion.p>

  {/* BUTTON */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="mt-10 text-center"
  >
    <a
      href="/Shridhar_Resume.pdf"
      download
      className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
    >
      RESUME
    </a>
  </motion.div>

</section>

{/* Bottom Gradient Line */}
  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

{/* ================= CARDS SECTION ================= */}
<section className="bg-black px-6 md:px-6 py-24 text-center">

  <div className="max-w-6xl mx-auto">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="grid md:grid-cols-3 gap-0"
    >

      {/* CARD 1 */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }}
  transition={{ duration: 0.6 }}
  className="group border border-gray-800 p-12 text-center hover:border-gray-400 transition duration-500"
>
  <div className="flex justify-center mb-6">
    <Lightbulb size={30} className="text-gray-400" />
  </div>

  <h3 className="text-2xl font-semibold mb-4">
    PROBLEM SOLVER
  </h3>

  <div className="flex justify-center mt-6">
    <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
  </div>

</motion.div>

      {/* CARD 2 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="group border border-gray-800 p-12 text-center hover:border-gray-400 transition duration-500"
      >
        <div className="flex justify-center mb-6">
          <TrendingUp size={30} className="text-gray-400" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          GROWTH-DRIVEN
        </h3>

        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="group border border-gray-800 p-12 text-center hover:border-gray-400 transition duration-500"
      >
        <div className="flex justify-center mb-6">
          <Rocket size={30} className="text-gray-400" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          IMPACT BUILDER
        </h3>

        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
        </div>
      </motion.div>

    </motion.div>

  </div>
</section>

{/* ================= SKILLS ================= */}
{/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

<section className="bg-black text-white px-6 md:px-16 py-14">

<motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-3xl font-semibold mb-16 text-left text-gray-400"
    >
      SKILLS
    </motion.h2>

  <div className="max-w-4xl mx-auto">  

    <div className="grid md:grid-cols-2 gap-12 md:gap-20 justify-center">

      {/* LEFT COLUMN */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-10 flex flex-col items-center md:items-start mx-auto"
      >

        {/* FRONTEND */}
        <div>
          <h3 className="text-white font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <SkillTag icon={<FaHtml5 size={20} className="text-orange-500" />} label="HTML5" />
            <SkillTag icon={<FaCss3Alt size={20} className="text-blue-500" />} label="CSS3" />
            <SkillTag icon={<FaJs size={20} className="text-yellow-400" />} label="JavaScript" />
            <SkillTag icon={<FaBootstrap size={20} className="text-purple-500" />} label="Bootstrap" />
            <SkillTag icon={<SiTypescript size={20} className="text-blue-400" />} label="TypeScript" />
            <SkillTag icon={<SiNextdotjs size={20} className="text-white" />} label="Next.js" />
            <SkillTag icon={<SiTailwindcss size={20} className="text-cyan-400" />} label="Tailwind CSS" />
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-white font-semibold mb-4">Programming & Backend</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <SkillTag icon={<FaJava size={20} className="text-red-500" />} label="Core Java" />
            <SkillTag icon={<FaPython size={20} className="text-blue-400" />} label="Python" />
            <SkillTag icon={<SiDjango size={20} className="text-green-500" />} label="Django" />
            <SkillTag icon={<FaPhp size={20} className="text-indigo-400" />} label="PHP" />
            <SkillTag icon={<SiFastapi size={20} className="text-teal-400" />} label="FastAPI" />
          </div>
        </div>

        {/* DATABASE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Database</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <SkillTag icon={<SiMysql size={20} className="text-blue-600" />} label="MySQL" />
            <SkillTag icon={<SiSqlite size={20} className="text-blue-400" />} label="SQLite" />
            <SkillTag icon={<SiSupabase size={20} className="text-emerald-400" />} label="Supabase" />
          </div>
        </div>

      </motion.div>


      {/* RIGHT COLUMN */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="space-y-10 flex flex-col items-center md:items-start"
      >

        {/* TOOLS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Development Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <SkillTag icon={<Code2 size={20} className="text-gray-300" />} label="VS Code" />
            <SkillTag icon={<Code2 size={20} className="text-gray-300" />} label="Cursor" />
            <SkillTag icon={<SiFigma size={20} className="text-pink-500" />} label="Figma" />
            <SkillTag icon={<SiFramer size={20} className="text-purple-400" />} label="Framer" />
          </div>
        </div>

        {/* OTHER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Other</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <SkillTag icon={<FaGitAlt size={20} className="text-orange-600" />} label="Git" />
            <SkillTag icon={<FaGithub size={20} className="text-white" />} label="GitHub" />
            <SkillTag icon={<SiN8N size={20} className="text-red-400" />} label="n8n" />
            <SkillTag icon={<SiOpenai size={20} className="text-gray-300" />} label="ChatGPT" />
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <SkillTag label="English" />
            <SkillTag label="Marathi" />
            <SkillTag label="Hindi" />
          </div>
        </div>

      </motion.div>

    </div>
  </div>
</section>


 {/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>


    {/* ================= ACADEMIC PROJECTS ================= */}

<section className="bg-black text-white pt-12 pb-14">
  
  <div className="px-6 md:px-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold mb-12 text-left text-gray-400"
    >
      ACADEMIC PROJECTS
    </motion.h2>
  </div>

  <div className="w-full px-6 md:px-20">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-10"
  >

    {/* CARD 1 */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/projects/evenon-devices"
        className="group block
        bg-zinc-900/50 backdrop-blur-sm
        border border-zinc-800
        rounded-2xl p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-zinc-400
        hover:shadow-xl
        hover:shadow-black/40
      "
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        Evenon Devices Website

      <ArrowUpRight
        size={18}
        className="opacity-80 transition-all duration-300 
        group-hover:translate-x-1 
        group-hover:-translate-y-1 
        group-hover:opacity-100"
        />
      </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Designed and developed a fully responsive multi-device compatible 
          website with modern UI/UX and optimized performance.
        </p>

        <div className="flex flex-wrap gap-3">
          {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full 
              bg-zinc-900 text-zinc-400 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>


    {/* CARD 2 */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/projects/hotel-booking"
        className="group block
        bg-zinc-900/50 backdrop-blur-sm
        border border-zinc-800
        rounded-2xl p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-zinc-400
        hover:shadow-xl
        hover:shadow-black/40
      "
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        Hotel Booking Platform

      <ArrowUpRight 
        size={18}
        className="opacity-80 transition-all duration-300 
        group-hover:translate-x-1 
        group-hover:-translate-y-1 
        group-hover:opacity-100"
        />
      </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Full-stack hotel booking system built with Next.js frontend and 
          FastAPI backend with Supabase integration.
        </p>

        <div className="flex flex-wrap gap-3">
          {["Next.js", "FastAPI", "Python", "Supabase", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full 
              bg-zinc-900 text-zinc-400 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/projects/v7agrotech"
        className="group block
        bg-zinc-900/50 backdrop-blur-sm
        border border-zinc-800
        rounded-2xl p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-zinc-400
        hover:shadow-xl
        hover:shadow-black/40
      "
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        V7AgroTech

      <ArrowUpRight
        size={18}
        className="opacity-80 transition-all duration-300 
        group-hover:translate-x-1 
        group-hover:-translate-y-1 
        group-hover:opacity-100"
        />
      </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Frontend agriculture services website built with HTML, CSS, Bootstrap, and JavaScript, 
          featuring responsive design, animated statistics counters, 
          and modern UI to present agricultural products and farming support services.
        </p>

        <div className="flex flex-wrap gap-3">
          {["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "GitHub"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full 
              bg-zinc-900 text-zinc-400 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  </motion.div>
</div>
</section>

{/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

{/* ================= FEATURED PROJECTS ================= */}
{/* <section className="bg-black text-white py-14"> */}
  
  {/* <div className="px-6 md:px-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold mb-12 text-left text-gray-400"
    >
      FEATURED PROJECTS
    </motion.h2>
  </div> */}

  {/* <div className="w-full px-6 md:px-20">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-10"
  > */}

    {/* CARD 1 */}
    {/* <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    > */}
      {/* <Link
        href="/projects/evenon-devices"
        className="group block
        bg-zinc-900/50 backdrop-blur-sm
        border border-zinc-800
        rounded-2xl p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-zinc-400
        hover:shadow-xl
        hover:shadow-black/40
      "
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        Evenon Devices Website

      <ArrowUpRight
        size={18}
        className="opacity-80 transition-all duration-300 
        group-hover:translate-x-1 
        group-hover:-translate-y-1 
        group-hover:opacity-100"
        />
      </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Designed and developed a fully responsive multi-device compatible 
          website with modern UI/UX and optimized performance.
        </p>

        <div className="flex flex-wrap gap-3">
          {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full 
              bg-zinc-900 text-zinc-400 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  </motion.div>
</div>
</section> */}

{/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

{/* ================= EXPERIENCE SECTION ================= */}
<section className="bg-black text-white px-6 md:px-16 py-16">

  <div className="grid md:grid-cols-3 gap-12">

    {/* LEFT TITLE */}
    <div>
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="text-3xl font-semibold mb-16 text-left text-gray-400 tracking-wide"
  >
    EXPERIENCE - INTERNSHIP
  </motion.h2>
</div>

    {/* RIGHT CONTENT */}
    <div className="md:col-span-2">

      {/* TOP DIVIDER */}
      {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div> */}

      {/* EXPERIENCE ITEM */}
      <motion.div
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
          hidden: {},
        visible: {
        transition: {
        staggerChildren: 0.2
        }
      }
    }}
      className="space-y-6"
    >

  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  >
    <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
      Sourcevative Tech Solutions Pvt. Ltd., Pune
    </h3>

    <span className="text-sm text-gray-400 tracking-wide">
      JUNE 2025
    </span>
  </motion.div>

  <motion.p
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
    className="text-2xl md:text-2xl font-semibold text-gray-400 tracking-wide"
  >
    AI Development Intern
  </motion.p>

  <motion.p
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
    className="text-gray-400 leading-relaxed max-w-3xl"
  >
    Led both frontend and backend development, integrated payment gateways 
    and real-time systems, mentored junior developers, and played a key role 
    in delivering scalable SaaS products for global clients.
  </motion.p>

  </motion.div>

      {/* BOTTOM DIVIDER */}
      {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16"></div> */}

    </div>

  </div>

  </section>
  {/* GRADIENT DIVIDER */}
  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

{/* ================= MORE ABOUT CINEMATIC ================= */}
  <CinematicSection />
  </>
);
}

function CinematicSection() {
  const ref = useRef(null);

  const scrollToTop = () => {
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white px-6 md:px-16 pt-16 pb-10"
    >
      {/* HUGE TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[14vw] md:text-[10vw] font-bold text-center leading-none tracking-tight 
        bg-gradient-to-r from-gray-500 via-white to-gray-500 
        bg-clip-text text-transparent mb-16"
      >
        LET'S TALK
      </motion.h2>

      {/* BUTTON ROW */}
      <div className="relative w-full mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{ hidden: {}, visible: {} }}
          className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap"
        >
          <motion.a
            href="https://www.instagram.com/shridhar_lokhande_"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            <FaInstagram size={18} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shridhar-lokhande-b2aa0a343"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            <FaLinkedinIn size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/ShridharLokhande45"
            target="_blank"
            rel="noopener noreferrer"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="/contact"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="px-6 py-3 border border-white rounded-full text-sm tracking-wide font-medium transition duration-300 hover:bg-white hover:text-black"
          >
            CONTACT ME
          </motion.a>
        </motion.div>

        {/* SCROLL TOP BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 
          p-3 rounded-full 
          bg-white text-black 
          border border-white 
          hover:bg-black hover:text-white 
          transition duration-300 hover:scale-110"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs tracking-wide">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="mt-3 md:mt-0">Design & Developed by Shridhar :)</p>
      </div>
    </section>
  );
}

type SkillTagProps = {
  icon?: React.ReactNode;
  label: string;
};

const SkillTag = ({ icon, label }: SkillTagProps) => {
  return (
    <div
      className="
        inline-flex items-center
        gap-1.5
        px-3 py-2
        text-xs
        rounded-full
        bg-zinc-900
        border border-zinc-700
        hover:border-zinc-400
        hover:bg-zinc-800
        hover:scale-105
        transition-all duration-200 ease-in-out
      "
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="leading-none">{label}</span>
    </div>
  );
};