"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Lesson Plans",
      path: "/dashboard/lesson-plan",
    },
    {
      name: "Assessments",
      path: "/dashboard/assessments",
    },
    {
      name: "Classes / Streams",
      path: "/dashboard/classes",
    },
    {
      name: "Active Learners",
      path: "/dashboard/learners",
    },
    {
      name: "Reports",
      path: "/dashboard/reports",
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="w-[260px] min-h-screen bg-white border-r border-gray-200 p-5 flex flex-col gap-2 shadow-sm">
      
      {/* Logo */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600">
          🎓 Elimu Sasa
        </h2>

        <p className="text-sm text-gray-500">
          Teacher Management System
        </p>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-2">
        {menu.map((item, i) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={i}
              href={item.path}
              className="no-underline"
            >
              <div
                className={`px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }
                `}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}