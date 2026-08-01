"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, BriefcaseBusiness, FileText, HandCoins, UserPlus } from "lucide-react";

const workflow = [
	{
		title: "Lead",
		description: "Capture and score incoming opportunities from campaigns, forms, and integrations.",
		Icon: UserPlus,
	},
	{
		title: "Sales",
		description: "Route qualified leads to reps with context-rich timelines and deal stage automation.",
		Icon: HandCoins,
	},
	{
		title: "Invoice",
		description: "Convert closed deals into invoices instantly with tax-ready billing workflows.",
		Icon: FileText,
	},
	{
		title: "HR",
		description: "Sync customer and team handoff tasks into onboarding and people operations streams.",
		Icon: BriefcaseBusiness,
	},
	{
		title: "Reports",
		description: "Track pipeline, revenue, and execution metrics in one unified analytics layer.",
		Icon: BarChart3,
	},
];

export default function CRMWorkflow() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const progressRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;
		const progress = progressRef.current;
		if (!section || !progress) {
			return;
		}

		const ctx = gsap.context(() => {
			const steps = gsap.utils.toArray<HTMLElement>("[data-workflow-step]");

			gsap.set(steps, { opacity: 0, y: 24 });
			gsap.set(progress, { scaleY: 0, transformOrigin: "top center" });

			const mm = gsap.matchMedia();

			mm.add("(min-width: 1024px)", () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: "+=170%",
						scrub: true,
						pin: true,
						anticipatePin: 1,
					},
				});

				tl.to(progress, { scaleY: 1, ease: "none" }, 0);
				tl.to(
					steps,
					{
						opacity: 1,
						y: 0,
						duration: 0.55,
						ease: "power2.out",
						stagger: 0.18,
					},
					0.04,
				);
			});

			mm.add("(max-width: 1023px)", () => {
				gsap.to(progress, {
					scaleY: 1,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top 78%",
						end: "bottom 70%",
						scrub: true,
					},
				});

				gsap.to(steps, {
					opacity: 1,
					y: 0,
					duration: 0.65,
					ease: "power3.out",
					stagger: 0.12,
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
					},
				});
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="workflow"
			ref={sectionRef}
			className="relative py-16 sm:py-20 lg:min-h-screen lg:py-24"
			aria-labelledby="workflow-heading"
		>
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						Workflow Timeline
					</p>
					<h2
						id="workflow-heading"
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Lead to reports, mapped as one connected execution flow.
					</h2>
				</div>

				<div className="relative mx-auto mt-12 max-w-4xl pl-10 sm:pl-12">
					<div className="absolute bottom-0 left-3 top-0 w-0.5 rounded-full bg-[rgb(128_146_255/28%)] sm:left-4" />
					<div
						ref={progressRef}
						className="absolute bottom-0 left-3 top-0 w-0.5 rounded-full bg-[linear-gradient(180deg,#5f7dff_0%,#8e69ff_45%,#4fd2ff_100%)] shadow-[0_0_20px_rgb(95_125_255/36%)] sm:left-4"
					/>

					<div className="space-y-4 sm:space-y-5">
						{workflow.map((step) => (
							<article
								key={step.title}
								data-workflow-step
								className="relative rounded-2xl border border-(--border) bg-[rgb(12_18_39/62%)] p-5 shadow-[0_12px_30px_rgb(4_8_22/30%)] backdrop-blur-md sm:p-6"
							>
								<div className="absolute -left-[2.35rem] top-6 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgb(131_151_255/38%)] bg-[rgb(95_125_255/20%)] text-(--brand-400) sm:-left-[2.65rem]">
									<step.Icon size={14} aria-hidden="true" />
								</div>

								<div className="flex items-start justify-between gap-4">
									<h3
										className="text-xl font-semibold tracking-[-0.01em] text-white"
										style={{ fontFamily: "var(--font-display)" }}
									>
										{step.title}
									</h3>
									<span className="rounded-full border border-(--border) px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-(--muted-foreground)">
										Stage
									</span>
								</div>
								<p className="mt-3 text-sm leading-relaxed text-(--muted-foreground) sm:text-base">
									{step.description}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}