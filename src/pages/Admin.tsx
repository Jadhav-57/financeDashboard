import { useState } from "react";
import data from "../data/transactions.json";

export default function AdminTransactions() {
  const [transactions, setTransactions] = useState(data);
  const [form, setForm] = useState({
    id: null,
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setTransactions((prev) =>
        prev.map((t) => (t.id === form.id ? form : t))
      );
      setIsEditing(false);
    } else {
      setTransactions([
        ...transactions,
        { ...form, id: Date.now(), amount: Number(form.amount) },
      ]);
    }

    setForm({ id: null, date: "", amount: "", category: "", type: "expense" });
  };

  // Edit
  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
  };

  // Delete
  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-red-500">Admin Panel</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-5 gap-4 bg-white p-4 shadow rounded-xl"
      >
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          type="submit"
          className={`rounded text-white ${
            isEditing ? "bg-yellow-500" : "bg-red-500"
          }`}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{t.date}</td>
                <td className="p-3">₹{t.amount}</td>
                <td className="p-3">{t.category}</td>
                <td
                  className={`p-3 font-medium ${
                    t.type === "income" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {t.type}
                </td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(t)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(t.id)}
                    className="px-3 py-1 bg-gray-700 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}