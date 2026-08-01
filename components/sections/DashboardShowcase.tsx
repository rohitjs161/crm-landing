"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, FileText, Plug, UserPlus } from "lucide-react";

const dashboardTabs = [
	{
		id: "leads",
		label: "Lead Management",
		Icon: UserPlus,
		accent: "#5f7dff",
		bars: [38, 54, 46, 68, 60, 82, 74],
		cards: [
			{ title: "Open Pipeline", metric: "$1.42M", subtext: "Across 6 stages" },
			{ title: "Conversion Rate", metric: "28.4%", subtext: "Last 30 days" },
			{ title: "Deal Velocity", metric: "12 days", subtext: "Lead to close" },
		],
	},
	{
		id: "hrms",
		label: "HRMS",
		Icon: Briefcase,
		accent: "#8e69ff",
		bars: [44, 40, 58, 52, 70, 64, 78],
		cards: [
			{ title: "Active Employees", metric: "1,248", subtext: "Across 9 teams" },
			{ title: "Onboarding Time", metric: "3.2 days", subtext: "Avg. this quarter" },
			{ title: "Attendance Rate", metric: "97.6%", subtext: "Last 30 days" },
		],
	},
	{
		id: "invoicing",
		label: "Invoicing",
		Icon: FileText,
		accent: "#4dd2ff",
		bars: [30, 48, 42, 60, 56, 72, 68],
		cards: [
			{ title: "Invoices Paid", metric: "$684K", subtext: "This quarter" },
			{ title: "Avg. Collection", metric: "6 days", subtext: "Down from 14" },
			{ title: "Overdue Recovered", metric: "19%", subtext: "Since last cycle" },
		],
	},
	{
		id: "integrations",
		label: "Integrations",
		Icon: Plug,
		accent: "#5f7dff",
		bars: [50, 46, 64, 58, 76, 70, 88],
		cards: [
			{ title: "Connected Apps", metric: "120+", subtext: "Live endpoints" },
			{ title: "Sync Uptime", metric: "99.9%", subtext: "Trailing 90 days" },
			{ title: "Events Routed", metric: "2.4M", subtext: "This month" },
		],
	},
];

