import './App.css'
import Nav from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useAuthStore } from "./store/authStore";
import { Navigate } from "react-router-dom";

// Pages (create these files)
import Home from "./pages/Home"
import About from "./pages/About"
import Tracker from "./pages/Tracker"
import AdminTransactions from './pages/Admin';

export function AdminRoute({ children }) {
  const { role } = useAuthStore();

  if (role !== "admin") {
    return <Navigate to="/home" />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminTransactions />
            </AdminRoute>
          }
        />
      </Routes>

    </Router>
  )
}

export default App