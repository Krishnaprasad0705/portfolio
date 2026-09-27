export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  technologies: string[];
  thumbnail: string;
  images: string[];
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  architectureLayers?: {
    bronze?: string;
    silver?: string;
    gold?: string;
  };
  keyFeatures: string[];
  resultsOrImpact: string[];
  status?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  type: string;
  image: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  logo: string;
  badge: string;
  achievements: string[];
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Krishna Prasad M",
    roles: ["Data Engineer", "Data Analyst"],
    heroTagline: "Turning raw data into actionable insights.",
    subTagline:
      "Final-Year CSE Student passionate about building scalable ETL pipelines, enterprise data warehouses, and dynamic business intelligence dashboards.",
    bioParagraphs: [
      "I’m Krishna Prasad, a final-year Computer Science Engineering student at National Engineering College focused on Data Engineering and Data Analytics.",
      "I specialize in transforming complex, unorganized datasets through structured Medallion pipelines, writing high-performance SQL, dbt transformations, and PySpark streaming jobs, and delivering executive dashboards that power strategic business decisions.",
      "My core technical depth spans ETL/ELT architecture, cloud data warehouses like Snowflake and Databricks, analytics engineering, and business intelligence.",
    ],
    currentlyExploring: [
      "Data Engineering",
      "Data Analytics",
      "Business Intelligence",
      "Cloud Data Platforms",
      "Delta Lake Architecture",
      "AI Data Systems",
    ],
    stats: [
      {
        value: 1400,
        suffix: "+",
        label: "Skillrack Problems",
        link: "https://www.skillrack.com/faces/resume.xhtml?id=440360&key=79718a0410ae871aada01a4f508f49f4841e5d64",
      },
      {
        value: 50,
        suffix: "+",
        label: "LeetCode Solved",
        link: "https://leetcode.com/u/KrishnaPrasadM/",
      },
      {
        value: 7,
        suffix: "",
        label: "Industry Certifications",
        link: "#certifications",
      },
      {
        value: 6,
        suffix: "",
        label: "Production Data Projects",
        link: "#projects",
      },
    ],
    social: {
      github: "https://github.com/Krishnaprasad0705",
      linkedin: "https://www.linkedin.com/in/krishna-prasad-m-a244213b4",
      skillrack:
        "https://www.skillrack.com/faces/resume.xhtml?id=440360&key=79718a0410ae871aada01a4f508f49f4841e5d64",
      leetcode: "https://leetcode.com/u/KrishnaPrasadM/",
      email: "krishnampks07@gmail.com",
      instagram:
        "https://www.instagram.com/crazy_krizz_07?stkn=NHJhZzhpdjhuYnV0",
      resume: "/assets/resume.pdf",
    },
    images: {
      hero: "/images/profile/hero.png",
      about: "/images/profile/about.png",
      editorial: "/images/profile/editorial.png",
    },
  },

  skills: [
    {
      index: "01",
      category: "DATA ANALYTICS",
      description:
        "Translating raw business numbers into intuitive visual narratives, automated KPI monitors, and decision-support systems.",
      skills: ["Power BI", "Tableau", "Excel", "Data Visualization", "DAX", "Power Query"],
      accentColor: "#FF2028",
    },
    {
      index: "02",
      category: "DATA ENGINEERING",
      description:
        "Architecting resilient multi-hop data pipelines, automated testing, CDC streams, and modern lakehouse structures.",
      skills: [
        "ETL / ELT",
        "Data Pipelines",
        "dbt Core",
        "Snowflake",
        "Databricks",
        "PySpark",
        "Delta Live Tables",
        "SCD Type 1 & 2",
      ],
      accentColor: "#FF4D53",
    },
    {
      index: "03",
      category: "PROGRAMMING & DATABASES",
      description:
        "Writing clean, modular code and crafting high-efficiency queries across relational and distributed storage systems.",
      skills: ["Python", "SQL", "PostgreSQL", "Java", "Oracle SQL", "NumPy & Pandas"],
      accentColor: "#FF2028",
    },
    {
      index: "04",
      category: "CLOUD & DATA PLATFORMS",
      description:
        "Deploying and governing analytical workflows across enterprise cloud infrastructures and object stores.",
      skills: [
        "AWS (S3)",
        "Snowflake Cloud",
        "Databricks Lakehouse",
        "Microsoft Fabric",
        "Unity Catalog",
      ],
      accentColor: "#FF4D53",
    },
    {
      index: "05",
      category: "DEVELOPMENT & TOOLS",
      description:
        "Version control, collaborative workflows, interactive development, and code reproducibility.",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "DataColab"],
      accentColor: "#FF2028",
    },
  ],

  projects: [
    {
      id: "bmw-sales-dashboard",
      number: "01",
      title: "BMW Sales Dashboard (India 2024–2025)",
      category: "Business Intelligence & Sales Analytics",
      shortDesc:
        "Interactive Power BI command center analyzing BMW India's financial performance, model profitability, regional market share, and revenue trends.",
      technologies: ["Power BI", "DAX", "Excel", "Custom Visuals", "UI/UX"],
      thumbnail: "/images/projects/bmw/Thumbnailimg.jpeg",
      images: [
        "/images/projects/bmw/Thumbnailimg.jpeg",
        "/images/projects/bmw/image1.png",
        "/images/projects/bmw/image2.png",
        "/images/projects/bmw/image3.png",
      ],
      githubUrl: "https://github.com/Krishnaprasad0705/BMW-Sales-Dashboard",
      overview:
        "The BMW Sales Dashboard is an executive-tier Business Intelligence report developed using Power BI to monitor, analyze, and visualize BMW's business performance across the Indian territory from 2024 to 2025. It transforms raw multi-sheet Excel sales records into dynamic DAX-driven analytical perspectives.",
      problem:
        "Leadership required a single pane of glass to track financial health, understand regional disparity in unit volumes versus profit margins, and identify top vehicle growth drivers without parsing fragmented spreadsheets.",
      approach:
        "Cleaned and structured historical records, established a relational star model, authored customized DAX measures for profit margin % and sales velocity, and designed an on-brand BMW visual system with dynamic slicers.",
      keyFeatures: [
        "High-Level Executive KPI Cards: Total Revenue, Gross Profit, and Total Vehicle Units Sold",
        "Model-Wise Profit Analysis highlighting high-margin vehicles",
        "Monthly Revenue vs. Profit Trend combination visual (Bar + Line)",
        "Regional Revenue Contribution Donut Chart with geographic drill-downs",
        "Profit Margin (%) Efficiency Chart across all Indian territories",
        "Interactive vehicle model selector and time slicers",
      ],
      resultsOrImpact: [
        "Enabled instantaneous identification of underperforming regions",
        "Streamlined monthly executive reviews into a single dynamic screen",
        "Eliminated manual spreadsheet reconciliation",
      ],
    },
    {
      id: "airbnb-data-engineering",
      number: "02",
      title: "Airbnb End-to-End Data Pipeline",
      category: "Cloud Data Engineering & Lakehouse",
      shortDesc:
        "Production-grade pipeline leveraging Snowflake, dbt Core, and AWS S3 with Medallion Architecture, SCD Type 2 snapshots, and automated testing.",
      technologies: ["Snowflake", "dbt Core", "AWS S3", "SQL & Jinja", "Git"],
      thumbnail: "/images/projects/airbnb/Thumbnailimg.jpeg",
      images: [
        "/images/projects/airbnb/Thumbnailimg.jpeg",
        "/images/projects/airbnb/image.png",
        "/images/projects/airbnb/image2.png",
        "/images/projects/airbnb/image3.png",
        "/images/projects/airbnb/image4.png",
        "/images/projects/airbnb/image5.png",
        "/images/projects/airbnb/image6.png",
      ],
      githubUrl:
        "https://github.com/Krishnaprasad0705/Airbnb-data-engineering-pipeline",
      overview:
        "A modern, production-grade data engineering pipeline engineered using Snowflake, dbt (Data Build Tool), AWS S3, and Git. The system ingests and transforms raw Airbnb rental and host data using the industry-standard Medallion Architecture (Bronze → Silver → Gold).",
      problem:
        "Raw rental reservation data arrives with schema inconsistencies, null values, and state changes over time. Traditional batch dumps failed to provide historical state tracking and incurred high warehouse compute expenses.",
      approach:
        "Engineered incremental models to minimize warehouse costs, applied Slowly Changing Dimensions (SCD Type 2) using dbt Snapshots, authored reusable Jinja macros, and established full automated data quality test suites.",
      architectureLayers: {
        bronze:
          "Raw data ingestion into Snowflake staging schemas (bronze_bookings, bronze_hosts, bronze_listings) with incremental loading.",
        silver:
          "Data cleaning, column normalization, type casting, business validation, and SCD Type 2 historical change tracking.",
        gold:
          "Business-ready analytical mart with One Big Table (OBT) and star-schema fact tables optimized for reporting queries.",
      },
      keyFeatures: [
        "Incremental Models across Bronze and Silver layers to minimize Snowflake credits",
        "SCD Type 2 Snapshots tracking host and listing adjustments over time",
        "Custom Jinja Macros: generate_schema_name, trimmer, multiply, and tagging",
        "Automated dbt tests verifying uniqueness, not-null constraints, and referential integrity",
        "Clean version-controlled transformation lineage",
      ],
      resultsOrImpact: [
        "Reduced transformation runtimes through incremental processing",
        "Guaranteed 100% auditability for historical listing price changes",
        "Zero-defect reporting readiness for downstream BI consumers",
      ],
    },
    {
      id: "databricks-flightbooking-etl",
      number: "03",
      title: "Databricks Aviation & Reservation ETL",
      category: "Big Data & Streaming Lakehouse",
      shortDesc:
        "End-to-end lakehouse pipeline using Databricks Auto Loader, PySpark Structured Streaming, Delta Live Tables (DLT), and Unity Catalog.",
      technologies: [
        "Databricks",
        "PySpark",
        "Delta Live Tables",
        "Unity Catalog",
        "Delta Lake",
        "Databricks Jobs",
      ],
      thumbnail: "/images/projects/databricks/image.png",
      images: [
        "/images/projects/databricks/image.png",
        "/images/projects/databricks/image1.png",
        "/images/projects/databricks/image2.png",
        "/images/projects/databricks/image3.png",
      ],
      githubUrl:
        "https://github.com/Krishnaprasad0705/Databricks-Flightbooking-End-to-End-Project",
      overview:
        "A robust big data engineering pipeline built on the Databricks platform. It leverages Medallion Architecture to process multi-source aviation and reservation datasets (Flights, Passengers, Airports, Bookings) from raw storage into clean dimensional star schemas.",
      problem:
        "Ingesting heterogeneous flight and booking data with varying arrival frequencies required streaming fault tolerance, schema evolution handling, and automated quality governance under enterprise access controls.",
      approach:
        "Configured Databricks Volumes governed by Unity Catalog, ingested streaming feeds with Auto Loader, transformed data declaratively with Delta Live Tables, applied SCD Type-1 CDC logic, and orchestrated pipeline runs via Databricks Jobs.",
      architectureLayers: {
        bronze:
          "Databricks Volumes & Auto Loader with PySpark Structured Streaming for fault-tolerant, checkpointed ingestion.",
        silver:
          "Delta Live Tables (DLT) enforcing automated cleaning, schema expectations, and CDC with create_auto_cdc_flow().",
        gold:
          "Enterprise Star Schema with surrogate keys: DimPassengers, DimFlights, DimAirports, and FactBookings.",
      },
      keyFeatures: [
        "Auto Loader with schema evolution and checkpointing",
        "Declarative Delta Live Tables (DLT) data quality expectations",
        "Slowly Changing Dimensions (SCD Type-1) using automated CDC flows",
        "Enterprise access governance via Unity Catalog",
        "Automated orchestration and alerting using Databricks Jobs",
      ],
      resultsOrImpact: [
        "Seamless handling of schema shifts without pipeline downtime",
        "Continuous automated data quality enforcement",
        "Scalable star schema ready for complex aviation analytics",
      ],
    },
    {
      id: "starbucks-sales-dashboard",
      number: "04",
      title: "Starbucks India 10-Year Sales Analytics",
      category: "Business Intelligence & Long-Term Trend Analytics",
      shortDesc:
        "Power BI interactive visual suite analyzing a decade of Starbucks India sales, category profitability, and regional temporal shifts.",
      technologies: [
        "Power BI",
        "DAX",
        "Power Query",
        "DataColab",
        "Financial Analytics",
      ],
      thumbnail: "/images/projects/starbucks/Thumbnailimg.jpeg",
      images: [
        "/images/projects/starbucks/Thumbnailimg.jpeg",
        "/images/projects/starbucks/image.png",
        "/images/projects/starbucks/image1.png",
        "/images/projects/starbucks/image2.png",
      ],
      githubUrl:
        "https://github.com/Krishnaprasad0705/Starbucks-Sales-Dashboard",
      overview:
        "An interactive, thematic Power BI dashboard exploring Starbucks India's sales trajectory across a comprehensive 10-year timeline. The project delivers granular insights into regional consumer preferences, product category margins, and seasonal demand swings.",
      problem:
        "Decade-long transactional data contained formatting discrepancies, irregular discount structures, and missing temporal alignments that prevented accurate Year-over-Year (YoY) analysis.",
      approach:
        "Utilized DataColab and Power Query for extensive cleansing and normalization. Formulated DAX measures for net margins, CAGR, and discount impact, wrapping the analysis in a bespoke Starbucks green-gold UI theme.",
      keyFeatures: [
        "Executive KPI Cards: Revenue, Gross Margin, and Net Profit",
        "Year-over-Year (YoY) growth comparison across 10 distinct fiscal years",
        "Product Category & Regional performance breakdown with interactive drilldown",
        "Temporal trend visualization highlighting cyclical and seasonal spikes",
        "Discount sensitivity analysis evaluating promotion efficacy",
      ],
      resultsOrImpact: [
        "Uncovered cyclical peaks for cold beverage categories",
        "Benchmarked regional store efficiency over a 10-year span",
        "Delivered a polished, brand-faithful presentation for stakeholders",
      ],
    },
    {
      id: "customer-shopping-behavior",
      number: "05",
      title: "Customer Shopping Behavior Analytics",
      category: "Analytics Engineering & Customer Intelligence",
      shortDesc:
        "End-to-end analytics workflow combining Python feature engineering, PostgreSQL relational queries, and an interactive Power BI dashboard.",
      technologies: ["Python", "PostgreSQL", "Power BI", "Pandas", "SQL"],
      thumbnail: "/images/projects/shopping/Thumbnailimg.jpeg",
      images: [
        "/images/projects/shopping/Thumbnailimg.jpeg",
        "/images/projects/shopping/img1.png",
        "/images/projects/shopping/img2.png",
      ],
      githubUrl:
        "https://github.com/Krishnaprasad0705/Customer-Shopping-Behaviour-Analysis",
      overview:
        "An end-to-end data analytics system evaluating multi-channel retail consumer behavior. The solution connects raw CSV preparation in Python to a relational PostgreSQL database and surfaces behavioral trends via an interactive Power BI dashboard.",
      problem:
        "Retail decision-makers lacked clarity on which customer segments exhibited the highest lifetime value, how discounts affected repeat purchases, and the relationship between review ratings and sales volume.",
      approach:
        "Prepared and cleansed raw records with Pandas and NumPy, structured tables in PostgreSQL for analytical querying (cohort analysis, loyalty segmentation, and channel comparison), and constructed an interactive Power BI dashboard.",
      keyFeatures: [
        "Python ETL pipeline for data normalization and behavioral metric calculation",
        "PostgreSQL analytical queries for RFM (Recency, Frequency, Monetary) segmentation",
        "Online vs. In-store channel purchase behavior comparisons",
        "Review score correlation with customer re-order rates",
        "Interactive Power BI executive dashboard with dynamic demographic slicers",
      ],
      resultsOrImpact: [
        "Identified core VIP customer group contributing disproportionate revenue",
        "Determined optimal discount strategies for digital versus physical channels",
        "Formulated data-backed inventory suggestions based on seasonal demand",
      ],
    },
    {
      id: "upi-fraud-detection",
      number: "06",
      title: "AI-Driven UPI Fraud Detection System",
      category: "Machine Learning & FinTech Security",
      shortDesc:
        "Behavioral anomaly detection system powered by Isolation Forest, dynamic 0–100 risk scoring, Flask backend, and a real-time Streamlit dashboard.",
      technologies: [
        "Python",
        "Machine Learning",
        "Isolation Forest",
        "Flask API",
        "Streamlit",
      ],
      thumbnail: "/images/projects/upi/Thumbnailimg.jpeg",
      images: [
        "/images/projects/upi/Thumbnailimg.jpeg",
        "/images/projects/upi/image.png",
        "/images/projects/upi/image1.png",
      ],
      githubUrl: "https://github.com/Krishnaprasad0705",
      status: "In Active Development",
      overview:
        "An AI-powered transaction fraud detection framework designed to flag suspicious and unauthorized UPI payments in real time. Instead of brittle static if-else rules, the model identifies behavioral deviations using unsupervised machine learning.",
      problem:
        "Rule-based fraud detection suffers from high false-positive rates and fails to adapt to novel financial fraud vectors. Fast-moving UPI transactions require sub-second risk classification.",
      approach:
        "Trained an Isolation Forest anomaly detection algorithm on high-dimensional transaction features, formulated a normalized 0–100 risk score, exposed the inference engine via a lightweight Flask REST API, and built an operator dashboard in Streamlit.",
      keyFeatures: [
        "Isolation Forest unsupervised anomaly detection engine",
        "Continuous 0–100 Risk Score generation for each payment transaction",
        "Three-Tier Decision Engine: APPROVE, REVIEW, and BLOCK",
        "Flask API for transaction evaluation and simulated batch processing",
        "Streamlit monitoring console displaying live fraud alerts and anomalies",
      ],
      resultsOrImpact: [
        "Demonstrated practical financial security integration with Python & ML",
        "Prioritized ambiguous transactions for human fraud analysts",
        "Created a repeatable pattern for real-time payment risk scoring",
      ],
    },
  ],

  certifications: [
    {
      id: "snowflake-pro",
      title: "SnowPro Associate: Platform Certification",
      issuer: "Snowflake",
      issueDate: "March 16, 2026",
      expiryDate: "March 16, 2028",
      type: "Professional Accreditation",
      image: "/images/certificates/snowflake.png",
      skills: ["Snowflake Architecture", "Virtual Warehouses", "Data Sharing", "RBAC Security", "Time Travel"],
    },
    {
      id: "databricks-fundamentals",
      title: "Databricks Fundamentals Accreditation",
      issuer: "Databricks Academy",
      issueDate: "June 10, 2026",
      type: "Platform Accreditation",
      image: "/images/certificates/databricks-fundamentals.png",
      skills: ["Lakehouse Architecture", "Delta Lake", "Unity Catalog", "Apache Spark"],
    },
    {
      id: "databricks-de",
      title: "Get Started with Databricks for Data Engineering",
      issuer: "Databricks Academy",
      issueDate: "June 11, 2026",
      type: "Knowledge Check / Specialization",
      image: "/images/certificates/databricks-de.png",
      skills: ["Data Pipelines", "Delta Live Tables", "Auto Loader", "PySpark Transformations"],
    },
    {
      id: "infosys-dbms",
      title: "Database Management System Part - 1",
      issuer: "Infosys Springboard",
      issueDate: "April 25, 2025",
      type: "Course Completion",
      image: "/images/certificates/infosys.png",
      skills: ["Relational Database Design", "SQL Queries", "Normalization", "Transactions"],
    },
    {
      id: "pantech-ai-agents",
      title: "AI Agents Masterclass",
      issuer: "Pantech e Learning",
      issueDate: "Nov 25, 2025",
      type: "Masterclass Certification",
      image: "/images/certificates/pantech.png",
      skills: ["Agentic AI", "Prompt Engineering", "Autonomous Workflows", "Python"],
    },
    {
      id: "nptel-discipline-star",
      title: "Discipline Star — Computer Science & Engineering",
      issuer: "NPTEL",
      issueDate: "Jul–Dec 2025",
      type: "Academic Honor",
      image: "/images/certificates/nptel.png",
      skills: ["Core Computer Science", "Data Structures", "Algorithmic Thinking"],
    },
    {
      id: "cisco-networking",
      title: "Network Addressing and Basic Troubleshooting",
      issuer: "Cisco Networking Academy",
      issueDate: "November 14, 2024",
      type: "Course Completion",
      image: "/images/certificates/cisco.png",
      skills: ["IPv4 / IPv6", "Subnetting", "Network Protocols", "Diagnostics"],
    },
  ],

  experiences: [
    {
      id: "unabandon-ai",
      company: "UnAbandon AI",
      role: "Data Engineering Intern",
      period: "June 2026 – August 2026",
      logo: "/images/experience/unabandon.png",
      badge: "Production Data Pipelines",
      achievements: [
        "Engineered and optimized 3 robust ETL data pipelines processing over 50,000+ records daily, streamlining data flow and reducing total processing time by 30%.",
        "Automated comprehensive data quality validation checks across 10+ diverse data sources, elevating data accuracy from 85% to 98%.",
        "Collaborated within a 5-member cross-functional engineering team, designing scalable, high-performance data architectures to power core AI-driven applications.",
      ],
      skills: ["ETL Pipelines", "Data Quality", "Architecture", "Python", "SQL"],
    },
    {
      id: "brainwave-matrix",
      company: "Brainwave Matrix Solutions",
      role: "Data Analytics Intern",
      period: "August 2025 – October 2025",
      logo: "/images/experience/brainwave.png",
      badge: "BI & Analytics",
      achievements: [
        "Processed and analyzed 100,000+ data points utilizing Python and SQL, translating raw records into actionable insights incorporated into 3 strategic business reports.",
        "Designed and deployed 4 interactive Power BI dashboards, eliminating reporting redundancies and reducing manual effort by 40%.",
        "Delivered precision analytical recommendations that enhanced marketing and operational campaign efficiency by 15%.",
      ],
      skills: ["Power BI", "SQL", "Python", "Business Intelligence", "DAX"],
    },
    {
      id: "creative-media-lead",
      company: "Creative Media & Visual Direction",
      role: "Digital Media & Visual Design Lead",
      period: "2024 – Present",
      logo: "/images/profile/editorial.png",
      badge: "Digital Direction",
      achievements: [
        "Directed cinematic presentation visual design, event storyboarding, and interactive UI styling for major departmental symposia.",
        "Synthesized technical data architecture into compelling, high-impact visual decks and creative digital assets.",
        "Championed typography, motion design, and high-contrast dark aesthetics across creative project showcases.",
      ],
      skills: ["UI/UX", "Visual Storytelling", "Cinematography", "Creative Direction"],
    },
  ],

  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "National Engineering College",
    status: "Final Year Student",
    timeline: "2023 – 2027",
    highlights: [
      "Specializing in Data Engineering, Lakehouse Architecture, and Cloud Analytics",
      "Solved 1,400+ algorithmic and coding problems on Skillrack",
      "Solved 50+ LeetCode problems covering data structures and algorithms",
      "Awarded NPTEL Discipline Star in Computer Science & Engineering",
    ],
  },
};
