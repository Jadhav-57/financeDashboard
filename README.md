# BalanceME — Finance Dashboard

> A role-based personal finance dashboard built with React and TypeScript. Track income, manage expenses, and gain category-wise insights — all in a clean, animated interface.

---

## Live Demo

**[View Deployed App → finance-dashboard-mauve-eight.vercel.app](https://finance-dashboard-mauve-eight.vercel.app/)**

---

## Screenshots

**Home Page — Hero + Feature Cards**

![Home](./screenshots/home.png)

**Tracker — Finance Dashboard with Charts**

![Tracker](./screenshots/tracker.png)

**Admin Panel — Transaction Management**

![Admin](./screenshots/admin.png)

---

## Features

- **Role-based access** — separate UI and permissions for Admin and User roles
- **Admin panel** — full CRUD operations to add, edit, and delete transactions
- **Finance dashboard** — live summary of total balance, income, and expenses
- **Balance trend chart** — line chart showing spending patterns over time
- **Spending breakdown** — pie chart with category-wise expense visualisation
- **Smart insights** — auto-generated tips based on highest spending category
- **Transaction table** — filterable by type (income / expense) and searchable by category
- **Animated homepage** — Framer Motion hero, feature cards, and horizontal scroll section
- **Responsive design** — works across desktop and mobile viewports

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Animations | Framer Motion |
| Build Tool | Vite |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Jadhav-57/financeDashboard.git
cd financeDashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Folder Structure

```
financeDashboard/
├── public/
├── src/
│   ├── components/         # Reusable UI components (Navbar, Charts, Cards)
│   ├── pages/
│   │   ├── Home.tsx        # Hero section, feature cards, horizontal scroll
│   │   ├── Tracker.tsx     # Balance summary, charts, transaction table
│   │   └── Admin.tsx       # CRUD transaction management panel
│   ├── store/              # Zustand auth & transaction state
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # Helper functions
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## Role-Based Access

| Feature | User | Admin |
|---|---|---|
| View dashboard & charts | Yes | Yes |
| View transaction list | Yes | Yes |
| Add transaction | No | Yes |
| Edit transaction | No | Yes |
| Delete transaction | No | Yes |
| Access Admin Panel route | No | Yes |

Login state and role are managed globally via Zustand and determine which navigation items and routes are rendered.

---

## Future Improvements

- Backend integration with a REST API or Supabase for persistent data
- JWT-based authentication replacing frontend-only role state
- Export transactions to CSV or PDF
- Budget goal setting with progress indicators
- Monthly comparison reports
- Dark mode toggle
- Push notifications for spending thresholds

---

## Author

**Aditya Jadhav**

- GitHub: [@Jadhav-57](https://github.com/Jadhav-57)

---

