"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { FeatureBentoGrid } from "./_components/FeatureBentoGrid";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "./_components/ToggleThemes";

export default function Home() {
  const { theme, setTheme } = useTheme(); // global control

  return (
    <div className="min-h-screen transition-colors duration-500 relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center
      bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* show toggle where you want; I show it inside Navbar area below */}
      <Navbar theme={theme} setTheme={setTheme} />
      {/* your content unchanged */}
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Your AI Medical Assistant for Smarter Healthcare".split(" ").map((w, i) => (
            <motion.span key={i} initial={{ opacity: 0, filter: "blur(4px)", y: 10 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.3, delay: i * 0.1, ease: "easeInOut" }} className="mr-2 inline-block">
              {w}
            </motion.span>
          ))}
        </h1>
        <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg text-neutral-600 dark:text-neutral-400">
          Experience personalized, AI-driven healthcare that provides smart diagnoses, health tracking, and real-time medical insights — all in one place.
        </p>

        <Link href={"sign-in"}>
          <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
            <button className="w-60 rounded-lg dark:bg-[#009f6b] dark:text-white bg-black px-6 py-2 text-white hover:bg-gray-800 dark:hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          <div className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <img src="doctore_resp_image.jpg" alt="Landing preview" className="aspect-[16/9] w-full object-cover" height={1000} width={1000} />
            </div>
          </div>
        </Link>
      </div>

      <FeatureBentoGrid />
    </div>
  );
}

const Navbar = ({ theme, setTheme }: { theme: string | undefined; setTheme: (v: string) => void }) => {
  const { user } = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Medical with AI</h1>
      </div>

      {/* place toggle on right in navbar */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
        </div>

        {!user ? (
          <Link href={"sign-in"}>
            <button className="w-24 rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">Login</button>
          </Link>
        ) : (
          <div className="flex gap-5 items-center ">
            <Link href={"dashboard"}>
            <Button className=" dark:bg-[#009f6b] dark:text-white">Dashboard</Button>
            </Link>
             <ThemeToggle /> {/* uses useTheme internally */}<UserButton />
          </div>
        )}
      </div>
    </nav>
  );
};
