import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
	{ label: "Email", value: "hello@crm360.example", Icon: Mail },
	{ label: "Phone", value: "+1 (555) 012-4488", Icon: Phone },
	{ label: "Office", value: "San Francisco, CA", Icon: MapPin },
];

const fieldClasses =
	"peer w-full rounded-xl border border-(--border) bg-[rgb(12_18_39/58%)] px-4 pb-2.5 pt-5 text-sm text-white placeholder-transparent transition-colors focus:border-(--brand-400) focus:outline-none focus:ring-2 focus:ring-(--ring)";

const labelClasses =
	"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-(--muted-foreground) transition-all duration-200 peer-focus:top-4 peer-focus:text-xs peer-focus:text-(--brand-400) peer-[&:not(:placeholder-shown)]:top-4 peer-[&:not(:placeholder-shown)]:text-xs";

export default function Contact() {
	return (
		<section id="contact" className="py-16 sm:py-20" aria-labelledby="contact-heading">
			<div className="container-shell">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
						Contact
					</p>
					<h2
						id="contact-heading"
						className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Tell us about your team, we&apos;ll take it from there.
					</h2>
					<p className="mt-4 text-sm leading-relaxed text-(--muted-foreground) sm:text-base">
						Share a few details and a CRM360 specialist will follow up with a
						tailored walkthrough.
					</p>
				</div>

				<div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-12 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
					<div className="flex flex-col gap-3 rounded-2xl border border-(--border) bg-[rgb(12_18_39/62%)] p-6 backdrop-blur-md sm:p-7">
						<p
							className="text-lg font-semibold text-white"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Reach us directly
						</p>
						<p className="text-sm leading-relaxed text-(--muted-foreground)">
							Prefer a direct line? Our team typically responds within one
							business day.
						</p>

						<ul className="mt-2 space-y-4">
							{contactDetails.map(({ label, value, Icon }) => (
								<li key={label} className="flex items-start gap-3">
									<span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgb(122_145_255/32%)] bg-[rgb(95_125_255/14%)] text-(--brand-400)">
										<Icon size={16} aria-hidden="true" />
									</span>
									<span>
										<span className="block text-xs text-(--muted-foreground)">{label}</span>
										<span className="block text-sm font-medium text-white">{value}</span>
									</span>
								</li>
							))}
						</ul>
					</div>

					<form className="rounded-2xl border border-(--border) bg-[rgb(12_18_39/62%)] p-6 backdrop-blur-md sm:p-7">
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="relative">
								<input id="name" name="name" type="text" autoComplete="name" placeholder=" " className={fieldClasses} />
								<label htmlFor="name" className={labelClasses}>
									Full Name
								</label>
							</div>

							<div className="relative">
								<input id="email" name="email" type="email" autoComplete="email" placeholder=" " className={fieldClasses} />
								<label htmlFor="email" className={labelClasses}>
									Work Email
								</label>
							</div>

							<div className="relative">
								<input id="company" name="company" type="text" autoComplete="organization" placeholder=" " className={fieldClasses} />
								<label htmlFor="company" className={labelClasses}>
									Company
								</label>
							</div>

							<div className="relative">
								<input id="phone" name="phone" type="tel" autoComplete="tel" placeholder=" " className={fieldClasses} />
								<label htmlFor="phone" className={labelClasses}>
									Phone Number
								</label>
							</div>

							<div className="relative sm:col-span-2">
								<textarea
									id="message"
									name="message"
									rows={4}
									placeholder=" "
									className={`${fieldClasses} resize-none pt-5`}
								/>
								<label htmlFor="message" className={labelClasses}>
									How can we help?
								</label>
							</div>
						</div>

						<button
							type="submit"
							className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-(--brand-500) px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgb(95_125_255/38%)] transition-colors hover:bg-(--brand-400) sm:w-auto"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}