💰 Finance Dashboard (Personal Expense Tracker)

A modern, responsive Finance Management Dashboard built to track, analyze, and manage personal income and expenses with real-time insights.

Designed with a focus on performance, clean architecture, and type safety using TypeScript

🚀 Live Demo

🔗 https://finance-dashboard.vercel.app
 (add your actual link)

📌 Key Highlights
Built a fully functional transaction management system (Create, Read, Update, Delete)
Implemented type-safe data handling using TypeScript (strict union types)
Designed category-based analytics to identify highest expense areas
Optimized UI with smooth animations using Framer Motion
Structured codebase for scalability and maintainability
Deployed on Vercel with CI/CD pipeline
🧠 What This Project Demonstrates

This project is not just UI — it shows:

Strong understanding of state management using React Hooks
Ability to debug and fix production-level TypeScript errors
Handling of data transformations and aggregation logic
Writing clean, modular, and reusable components
Experience deploying production apps with build optimizations
🛠️ Tech Stack
Category	Technology
Frontend	React + TypeScript
Build Tool	Vite
Styling	Tailwind CSS
Animations	Framer Motion
Deployment	Vercel
📊 Core Features
🔹 Transaction Management
Add new income/expense entries
Edit existing transactions
Delete transactions dynamically
🔹 Data Insights
Total income vs expenses calculation
Category-wise expense grouping
Highest spending category detection
🔹 UI/UX
Responsive design for all screen sizes
Smooth card animations
Clean and minimal dashboard layout
📂 Project Architecture
src/
├── components/      # Reusable UI components
├── pages/           # Application screens (Admin, Tracker)
├── data/            # Static JSON data source
├── utils/           # Helper functions (aggregation logic)
└── App.tsx          # Root component
⚙️ Local Setup
git clone https://github.com/Jadhav-57/financeDashboard.git
cd financeDashboard
npm install
npm run dev
⚠️ Engineering Challenges Solved
1. Type Safety Issues
Enforced strict typing for transactions:
type Transaction = {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
};
2. Data Aggregation Bug

Fixed incorrect sorting due to type mismatch:

Object.entries(categoryMap).sort(
  (a, b) => Number(b[1]) - Number(a[1])
);
3. State Update Consistency

Handled mixed types during updates by enforcing numeric casting:

amount: Number(inputAmount)
🔮 Future Enhancements
Backend integration (Node.js + MongoDB)
Authentication & user-specific dashboards
Advanced charts (Recharts / D3.js)
AI-powered spending insights
Export reports (PDF/CSV)
👨‍💻 Author

Aditya Jadhav
B.Tech IT | Full-Stack Developer

📢 Final Note (Important)

This project intentionally avoids backend complexity to focus on:

Frontend architecture
State management
Type safety
UI/UX polish
Brutal Truth (so you improve):

Right now this becomes resume-worthy only if you can explain:

Why you used TypeScript unions
How you handled state updates safely
How your aggregation logic works
What would break at scale and how you'd fix it

If you can’t explain those → this project is still beginner-level.