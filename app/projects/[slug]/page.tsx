import Link from "next/link";
import { ArrowLeft, CheckCircle, ExternalLink, Github } from "lucide-react";

const projects = {
  "evenon-devices": {
    title: "Evenon Devices Website",
    overview:
      "Designed and developed a fully responsive multi-device compatible website with modern UI/UX and optimized performance.",

    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["FastAPI"],
      database: ["PostgreSQL"],
      deployment: ["Vercel (Frontend)", "Cloud Backend Hosting"],
    },

    categories: ["User Friendly", "Web Development"],
    achievements: [
      "Built responsive multi-device UI",
      "Optimized performance and load time",
      "Implemented modern UI/UX patterns",
    ],
    live: "#",
    github: "https://github.com/yourusername/evenon-devices",
  },

  "hotel-booking": {
    title: "Hotel Booking Platform",
    overview:
      "Full-stack hotel booking system built with Next.js frontend and FastAPI backend with Supabase integration.",

    stack: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["FastAPI"],
      database: ["PostgreSQL"],
      deployment: ["Vercel (Frontend)", "Cloud Backend Hosting"],
    },

    categories: ["Full Stack", "Web Application"],
    achievements: [
      "Secure authentication system",
      "Dynamic pricing logic",
      "Admin dashboard & analytics",
    ],
    live: "#",
    github: "https://github.com/yourusername/hotel-booking",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1 border border-zinc-800 rounded-2xl p-8 bg-zinc-900/40 h-fit">

          <h3 className="text-xl font-semibold mb-8 text-white border-l-2 border-zinc-600 pl-4">
            Project Details
          </h3>

          {/* STACK SECTIONS */}
          {[
            { label: "Frontend", data: project.stack.frontend },
            { label: "Backend", data: project.stack.backend },
            { label: "Database", data: project.stack.database },
            { label: "Deployment", data: project.stack.deployment },
          ].map((section) => (
            <div key={section.label} className="mb-8">
              <p className="text-xs tracking-widest text-zinc-500 mb-3 uppercase">
                {section.label}
              </p>

              <div className="flex flex-wrap gap-3">
                {section.data.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 text-sm rounded-full 
                      bg-zinc-700/60 
                      border border-zinc-600 
                      text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Categories */}
          <p className="text-xs tracking-widest text-zinc-500 mb-4">
            Categories
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 text-sm rounded-full 
                  bg-zinc-700/60 
                  border border-zinc-600 
                  text-white"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Links */}
          <p className="text-xs tracking-widest text-zinc-500 mb-4">
            Project Links
          </p>

          <div className="flex items-center gap-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center 
                  rounded-full border border-zinc-600 
                  hover:bg-white hover:text-black 
                  transition-all duration-300"
              >
                <Github size={20} />
              </Link>
            )}

            <Link
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-3 
                border border-zinc-700 
                px-6 py-3 rounded-full 
                hover:bg-white hover:text-black 
                transition duration-300"
            >
              <ExternalLink size={18} />
              View Live Demo
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
            {project.title}
          </h1>

          <h2 className="text-2xl font-semibold text-white border-l-2 border-zinc-600 pl-4 mb-6">
            Overview
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-16 max-w-3xl">
            {project.overview}
          </p>

          <h2 className="text-2xl font-semibold text-white border-l-2 border-zinc-600 pl-4 mb-8">
            Key Achievements
          </h2>

          <div className="space-y-6 mb-16">
            {project.achievements.map((item, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-xl p-6 
                  bg-zinc-900/60 
                  hover:bg-zinc-800/70 
                  hover:border-zinc-600 
                  transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} />
                  <span className="text-zinc-300">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-3 
              border border-zinc-700 
              px-6 py-3 rounded-full 
              hover:bg-white hover:text-black 
              transition duration-300"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}