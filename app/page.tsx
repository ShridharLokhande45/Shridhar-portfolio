"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";
import { MapPin, Clock, Laptop } from "lucide-react";
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
        <div className="flex justify-end items-center px-10 py-6 text-sm tracking-wider relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="border px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
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
            className="flex flex-col items-center gap-3"
          >
            <MapPin size={20} className="text-gray-400" />
            <p className="text-white">PUNE MAHARASHTRA</p>
            <p className="text-gray-500">INDIA</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <Clock size={20} className="text-gray-400" />
            <p className="text-white">IMMEDIATE JOINER</p>
            <p className="text-gray-500">AVAILABLE NOW</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <Laptop size={20} className="text-gray-400" />
            <p className="text-white">SOFTWARE DEVELOPER</p>
            <p className="text-gray-500">FULL STACK</p>
          </motion.div>

        </motion.div>

      </section>

      {/* ================= IMAGE SECTION ================= */}
    <section className="relative bg-black px-6 md:px-16 pb-24 overflow-hidden">

  {/* DOT GRID BACKGROUND */}
  {/* <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "35px 35px",
    }}
  /> */}

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
<section className="bg-black text-white px-6 md:px-16 pt-0 pb-10 relative bg-black">

  {/* ABOUT LABEL */}
  <h2 className="text-3xl font-semibold mb-16 text-left text-gray-400">
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
        <h3 className="text-2xl font-semibold mb-4">PROBLEM SOLVER</h3>
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
        <h3 className="text-2xl font-semibold mb-4">GROWTH-DRIVEN</h3>
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
        <h3 className="text-2xl font-semibold mb-4">IMPACT BUILDER</h3>
      </motion.div>

    </motion.div>

  </div>
</section>

{/* ================= SKILLS ================= */}
{/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

<section className="bg-black text-white px-6 md:px-16 py-24">

<motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-10 flex flex-col items-center md:items-start mx-auto"
      >

        {/* FRONTEND */}
        <div>
          <h3 className="text-white font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <SkillTag icon={<FaHtml5 size={22} className="text-orange-500" />} label="HTML5" />
            <SkillTag icon={<FaCss3Alt size={22} className="text-blue-500" />} label="CSS3" />
            <SkillTag icon={<FaJs size={22} className="text-yellow-400" />} label="JavaScript" />
            <SkillTag icon={<FaBootstrap size={22} className="text-purple-500" />} label="Bootstrap" />
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-white font-semibold mb-4">Programming & Backend</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <SkillTag icon={<FaJava size={22} className="text-red-500" />} label="Core Java" />
            <SkillTag icon={<FaPython size={22} className="text-blue-400" />} label="Python" />
            <SkillTag icon={<SiDjango size={22} className="text-green-500" />} label="Django" />
            <SkillTag icon={<FaPhp size={22} className="text-indigo-400" />} label="PHP" />
            <SkillTag icon={<SiFastapi size={22} className="text-teal-400" />} label="FastAPI" />
          </div>
        </div>

        {/* DATABASE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Database</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <SkillTag icon={<SiMysql size={22} className="text-blue-600" />} label="MySQL" />
            <SkillTag icon={<SiSqlite size={22} className="text-blue-400" />} label="SQLite" />
            <SkillTag icon={<SiSupabase size={22} className="text-emerald-400" />} label="Supabase" />
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
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <SkillTag icon={<Code2 size={22} className="text-gray-300" />} label="VS Code" />
            <SkillTag icon={<Code2 size={22} className="text-gray-300" />} label="Cursor" />
            <SkillTag icon={<SiFigma size={22} className="text-pink-500" />} label="Figma" />
            <SkillTag icon={<SiFramer size={22} className="text-purple-400" />} label="Framer" />
          </div>
        </div>

        {/* OTHER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Other</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <SkillTag icon={<FaGitAlt size={22} className="text-orange-600" />} label="Git" />
            <SkillTag icon={<FaGithub size={22} className="text-white" />} label="GitHub" />
            <SkillTag icon={<SiN8N size={22} className="text-red-400" />} label="n8n" />
            <SkillTag icon={<SiOpenai size={22} className="text-gray-300" />} label="ChatGPT" />
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
<section className="bg-black text-white py-24">

  {/* HEADING */}
  <div className="px-6 md:px-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold mb-16 text-left text-gray-400"
    >
      ACADEMIC PROJECTS
    </motion.h2>
  </div>

  <div className="max-w-6xl mx-auto px-6 md:px-16 space-y-24">

    {/* PROJECT 1 */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[12/9] rounded-2xl overflow-hidden">
        <Image
          src="/profile.png"
          alt="Project Image"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">
          Alumni Management System{" "}
          <span className="text-gray-400 text-lg">2023/25</span>
        </h3>

        <p className="text-gray-400 mb-4">
          <strong>Technologies Used:</strong> HTML/CSS, JavaScript, SQL, Bootstrap.
        </p>

        <ul className="text-gray-300 space-y-2 leading-relaxed">
          <li>• Alumni record management & communication system.</li>
          <li>• Registration, search, updates, and reporting features.</li>
          <li>• Event management and alumni networking integration.</li>
          <li>• Newsletter tools, career support & donor tracking.</li>
          <li>• Social media engagement features.</li>
        </ul>

        <div className="mt-6">
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white rounded-full text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            VIEW PROJECT
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 2 */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      {/* CONTENT */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">
          Parking Management System{" "}
          <span className="text-gray-400 text-lg">2023</span>
        </h3>

        <p className="text-gray-400 mb-4">
          <strong>Technologies Used:</strong> HTML/CSS, JavaScript, SQL, Bootstrap.
        </p>

        <ul className="text-gray-300 space-y-2 leading-relaxed">
          <li>• Real-time parking slot booking and tracking system.</li>
          <li>• User registration and live slot availability updates.</li>
          <li>• Admin dashboard for slot and user management.</li>
          <li>• Reduced congestion using real-time updates.</li>
          <li>• Simple, secure, and user-friendly interface.</li>
        </ul>

        <div className="mt-6">
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white rounded-full text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            VIEW PROJECT
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full aspect-[12/9] rounded-2xl overflow-hidden">
        <Image
          src="/profile1.png"
          alt="Parking Management System"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

{/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

{/* ================= MORE ABOUT CINEMATIC ================= */}
<section>
  <CinematicSection />
</section>
  </>
);
}

function CinematicSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 25%"],
  });

  // Ultra smooth animation curves
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.45], [120, 0]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.45], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="bg-black pt-32 pb-6 px-6 text-center overflow-hidden"
    >
      {/* TITLE */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-gray-400 tracking-tight">
          MORE ABOUT
        </h2>

        <h2 className="text-6xl md:text-8xl font-bold text-gray-300 tracking-tight">
          SHRIDHAR
        </h2>
      </motion.div>

      {/* IMAGE */}
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex justify-center mt-16"
>
  <div className="relative w-[220px] md:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
    <Image
      src="/profile.png"
      alt="Shridhar"
      fill
      className="object-cover"
    />
  </div>
</motion.div>

  <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }}
  className="mt-10 max-w-4xl mx-auto"
