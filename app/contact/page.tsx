"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();

  return (
    <section className="relative bg-black text-white px-6 md:px-16 py-16 md:py-20">

      {/* Back Button */}
      <button
  onClick={() => router.back()}
  className="absolute top-6 left-6 md:top-8 md:left-8 
px-7 py-3 
bg-black/70 backdrop-blur-md 
text-white text-base font-medium 
rounded-full 
border border-white/20 
hover:bg-white hover:text-black 
transition duration-300"
>
  <span className="mr-2 text-lg">←</span> Back
</button>
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[320px] sm:h-[400px] md:h-[800px] rounded-3xl overflow-hidden"
>
        <Image
            src="/profile.png"
            alt="Shridhar"
            fill
            className="object-cover"
            priority
        />
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-6 md:mt-0"
        >

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            LET’S WORK <br className="hidden sm:block" />
            TOGETHER
          </h2>

          <p className="text-gray-400 mb-8 md:mb-10 max-w-lg text-sm sm:text-base">
            Reach out and let's create something amazing together.
            Let's achieve greatness.
          </p>
          <div className="mb-8 space-y-3 text-gray-300 text-sm">

{/* ================= CONTACT INFO CARD ================= */}
<div className="mb-10">

  <div className="bg-white/5 backdrop-blur-md border border-white/10 
  rounded-2xl p-6 
  shadow-[0_0_30px_rgba(255,255,255,0.05)]
  hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
  transition-all duration-500">

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

      {/* EMAIL */}
      <div className="flex items-center gap-4 group">
        <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
          <Mail size={18} />
        </div>
        <a
          href="mailto:your@email.com"
          className="text-gray-300 group-hover:text-white transition"
        >
          shrilokhande45@gmail.com
        </a>
      </div>

      {/* PHONE */}
      <div className="flex items-center gap-4 group">
        <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
          <Phone size={18} />
        </div>
        <a
          href="tel:+919999999999"
          className="text-gray-300 group-hover:text-white transition"
        >
          +91 9766952038
        </a>
      </div>

      {/* LOCATION */}
      <div className="flex items-center gap-4 group">
        <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
          <MapPin size={18} />
        </div>
        <span className="text-gray-300 group-hover:text-white transition">
          Pune.
        </span>
      </div>

    </div>

  </div>
</div>

</div>

          {/* FORM */}
          <form className="space-y-5 md:space-y-6">

            {/* Name + Email */}
            <div className="flex flex-col gap-5">

              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 focus:outline-none focus:border-white transition"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={5}
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-white transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 w-full sm:w-auto px-10 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              SUBMIT
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}