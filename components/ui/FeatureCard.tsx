"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  list?: string[];
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  list,
  className,
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{
        y: -10,
        transition: {
          duration: 0.25,
        },
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300",
        "hover:border-blue-500/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/40 via-cyan-400/30 to-violet-500/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20"
        >
          {icon}
        </motion.div>

        <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mb-6 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {list && list.length > 0 && (
          <ul className="space-y-3">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}