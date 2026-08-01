"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, PlayCircle } from "lucide-react";

const stats = [
	{ value: "98.2%", label: "Pipeline visibility" },
	{ value: "42%", label: "Faster onboarding" },
	{ value: "31%", label: "Quicker invoice recovery" },
	{ value: "120+", label: "Integration endpoints" },
];

const floatingCards = [
	{
		title: "Lead Conversion",
		metric: "+28%",
		subtext: "Last 30 days",
		className: "left-2 top-8 sm:left-4 lg:-left-8",
	},
	{
		title: "HRMS Tasks",
		metric: "1,248",
		subtext: "Auto-completed",
		className: "right-2 top-28 sm:right-6 lg:-right-12",
	},
	{
		title: "Invoices Paid",
		metric: "$684K",
		subtext: "This quarter",
		className: "bottom-6 left-10 sm:left-16 lg:left-4",
	},
];

export default function Hero() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const revealRootRef = useRef<HTMLDivElement | null>(null);

	const dashboardImageSrc = useMemo(() => {
		const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="760" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0B1330"/>
      <stop offset="1" stop-color="#111A3F"/>
    </linearGradient>
    <linearGradient id="line" x1="178" y1="510" x2="1014" y2="294" gradientUnits="userSpaceOnUse">
      <stop stop-color="#68A2FF"/>
      <stop offset="1" stop-color="#9A7AFF"/>
    </linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#72A7FF"/>
      <stop offset="1" stop-color="#7E73FF"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="760" rx="28" fill="url(#bg)"/>
  <rect x="30" y="30" width="1140" height="700" rx="20" stroke="rgba(153,176,255,0.28)"/>
  <rect x="72" y="92" width="240" height="16" rx="8" fill="rgba(187,207,255,0.88)"/>
  <rect x="72" y="128" width="340" height="10" rx="5" fill="rgba(158,176,228,0.7)"/>
  <rect x="72" y="188" width="486" height="256" rx="16" fill="rgba(18,30,72,0.86)" stroke="rgba(118,144,255,0.32)"/>
  <path d="M122 400 C 218 362, 320 330, 398 348 C 486 368, 544 312, 612 284" stroke="url(#line)" stroke-width="7" stroke-linecap="round"/>
  <circle cx="612" cy="284" r="9" fill="#9A7AFF"/>
  <rect x="594" y="178" width="534" height="266" rx="16" fill="rgba(18,30,72,0.86)" stroke="rgba(118,144,255,0.32)"/>
  <rect x="652" y="356" width="54" height="48" rx="8" fill="url(#bar)"/>
  <rect x="724" y="316" width="54" height="88" rx="8" fill="url(#bar)"/>
  <rect x="796" y="292" width="54" height="112" rx="8" fill="url(#bar)"/>
  <rect x="868" y="258" width="54" height="146" rx="8" fill="url(#bar)"/>
  <rect x="940" y="228" width="54" height="176" rx="8" fill="url(#bar)"/>
  <rect x="72" y="482" width="1056" height="180" rx="16" fill="rgba(18,30,72,0.86)" stroke="rgba(118,144,255,0.32)"/>
  <rect x="108" y="532" width="300" height="16" rx="8" fill="rgba(178,198,255,0.9)"/>
  <rect x="108" y="564" width="444" height="12" rx="6" fill="rgba(149,169,228,0.8)"/>
  <rect x="108" y="596" width="384" height="12" rx="6" fill="rgba(149,169,228,0.65)"/>
  <rect x="694" y="522" width="394" height="104" rx="12" fill="rgba(31,46,95,0.78)"/>
  <rect x="718" y="548" width="110" height="12" rx="6" fill="rgba(173,193,255,0.9)"/>
  <rect x="718" y="576" width="254" height="10" rx="5" fill="rgba(151,172,234,0.78)"/>
  <rect x="986" y="548" width="78" height="34" rx="10" fill="rgba(99,127,255,0.95)"/>
</svg>`;

		return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;
		const revealRoot = revealRootRef.current;

		if (!section || !revealRoot) {
			return;
		}

		const ctx = gsap.context(() => {
			const revealTargets = revealRoot.querySelectorAll("[data-reveal]");
			const statTargets = revealRoot.querySelectorAll("[data-stat]");
			const parallaxTargets = revealRoot.querySelectorAll("[data-parallax]");

			gsap.from(revealTargets, {
				y: 26,
				opacity: 0,
				duration: 0.8,
				stagger: 0.12,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 78%",
				},
			});

			gsap.from(statTargets, {
				y: 20,
				opacity: 0,
				duration: 0.7,
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: statTargets[0],
					start: "top 88%",
				},
			});

			parallaxTargets.forEach((element, index) => {
				const shift = index % 2 === 0 ? -30 : 34;
				gsap.to(element, {
					y: shift,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					},
				});
			});
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden pb-14 pt-24 sm:pt-28 lg:pb-20 lg:pt-32"
			aria-labelledby="hero-heading"
		>
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute left-1/2 top-0 h-104 w-104 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(100,136,255,0.34),rgba(100,136,255,0)_68%)] blur-2xl" />
				<div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(140,97,255,0.28),rgba(140,97,255,0)_72%)] blur-2xl" />
				<div className="absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,207,255,0.18),rgba(70,207,255,0)_70%)] blur-2xl" />
			</div>

			<div ref={revealRootRef} className="container-shell">
				<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
					<div className="max-w-2xl">
						<p
							data-reveal
							className="mb-5 inline-flex rounded-full border border-(--border) bg-[rgb(103_126_255/10%)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-(--brand-400)"
						>
							360° CRM Platform
						</p>

						<h1
							id="hero-heading"
							data-reveal
							className="text-pretty text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Run revenue, people, and operations from one intelligent CRM core.
						</h1>

						<p
							data-reveal
							className="mt-5 max-w-xl text-base leading-relaxed text-(--muted-foreground) sm:text-lg"
						>
							CRM360 unifies Lead Management, HRMS, Invoicing, and Integrations into a
							single command center so teams move faster with fewer silos.
						</p>

						<div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							<motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.985 }}>
								<Link
									href="#contact"
									className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--brand-500) px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgb(95_125_255/38%)] transition-colors hover:bg-(--brand-400)"
								>
									Start Free Trial
									<ArrowRight size={16} />
								</Link>
							</motion.div>

							<motion.div whileHover={{ y: -1.5 }} whileTap={{ scale: 0.99 }}>
								<Link
									href="#features"
									className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-[rgb(12_18_39/55%)] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-[rgb(18_26_54/70%)]"
								>
									<PlayCircle size={16} />
									Watch Demo
								</Link>
							</motion.div>
						</div>

						<div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
							{stats.map((item) => (
								<div
									key={item.label}
									data-stat
									className="rounded-xl border border-(--border) bg-[rgb(12_18_39/58%)] px-3 py-3 backdrop-blur-md"
								>
									<p
										className="text-xl font-semibold text-white sm:text-2xl"
										style={{ fontFamily: "var(--font-display)" }}
									>
										{item.value}
									</p>
									<p className="mt-1 text-xs text-(--muted-foreground) sm:text-sm">{item.label}</p>
								</div>
							))}
						</div>
					</div>

					<div data-reveal className="relative mx-auto w-full max-w-160 lg:max-w-none">
						<div className="relative" data-parallax>
							<div className="absolute -inset-6 -z-10 rounded-4xl bg-[linear-gradient(140deg,rgba(93,124,255,0.34),rgba(141,106,255,0.26),rgba(63,195,255,0.16))] blur-2xl" />
							<div className="overflow-hidden rounded-2xl border border-(--border) bg-[rgb(10_16_36/62%)] shadow-[0_20px_60px_rgb(4_8_20/45%)] backdrop-blur-lg">
								<Image
									src={dashboardImageSrc}
									alt="CRM360 dashboard preview showing lead analytics, HR tasks, and invoicing metrics"
									width={1200}
									height={760}
									priority
									className="h-auto w-full"
								/>
							</div>
						</div>

						{floatingCards.map((card, index) => (
							<motion.div
								key={card.title}
								data-parallax
								className={`absolute z-10 w-44 rounded-xl border border-(--border) bg-[rgb(9_14_32/74%)] p-3 backdrop-blur-lg sm:w-48 ${card.className}`}
								animate={{ y: [0, -9, 0] }}
								transition={{
									duration: 3.8 + index * 0.6,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								whileHover={{ y: -4, scale: 1.03 }}
							>
								<p className="text-xs text-(--muted-foreground)">{card.title}</p>
								<p
									className="mt-1 text-xl font-semibold text-white"
									style={{ fontFamily: "var(--font-display)" }}
								>
									{card.metric}
								</p>
								<p className="mt-1 text-[11px] text-(--brand-400)">{card.subtext}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
