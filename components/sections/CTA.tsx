"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTA() {
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;

		if (!section) return;

		const ctx = gsap.context(() => {
			gsap.from(".cta-reveal", {
				y: 40,
				opacity: 0,
				duration: 0.8,
				stagger: 0.12,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
				},
			});
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="cta"
			ref={sectionRef}
			className="relative overflow-hidden py-16 sm:py-20"
		>
			<div className="container-shell">

				<div
					className="
					relative overflow-hidden rounded-3xl
					border border-white/10
					bg-[#0c1227]
					px-6 py-14
					text-center
					shadow-[0_20px_60px_rgba(0,0,0,0.45)]
					sm:px-12
					sm:py-16
					lg:py-20
					"
				>

					{/* Background Glow */}
					<div
						className="
						pointer-events-none
						absolute
						-left-20
						-top-20
						h-72
						w-72
						rounded-full
						bg-[#5f7dff]/20
						blur-3xl
						"
					/>

					<div
						className="
						pointer-events-none
						absolute
						-bottom-24
						-right-20
						h-80
						w-80
						rounded-full
						bg-[#8b5cf6]/20
						blur-3xl
						"
					/>

					{/* Grid Overlay */}
					<div
						className="
						pointer-events-none
						absolute
						inset-0
						bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
						bg-[size:40px_40px]
						"
					/>


					<div className="relative z-10">

						{/* Badge */}
						<div
							className="
							cta-reveal
							mx-auto
							inline-flex
							items-center
							gap-2
							rounded-full
							border
							border-white/15
							bg-white/5
							px-4
							py-2
							text-xs
							font-semibold
							tracking-widest
							text-[#a5b4fc]
							backdrop-blur-md
							"
						>
							<Sparkles size={14} />
							GET STARTED
						</div>


						{/* Heading */}
						<h2
							className="
							cta-reveal
							mx-auto
							mt-6
							max-w-3xl
							text-3xl
							font-semibold
							leading-tight
							tracking-tight
							text-white
							sm:text-4xl
							lg:text-5xl
							"
							style={{
								fontFamily: "var(--font-display)",
							}}
						>
							Bring leads, people and invoices
							into one connected CRM.
						</h2>


						{/* Description */}
						<p
							className="
							cta-reveal
							mx-auto
							mt-5
							max-w-xl
							text-sm
							leading-relaxed
							text-slate-400
							sm:text-base
							"
						>
							CRM360 helps growing teams manage sales,
							employees, billing and integrations from one
							powerful platform.
						</p>


						{/* Button */}
						<motion.div
							className="cta-reveal mt-8 inline-flex"
							whileHover={{
								y: -3,
								scale: 1.04,
							}}
							whileTap={{
								scale: 0.96,
							}}
						>

							<Link
								href="#contact"
								className="
								group
								inline-flex
								items-center
								gap-2
								rounded-xl
								bg-[#5f7dff]
								px-7
								py-3.5
								text-sm
								font-semibold
								text-white
								shadow-[0_15px_45px_rgba(95,125,255,0.55)]
								transition-all
								duration-300
								hover:bg-[#7c8cff]
								hover:shadow-[0_20px_60px_rgba(124,140,255,0.65)]
								"
							>
								Book Free Demo

								<ArrowRight
									size={17}
									className="
									transition-transform
									duration-300
									group-hover:translate-x-1
									"
								/>

							</Link>

						</motion.div>

					</div>

				</div>

			</div>
		</section>
	);
}