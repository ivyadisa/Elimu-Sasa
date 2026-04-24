"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import Card from "@/components/Card";

export default function Dashboard() {
  const router = useRouter();
  const [heroImage, setHeroImage] = useState(null);

  const competencyData = [
    { month: "Jan", Exceeding: 15, Meeting: 40, Approaching: 30, Below: 15 },
    { month: "Feb", Exceeding: 20, Meeting: 45, Approaching: 28, Below: 12 },
    { month: "Mar", Exceeding: 22, Meeting: 38, Approaching: 30, Below: 10 },
    { month: "Apr", Exceeding: 25, Meeting: 42, Approaching: 27, Below: 8 },
  ];

  const quickActions = [
    { title: "Lessons", icon: "📘", route: "/lessons", type: "primary" },
    { title: "Assessments", icon: "📝", route: "/assessments", type: "success" },
    { title: "Reports", icon: "📊", route: "/reports", type: "warning" },
    { title: "Classes", icon: "🏫", route: "/classes", type: "info" },
  ];

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setHeroImage(url);
    }
  }

  return (
    <div className="space-y-6">

      {/* =========================
          🧠 SAAS HERO HEADER
      ========================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-light to-background p-6 rounded-2xl">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* LEFT CONTENT */}
          <div className="space-y-3">

            {/* Greeting */}
            <div className="flex items-center gap-2 text-text-muted">
              <span>👋</span>
              <p className="text-sm">Good morning, Teacher</p>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-text-main">
              Elimu Sasa Dashboard
            </h1>

            {/* Subtitle */}
            <p className="text-text-muted max-w-md">
              Monitor learner competency, track performance trends, and improve
              classroom outcomes in real time.
            </p>

            {/* Mini stats */}
            <div className="flex gap-4 pt-2">

              <div className="bg-card px-3 py-2 rounded-xl shadow-soft">
                <p className="text-xs text-text-muted">Learners</p>
                <p className="font-bold text-text-main">28</p>
              </div>

              <div className="bg-card px-3 py-2 rounded-xl shadow-soft">
                <p className="text-xs text-text-muted">Lessons</p>
                <p className="font-bold text-text-main">12</p>
              </div>

              <div className="bg-card px-3 py-2 rounded-xl shadow-soft">
                <p className="text-xs text-text-muted">Reports</p>
                <p className="font-bold text-text-main">5</p>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL / UPLOAD */}
          <div className="w-full md:w-64">

            <input
              type="file"
              accept="image/*"
              id="heroUpload"
              className="hidden"
              onChange={handleImageUpload}
            />

            <label
              htmlFor="heroUpload"
              className="block w-full h-40 rounded-2xl overflow-hidden border border-border bg-card cursor-pointer hover:shadow-lg transition"
            >
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-text-muted text-sm">
                  <span className="text-2xl">📷</span>
                  Upload Dashboard Image
                </div>
              )}
            </label>

          </div>

        </div>
      </div>

      {/* =========================
          ⚡ QUICK ACTIONS
      ========================= */}
      <div>
        <h3 className="text-lg font-semibold text-text-main mb-3">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((item, index) => (
            <QuickCard
              key={index}
              title={item.title}
              icon={item.icon}
              type={item.type}
              onClick={() => router.push(item.route)}
            />
          ))}
        </div>
      </div>

      {/* =========================
          📊 STATS
      ========================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat title="Lesson Plans" value="12" color="text-primary" />
        <Stat title="Assessments" value="8" color="text-secondary" />
        <Stat title="Active Learners" value="28" color="text-warning" />
        <Stat title="Reports Generated" value="5" color="text-danger" />
      </div>

      {/* =========================
          📈 MAIN GRID
      ========================= */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CHART */}
        <Card title="Competency Progress Overview" className="md:col-span-2">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={competencyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="Exceeding" fill="#32A852" />
              <Bar dataKey="Meeting" fill="#2568D6" />
              <Bar dataKey="Approaching" fill="#F59E0B" />
              <Bar dataKey="Below" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* ACTIVITY */}
        <Card
          title="Recent Activity"
          action={<span className="text-primary text-sm">View All →</span>}
        >
          <ul className="space-y-3 text-sm text-text-muted">
            <li>📝 Assessment created</li>
            <li>📘 Lesson plan added</li>
            <li>📊 Report generated</li>
            <li>👨‍🎓 Student progress updated</li>
          </ul>
        </Card>

      </div>
    </div>
  );
}

/* =========================
   QUICK CARD
========================= */

function QuickCard({ title, icon, type, onClick }) {
  const iconStyles = {
    primary: "text-primary",
    success: "text-secondary",
    warning: "text-warning",
    info: "text-primary",
  };

  const bgStyles = {
    primary: "bg-primary-light",
    success: "bg-secondary-light",
    warning: "bg-warning-light",
    info: "bg-primary-light",
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className={`p-3 rounded-xl w-fit ${bgStyles[type]}`}>
        <div className={`text-xl ${iconStyles[type]}`}>{icon}</div>
      </div>

      <h4 className="mt-3 font-medium text-text-main">{title}</h4>
    </Card>
  );
}

/* =========================
   STAT CARD
========================= */

function Stat({ title, value, color }) {
  return (
    <Card>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
      <p className="text-text-muted text-sm">{title}</p>
    </Card>
  );
}