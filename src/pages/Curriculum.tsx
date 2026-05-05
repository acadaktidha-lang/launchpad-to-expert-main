import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { curriculumData } from "@/data/curriculum";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Free Styling Courses Data ───────────────────────────────────────────────
const freestyleData = [
  {
    id: "python-dev",
    trackNumber: "01",
    type: "Flagship",
    title: "Python for Development",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "FastAPI + PostgreSQL + GitHub", "Backend API Pipeline"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Python Basics",
        description:
          "Python setup and IDE, variables and data types (int, float, string, bool), input/output. Operators, type casting, and mini exercises to solidify fundamentals.",
        skills: ["Python 3", "Variables", "Data Types", "Operators"],
      },
      {
        weekRange: "Week 2",
        title: "Control Flow",
        description:
          "If/else/elif and nested conditions. For and while loops, break and continue. Structured practice problems to build logical thinking.",
        skills: ["If/Else", "Loops", "Break/Continue"],
      },
      {
        weekRange: "Week 3",
        title: "Data Structures",
        description:
          "Lists, indexing, slicing, and list methods. Tuples, sets, and dictionaries with real-world use cases and pattern recognition.",
        skills: ["Lists", "Tuples", "Dicts", "Sets"],
      },
      {
        weekRange: "Week 4",
        title: "Functions & Modules",
        description:
          "Functions, parameters, return values, default and keyword arguments. Modules and imports, built-in modules like math and random.",
        skills: ["Functions", "Modules", "math", "random"],
      },
      {
        weekRange: "Week 5",
        title: "Advanced Python Basics",
        description:
          "File handling (read/write) and exception handling with try/except. Intro to OOP with classes and objects. Mini project: CLI Student Manager.",
        skills: ["File I/O", "try/except", "OOP", "CLI App"],
      },
      {
        weekRange: "Week 6",
        title: "Git & GitHub",
        description:
          "Git basics — init, add, commit, branching. GitHub push, pull, clone, pull requests, and collaboration workflow for real team development.",
        skills: ["Git", "GitHub", "Branching", "PRs"],
      },
      {
        weekRange: "Week 7",
        title: "FastAPI Basics",
        description:
          "What is an API, REST concepts. FastAPI setup, first GET endpoint. Path parameters, query parameters, and request/response models.",
        skills: ["FastAPI", "REST", "GET", "Pydantic"],
      },
      {
        weekRange: "Week 8",
        title: "FastAPI Intermediate",
        description:
          "POST, PUT, DELETE endpoints with Pydantic model validation. Dependency injection and API structure with routers for production-ready code.",
        skills: ["CRUD", "Pydantic", "Routers", "DI"],
      },
      {
        weekRange: "Week 9",
        title: "Authentication & Middleware",
        description:
          "Basic authentication and JWT tokens. Middleware setup and error handling in FastAPI for secure, production-grade APIs.",
        skills: ["JWT", "Auth", "Middleware", "Error Handling"],
      },
      {
        weekRange: "Week 10",
        title: "PostgreSQL Basics",
        description:
          "Database fundamentals, SQL basics, tables, CRUD queries. Relationships, intro to PostgreSQL, and pgAdmin for database management.",
        skills: ["SQL", "PostgreSQL", "pgAdmin", "CRUD"],
      },
      {
        weekRange: "Week 11",
        title: "FastAPI + PostgreSQL",
        description:
          "ORM intro with SQLAlchemy, connect FastAPI to the database. Full CRUD APIs with persistent storage and clean project structure.",
        skills: ["SQLAlchemy", "ORM", "DB Integration"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Final Project + Deployment",
        description:
          "Build a user authentication system with full CRUD APIs (Task Manager / Student System). API testing, deployment basics, and final review.",
        skills: ["Full API Build", "Auth System", "Deployment"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Python/Backend Developer at Big Binary Tech" },
      {
        label: "Tech Stack",
        value: "Python · FastAPI · PostgreSQL · GitHub",
        highlight: "Production-ready backend engineering skills",
      },
      {
        label: "Market Demand",
        value: "FastAPI is the fastest-growing Python framework",
        highlight: "Paired with PostgreSQL — the industry-standard stack",
      },
    ],
  },
  {
    id: "python-ds-ai",
    trackNumber: "02",
    type: "Advanced Add-On",
    title: "Python for Data Science & AI",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "NumPy · Pandas · ML · Deep Learning", "AI/ML Foundation Track"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Python Basics",
        description:
          "Python setup and IDE, variables and data types, input/output. Operators, type casting, and mini exercises to build solid fundamentals.",
        skills: ["Python 3", "Variables", "Data Types", "Operators"],
      },
      {
        weekRange: "Week 2",
        title: "Control Flow",
        description:
          "If/else/elif and nested conditions. For and while loops, break and continue. Structured practice problems for logical reasoning.",
        skills: ["If/Else", "Loops", "Break/Continue"],
      },
      {
        weekRange: "Week 3",
        title: "Data Structures",
        description:
          "Lists, indexing, slicing, and list methods. Tuples, sets, and dictionaries with real-world use cases to cement understanding.",
        skills: ["Lists", "Tuples", "Dicts", "Sets"],
      },
      {
        weekRange: "Week 4",
        title: "Functions & Modules",
        description:
          "Functions, parameters, return values, default and keyword arguments. Modules and imports, built-in libraries like math and random.",
        skills: ["Functions", "Modules", "math", "random"],
      },
      {
        weekRange: "Week 5",
        title: "Advanced Python Basics",
        description:
          "File handling and exception handling with try/except. Intro to OOP with classes and objects. Mini project: CLI Student Manager app.",
        skills: ["File I/O", "try/except", "OOP", "CLI App"],
      },
      {
        weekRange: "Week 6",
        title: "Intro to Data Science + NumPy",
        description:
          "What is Data Science and AI with real-world examples. NumPy arrays (1D, 2D), indexing, slicing, and mathematical operations.",
        skills: ["NumPy", "Arrays", "Indexing", "Math Ops"],
      },
      {
        weekRange: "Week 7",
        title: "Pandas (Data Handling)",
        description:
          "Intro to Pandas: Series and DataFrames, reading CSV files. Data cleaning, filtering, sorting, and handling missing data.",
        skills: ["Pandas", "DataFrames", "CSV", "Data Cleaning"],
      },
      {
        weekRange: "Week 8",
        title: "Data Visualization",
        description:
          "Intro to Matplotlib — line, bar, scatter plots. Intro to Seaborn — heatmaps and distributions. Graph styling for professional output.",
        skills: ["Matplotlib", "Seaborn", "Heatmaps", "Plots"],
      },
      {
        weekRange: "Week 9",
        title: "Exploratory Data Analysis (EDA)",
        description:
          "Combining Pandas with visualization for real dataset analysis. Mini project: analyse a dataset (students/sales/weather) and extract insights.",
        skills: ["EDA", "Real Datasets", "Insights", "Pandas + Viz"],
      },
      {
        weekRange: "Week 10",
        title: "Machine Learning Basics",
        description:
          "What is machine learning, supervised vs unsupervised types. Intro to Scikit-learn, linear regression, train/test split, and model evaluation.",
        skills: ["Scikit-learn", "Linear Regression", "Train/Test Split"],
      },
      {
        weekRange: "Week 11",
        title: "Advanced ML + Projects",
        description:
          "Classification with Logistic Regression and KNN. Overfitting vs underfitting. Mini ML project: predict student marks or house prices.",
        skills: ["Classification", "Logistic Reg", "KNN", "Overfitting"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Deep Learning Introduction",
        description:
          "Neural networks basics, intro to TensorFlow — build a simple model. Intro to PyTorch, compare with TensorFlow. Final project overview and presentation.",
        skills: ["TensorFlow", "PyTorch", "Neural Nets", "Final Project"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "Data Science / AI Foundation Engineer at Big Binary Tech",
      },
      {
        label: "AI Track Gateway",
        value: "Direct pathway into the Generative AI + Agentic AI track",
        highlight: "Build the ML foundation before going LLM-native",
      },
      {
        label: "Stack Covered",
        value: "NumPy · Pandas · Scikit-learn · TensorFlow · PyTorch",
        highlight: "The complete Python AI/ML toolkit in 12 weeks",
      },
    ],
  },
  {
    id: "webdev-mern",
    trackNumber: "03",
    type: "Industry-Aligned",
    title: "Web Development Expert — Full-Stack MERN + Next.js",
    durationWeeks: 12,
    price: "",
    meta: [
      "12 Weeks",
      "HTML · React · Node · MongoDB",
      "PKR 70,000–200,000/month",
      "Freelance: $15–$60/hr",
    ],
    weeks: [
      {
        weekRange: "Week 1",
        title: "HTML5, CSS3 & Responsive Design",
        description:
          "Semantic HTML5, CSS3 Flexbox and Grid, responsive design with media queries, CSS animations and keyframes, cross-browser testing and layout bug fixing.",
        skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive"],
      },
      {
        weekRange: "Week 2",
        title: "JavaScript ES6+ & DOM Manipulation",
        description:
          "Arrow functions, destructuring, array methods, async/await and Fetch API. DOM manipulation, local storage, debouncing, throttling, and event delegation.",
        skills: ["ES6+", "async/await", "DOM", "Fetch API", "LocalStorage"],
      },
      {
        weekRange: "Week 3",
        title: "Git, GitHub & Development Workflow",
        description:
          "Git fundamentals, branching, merging, pull requests. Advanced: rebase, stash, cherry-pick, Gitflow. VS Code setup with 3-person team workflow simulation.",
        skills: ["Git", "GitHub", "Gitflow", "VS Code"],
      },
      {
        weekRange: "Week 4",
        title: "React.js Fundamentals",
        description:
          "Components, JSX, props, useState, useEffect, React Router v6. Component composition, controlled forms, error boundaries, and lazy loading with React.Suspense.",
        skills: ["React", "JSX", "Hooks", "React Router v6"],
      },
      {
        weekRange: "Week 5",
        title: "Advanced React & State Management",
        description:
          "useContext, useReducer, custom hooks, React Query for server state. Optimistic updates, rollback on error, useMemo, useCallback, and React.memo performance profiling.",
        skills: ["useContext", "React Query", "Custom Hooks", "Performance"],
      },
      {
        weekRange: "Week 6",
        title: "Tailwind CSS & UI Component Libraries",
        description:
          "Tailwind utility classes, ShadCN/UI and Radix UI integration. Personal component library with Storybook, accessibility (ARIA, keyboard nav), and dark mode.",
        skills: ["Tailwind", "ShadCN/UI", "Storybook", "Accessibility"],
      },
      {
        weekRange: "Week 7",
        title: "Node.js & Express.js Backend",
        description:
          "Node runtime, npm ecosystem, Express routes, middleware and error handling. RESTful API design, input validation with express-validator, file uploads with Multer.",
        skills: ["Node.js", "Express", "REST API", "Multer", "express-validator"],
      },
      {
        weekRange: "Week 8",
        title: "MongoDB & Mongoose ORM",
        description:
          "MongoDB Atlas, collections, CRUD, Mongoose schemas, validation and population. Aggregation pipeline, indexing strategies, and full-text search with Atlas Search.",
        skills: ["MongoDB", "Mongoose", "Aggregation", "Atlas Search"],
      },
      {
        weekRange: "Week 9",
        title: "Authentication & Security",
        description:
          "JWT auth, bcrypt hashing, refresh tokens, Zod/Joi validation. Google OAuth 2.0 with Passport.js, RBAC (admin/editor/user), Helmet.js and CORS configuration.",
        skills: ["JWT", "bcrypt", "OAuth 2.0", "RBAC", "Helmet.js"],
      },
      {
        weekRange: "Week 10",
        title: "Next.js 14 — Full-Stack React Framework",
        description:
          "SSR, SSG, ISR, App Router, server vs client components, Server Actions. Image optimisation, middleware for auth and A/B testing, i18n basics, MDX blog with SEO metadata.",
        skills: ["Next.js 14", "App Router", "SSR/SSG/ISR", "Server Actions"],
      },
      {
        weekRange: "Week 11",
        title: "Deployment, CI/CD & Performance",
        description:
          "Vercel/Netlify for frontend, Railway/Render for Node apps. GitHub Actions automated pipeline, Core Web Vitals, Lighthouse audits to 90+, DB pooling and API caching.",
        skills: ["Vercel", "GitHub Actions", "Lighthouse", "Caching"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Full-Stack SaaS App + Career Launch",
        description:
          "Build a complete full-stack SaaS app (e.g., project management tool). Technical interview prep, DSA basics, React/Node mock interviews. Upwork/Fiverr profile setup and 3 polished GitHub portfolio projects with live deployed links.",
        skills: ["SaaS App", "Live Deploy", "Interview Prep", "Freelance Profile"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Full Stack Developer at Big Binary Tech" },
      {
        label: "Certifications",
        value: "Cisco · PSEB · PSDA ready",
        highlight: "Job titles: Frontend · Backend · Full-Stack · React Developer",
      },
      {
        label: "Freelance Path",
        value: "Upwork/Fiverr-ready in 12 weeks",
        highlight: "$15–$60/hr internationally competitive rate",
      },
    ],
  },
  {
    id: "ecommerce",
    trackNumber: "04",
    type: "Niche Specialist",
    title: "E-Commerce Expert — Shopify, Dropshipping, eBay & Local Commerce",
    durationWeeks: 12,
    price: "",
    meta: [
      "12 Weeks",
      "Shopify · eBay · Meta Ads · WhatsApp",
      "PKR 60,000–200,000/month",
      "Own Business Potential: Unlimited",
    ],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Shopify Store Setup & Branding",
        description:
          "Shopify plan selection, domain, JazzCash/Stripe Atlas payment gateway. Dawn theme customisation, SEO-optimised product pages, custom CSS, and mobile UX fixes.",
        skills: ["Shopify", "Dawn Theme", "SEO", "Mobile UX"],
      },
      {
        weekRange: "Week 2",
        title: "Product Research & Niche Selection",
        description:
          "Minea, AdSpy, Google Trends, TikTok Creative Center for product research. Winning product criteria, supplier sourcing from AliExpress, CJ Dropshipping, and local Pakistan suppliers.",
        skills: ["Minea", "AdSpy", "Google Trends", "AliExpress", "CJ Dropshipping"],
      },
      {
        weekRange: "Week 3",
        title: "Dropshipping — Full Setup & Fulfilment",
        description:
          "DSers/AutoDS integration, shipping zones, 3x–5x markup strategy. Handling disputes, chargebacks, AliExpress-to-CJ migration for faster Pakistan shipping, post-purchase automation.",
        skills: ["DSers", "AutoDS", "Fulfilment", "Order Automation"],
      },
      {
        weekRange: "Week 4",
        title: "Shopify Store Optimisation — CRO",
        description:
          "Conversion Rate Optimisation: trust badges, urgency timers, social proof, upsells. Hotjar heatmaps, A/B testing with Google Optimize, bounce rate and funnel drop-off analysis.",
        skills: ["CRO", "Hotjar", "A/B Testing", "Google Optimize"],
      },
      {
        weekRange: "Week 5",
        title: "E-Commerce Advertising — Meta + TikTok",
        description:
          "Meta dynamic product ads and catalogue campaigns, TikTok Shop setup. UGC-style product video creation, creative testing framework, ROAS targets by product category.",
        skills: ["Meta Ads", "TikTok Ads", "UGC Video", "ROAS Tracking"],
      },
      {
        weekRange: "Week 6",
        title: "Email & SMS Marketing",
        description:
          "Welcome flow, abandoned cart, post-purchase and win-back sequences. SMS marketing with Postscript/SMSBump, VIP customer segmentation, popup lead magnets.",
        skills: ["Email Flows", "SMSBump", "Segmentation", "Lead Magnets"],
      },
      {
        weekRange: "Week 7",
        title: "eBay — Setup & Listing Optimisation",
        description:
          "eBay seller account onboarding (Pakistan-ready), marketplace fundamentals, optimised listing creation with multi-angle product photography, competitor analysis on pricing and demand.",
        skills: ["eBay", "Listing Optimisation", "Product Photography", "Competitor Analysis"],
      },
      {
        weekRange: "Week 8",
        title: "eBay Advertising & Seller Growth",
        description:
          "eBay Promoted Listings (Standard and Advanced), organic + paid traffic strategy, order fulfilment and inventory management, profitability tracking vs ad spend.",
        skills: [
          "eBay Promoted Listings",
          "Inventory Management",
          "Traffic Strategy",
          "Profit Tracking",
        ],
      },
      {
        weekRange: "Week 9",
        title: "Local E-Commerce — Daraz, OLX & WhatsApp",
        description:
          "WhatsApp Business API for catalogues and order management, Facebook ad library strategy, cash-on-delivery return rate reduction, WhatsApp broadcast campaigns for repeat customers.",
        skills: ["WhatsApp Business API", "Daraz", "COD Strategy", "Facebook Ads"],
      },
      {
        weekRange: "Week 10",
        title: "E-Commerce Analytics & Scaling",
        description:
          "Google Analytics 4 funnel analysis, Looker Studio scaling dashboard, lookalike audiences. Unit economics, UAE/UK market expansion for Pakistani sellers, 90-day financial projections.",
        skills: ["GA4", "Looker Studio", "Lookalike Audiences", "Unit Economics"],
      },
      {
        weekRange: "Week 11",
        title: "Shopify Advanced — Apps, Automation & Loyalty",
        description:
          "Shopify Flow tag-based automation, Smile.io loyalty program, ReConvert post-purchase upsell, Loox UGC reviews. Shopify Plus and headless commerce overview.",
        skills: ["Shopify Flow", "Smile.io", "ReConvert", "Loox"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Live Store + Investor-Ready Business Plan",
        description:
          "Business registration in Pakistan (SECP, NTN), P&L analysis, break-even calculation, and first 10 live test orders. Investor-ready pitch: market size, unit economics, risk analysis, and 90-day launch roadmap.",
        skills: ["Live Store", "SECP/NTN Registration", "Business Pitch", "Launch Roadmap"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "E-Commerce Manager / Shopify Expert at Big Binary Tech",
      },
      {
        label: "Certifications",
        value: "Cisco · PSDA · PSEB ready",
        highlight: "Roles: Shopify Dev · FBA Seller · Dropshipping Expert · E-Commerce Consultant",
      },
      {
        label: "Own Business Potential",
        value: "Launch your own store during the course",
        highlight:
          "Pakistan-first strategy: Daraz, COD, WhatsApp — plus global eBay and Shopify",
      },
    ],
  },
  {
    id: "dmm",
    trackNumber: "05",
    type: "Platform Mastery",
    title: "Digital Media Marketing — Meta, Google, TikTok & LinkedIn",
    durationWeeks: 16,
    price: "",
    meta: ["16 Weeks", "Meta · Google · TikTok · LinkedIn", "L1 + L2 Combined", "Freelance-Ready"],
    weeks: [
      {
        weekRange: "Week 1 · L1-A",
        title: "Meta Platform Fundamentals",
        description:
          "Meta ecosystem overview (Facebook, Instagram, Messenger, WhatsApp), Business Suite navigation, account structure and business manager setup. Business page optimization, profile verification, page roles and permissions.",
        skills: ["Meta Business Suite", "Business Manager", "Page Optimization"],
      },
      {
        weekRange: "Week 2 · L1-A",
        title: "Meta Content Creation & Management",
        description:
          "Platform-specific content best practices, image and video specifications, Canva and Meta Creative Studio. Content calendar development, post scheduling, and content performance analysis.",
        skills: ["Canva", "Meta Creative Studio", "Content Calendar", "Scheduling"],
      },
      {
        weekRange: "Week 3 · L1-A",
        title: "Meta Advertising Fundamentals",
        description:
          "Ads Manager interface, campaign objectives and structure, ad account setup. Targeting options (demographics, interests, behaviours), custom and lookalike audiences, ad format selection.",
        skills: ["Meta Ads Manager", "Audience Targeting", "Custom Audiences", "Ad Formats"],
      },
      {
        weekRange: "Week 4 · L1-A",
        title: "Meta Ads Optimisation & Freelancing",
        description:
          "Performance metrics and KPIs, budget management and optimisation, reporting and analysis. Meta Ads freelancing opportunities, service packaging, pricing, and client acquisition strategies.",
        skills: ["KPIs", "Budget Optimisation", "Reporting", "Freelancing"],
      },
      {
        weekRange: "Week 5 · L1-B",
        title: "Google Ads Fundamentals",
        description:
          "Google Ads account structure, campaign types and objectives, interface navigation. Search campaign setup, keyword research and selection, ad copy writing for search.",
        skills: ["Google Ads", "Search Campaigns", "Keyword Research", "Ad Copywriting"],
      },
      {
        weekRange: "Week 6 · L1-B",
        title: "Google Ads Advanced Campaigns",
        description:
          "Display network targeting, YouTube ad formats and targeting, creative best practices. Performance Max campaign setup, Shopping campaign configuration, and product feed management.",
        skills: ["Display Network", "YouTube Ads", "Performance Max", "Shopping Campaigns"],
      },
      {
        weekRange: "Week 7 · L1-B",
        title: "Google Analytics & Tag Manager",
        description:
          "GA4 setup and configuration, reports and explorations, key metrics and dimensions. Tag Manager account setup, basic tag implementation, trigger and variable configuration.",
        skills: ["GA4", "Google Tag Manager", "Reports", "Triggers"],
      },
      {
        weekRange: "Week 8 · L1-B",
        title: "Google Platform Integration & Freelancing",
        description:
          "Cross-platform campaign management, data integration between platforms, optimisation across channels. Google platform freelancing opportunities, service packaging, and Google Partner programme.",
        skills: ["Cross-Platform", "Data Integration", "Google Partner", "Service Pricing"],
      },
      {
        weekRange: "Week 9 · L2-A",
        title: "TikTok Platform Fundamentals",
        description:
          "TikTok platform overview and demographics, Business Center setup, account structure and management. TikTok content trends, algorithm understanding, and content pillars for brands.",
        skills: ["TikTok Business Center", "Algorithm", "Content Pillars", "Brand Strategy"],
      },
      {
        weekRange: "Week 10 · L2-A",
        title: "TikTok Content Creation",
        description:
          "Video filming techniques, editing with TikTok tools, sound and music integration. Creative effects and filters, stickers and text overlays, transitions and timing.",
        skills: ["TikTok Editor", "Video Production", "Effects", "Transitions"],
      },
      {
        weekRange: "Week 11 · L2-A",
        title: "TikTok Advertising",
        description:
          "Ads Manager interface, campaign objectives and structure, targeting capabilities. In-feed ads, TopView and branded effects, Spark Ads and UGC integration.",
        skills: ["TikTok Ads Manager", "In-Feed Ads", "Spark Ads", "TopView"],
      },
      {
        weekRange: "Week 12 · L2-A",
        title: "TikTok Growth & Freelancing",
        description:
          "Follower growth tactics, engagement optimisation, hashtag and trend leveraging. TikTok marketing service opportunities, pricing TikTok services, client acquisition.",
        skills: ["Growth Tactics", "Hashtag Strategy", "Engagement", "Freelancing"],
      },
      {
        weekRange: "Week 13 · L2-B",
        title: "LinkedIn Platform Fundamentals",
        description:
          "LinkedIn platform overview, company page setup and optimisation, showcase pages and affiliations. B2B content best practices, content types and formats, thought leadership development.",
        skills: ["LinkedIn Pages", "B2B Content", "Thought Leadership", "Showcase Pages"],
      },
      {
        weekRange: "Week 14 · L2-B",
        title: "LinkedIn Content Creation & Community",
        description:
          "Post formats and best practices, document and article creation, video content for LinkedIn. Engagement strategies, comment management, networking, and group management.",
        skills: ["LinkedIn Posts", "Articles", "Community Management", "Networking"],
      },
      {
        weekRange: "Week 15 · L2-B",
        title: "LinkedIn Advertising",
        description:
          "Campaign Manager interface, campaign objectives and types, targeting capabilities. Sponsored content, message ads, conversation ads, lead gen forms, and dynamic ads.",
        skills: ["LinkedIn Campaign Manager", "Sponsored Content", "Lead Gen Forms", "Dynamic Ads"],
      },
      {
        weekRange: "Week 16 · Capstone",
        title: "LinkedIn B2B Strategy & Freelancing Launch",
        description:
          "Lead generation strategies, sales and marketing alignment, ABM on LinkedIn. LinkedIn marketing service opportunities, B2B client acquisition, and full freelance service packaging across all four platforms.",
        skills: ["ABM", "Lead Generation", "B2B Strategy", "Full-Platform Freelancing"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "Digital Marketing Expert at Big Binary Tech",
      },
      {
        label: "Platform Coverage",
        value: "Meta · Google · TikTok · LinkedIn",
        highlight: "The four platforms that drive 90%+ of digital ad spend globally",
      },
      {
        label: "Freelance Ready",
        value: "4 independent freelance service lines after graduation",
        highlight: "Each platform qualifies as a standalone income stream",
      },
    ],
  },

  {
    id: "app-game-dev",
    trackNumber: "06",
    type: "Practical Track",
    title: "App & Game Development — Flutter, Unity & C#",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "Flutter · Dart · Unity · C#", "3 Months · 24 Classes"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Introduction to Programming & Computational Thinking",
        description:
          "Understand what programming is and how to think logically. Basic operations, computational concepts, and problem decomposition as the foundation for all development work.",
        skills: ["Programming Basics", "Logic", "Computational Thinking", "Problem Solving"],
      },
      {
        weekRange: "Week 2",
        title: "Control Structures & Functions",
        description:
          "Conditions, loops, and function creation to structure a program. Learn to control program flow and encapsulate reusable logic in clean, readable code.",
        skills: ["If/Else", "Loops", "Functions", "Program Flow"],
      },
      {
        weekRange: "Week 3",
        title: "Data Structures & Algorithms",
        description:
          "How arrays, lists, and algorithms help solve real problems efficiently. Intro to algorithmic thinking, sorting, and searching for practical development scenarios.",
        skills: ["Arrays", "Lists", "Algorithms", "Sorting", "Searching"],
      },
      {
        weekRange: "Week 4",
        title: "Object-Oriented Programming (OOP)",
        description:
          "Basics of classes, objects, inheritance and encapsulation. The OOP principles that underpin both Flutter app development and Unity game scripting in C#.",
        skills: ["Classes", "Objects", "Inheritance", "Encapsulation", "OOP"],
      },
      {
        weekRange: "Week 5",
        title: "Introduction to Cross-Platform Development",
        description:
          "Explore app development frameworks and the cross-platform landscape. Hands-on introduction to Flutter and Dart — setup, first app, project structure, and the widget tree.",
        skills: ["Flutter", "Dart", "Cross-Platform", "Widget Tree", "Project Setup"],
      },
      {
        weekRange: "Week 6",
        title: "UI Components & Layouts in Flutter",
        description:
          "Design responsive UI screens using Flutter widgets, layouts, rows, columns, and containers. Build polished, adaptive interfaces that work across Android and iOS.",
        skills: ["Flutter Widgets", "Layouts", "Rows/Columns", "Containers", "Responsive UI"],
      },
      {
        weekRange: "Week 7",
        title: "State Management & Navigation",
        description:
          "Understand how app data is managed across screens using setState and providers. Implement multi-screen navigation, routing, and passing data between views.",
        skills: ["State Management", "setState", "Provider", "Navigation", "Routing"],
      },
      {
        weekRange: "Week 8",
        title: "API Integration & Local Data Storage",
        description:
          "Fetch online data using REST APIs and display it dynamically in Flutter apps. Store data locally using SharedPreferences and SQLite for offline-capable applications.",
        skills: ["REST APIs", "HTTP", "SharedPreferences", "SQLite", "Local Storage"],
      },
      {
        weekRange: "Week 9",
        title: "Introduction to Game Development & Unity",
        description:
          "Get started with the Unity editor — scenes, GameObjects, components, and the Inspector. Intro to C# scripting for games: variables, methods, and the Update loop.",
        skills: ["Unity", "C#", "GameObjects", "Scenes", "Scripting Basics"],
      },
      {
        weekRange: "Week 10",
        title: "2D Game Elements — Sprites, Physics & Controls",
        description:
          "Design 2D games using sprites, Rigidbody2D physics, colliders, and animations. Implement player controls, movement systems, and basic enemy behaviour.",
        skills: ["Sprites", "Rigidbody2D", "Colliders", "Animations", "Player Controls"],
      },
      {
        weekRange: "Week 11",
        title: "Game Design & User Interface",
        description:
          "Game design principles, level design fundamentals, and building player-focused UI in Unity. Score systems, health bars, pause menus, and game feel polish.",
        skills: ["Game Design", "Level Design", "Unity UI", "Score System", "Game Feel"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Game Assets, Sound & Final Project Presentation",
        description:
          "Add sound effects, visual effects, and optimise the build. Present a complete playable 2D game or functional Flutter app — demonstrating the full development lifecycle from concept to deployment.",
        skills: ["Sound Integration", "VFX", "Build Optimisation", "Live Demo", "Deployment"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "App & Game Developer at Big Binary Tech",
      },
      {
        label: "Dual Skill Set",
        value: "Flutter mobile apps + Unity 2D games in one track",
        highlight: "Two distinct career paths covered — mobile dev and game dev",
      },
      {
        label: "Capstone Deliverable",
        value: "A live playable game OR deployed Flutter app",
        highlight: "Real portfolio piece from day one of job searching",
      },
    ],
  },

  {
    id: "cybersecurity-levels",
    trackNumber: "07",
    type: "Multi-Level",
    title: "Cybersecurity — Foundations, Offensive & Advanced",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "3 Levels", "Threat Detection · Ethical Hacking · Forensics"],
    weeks: [
      {
        weekRange: "Week 1 · L1",
        title: "Introduction & Threat Landscape",
        description:
          "Cybersecurity concepts and terminology, the evolving threat landscape, types of attackers and motivations. Overview of modern cyber attacks and the anatomy of a breach.",
        skills: ["Threat Landscape", "Attack Types", "Attacker Mindset", "Terminology"],
      },
      {
        weekRange: "Week 2 · L1",
        title: "Network Security & Zero Trust",
        description:
          "Network security fundamentals — TCP/IP, firewalls, IDS/IPS. Zero Trust Architecture principles and identity and access management basics.",
        skills: ["TCP/IP", "Firewalls", "IDS/IPS", "Zero Trust", "IAM"],
      },
      {
        weekRange: "Week 3 · L1",
        title: "Modern Threat Vectors",
        description:
          "Ransomware attacks, supply chain compromises, cloud-native threats. Case studies of major real-world breaches and the lessons they teach defenders.",
        skills: ["Ransomware", "Supply Chain Attacks", "Cloud Threats", "Case Studies"],
      },
      {
        weekRange: "Week 4 · L1",
        title: "Best Practices & Security Frameworks",
        description:
          "Defense-in-depth strategies, cyber hygiene and best practices. Introduction to NIST and ISO frameworks. Ethics, compliance, and governance fundamentals.",
        skills: ["Defense-in-Depth", "NIST", "ISO", "Cyber Hygiene", "Compliance"],
      },
      {
        weekRange: "Week 5 · L2",
        title: "Security Tools & Defensive Techniques",
        description:
          "SIEM, EDR, and threat intelligence platforms in practice. Log analysis basics and secure configuration practices for hardening systems against attack.",
        skills: ["SIEM", "EDR", "Threat Intelligence", "Log Analysis", "Hardening"],
      },
      {
        weekRange: "Week 6 · L2",
        title: "Automation & Defensive Operations",
        description:
          "Security automation fundamentals, introduction to SOAR, detection and response workflows. Building automated playbooks to respond to common threat scenarios at speed.",
        skills: ["SOAR", "Security Automation", "Playbooks", "Detection & Response"],
      },
      {
        weekRange: "Week 7 · L2",
        title: "Ethical Hacking & Penetration Testing",
        description:
          "Ethical hacking methodology, penetration testing frameworks, and vulnerability assessment basics. Think like an attacker to better build defences.",
        skills: ["Ethical Hacking", "Pen Testing", "Vulnerability Assessment", "Methodology"],
      },
      {
        weekRange: "Week 8 · L2",
        title: "Web, API & Human Security",
        description:
          "Web application security testing, API security fundamentals, social engineering and awareness. Human-centred security risks — the most exploited attack surface.",
        skills: ["Web App Security", "API Security", "Social Engineering", "OWASP"],
      },
      {
        weekRange: "Week 9 · L3",
        title: "Security Architecture & Cloud",
        description:
          "Secure design principles, security architecture models, cloud and container security fundamentals. Build systems that are secure by design, not patched after the fact.",
        skills: ["Security Architecture", "Cloud Security", "Container Security", "Secure Design"],
      },
      {
        weekRange: "Week 10 · L3",
        title: "Monitoring, Threat Hunting & Response",
        description:
          "Security monitoring techniques, threat hunting methodologies, and intelligence-driven defence. Move from reactive to proactive security operations.",
        skills: ["Threat Hunting", "Security Monitoring", "Intelligence-Driven", "SOC"],
      },
      {
        weekRange: "Week 11 · L3",
        title: "Advanced Operations — Forensics & Malware",
        description:
          "Digital forensics and incident response, advanced threat detection, malware analysis and reverse engineering basics. Investigate breaches and understand attacker tools.",
        skills: ["DFIR", "Malware Analysis", "Reverse Engineering", "Forensics"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Emerging Tech, Leadership & Final Assessment",
        description:
          "IoT, blockchain, and AI/ML security. DevSecOps and cloud-native security, post-quantum cryptography basics. Security leadership, risk management, and final capstone assessment across all three levels.",
        skills: ["IoT Security", "AI/ML Security", "DevSecOps", "Post-Quantum", "Risk Management"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "Cybersecurity Analyst / Expert at Big Binary Tech",
      },
      {
        label: "Three Levels Covered",
        value: "Foundations → Offensive → Advanced in 12 weeks",
        highlight: "From cyber hygiene basics to malware analysis and threat hunting",
      },
      {
        label: "Market Demand",
        value: "367% projected role growth · $16.6B in cybercrime losses in 2024",
        highlight: "One of the fastest-growing and highest-paying tech disciplines",
      },
    ],
  },

  {
    id: "genai-consumer",
    trackNumber: "08",
    type: "Consumer Track",
    title: "Generative AI Expert — LLMs, Image Generation & Multimodal AI",
    durationWeeks: 12,
    price: "",
    meta: [
      "12 Weeks",
      "ChatGPT · Midjourney · Runway · Streamlit",
      "PKR 90,000–250,000/month",
      "Freelance: $30–$100/hr",
    ],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Foundations of Generative AI",
        description:
          "How LLMs work: transformers, tokens, attention. GPT-4o vs Claude 3.5 vs Gemini capability comparison. Prompt engineering: zero-shot, few-shot, CoT, ReAct. Hallucination detection and context window management.",
        skills: ["Prompt Engineering", "GPT-4o", "Claude", "Gemini", "CoT/ReAct"],
      },
      {
        weekRange: "Week 2",
        title: "Advanced ChatGPT, Claude & Workflow Automation",
        description:
          "Custom GPTs with knowledge bases and actions, Claude Projects with custom instructions, AI for research, writing and coding. Multi-step workflows integrated with Notion and Google Docs.",
        skills: ["Custom GPTs", "Claude Projects", "Notion", "Workflow Automation"],
      },
      {
        weekRange: "Week 3",
        title: "AI Image Generation — Midjourney & DALL-E 3",
        description:
          "Midjourney V6 prompting syntax, parameters, stylization. DALL-E 3 via ChatGPT and API. Advanced: multi-prompt, seeds, style references (--sref, --cref), consistent character sheets.",
        skills: ["Midjourney V6", "DALL-E 3", "Style References", "Character Sheets"],
      },
      {
        weekRange: "Week 4",
        title: "Stable Diffusion & ComfyUI",
        description:
          "Stable Diffusion setup (Automatic1111/ComfyUI), ControlNet for pose/depth/edge control, LoRA models for consistent character generation. Custom node workflows and upscaling with Ultimate SD Upscale.",
        skills: ["Stable Diffusion", "ComfyUI", "ControlNet", "LoRA"],
      },
      {
        weekRange: "Week 5",
        title: "AI Video & Audio Generation",
        description:
          "Runway ML Gen-3, Kling AI, HeyGen for video creation. ElevenLabs for voiceovers, Suno/Udio for music. Combine AI clips with Premiere Pro, sync audio, add captions and branding overlays.",
        skills: ["Runway ML", "ElevenLabs", "Suno AI", "Premiere Pro"],
      },
      {
        weekRange: "Week 6",
        title: "Multimodal AI & AI Avatars",
        description:
          "HeyGen and D-ID for avatar videos, GPT-4 Vision for image analysis and product QA, Gemini multimodal for document and image understanding. Automated document pipelines for invoices and contracts.",
        skills: ["HeyGen", "GPT-4 Vision", "Gemini Multimodal", "D-ID"],
      },
      {
        weekRange: "Week 7",
        title: "Building AI-Powered Products & Apps",
        description:
          "Streamlit for rapid AI app prototyping, Gradio for shareable demos. Deploy to Hugging Face Spaces, add user authentication, apply UX principles (loading states, error messages, feedback loops).",
        skills: ["Streamlit", "Gradio", "Hugging Face Spaces", "AI UX"],
      },
      {
        weekRange: "Week 8",
        title: "Monetisation & Freelance Strategy",
        description:
          "Top Gen AI services: content creation, AI art, avatar videos. Pricing on Fiverr Pakistan and international clients. Portfolio building on Behance/LinkedIn/GitHub, proposal writing and starter/pro/enterprise tier packaging.",
        skills: ["Fiverr", "Upwork", "Proposal Writing", "Service Packaging"],
      },
      {
        weekRange: "Week 9",
        title: "AI for Marketing & Social Media Automation",
        description:
          "Automated content pipelines: blog to social to email. Buffer AI, Predis.ai, Canva AI, Adobe Firefly. n8n AI pipeline for auto-publishing, A/B testing AI content, GA4 performance analytics.",
        skills: ["n8n", "Buffer AI", "Canva AI", "Adobe Firefly", "GA4"],
      },
      {
        weekRange: "Week 10",
        title: "Responsible AI, Ethics & Compliance",
        description:
          "AI deepfake detection tools and legal risk in Pakistan. Copyright and IP issues with AI-generated content. AI bias, hallucinations, fact-checking strategies. PTA AI guidelines and data privacy regulations.",
        skills: ["AI Ethics", "Deepfake Detection", "PTA Guidelines", "IP Law"],
      },
      {
        weekRange: "Week 11",
        title: "Advanced Brand AI — Consistency & Automation",
        description:
          "IP-Adapter + LoRA for consistent character generation, brand style training on Stable Diffusion, AI product mockup automation for e-commerce. Batch generate 50+ consistent images and deliver professional asset packages.",
        skills: ["IP-Adapter", "Brand LoRA", "Batch Generation", "E-Commerce Mockups"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Portfolio Showcase & Career Launch",
        description:
          "AI media production for a real client brief. LinkedIn optimisation, Gen AI interview prep, Fiverr/Upwork gig setup. Live capstone presentation to peers and mock clients, portfolio finalisation, 90-day freelance action plan.",
        skills: ["Live Portfolio", "Client Brief", "Gig Setup", "90-Day Plan"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Gen AI Expert at Big Binary Tech" },
      {
        label: "Certifications",
        value: "Cisco · PSDA · PSEB ready",
        highlight:
          "Roles: Gen AI Engineer · Prompt Engineer · AI Content Specialist · AI Product Developer",
      },
      {
        label: "Freelance Ceiling",
        value: "$30–$100/hr internationally",
        highlight: "Consumer-focused — freelance-ready from week 8, full launch at week 12",
      },
    ],
  },

  {
    id: "devops",
    trackNumber: "09",
    type: "Engineering Track",
    title: "DevOps — Linux, Docker, CI/CD, AWS & Cloud",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "24 Lectures", "Linux · Docker · Jenkins · AWS · Kubernetes"],
    weeks: [
      {
        weekRange: "Week 1 · Phase 1",
        title: "DevOps Prerequisites & Fundamentals",
        description:
          "Networking basics: IP, DNS, Ports, Protocols. Web servers overview (Apache, Nginx). Git essentials: init, clone, commit, push, branching. What is DevOps, CI/CD, Infrastructure as Code — and the popular toolchain: Jenkins, Docker, Kubernetes, Terraform.",
        skills: ["Networking", "DNS", "Git", "CI/CD", "Docker", "Kubernetes", "Terraform"],
      },
      {
        weekRange: "Week 2 · Phase 1",
        title: "Linux Installation & Setup",
        description:
          "Setting up Linux using VMs, WSL, or cloud instances. Understanding the environment options and choosing the right setup for DevOps workflows.",
        skills: ["Linux", "VMs", "WSL", "Cloud Instances", "Environment Setup"],
      },
      {
        weekRange: "Week 3 · Phase 1",
        title: "Linux Basics, Scripting & Git",
        description:
          "Linux commands: file handling, permissions, user management. Shell scripting fundamentals. Git branching strategies, merges, and conflict resolution.",
        skills: ["Linux CLI", "File Permissions", "Shell Scripting", "Git Branching", "Merge Conflicts"],
      },
      {
        weekRange: "Week 4 · Phase 1",
        title: "Advanced Scripting & Interview Prep",
        description:
          "Loops, functions, cron jobs, and automation scripts. Real-world scripting scenarios and common Linux + Git interview questions to sharpen job readiness.",
        skills: ["Cron Jobs", "Automation Scripts", "Loops", "Functions", "Interview Prep"],
      },
      {
        weekRange: "Week 5 · Phase 2",
        title: "Docker Basics & Advanced",
        description:
          "Installing Docker, images, containers, volumes, and hands-on container usage. Docker networking, multi-container apps, Docker Compose, and interview practice.",
        skills: ["Docker", "Images", "Containers", "Volumes", "Docker Compose", "Networking"],
      },
      {
        weekRange: "Week 6 · Phase 2",
        title: "CI/CD — Jenkins & GitHub Actions",
        description:
          "CI/CD concepts, Jenkins installation and pipelines, Git integration. GitHub Actions workflows, YAML basics, automating build and test pipelines end-to-end.",
        skills: ["Jenkins", "GitHub Actions", "Pipelines", "YAML", "Build Automation"],
      },
      {
        weekRange: "Week 7 · Phase 2",
        title: "Web Servers & First Deployment",
        description:
          "Apache vs Nginx: configuration basics, reverse proxy, load balancing. Deploy a real application using Docker + CI/CD + web server with Git-based deployment automation.",
        skills: ["Apache", "Nginx", "Reverse Proxy", "Load Balancing", "Live Deployment"],
      },
      {
        weekRange: "Week 8 · Phase 2",
        title: "Phase 2 Test & Mock Interviews",
        description:
          "Evaluation covering CI/CD, Docker, and Linux. Scenario-based mock interview questions, peer review and feedback to consolidate the full containers and CI/CD phase.",
        skills: ["Assessment", "Mock Interviews", "Scenario-Based Q&A", "Peer Review"],
      },
      {
        weekRange: "Week 9 · Phase 3",
        title: "Cloud Computing Basics & AWS Overview",
        description:
          "IaaS, PaaS, SaaS and the shared responsibility model. AWS free tier account setup, console tour, EC2, S3, and Lambda basics.",
        skills: ["Cloud Models", "IaaS/PaaS/SaaS", "AWS Console", "EC2", "S3", "Lambda"],
      },
      {
        weekRange: "Week 10 · Phase 3",
        title: "AWS Networking, IAM & Databases",
        description:
          "VPC, Subnets, Security Groups, pricing and Cost Explorer. IAM users, roles and policies. RDS, DynamoDB, backup and restore strategies.",
        skills: ["VPC", "Security Groups", "IAM", "RDS", "DynamoDB", "Cost Explorer"],
      },
      {
        weekRange: "Week 11 · Phase 3",
        title: "CDNs, ECS, EKS & Security Monitoring",
        description:
          "CloudFront, Route 53. Container orchestration with ECS vs EKS, Kubernetes basics. CloudWatch, CloudTrail, GuardDuty, and AWS security best practices.",
        skills: ["CloudFront", "Route 53", "ECS", "EKS", "Kubernetes", "CloudWatch", "GuardDuty"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "AWS Exam Prep, Mock Exam & Career Launch",
        description:
          "Cloud Practitioner / Solutions Architect exam prep and review of key services. Timed AWS mock exam. Resume building, certification roadmap, and full DevOps & Cloud career planning.",
        skills: ["AWS Certification", "Mock Exam", "Resume Building", "Career Roadmap"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "DevOps / Cloud Engineer at Big Binary Tech",
      },
      {
        label: "Certification Ready",
        value: "AWS Cloud Practitioner & Solutions Architect prep included",
        highlight: "Leave exam-ready with a structured certification path",
      },
      {
        label: "Full Pipeline Coverage",
        value: "Linux → Docker → CI/CD → AWS → Kubernetes",
        highlight: "The complete modern DevOps stack in 12 weeks",
      },
    ],
  },
];

// ─── Shared track section renderer (main curriculum — with scroll animations) ──
const TrackSection = ({
  track,
}: {
  track: (typeof curriculumData)[0] | (typeof freestyleData)[0];
}) => (
  <section
    key={track.id}
    id={track.id}
    data-track={track.id}
    className="max-w-6xl mx-auto mb-32"
  >
    {/* Header */}
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs font-mono text-primary uppercase">
        Track {track.trackNumber} · {track.type}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{track.title}</h2>
      <div className="flex flex-wrap gap-2">
        {track.meta.map((item: string, i: number) => (
          <span key={i} className="text-xs border px-3 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </motion.div>

    {/* Week Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {track.weeks.map((week: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className={`p-5 border rounded ${
            week.isCapstone ? "border-primary bg-primary/10" : ""
          }`}
        >
          <p className="text-xs text-primary mb-2">
            {week.weekRange} {week.isCapstone && "• CAPSTONE"}
          </p>
          <h4 className="font-semibold mb-2">{week.title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{week.description}</p>
          <div className="flex flex-wrap gap-1">
            {week.skills.map((s: string, j: number) => (
              <span key={j} className="text-xs border px-2 py-1 rounded">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Outcomes */}
    <div className="grid md:grid-cols-3 gap-5 border-t pt-10">
      {track.outcomes.map((o: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative flex flex-col gap-3 p-6 rounded-lg border border-border/60 bg-muted/20 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-l-lg" />
          <p className="text-[10px] uppercase tracking-widest text-primary font-medium pl-1">
            {o.label}
          </p>
          <p className="text-base font-semibold leading-snug text-foreground pl-1">{o.value}</p>
          {o.highlight && (
            <p className="text-xs text-muted-foreground pl-1 leading-relaxed border-t border-border/40 pt-3 mt-auto">
              {o.highlight}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Curriculum = () => {
  const [activeTrack, setActiveTrack] = useState<string>("ai");
  const [activeFreestyleTrack, setActiveFreestyleTrack] = useState<string>("python-dev");
  const [showFreestyleNav, setShowFreestyleNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // ── Main tracks active state ──
      const mainSections = document.querySelectorAll("[data-track]");
      mainSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          const trackId = section.getAttribute("data-track");
          if (trackId) setActiveTrack(trackId);
        }
      });

      // ── Freestyle nav visibility: show when freestyle section is in view ──
      const freestyleSection = document.getElementById("freestyle-section");
      if (freestyleSection) {
        const rect = freestyleSection.getBoundingClientRect();
        setShowFreestyleNav(rect.top <= 140);
      }

      // ── Freestyle tracks active state ──
      const freestyleSections = document.querySelectorAll("[data-freestyle-track]");
      freestyleSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          const trackId = section.getAttribute("data-freestyle-track");
          if (trackId) setActiveFreestyleTrack(trackId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Week-by-Week · All Tracks
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-6"
          >
            The Full <br />
            <span className="text-gradient-gold">Curriculum</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            Every module, every week, every outcome — clearly structured.
          </motion.p>
        </div>
      </section>

      {/* ── Single sticky nav that swaps between curriculum and freestyle ── */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border px-6 md:px-12 py-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative min-h-8">

          {/* Main curriculum nav — slides out upward when freestyle reached */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-500 ease-in-out ${
              showFreestyleNav
                ? "opacity-0 -translate-y-6 pointer-events-none absolute inset-0"
                : "opacity-100 translate-y-0 pointer-events-auto"
            }`}
          >
            {curriculumData.map((track) => (
              <a
                key={track.id}
                href={`#${track.id}`}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded transition-colors whitespace-nowrap ${
                  activeTrack === track.id
                    ? "bg-primary/20 border border-primary/40 text-primary"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {track.trackNumber} {track.title.split("+")[0]}
              </a>
            ))}
          </div>

          {/* Freestyle nav — slides in from below when freestyle section reached */}
          <div
            className={`flex flex-wrap gap-2 items-center transition-all duration-500 ease-in-out ${
              showFreestyleNav
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-6 pointer-events-none absolute inset-0"
            }`}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary mr-1 shrink-0">
              Free Style ·
            </span>
            {freestyleData.map((track) => (
              <a
                key={track.id}
                href={`#${track.id}`}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded transition-colors whitespace-nowrap ${
                  activeFreestyleTrack === track.id
                    ? "bg-primary/20 border border-primary/40 text-primary"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {track.trackNumber} {track.title.split("—")[0].trim().slice(0, 20)}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ── Main Tracks ── */}
      <div className="py-20 px-6 md:px-12">
        {curriculumData.map((track) => (
          <TrackSection key={track.id} track={track} />
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-border" />

      {/* ── Free Style Courses Section ── */}
      <section id="freestyle-section" className="py-20 px-6 md:px-12 bg-muted/10">
        {/* Section Hero */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Short-Format · Skill-First
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-6"
          >
            Free Style <br />
            <span className="text-gradient-gold">Courses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            Focused 12-week programmes — purpose-built for specific roles, stacks, and markets.
          </motion.p>
        </div>

        {/* Freestyle Track Cards — each gets data-freestyle-track for scroll tracking */}
        {freestyleData.map((track) => (
          <section
            key={track.id}
            id={track.id}
            data-freestyle-track={track.id}
            className="max-w-6xl mx-auto mb-32"
          >
            {/* Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-mono text-primary uppercase">
                Track {track.trackNumber} · {track.type}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{track.title}</h2>
              <div className="flex flex-wrap gap-2">
                {track.meta.map((item: string, i: number) => (
                  <span key={i} className="text-xs border px-3 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Week Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {track.weeks.map((week: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={`p-5 border rounded ${
                    week.isCapstone ? "border-primary bg-primary/10" : ""
                  }`}
                >
                  <p className="text-xs text-primary mb-2">
                    {week.weekRange} {week.isCapstone && "• CAPSTONE"}
                  </p>
                  <h4 className="font-semibold mb-2">{week.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{week.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {week.skills.map((s: string, j: number) => (
                      <span key={j} className="text-xs border px-2 py-1 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="grid md:grid-cols-3 gap-5 border-t pt-10">
              {track.outcomes.map((o: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col gap-3 p-6 rounded-lg border border-border/60 bg-muted/20 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-l-lg" />
                  <p className="text-[10px] uppercase tracking-widest text-primary font-medium pl-1">
                    {o.label}
                  </p>
                  <p className="text-base font-semibold leading-snug text-foreground pl-1">
                    {o.value}
                  </p>
                  {o.highlight && (
                    <p className="text-xs text-muted-foreground pl-1 leading-relaxed border-t border-border/40 pt-3 mt-auto">
                      {o.highlight}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Curriculum;