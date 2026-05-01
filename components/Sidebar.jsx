"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Lesson Plans", path: "/dashboard/lesson-plan" },
    { name: "Assessments", path: "/dashboard/assessments" },
    { name: "Classes / Streams", path: "/dashboard/classes" },
    { name: "Active Learners", path: "/dashboard/learners" },
    { name: "Reports", path: "/dashboard/reports" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="w-[260px] bg-card border-r border-border p-5 flex flex-col gap-2">
      
      {/* Logo */}
      <h2 className="text-primary text-lg font-bold mb-5">
        🎓 Elimu Sasa
      </h2>

      {/* Menu */}
      {menu.map((item, i) => {
        const isActive = pathname === item.path;

        return (
          <Link key={i} href={item.path} className="no-underline">
            <div
              className={`p-2.5 rounded-xl cursor-pointer transition-all
                ${isActive 
                  ? "bg-primary-light text-primary font-bold" 
                  : "text-text-main hover:bg-primary-light hover:text-primary"}
              `}
            >
              {item.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}