export default function DashboardShowcase() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const revealRootRef = useRef<HTMLDivElement | null>(null);
	const [activeTab, setActiveTab] = useState(dashboardTabs[0].id);

	const activeDashboard =
		dashboardTabs.find((tab) => tab.id === activeTab) ?? dashboardTabs[0];

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;
		const revealRoot = revealRootRef.current;

		if (!section || !revealRoot) {
			return;
		}

		const ctx = gsap.context(() => {
			const revealTargets = revealRoot.querySelectorAll("[data-reveal]");

			gsap.from(revealTargets, {
				y: 26,
				opacity: 0,
				duration: 0.8,
				stagger: 0.12,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 76%",
				},
			});
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="dashboard"
			ref={sectionRef}
			className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
			aria-labelledby="dashboard-heading"
		>
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(100,136,255,0.22),rgba(100,136,255,0)_68%)] blur-2xl" />
			</div>

			<div ref={revealRootRef} className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p data-reveal className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						Product Tour
					</p>
					<h2
						id="dashboard-heading"
						data-reveal
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						See every module live inside one connected dashboard.
					</h2>
					<p data-reveal className="mt-4 text-sm leading-relaxed text-(--muted-foreground) sm:text-base">
						Switch between modules to preview how CRM360 surfaces the metrics
						that matter most to each team.
					</p>
				</div>

				<div
					data-reveal
					role="tablist"
					aria-label="Dashboard modules"
					className="mx-auto mt-10 flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-(--border) bg-[rgb(11_17_39/56%)] p-1.5 backdrop-blur-md sm:mt-12 sm:inline-flex sm:w-auto"
				>
					{dashboardTabs.map((tab) => {
						const isActive = tab.id === activeTab;
						return (
							<button
								key={tab.id}
								type="button"
								role="tab"
								aria-selected={isActive}
								onClick={() => setActiveTab(tab.id)}
								className={[
									"relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors duration-200 sm:px-4",
									isActive ? "text-white" : "text-(--muted-foreground) hover:text-white",
								].join(" ")}
							>
								{isActive ? (
									<motion.span
										layoutId="dashboard-tab-active"
										className="absolute inset-0 rounded-xl bg-(--brand-500) shadow-[0_10px_26px_rgb(95_125_255/38%)]"
										transition={{ type: "spring", stiffness: 420, damping: 34 }}
									/>
								) : null}
								<tab.Icon size={15} className="relative z-10" aria-hidden="true" />
								<span className="relative z-10">{tab.label}</span>
							</button>
						);
					})}
				</div>

				<div data-reveal className="relative mx-auto mt-14 max-w-4xl sm:mt-16">
					<div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[linear-gradient(140deg,rgba(93,124,255,0.28),rgba(141,106,255,0.22),rgba(63,195,255,0.14))] blur-3xl" />

					{/* Laptop mockup */}
					<div className="relative mx-auto w-full max-w-3xl">
						<div className="overflow-hidden rounded-t-2xl border border-(--border) border-b-0 bg-[rgb(8_12_28/88%)] p-3 shadow-[0_20px_60px_rgb(4_8_20/45%)] sm:p-4">
							<div className="flex items-center gap-1.5 pb-3">
								<span className="h-2.5 w-2.5 rounded-full bg-[rgb(255_99_99/70%)]" />
								<span className="h-2.5 w-2.5 rounded-full bg-[rgb(255_198_99/70%)]" />
								<span className="h-2.5 w-2.5 rounded-full bg-[rgb(99_255_150/70%)]" />
							</div>

							<div className="overflow-hidden rounded-xl border border-(--border) bg-[rgb(10_16_36/80%)] p-4 sm:p-6">
								<AnimatePresence mode="wait">
									<motion.div
										key={activeDashboard.id}
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -12 }}
										transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
									>
										<div className="flex items-center justify-between">
											<div>
												<p className="text-xs text-(--muted-foreground)">Module</p>
												<p
													className="mt-0.5 text-lg font-semibold text-white sm:text-xl"
													style={{ fontFamily: "var(--font-display)" }}
												>
													{activeDashboard.label}
												</p>
											</div>
											<div
												className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
												style={{
													borderColor: `${activeDashboard.accent}52`,
													backgroundColor: `${activeDashboard.accent}1f`,
													color: activeDashboard.accent,
												}}
											>
												<activeDashboard.Icon size={18} aria-hidden="true" />
											</div>
										</div>

										<div className="mt-6 flex h-32 items-end gap-2.5 sm:h-40 sm:gap-3">
											{activeDashboard.bars.map((height, index) => (
												<motion.div
													key={`${activeDashboard.id}-bar-${index}`}
													className="flex-1 rounded-t-md"
													style={{
														background: `linear-gradient(180deg, ${activeDashboard.accent} 0%, rgba(255,255,255,0.08) 130%)`,
													}}
													initial={{ height: 0 }}
													animate={{ height: `${height}%` }}
													transition={{
														duration: 0.6,
														delay: 0.08 + index * 0.05,
														ease: "easeOut",
													}}
												/>
											))}
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>

						{/* Laptop base */}
						<div className="relative left-1/2 mx-auto h-3.5 w-[104%] max-w-none -translate-x-1/2 rounded-b-xl border border-t-0 border-(--border) bg-[linear-gradient(180deg,rgb(16_22_44),rgb(9_13_28))] sm:h-4" />
						<div className="mx-auto h-1 w-24 rounded-b-full bg-[rgb(20_28_56)] sm:w-28" />
					</div>

					{/* Floating analytics cards */}
					<AnimatePresence mode="popLayout">
						{activeDashboard.cards.map((card, index) => (
							<motion.div
								key={`${activeDashboard.id}-${card.title}`}
								className={[
									"absolute z-10 hidden w-44 rounded-xl border border-(--border) bg-[rgb(9_14_32/86%)] p-3 shadow-[0_16px_36px_rgb(4_8_20/45%)] backdrop-blur-lg lg:block",
									index === 0 ? "-left-16 top-6" : index === 1 ? "-right-14 top-24" : "-left-8 bottom-2",
								].join(" ")}
								initial={{ opacity: 0, y: 16, scale: 0.96 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: -10, scale: 0.96 }}
								transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
								whileHover={{ y: -4, scale: 1.03 }}
							>
								<p className="text-xs text-(--muted-foreground)">{card.title}</p>
								<p
									className="mt-1 text-xl font-semibold text-white"
									style={{ fontFamily: "var(--font-display)" }}
								>
									{card.metric}
								</p>
								<p className="mt-1 text-[11px]" style={{ color: activeDashboard.accent }}>
									{card.subtext}
								</p>
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				{/* Mobile analytics cards (stacked below mockup) */}
				<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
					{activeDashboard.cards.map((card) => (
						<div
							key={`mobile-${activeDashboard.id}-${card.title}`}
							className="rounded-xl border border-(--border) bg-[rgb(12_18_39/62%)] p-3.5 backdrop-blur-md"
						>
							<p className="text-xs text-(--muted-foreground)">{card.title}</p>
							<p
								className="mt-1 text-lg font-semibold text-white"
								style={{ fontFamily: "var(--font-display)" }}
							>
								{card.metric}
							</p>
							<p className="mt-1 text-[11px]" style={{ color: activeDashboard.accent }}>
								{card.subtext}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}