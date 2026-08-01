"use client";

import { motion } from "framer-motion";

const companies = [
	"Facebook",
	"IndiaMART",
	"Housing",
	"99acres",
	"WhatsApp",
];

export default function TrustedCompanies() {
	const marqueeItems = [...companies, ...companies];

	return (
		<section className="relative overflow-hidden py-14 sm:py-16" aria-labelledby="trusted-heading">
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						Trusted By High-Growth Teams
					</p>
					<h2
						id="trusted-heading"
						className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Teams you already know, workflows you can scale.
					</h2>
				</div>

				<div className="relative mt-8 sm:mt-10">
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-background to-transparent sm:w-24" />
					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-background to-transparent sm:w-24" />

					<div className="overflow-hidden rounded-2xl border border-(--border) bg-[rgb(11_17_39/56%)] py-4 shadow-[0_10px_30px_rgb(4_7_18/32%)] backdrop-blur-lg sm:py-5">
						<motion.ul
							className="flex w-max items-center gap-3 px-3 sm:gap-4 sm:px-4"
							animate={{ x: ["0%", "-50%"] }}
							transition={{
								duration: 24,
								ease: "linear",
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							{marqueeItems.map((company, index) => (
								<li key={`${company}-${index}`} className="shrink-0">
									<div className="group inline-flex min-w-32 items-center justify-center gap-2.5 rounded-xl border border-(--border) bg-[rgb(16_24_52/74%)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[rgb(25_35_70/88%)] sm:min-w-36 sm:text-base">
										<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5f7dff,#8e69ff)] text-xs font-bold text-white shadow-[0_6px_16px_rgb(95_125_255/45%)]">
											{company.charAt(0)}
										</span>
										<span>{company}</span>
									</div>
								</li>
							))}
						</motion.ul>
					</div>
				</div>
			</div>
		</section>
	);
}
