import { FileText, Target, Users } from "lucide-react";

const featureCards = [
	{
		icon: Target,
		title: "Lead Management",
		description:
			"Capture, score, and route leads in one unified pipeline so your sales team always works the highest-impact opportunities first.",
	},
	{
		icon: Users,
		title: "HRMS",
		description:
			"Streamline onboarding, attendance, and people operations with centralized employee data and automated workflows.",
	},
	{
		icon: FileText,
		title: "Invoicing",
		description:
			"Generate professional invoices, automate reminders, and track payments in real time to improve cash flow visibility.",
	},
];

export default function Features() {
	return (
		<section id="features" className="py-16 sm:py-20" aria-labelledby="features-heading">
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">Core Modules</p>
					<h2
						id="features-heading"
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Everything your growth team needs, in one platform.
					</h2>
				</div>

				<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{featureCards.map((card) => {
						const Icon = card.icon;
						return (
							<article
								key={card.title}
								className="group relative overflow-hidden rounded-2xl border border-(--border) bg-[rgb(12_18_39/62%)] p-6 shadow-[0_10px_24px_rgb(4_8_22/26%)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgb(130_153_255/40%)] hover:shadow-[0_20px_40px_rgb(8_13_30/50%)]"
							>
								<div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(102,131,255,0.36),rgba(102,131,255,0)_68%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

								<div className="relative z-10">
									<div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(122_145_255/32%)] bg-[rgb(95_125_255/14%)] text-(--brand-400) shadow-[0_10px_25px_rgb(95_125_255/20%)] transition-transform duration-300 group-hover:scale-105">
										<Icon size={20} strokeWidth={2.2} aria-hidden="true" />
									</div>

									<h3
										className="mt-5 text-xl font-semibold tracking-[-0.01em] text-white"
										style={{ fontFamily: "var(--font-display)" }}
									>
										{card.title}
									</h3>

									<p className="mt-3 text-sm leading-relaxed text-(--muted-foreground)">{card.description}</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}