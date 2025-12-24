Monthly Report Dashboard
A high-fidelity, responsive medical report dashboard built with React, Vite, and SCSS. This project was developed as a technical assessment to demonstrate clean component architecture, advanced CSS layouts, and data visualization.

🛠️ Tech Stack
Framework: React.js (Vite)
Styling: SCSS (Sass) using BEM-like methodology and design tokens.
Icons: react-icons (Feather Icons set).
Charts: chart.js & react-chartjs-2.
Routing: react-router-dom (HashRouter for GitHub Pages compatibility).

✨ Features
Pixel Perfect Implementation: Closely follows the provided Figma design for both Desktop and Mobile.
Responsive Design: * Adaptive grid system for dashboard widgets.
Collapsible sidebar that transforms into a mobile drawer menu.

Mobile-optimized tables and asset cards.
Interactive Charts: Dynamic donut charts for asset status and stacked bar charts for departmental reporting.
Component-Based Architecture: Highly reusable UI components including StatCard, DepartmentSection, and SummarySection.

⚙️ Getting Started
Prerequisites
Node.js (v16 or higher)

npm or yarn

Installation
Clone the repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Build for production:

Bash

npm run build
📝 Decisions & Assumptions
Font: Used 'Poppins' via Google Fonts as a professional alternative to match the design's clean aesthetic.

State Management: Used React Hooks (useState) for UI state (sidebar toggles) as complex global state management wasn't required for this static dashboard.

Styling: Chose SCSS over Tailwind to demonstrate strong proficiency in CSS fundamentals, Flexbox, and Grid systems.

👤 Author
Akhil rao velpula

LinkedIn: https://www.linkedin.com/in/akhil-rao-28071999v/

Portfolio: https://akhil-rao-portfolio.vercel.app/
