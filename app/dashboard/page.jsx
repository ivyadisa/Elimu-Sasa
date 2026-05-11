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

import {
  Users,
  GraduationCap,
  FileText,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/Card";

export default function Dashboard() {
  const router = useRouter();

  const [heroImage, setHeroImage] = useState(null);

  /* =========================
      SAMPLE DATA
  ========================= */

  const competencyData = [
    {
      month: "Jan",
      Exceeding: 15,
      Meeting: 40,
      Approaching: 30,
      Below: 15,
    },
    {
      month: "Feb",
      Exceeding: 20,
      Meeting: 45,
      Approaching: 28,
      Below: 12,
    },
    {
      month: "Mar",
      Exceeding: 22,
      Meeting: 38,
      Approaching: 30,
      Below: 10,
    },
    {
      month: "Apr",
      Exceeding: 25,
      Meeting: 42,
      Approaching: 27,
      Below: 8,
    },
  ];

  /* =========================
      QUICK ACTIONS
  ========================= */

  const quickActions = [
    {
      title: "Lessons",
      icon: "📘",
      route: "/dashboard/lesson-plan",
      type: "primary",
    },
    {
      title: "Assessments",
      icon: "📝",
      route: "/dashboard/assessments",
      type: "success",
    },
    {
      title: "Reports",
      icon: "📊",
      route: "/dashboard/reports",
      type: "warning",
    },
    {
      title: "Classes",
      icon: "🏫",
      route: "/dashboard/classes",
      type: "info",
    },
  ];

  /* =========================
      HANDLE IMAGE UPLOAD
  ========================= */

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setHeroImage(url);
    }
  }

  return (
    <div className="space-y-6">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <div className="relative overflow-hidden bg-gradient-to-r from-primary-light to-background p-6 rounded-3xl border border-border">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* LEFT CONTENT */}
          <div className="space-y-5">

            {/* Greeting */}
            <div className="flex items-center gap-2 text-text-muted">
              <span>👋</span>

              <p className="text-sm">
                Welcome back, Teacher
              </p>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-text-main leading-tight">
                Elimu Sasa Dashboard
              </h1>

              <p className="text-text-muted mt-3 max-w-xl">
                Monitor learner competency, manage CBC
                classroom activities, and track school
                performance in real time.
              </p>
            </div>

            {/* MINI OVERVIEW STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">

              <MiniStat
                title="Learners"
                value="1,284"
              />

              <MiniStat
                title="Classes"
                value="24"
              />

              <MiniStat
                title="Streams"
                value="42"
              />

              <MiniStat
                title="Performance"
                value="89%"
              />

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-72">

            <input
              type="file"
              accept="image/*"
              id="heroUpload"
              className="hidden"
              onChange={handleImageUpload}
            />

            <label
              htmlFor="heroUpload"
              className="block h-52 rounded-3xl overflow-hidden border border-border bg-card cursor-pointer hover:shadow-lg transition"
            >
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-text-muted">
                  <span className="text-4xl mb-2">
                    📷
                  </span>

                  <p className="text-sm">
                    Upload Dashboard Image
                  </p>
                </div>
              )}
            </label>

          </div>

        </div>
      </div>

      {/* =====================================
          QUICK ACTIONS
      ===================================== */}

      <div>
        <h3 className="text-xl font-semibold text-text-main mb-4">
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

      {/* =====================================
          MAIN STATS
      ===================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

        <StatCard
          title="Total Learners"
          value="1,284"
          icon={<Users size={22} />}
          color="primary"
        />

        <StatCard
          title="Total Classes"
          value="24"
          icon={<GraduationCap size={22} />}
          color="secondary"
        />

        <StatCard
          title="Lesson Plans"
          value="12"
          icon={<FileText size={22} />}
          color="warning"
        />

        <StatCard
          title="Assessments"
          value="8"
          icon={<ClipboardCheck size={22} />}
          color="danger"
        />

        <StatCard
          title="Performance"
          value="89%"
          icon={<TrendingUp size={22} />}
          color="success"
        />

      </div>

      {/* =====================================
          MAIN CONTENT GRID
      ===================================== */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* CHART */}
        <Card
          title="Competency Progress Overview"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={competencyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="Exceeding"
                fill="#22C55E"
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="Meeting"
                fill="#2563EB"
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="Approaching"
                fill="#F59E0B"
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="Below"
                fill="#EF4444"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* ACTIVITY */}
        <Card
          title="Recent Activity"
          action={
            <button className="text-primary text-sm hover:underline">
              View All →
            </button>
          }
        >
          <div className="space-y-4">

            <ActivityItem
              icon="📝"
              text="Assessment created successfully"
            />

            <ActivityItem
              icon="📘"
              text="Lesson plan added"
            />

            <ActivityItem
              icon="📊"
              text="Report generated"
            />

            <ActivityItem
              icon="👨‍🎓"
              text="Learner progress updated"
            />

            <ActivityItem
              icon="🏫"
              text="New stream added"
            />

          </div>
        </Card>

      </div>
    </div>
  );
}

/* =====================================
    MINI STAT
===================================== */

function MiniStat({ title, value }) {
  return (
    <div className="bg-card border border-border px-4 py-3 rounded-2xl shadow-soft">
      <p className="text-xs text-text-muted">
        {title}
      </p>

      <h3 className="text-xl font-bold text-text-main mt-1">
        {value}
      </h3>
    </div>
  );
}

/* =====================================
    QUICK CARD
===================================== */

function QuickCard({
  title,
  icon,
  type,
  onClick,
}) {
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
      className="cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onClick={onClick}
    >
      <div className={`p-3 rounded-2xl w-fit ${bgStyles[type]}`}>
        <div className={`text-2xl ${iconStyles[type]}`}>
          {icon}
        </div>
      </div>

      <h4 className="mt-4 font-semibold text-text-main">
        {title}
      </h4>
    </Card>
  );
}

/* =====================================
    STAT CARD
===================================== */

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  const colors = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-purple-100 text-purple-600",
    warning: "bg-yellow-100 text-yellow-600",
    danger: "bg-red-100 text-red-600",
    success: "bg-green-100 text-green-600",
  };

  return (
    <Card className="hover:shadow-lg transition-all">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-text-muted">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-text-main mt-2">
            {value}
          </h2>
        </div>

        <div className={`p-3 rounded-2xl ${colors[color]}`}>
          {icon}
        </div>

      </div>
    </Card>
  );
}

/* =====================================
    ACTIVITY ITEM
===================================== */

function ActivityItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 border-b border-border pb-3 last:border-none">
      <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm text-text-muted">
        {text}
      </p>
    </div>
  );
}