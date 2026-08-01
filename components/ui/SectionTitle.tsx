"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Alignment = "left" | "center" | "right";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: Alignment;
  className?: string;
}

const alignmentStyles: Record<Alignment, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export default function SectionTitle({
  title,
  subtitle,
  description,
  alignment = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "mx-auto mb-16 flex max-w-3xl flex-col gap-4",
        alignmentStyles[alignment],
        className
      )}
    >
      {subtitle && (
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {subtitle}
        </span>
      )}

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}