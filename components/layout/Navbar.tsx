"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/data";

const headerVariants: Variants = {
	hidden: { y: -24, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
	},
};

const mobileMenuVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -10,
		scale: 0.98,
		transition: { duration: 0.2 },
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05 },
	},
	exit: {
		opacity: 0,
		y: -8,
		scale: 0.98,
		transition: { duration: 0.18 },
	},
};

const mobileItemVariants: Variants = {
	hidden: { opacity: 0, y: -6 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeHref, setActiveHref] = useState("#features");

	const sectionIds = useMemo(
		() =>
			navigation
				.map((item) => item.href)
				.filter((href) => href.startsWith("#"))
				.map((href) => href.slice(1)),
		[],
	);

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 8);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);

		if (sections.length === 0) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]?.target?.id) {
					setActiveHref(`#${visible[0].target.id}`);
				}
			},
			{
				rootMargin: "-30% 0px -55% 0px",
				threshold: [0.15, 0.3, 0.6],
			},
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [sectionIds]);

	useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		const onEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onEscape);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onEscape);
		};
	}, [isMenuOpen]);

	return (
		<motion.header
			variants={headerVariants}
			initial="hidden"
			animate="visible"
			className="sticky top-0 z-50 px-3 pt-3 sm:px-5"
		>
			<div
				className={[
					"container-shell rounded-2xl border border-(--border) transition-all duration-300",
					isScrolled
						? "bg-[rgb(7_10_25/72%)] shadow-[0_10px_40px_rgb(4_7_18/45%)] backdrop-blur-xl"
						: "bg-[rgb(7_10_25/45%)] backdrop-blur-md",
				].join(" ")}
			>
				<nav
					className="flex items-center justify-between gap-4 px-4 py-3 md:px-6"
					aria-label="Main"
				>
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

					<ul className="hidden items-center gap-1 md:flex">
						{navigation.map((item) => {
							const isActive = activeHref === item.href;
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										className={[
											"relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
											isActive
												? "text-white"
												: "text-(--muted-foreground) hover:text-white",
										].join(" ")}
										onClick={() => setActiveHref(item.href)}
									>
										{item.label}
										{isActive ? (
											<motion.span
												layoutId="active-nav-link"
												className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-(--brand-400)"
												transition={{ type: "spring", stiffness: 420, damping: 34 }}
											/>
										) : null}
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="hidden items-center md:flex">
						<motion.a
							href="#contact"
							whileHover={{ y: -1.5, scale: 1.01 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center rounded-xl bg-(--brand-500) px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgb(95_125_255/40%)] transition-colors hover:bg-(--brand-400)"
						>
							Book Demo
						</motion.a>
					</div>

					<button
						type="button"
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-[rgb(12_18_39/68%)] text-white md:hidden"
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={18} /> : <Menu size={18} />}
					</button>
				</nav>

				<AnimatePresence>
					{isMenuOpen ? (
						<motion.div
							id="mobile-menu"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={mobileMenuVariants}
							className="border-t border-(--border) px-4 pb-4 pt-3 md:hidden"
						>
							<ul className="space-y-1">
								{navigation.map((item) => {
									const isActive = activeHref === item.href;
									return (
										<motion.li key={item.href} variants={mobileItemVariants}>
											<Link
												href={item.href}
												onClick={() => {
													setActiveHref(item.href);
													setIsMenuOpen(false);
												}}
												className={[
													"block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
													isActive
														? "bg-[rgb(95_125_255/14%)] text-white"
														: "text-(--muted-foreground) hover:bg-[rgb(129_145_255/8%)] hover:text-white",
												].join(" ")}
											>
												{item.label}
											</Link>
										</motion.li>
									);
								})}
							</ul>

							<motion.a
								variants={mobileItemVariants}
								href="#contact"
								onClick={() => setIsMenuOpen(false)}
								className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-(--brand-500) px-4 py-2.5 text-sm font-semibold text-white"
							>
								Book Demo
							</motion.a>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</motion.header>
	);
}
