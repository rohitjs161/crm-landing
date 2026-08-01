export type NavigationItem = {
	label: string;
	href: string;
};

export type FeatureItem = {
	id: string;
	title: string;
	description: string;
	module: "Lead Management" | "HRMS" | "Invoicing" | "Integrations";
	highlights: string[];
};

export type IntegrationItem = {
	name: string;
	category: "Communication" | "Productivity" | "Finance" | "Automation";
	description: string;
};

export type BenefitItem = {
	title: string;
	description: string;
	metric: string;
};

export type TestimonialItem = {
	name: string;
	role: string;
	company: string;
	quote: string;
	result: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export const navigation: NavigationItem[] = [
	{ label: "Features", href: "#features" },
	{ label: "Integrations", href: "#integrations" },
	{ label: "Customers", href: "#testimonials" },
	{ label: "Contact", href: "#contact" },
];

export const features: FeatureItem[] = [
	{
		id: "lead-pipeline-intelligence",
		title: "Lead Pipeline Intelligence",
		description:
			"Capture, score, and route leads in real time with automation rules that adapt to campaign performance.",
		module: "Lead Management",
		highlights: [
			"Smart lead scoring based on fit and intent",
			"Automatic assignment by region, segment, and capacity",
			"Pipeline visibility from first touch to close",
		],
	},
	{
		id: "hr-workforce-hub",
		title: "People Operations Hub",
		description:
			"Unify employee lifecycle workflows from onboarding to performance tracking with built-in policy automation.",
		module: "HRMS",
		highlights: [
			"Role-based employee records and permissions",
			"Automated onboarding checklists and reminders",
			"Attendance, leave, and performance reporting",
		],
	},
	{
		id: "billing-workflows",
		title: "Invoicing That Scales",
		description:
			"Generate branded invoices, manage subscriptions, and track collections with complete revenue clarity.",
		module: "Invoicing",
		highlights: [
			"Recurring and one-time billing templates",
			"Tax-ready invoice generation for global teams",
			"Real-time aging reports and payment alerts",
		],
	},
	{
		id: "connected-workflows",
		title: "Connected Workflow Engine",
		description:
			"Link CRM360 with your stack so sales, HR, and finance data move together without manual sync.",
		module: "Integrations",
		highlights: [
			"Two-way sync with communication and finance tools",
			"Event-based automations across departments",
			"Centralized audit trail for every integration",
		],
	},
];

export const integrations: IntegrationItem[] = [
	{
		name: "Slack",
		category: "Communication",
		description:
			"Trigger deal alerts, onboarding updates, and payment notifications directly in team channels.",
	},
	{
		name: "Microsoft Teams",
		category: "Communication",
		description:
			"Route approvals and CRM tasks to the right teams with actionable messages.",
	},
	{
		name: "Notion",
		category: "Productivity",
		description:
			"Sync customer notes, HR documentation, and process pages with live records.",
	},
	{
		name: "QuickBooks",
		category: "Finance",
		description:
			"Push invoice and payment data to accounting workflows with mapped tax fields.",
	},
	{
		name: "Stripe",
		category: "Finance",
		description:
			"Reconcile subscriptions and payment events with invoicing and revenue analytics.",
	},
	{
		name: "Zapier",
		category: "Automation",
		description:
			"Build no-code automations for lead handoffs, HR tasks, and billing events.",
	},
];

export const benefits: BenefitItem[] = [
	{
		title: "Higher Lead Conversion",
		description:
			"Prioritize high-intent prospects and automate follow-up sequences with contextual triggers.",
		metric: "38% faster deal velocity",
	},
	{
		title: "Reduced Manual HR Work",
		description:
			"Standardize onboarding, approvals, and policy workflows to cut repetitive coordination.",
		metric: "52% fewer admin tasks",
	},
	{
		title: "Faster Cash Collection",
		description:
			"Use smart invoicing schedules and payment reminders to improve cycle times.",
		metric: "31% shorter payment cycle",
	},
	{
		title: "One Unified Data Layer",
		description:
			"Connect every go-to-market and back-office workflow to a single source of truth.",
		metric: "4x fewer data silos",
	},
];

export const testimonials: TestimonialItem[] = [
	{
		name: "Ava Morales",
		role: "VP of Revenue Operations",
		company: "Northlane Digital",
		quote:
			"CRM360 gave our sales, HR, and finance teams one shared operating system. Reporting that once took days now takes minutes.",
		result: "Scaled from 8 to 24 markets in 10 months",
	},
	{
		name: "Daniel Kim",
		role: "Head of People & Culture",
		company: "OrbitWorks",
		quote:
			"The HRMS module removed onboarding bottlenecks and gave leadership real-time visibility into workforce performance.",
		result: "Onboarding completion improved by 63%",
	},
	{
		name: "Sofia Laurent",
		role: "Chief Financial Officer",
		company: "VantaCore Systems",
		quote:
			"Invoicing and payment tracking are now predictable, automated, and audit-ready across every region we operate in.",
		result: "Recovered 19% more overdue revenue",
	},
];

export const faq: FaqItem[] = [
	{
		question: "Who is CRM360 built for?",
		answer:
			"CRM360 is designed for scaling B2B teams that need lead operations, HR workflows, and invoicing in one platform.",
	},
	{
		question: "Can I adopt modules gradually?",
		answer:
			"Yes. Teams can start with one module and activate additional modules as processes mature without replatforming.",
	},
	{
		question: "How long does implementation take?",
		answer:
			"Most organizations complete initial rollout in 2-4 weeks depending on data migration scope and integration requirements.",
	},
	{
		question: "Does CRM360 support role-based access?",
		answer:
			"Yes. Permissions can be configured by team, function, and data domain to align with enterprise security policies.",
	},
	{
		question: "What integrations are available out of the box?",
		answer:
			"CRM360 includes native integrations for communication, productivity, finance, and automation tools, with API and webhook support.",
	},
	{
		question: "Is the platform suitable for multi-region operations?",
		answer:
			"Yes. CRM360 supports localized workflows, configurable tax handling, and centralized oversight across regional teams.",
	},
];
