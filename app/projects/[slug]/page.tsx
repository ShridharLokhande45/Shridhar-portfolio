import Link from "next/link";
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react";

const projects = {
  "evenon-devices": {
    title: "Evenon Devices Website",
    overview:
      "Designed and developed a fully responsive multi-device compatible website with modern UI/UX and optimized performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "CI/CD"],
    categories: ["User Friendly", "Web Development"],
    achievements: [
      "Built responsive multi-device UI",
      "Optimized performance and load time",
      "Implemented modern UI/UX patterns",
    ],
    live: "#",
  },
  "hotel-booking": {
    title: "Hotel Booking Platform",
    overview:
      "Full-stack hotel booking system built with Next.js frontend and FastAPI backend with Supabase integration.",
    tech: ["Next.js", "FastAPI", "Python", "Supabase", "Tailwind CSS"],
    categories: ["Full Stack", "Web Application"],
    achievements: [
      "Secure authentication system",
      "Dynamic pricing logic",
      "Admin dashboard & analytics",
    ],
    live: "#",
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

          {/* Project Details Heading */}
          <h3 className="text-xl font-semibold mb-8 text-white border-l-2 border-zinc-600 pl-4">
            Project Details
          </h3>

          {/* Technologies */}
          <p className="text-xs tracking-widest text-zinc-500 mb-4">
            TECHNOLOGIES
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full 
                bg-transparent text-white 
                border border-zinc-800 bg-zinc-600/60 
                hover:bg-zinc-800/70 
                hover:border-zinc-600 
                transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Categories */}
          <p className="text-xs tracking-widest text-zinc-500 mb-4">
            CATEGORIES
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 text-sm rounded-full 
                bg-transparent text-white 
                border border-zinc-800 bg-zinc-600/60 
                hover:bg-zinc-800/70 
                hover:border-zinc-600 
                transition duration-300"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Live Demo Button */}
          <p className="text-xs tracking-widest text-zinc-500 mb-4">
            PROJECT LINKS
          </p>

          <Link
            href={project.live}
            className="inline-flex items-center gap-3 
              border border-zinc-700 
              px-6 py-3 rounded-full 
              hover:bg-white 
              hover:text-black 
              transition duration-300" 
          >
            <ExternalLink size={18} />
            View Live Demo
          </Link>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
            {project.title}
          </h1>

          {/* Overview */}
          <h2 className="text-2xl font-semibold text-white border-l-2 border-zinc-600 pl-4 mb-6">
            Overview
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-16 max-w-3xl">
            {project.overview}
          </p>

          {/* Key Achievements */}
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
                  <CheckCircle
                    className="text-white"
                    size={20}
                  />
                  <span className="text-zinc-300">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 
              border border-zinc-700 
              px-6 py-3 rounded-full 
              hover:bg-white 
              hover:text-black 
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