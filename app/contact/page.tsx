"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactPage() {
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_e0j9rwg",
        "template_3lb1g8w",
        formRef.current,
        "pqIntMhKzfcXI4e7S"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        // Reset form
        formRef.current?.reset();

        // Hide success after 3 sec
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section className="relative bg-black text-white px-6 md:px-16 py-16 md:py-20">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 
        inline-flex items-center gap-1.5
        px-3 py-1.5
        text-xs
        bg-black/50 backdrop-blur
        rounded-full
        border border-white/10
        hover:bg-white hover:text-black
        transition"
      >
        <span className="text-sm">←</span>
        Back
      </button>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full mt-12 md:mt-16 h-[450px] sm:h-[550px] md:h-[700px] rounded-3xl overflow-hidden"
        >
          <Image
            src="/profile.png"
            alt="Shridhar"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6 md:mt-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            GET IN TOUCH
          </h2>

          <p className="text-gray-400 mb-8 md:mb-10 max-w-lg text-sm sm:text-base">
           I AM OPEN TO FULL-TIME FULL-STACK DEVELOPER OPPORTUNITIES AND COLLABORATIONS.
          </p>

          {/* FORM */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 md:space-y-6">

            <div className="flex flex-col gap-5">

              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 focus:outline-none focus:border-white transition"
                />
              </div>

            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-white transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full sm:w-auto px-10 py-3 border border-white rounded-full 
              hover:bg-white hover:text-black transition duration-300 
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "SUBMIT"}
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-green-400 font-medium"
            >
              Message Sent Successfully 🚀
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
}