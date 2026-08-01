const integrationApps = [
	"Facebook",
	"IndiaMART",
	"Housing",
	"99acres",
	"MagicBricks",
	"WhatsApp",
	"Zapier",
	"Google Forms",
];

export default function Integrations() {
	return (
		<section id="integrations" className="py-16 sm:py-20" aria-labelledby="integrations-heading">
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						Integrations
					</p>
					<h2
						id="integrations-heading"
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Connect the tools your team already runs on.
					</h2>
					<p className="mt-4 text-sm leading-relaxed text-(--muted-foreground) sm:text-base">
						CRM360 syncs leads, conversations, and workflows across your
						favorite channels and automation tools out of the box.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-3.5 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
					{integrationApps.map((app) => (
						<div
							key={app}
							className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-(--border) bg-[rgb(12_18_39/62%)] px-4 py-7 text-center shadow-[0_10px_24px_rgb(4_8_22/26%)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgb(130_153_255/40%)] hover:shadow-[0_20px_40px_rgb(8_13_30/50%)]"
						>
							<div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(102,131,255,0.38),rgba(102,131,255,0)_68%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

							<span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5f7dff,#8e69ff)] text-base font-bold text-white shadow-[0_10px_25px_rgb(95_125_255/35%)] transition-transform duration-300 group-hover:scale-105">
								{app.charAt(0)}
							</span>

							<span className="relative z-10 text-sm font-semibold text-white sm:text-base">
								{app}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}