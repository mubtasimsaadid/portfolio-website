import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/excel.png";
import Tools2 from "/assets/tools/bi.png";
import Tools3 from "/assets/tools/tableau.png";
import Tools4 from "/assets/tools/meta.png";
import Tools5 from "/assets/tools/looker.png";
import Tools6 from "/assets/tools/sq.png";
import Tools7 from "/assets/tools/sql.png";
import Tools8 from "/assets/tools/psql.png";
import Tools9 from "/assets/tools/mdb.png";
import Tools10 from "/assets/tools/jupyter.png";
import Tools11 from "/assets/tools/python.png";
import Tools12 from "/assets/tools/php.png";
import Tools13 from "/assets/tools/html.png";
import Tools14 from "/assets/tools/css.png";
import Tools15 from "/assets/tools/js.png";
import Tools16 from "/assets/tools/github.png";



export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    name: "Excel",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    name: "Power BI",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    name: "Tableau",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    name: "Metabase",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    name: "Google Looker Studio",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    name: "SQL",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    name: "MySQL",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    name: "PostgreSQL",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    name: "mongoDB",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    name: "Jupyter Notebook",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    name: "Python",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 12,
    gambar: Tools12,
    name: "PHP",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 13,
    gambar: Tools13,
    name: "HTML",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 14,
    gambar: Tools14,
    name: "CSS",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 15,
    gambar: Tools15,
    name: "JavaScript",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 16,
    gambar: Tools16,
    name: "Github",
    ket: "Design App",
    dad: "1100",
  },



];

import Project1 from "/assets/projects/project1.webp";
import Project2 from "/assets/projects/project2.webp";
import Project3 from "/assets/projects/project3.webp";
import Project4 from "/assets/projects/project4.webp";
import Project5 from "/assets/projects/project5.webp";
import Project6 from "/assets/projects/project6.webp";

export const listProjects = [
  {
    id: 1,
    gambar: Project1,
    name: "Job Market & Skill Trends Analysis",
    desciption: "An Interactive dashboard based on advanced DAX to analyze job data, revealing top roles, trending skills, and hiring demand patterns.",
    tools: ["POWER BI", "DAX", "RFM SEGMENTATION", "DATA CLEANING", "DATA MODELING"],
    dad: "400",
    githublink: "https://tinyurl.com/4yu9jyku",
    liveLink: "https://shorturl.at/KSfhN"
  },
  {
    id: 2,
    gambar: Project2,
    name: "Customer Cohort Analysis",
    desciption: "Cohort analysis on sales data to track customer retention, churn, and re-engagement, with visualized monthly transition patterns.",
    tools: ["POWER BI", "DAX", "COHORT ANALYSIS", "CUSTOMER SEGMENTATION"],
    dad: "400",
    githublink: "https://tinyurl.com/yc4zxfdr",
    liveLink: "https://shorturl.at/hIvHA"
  },
  {
    id: 3,
    gambar: Project3,
    name: "Sales & Customer Insights",
    desciption: "An Interactive dashboard with RFM segmentation and time-intelligence DAX to uncover sales trends, customer behavior, and product performance.",
    tools: ["POWER BI", "DAX", "RFM SEGMENTATION", "DATA CLEANING", "DATA MODELING"],
    dad: "400",
    githublink: "https://tinyurl.com/msz62s5v",
    liveLink: "https://shorturl.at/wTYYX"
  },
  {
    id: 4,
    gambar: Project4,
    name: "Analyzing Customer Behaviour via RFM Analysis",
    desciption: "RFM segmentation on sales data using SQL to identify customer value groups and support targeted marketing strategies.",
    tools: ["SQL", "DATABASE MANAGEMENT", "RFM SEGMENTATION"],
    dad: "400",
    githublink: "https://github.com/mubtasimsaadid/SQL-Projects/tree/a27dddbe09eda4840a8903552537bc8f0ee4eddb/RFM%20Segmentation",
    liveLink: "https://github.com/mubtasimsaadid/SQL-Projects/tree/a27dddbe09eda4840a8903552537bc8f0ee4eddb/RFM%20Segmentation"
  },
  {
    id: 5,
    gambar: Project5,
    name: "Hotel Sales & Growth Analysis",
    desciption: "An Excel dashboard highlighting ADR, lead time, and cancellations, enabling insights into booking patterns and revenue optimization.",
    tools: ["EXCEL", "PIVOT TABLE", "POWER QUERY"],
    dad: "400",
    githublink: "https://tinyurl.com/yf7kx6d2",
    liveLink: "https://ibb.co.com/Dg61FYS8"
  },
  {
    id: 6,
    gambar: Project6,
    name: "Dengue Analysis & Risk Mapping",
    desciption: "An Excel dashboard to visualize severity, demographic trends, and area-wise risk levels, supporting targeted public health insights.",
    tools: ["EXCEL", "PIVOT TABLE", "POWER QUERY", "VLOOKUP"],
    dad: "400",
    githublink: "https://tinyurl.com/msz62s5v",
    liveLink: "https://ibb.co.com/ksYyvvTf"
  },
];
