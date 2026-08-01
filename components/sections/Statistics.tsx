"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const counters = [
	{ id: "businesses", label: "Businesses Powered", value: 3200, decimals: 0, prefix: "", suffix: "+" },
	{ id: "leads", label: "Leads Processed", value: 2.4, decimals: 1, prefix: "", suffix: "M+" },
	{ id: "revenue", label: "Revenue Tracked", value: 180, decimals: 0, prefix: "$", suffix: "M+" },
	{ id: "uptime", label: "Platform Uptime", value: 99.9, decimals: 1, prefix: "", suffix: "%" },
];

export default function Statistics() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const valueRefs = useRef<Array<HTMLParagraphElement | null>>([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;
		if (!section) {
			return;
		}

		const ctx = gsap.context(() => {
			counters.forEach((counter, index) => {
				const el = valueRefs.current[index];
				if (!el) {
					return;
				}

				const proxy = { value: 0 };

				gsap.to(proxy, {
					value: counter.value,
					duration: 1.6,
					ease: "power2.out",
					scrollTrigger: {
						trigger: section,
						start: "top 78%",
						toggleActions: "play none none none",
					},
					onUpdate: () => {
						el.textContent = `${counter.prefix}${proxy.value.toLocaleString("en-US", {
							minimumFractionDigits: counter.decimals,
							maximumFractionDigits: counter.decimals,
						})}${counter.suffix}`;
					},
				});
			});

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

	return (
		<section
			id="statistics"
			ref={sectionRef}
			className="py-16 sm:py-20"
			aria-labelledby="statistics-heading"
		>
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p data-reveal className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						By The Numbers
					</p>
					<h2
						id="statistics-heading"
						data-reveal
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Trusted by growing teams, backed by real results.
					</h2>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-3.5 sm:mt-12 sm:gap-4 lg:grid-cols-4">
					{counters.map((counter, index) => (
						<div
							key={counter.id}
							data-reveal
							className="rounded-2xl border border-(--border) bg-[rgb(12_18_39/62%)] px-4 py-7 text-center shadow-[0_10px_24px_rgb(4_8_22/26%)] backdrop-blur-md sm:px-6"
						>
							<p
								ref={(el) => {
									valueRefs.current[index] = el;
								}}
								className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{counter.prefix}
								{(0).toLocaleString("en-US", {
									minimumFractionDigits: counter.decimals,
									maximumFractionDigits: counter.decimals,
								})}
								{counter.suffix}
							</p>
							<p className="mt-2 text-xs font-medium text-(--muted-foreground) sm:text-sm">
								{counter.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}