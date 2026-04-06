import { useState } from "react";
import data from "../data/transactions.json";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Tracker() {
  const [transactions] = useState(data);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // 🔍 Filter
  const filteredData =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  // 🔍 Search
  const searchedData = filteredData.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // 💰 Summary
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;

  // 📈 Line Chart
  const lineData = transactions.map((t) => ({
    date: t.date,
    amount: t.type === "expense" ? -t.amount : t.amount,
  }));

  // 🥧 Pie Chart
  const categoryMap = {};
  transactions.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // 🧠 Insights
  const highestCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const insight = highestCategory
    ? `You spend the most on ${highestCategory[0]}`
    : "No insights available";

  return (
    <div className="min-h-screen px-6 md:px-12 py-10 bg-gray-50">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-500 ">
          Finance Dashboard
        </h1>
        <p className="text-gray-500">
          Track your income, expenses and insights
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Total Balance</h3>
          <p className="text-2xl font-bold text-blue-600">₹ {balance}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Income</h3>
          <p className="text-2xl font-bold text-green-600">₹ {totalIncome}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Expenses</h3>
          <p className="text-2xl font-bold text-red-500">₹ {totalExpense}</p>
        </div>
      </div>

      

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        {/* LINE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Balance Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* PIE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3">
            Spending Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      ["#ef4444", "#f97316", "#facc15", "#4ade80", "#60a5fa"][
                        index % 5
                      ]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="bg-white p-5 rounded-xl shadow mb-10">
        <h2 className="font-semibold mb-2">Insights</h2>
        <p className="text-gray-600">{insight}</p>
        <p className="text-gray-500 text-sm mt-2">
          Try reducing expenses in high categories to improve savings.
        </p>
      </div>
      {/* FILTER + SEARCH */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex gap-3">
          {["all", "income", "expense"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-lg ${
                filter === item
                  ? "bg-red-500 text-white"
                  : "bg-white border"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full md:w-64"
        />
      </div>
      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="grid grid-cols-4 p-4 font-semibold border-b text-gray-600">
          <span>Date</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Type</span>
        </div>

        {searchedData.map((t) => (
          <motion.div
            key={t.id}
            className="grid grid-cols-4 p-4 border-b hover:bg-red-50"
            whileHover={{ scale: 1.01 }}
          >
            <span>{t.date}</span>
            <span>{t.category}</span>

            <span
              className={
                t.type === "income"
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              ₹{t.amount}
            </span>

            <span
              className={
                t.type === "income"
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              {t.type}
            </span>
          </motion.div>
        ))}
        

      </div>

    </div>
  );
}