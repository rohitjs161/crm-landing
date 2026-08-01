import Link from "next/link";
import { Mail } from "lucide-react";
import type { SVGProps } from "react";
import { navigation } from "@/constants/data";

// lucide-react v1.x no longer ships brand/logo marks, so these three are
// small local glyphs kept minimal and stroke-based to match the icon set.
type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number | string };

function XIcon({ size = 24, ...props }: BrandIconProps) {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
			<path d="M18.9 2H22l-7.5 8.6L23.3 22H16.7l-5.2-6.8L5.5 22H2.4l8-9.2L1.5 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
		</svg>
	);
}

function LinkedInIcon({ size = 24, ...props }: BrandIconProps) {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
			<path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.75h6.8V20H3.5V8.75Zm7.9 0h6.5v1.55h.1c.9-1.6 3.1-2.3 5-2.3 5.4 0 6.4 3.3 6.4 7.6V20h-6.8v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V20h-6.8V8.75Z" />
		</svg>
	);
}

function GitHubIcon({ size = 24, ...props }: BrandIconProps) {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.2 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
			/>
		</svg>
	);
}

const socialLinks = [
	{ label: "Twitter", href: "https://twitter.com", Icon: XIcon },
	{ label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
	{ label: "GitHub", href: "https://github.com", Icon: GitHubIcon },
	{ label: "Email", href: "mailto:hello@crm360.example", Icon: Mail },
];

const legalLinks = [
	{ label: "Privacy Policy", href: "#" },
	{ label: "Terms of Service", href: "#" },
	{ label: "Security", href: "#" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative border-t border-(--border) px-3 pb-3 pt-14 sm:px-5 sm:pt-20" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>

			<div className="container-shell">
				<div className="overflow-hidden rounded-3xl border border-(--border) bg-[rgb(9_13_29/64%)] p-8 shadow-[0_20px_60px_rgb(4_7_18/40%)] backdrop-blur-xl sm:p-10 lg:p-12">
					<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
						<div className="max-w-sm">
							<Link
	href="/"
	className="group inline-flex items-center rounded-md focus-visible:outline-none"
	aria-label="CRM360 homepage"
>
	<svg
		width="180"
		height="50"
		viewBox="0 0 180 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			width="42"
			height="42"
			rx="12"
			fill="#5F7DFF"
		/>

		<path
			d="M13 21C13 16.58 16.58 13 21 13H29V21C29 25.42 25.42 29 21 29H13V21Z"
			fill="white"
		/>

		<text
			x="55"
			y="32"
			fontFamily="Arial"
			fontSize="24"
			fontWeight="700"
			fill="white"
		>
			CRM360
		</text>
	</svg>
</Link>
							<p className="mt-4 text-sm leading-relaxed text-(--muted-foreground)">
								A unified platform for lead management, HRMS, invoicing, and
								integrations — built for teams that need one connected source
								of truth.
							</p>

							<ul className="mt-6 flex items-center gap-2">
								{socialLinks.map(({ label, href, Icon }) => (
									<li key={label}>
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={label}
											className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-[rgb(12_18_39/68%)] text-(--muted-foreground) transition-colors hover:text-white"
										>
											<Icon size={16} aria-hidden="true" />
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
									Navigate
								</p>
								<ul className="mt-4 space-y-3">
									{navigation.map((item) => (
										<li key={item.href}>
											<Link
												href={item.href}
												className="text-sm font-medium text-(--muted-foreground) transition-colors hover:text-white"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
									Legal
								</p>
								<ul className="mt-4 space-y-3">
									{legalLinks.map((item) => (
										<li key={item.label}>
											<Link
												href={item.href}
												className="text-sm font-medium text-(--muted-foreground) transition-colors hover:text-white"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="col-span-2 sm:col-span-1">
								<p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-400)">
									Get Started
								</p>
								<p className="mt-4 text-sm leading-relaxed text-(--muted-foreground)">
									See CRM360 in action with a personalized walkthrough.
								</p>
								<a
									href="#contact"
									className="mt-4 inline-flex items-center rounded-xl bg-(--brand-500) px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgb(95_125_255/40%)] transition-colors hover:bg-(--brand-400)"
								>
									Book Demo
								</a>
							</div>
						</div>
					</div>

					<div className="mt-10 flex flex-col gap-3 border-t border-(--border) pt-6 sm:flex-row sm:items-center sm:justify-between">
						<p className="text-xs text-(--muted-foreground)">
							© {year} CRM360. All rights reserved.
						</p>
						<p className="text-xs text-(--muted-foreground)">
							Built for teams that run on one connected data layer.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}