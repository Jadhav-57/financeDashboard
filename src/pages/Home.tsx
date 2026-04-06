import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Track Expenses",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    id: 2,
    title: "Analyze Spending",
    img: "https://cdn.prod.website-files.com/64a5556eec1e85aaf6fc4db7/6509e3e177f05db3fea7153e_what-is-spend-analysis.png",
  },
  {
    id: 3,
    title: "Smart Insights",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 4,
    title: "Grow Savings",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
  },
  {
    id: 5,
    title: "Budget Planning",
    img: "https://s7ap1.scene7.com/is/image/aia/AIA%20budget%20template%20food?qlt=85&wid=1600&ts=1677554835519&dpr=off",
  },
  {
    id: 6,
    title: "Investment Tracking",
    img: "https://www.gwcindia.in/gigapro/wp-content/uploads/sites/3/2024/12/Take-Control-of-Your-Portfolio-Easy-Tracking-Analysis-Tools-at-Your-Fingertips-850x752.jpeg",
  },
];

// 🔥 Reordering colors (right side animation)
const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

export default function Home() {
  const containerRef = useRef(null);
  const [order, setOrder] = useState(initialOrder);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // smoother based on items
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // 🔄 shuffle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="h-screen flex items-center px-10 relative overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-red-50"></div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 w-full relative z-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-red-500">
              Balance your Expence
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Smart analytics to track, manage and grow your finances.
            </p>
          </div>

          {/* RIGHT → Reordering animation */}
          <div className="flex justify-center">
            <ul className="flex flex-wrap gap-4 w-[220px]">
              {order.map((color) => (
                <motion.li
                  key={color}
                  layout
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="w-20 h-20 rounded-xl"
                  style={{ backgroundColor: color }}
                />
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* HORIZONTAL SCROLL */}
      <section
        ref={containerRef}
        className="h-[250vh] relative"  // 👈 reduced height (no extra space)
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div
            style={{ x }}
            className="flex gap-10 px-10"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                <div className="absolute bottom-6 left-6 z-10">
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}