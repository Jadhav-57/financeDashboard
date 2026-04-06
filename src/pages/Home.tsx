import {  useScroll, useTransform } from "framer-motion";
import { motion, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import hero from "../assets/hero.jpg";

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
  //@ts-ignore
  const [order, setOrder] = useState(initialOrder);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
    },
  },
};


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
          <div className="flex flex-col items-center justify-center text-center space-y-6">
  
  {/* LOGO */}
  <img
    src={hero}
    alt="Financial Dashboard"
    className="w-32 md:w-40 object-contain rounded-full shadow-lg"
  />

  {/* HEADING */}
  <h1 className="text-5xl md:text-7xl font-bold text-red-500">
    Balance your Expense
  </h1>

  {/* SUBTEXT */}
  <p className="text-gray-600 text-lg max-w-md">
    Smart analytics to track, manage and grow your finances.
  </p>

</div>

          {/* RIGHT → Reordering animation */}
         <div className="flex justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl text-center"
      >
        {[
          {
            title: "Track Expenses",
            desc: "Monitor your daily spending with real-time insights.",
          },
          {
            title: "Smart Analytics",
            desc: "Visualize income vs expenses and make better decisions.",
          },
          {
            title: "Category Insights",
            desc: "Understand where your money goes the most.",
          },
          {
            title: "Admin Control",
            desc: "Add, edit, and manage transactions easily.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="p-5 rounded-2xl shadow-md hover:shadow-xl transition bg-white cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-red-500">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
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