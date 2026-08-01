"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { testimonials } from "@/constants/data";

const AUTO_ADVANCE_MS = 5500;

export default function Testimonials() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;
		if (!section) {
			return;
		}

		const ctx = gsap.context(() => {
			gsap.from("[data-reveal]", {
				y: 24,
				opacity: 0,
				duration: 0.7,
				stagger: 0.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 78%",
				},
			});
		}, section);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		if (isPaused) {
			return;
		}

		const timer = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, AUTO_ADVANCE_MS);

		return () => window.clearInterval(timer);
	}, [isPaused]);

	const active = testimonials[activeIndex];

	return (
		<section
			id="testimonials"
			ref={sectionRef}
			className="py-16 sm:py-20"
			aria-labelledby="testimonials-heading"
		>
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p data-reveal className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						Customers
					</p>
					<h2
						id="testimonials-heading"
						data-reveal
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Teams running revenue, people, and finance on CRM360.
					</h2>
				</div>

				<div
					data-reveal
					className="relative mx-auto mt-12 max-w-2xl"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<div className="relative min-h-72 overflow-hidden rounded-3xl border border-(--border) bg-[rgb(12_18_39/62%)] p-7 shadow-[0_16px_40px_rgb(4_8_22/32%)] backdrop-blur-md sm:min-h-64 sm:p-10">
						<Quote
							className="absolute right-6 top-6 text-[rgb(129_145_255/16%)] sm:right-8 sm:top-8"
							size={56}
							aria-hidden="true"
						/>

						<AnimatePresence mode="wait">
							<motion.div
								key={active.name}
								initial={{ opacity: 0, x: 24 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -24 }}
								transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								className="relative z-10"
							>
								<p className="text-base leading-relaxed text-white sm:text-lg">
									&ldquo;{active.quote}&rdquo;
								</p>

								<div className="mt-6 flex items-center gap-3">
									<span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5f7dff,#8e69ff)] text-sm font-bold text-white shadow-[0_10px_25px_rgb(95_125_255/35%)]">
										{active.name.charAt(0)}
									</span>
									<div>
										<p className="text-sm font-semibold text-white">{active.name}</p>
										<p className="text-xs text-(--muted-foreground)">
											{active.role} · {active.company}
										</p>
									</div>
								</div>

								<p className="mt-4 inline-flex rounded-full border border-(--border) bg-[rgb(95_125_255/10%)] px-3 py-1.5 text-xs font-semibold text-(--brand-400)">
									{active.result}
								</p>
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="mt-6 flex items-center justify-center gap-2">
						{testimonials.map((testimonial, index) => (
							<button
								key={testimonial.name}
								type="button"
								onClick={() => setActiveIndex(index)}
								aria-label={`Show testimonial from ${testimonial.name}`}
								aria-current={index === activeIndex}
								className={[
									"h-1.5 rounded-full transition-all duration-300",
									index === activeIndex
										? "w-7 bg-(--brand-400)"
										: "w-1.5 bg-[rgb(129_145_255/28%)] hover:bg-[rgb(129_145_255/48%)]",
								].join(" ")}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}