>

  {/* HEADING */}
  <motion.h2
    variants={{
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.7 }}
    className="text-xl md:text-2xl font-semibold text-white leading-snug tracking-wide"
  >
    I'M A VERSATILE FULL-STACK MERN DEVELOPER FROM INDIA.
    MY PASSION FOR CRAFTING SCALABLE SYSTEMS, CLEAN CODE, AND INTUITIVE
    USER EXPERIENCES SHINES THROUGH IN EVERY PROJECT I DELIVER.
  </motion.h2>

  {/* PARAGRAPH */}
  <motion.p
    variants={{
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.7 }}
    className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed"
  >
    Whether that's extending capabilities with Chrome plugins, automating workflows with
    no-code/AI tools, or architecting scalable systems. With an insatiable curiosity, I embrace
    unconventional approaches, believing that the right perspective can elevate code into
    meaningful experiences that truly resonate.
  </motion.p>

  {/* BUTTON */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.7 }}
    className="mt-10"
  >
    <a
      href="/Shridhar_Resume.pdf"
      download
      className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
    >
      RESUME
    </a>
  </motion.div>

  {/* DIVIDER */}
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }}
    transition={{ duration: 0.8 }}
    className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
  />

  </motion.div>

{/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

{/* ================= FOOTER / LET'S TALK ================= */}
<section className="bg-black text-white px-6 md:px-16 pt-6 pb-0">

  {/* HUGE TITLE */}
  <motion.h2
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-[14vw] md:text-[10vw] font-bold text-center leading-none tracking-tight 
    bg-gradient-to-r from-gray-500 via-white to-gray-500 
    bg-clip-text text-transparent mb-12"
  >
    LET'S TALK
  </motion.h2>

  {/* BUTTON ROW WRAPPER */}
  <div className="relative w-full mb-12">

    {/* CENTER BUTTONS */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: {},
        visible: {}
      }}
      className="flex justify-center items-center gap-4 sm:gap-6 flex-nowrap"
    >

      {/* BUTTON 1 */}
      <motion.a
        href="#"
        variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
        <FaInstagram size={16} />
      </motion.a>

      {/* BUTTON 2 */}
      <motion.a
        href="#"
        variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
        <FaLinkedinIn size={16} />
      </motion.a>

      {/* BUTTON 3 */}
      <motion.a
        href="/contact"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="px-5 py-2.5 sm:px-7 sm:py-3 border border-white rounded-full text-xs sm:text-sm tracking-wide font-medium transition duration-300 hover:bg-white hover:text-black"      >
        CONTACT ME
      </motion.a>

    </motion.div>

    {/* RIGHT SIDE ARROW */}
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      onClick={scrollToTop}
      className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 
      p-3 rounded-full border border-white/20 
      hover:bg-white hover:text-black 
      transition duration-300 hover:scale-110"
    >
      <ArrowUp size={18} />
    </motion.button>

  </div>

</section>
  {/* GRADIENT DIVIDER */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

{/* BOTTOM BAR */}
<div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs tracking-wide">
  <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
  <p className="mt-3 md:mt-0">Design & Developed by Shridhar:)</p>
</div>

</section>
  );
}

type SkillTagProps = {
  icon?: ReactNode;
  label: string;
};

function SkillTag({ icon, label }: SkillTagProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="flex items-center gap-3 px-5 py-3 rounded-full 
      bg-white/5 backdrop-blur-md border border-white/10 
      hover:border-white/30 hover:bg-white/10 
      transition-all duration-300 text-sm font-medium"
    >
      {icon && icon}
      {label}
    </motion.div>
  );
}

const scrollToTop = () => {
  const hero = document.getElementById("home");
  if (hero) {
    hero.scrollIntoView({ behavior: "smooth" });
  }
};