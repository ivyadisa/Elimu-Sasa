"use client";

import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export default function AssessmentPage() {
  const assessments = [
    {
      title: "Writing a News Report",
      area: "English",
      type: "Performance Task",
      date: "20 May 2026",
      status: "Completed",
    },
    {
      title: "Fractions and Decimals",
      area: "Mathematics",
      type: "Quiz",
      date: "18 May 2026",
      status: "Completed",
    },
    {
      title: "Our Environment",
      area: "Science",
      type: "Project",
      date: "14 May 2026",
      status: "Graded",
    },
    {
      title: "Living Things",
      area: "Science",
      type: "Observation",
      date: "10 May 2026",
      status: "Ongoing",
    },
    {
      title: "Creative Arts",
      area: "CRE",
      type: "Rubric",
      date: "06 May 2026",
      status: "Draft",
    },
  ];

  const learners = [
    {
      name: "Alex Otieno",
      average: "85%",
      communication: "88%",
      critical: "80%",
      creativity: "82%",
      citizenship: "90%",
    },
    {
      name: "Blessing Akinyi",
      average: "78%",
      communication: "70%",
      critical: "75%",
      creativity: "80%",
      citizenship: "85%",
    },
    {
      name: "Brian Mwangi",
      average: "92%",
      communication: "90%",
      critical: "95%",
      creativity: "90%",
      citizenship: "92%",
    },
    {
      name: "Celine Njeri",
      average: "65%",
      communication: "60%",
      critical: "65%",
      creativity: "70%",
      citizenship: "65%",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-secondary-light text-secondary";
      case "Graded":
        return "bg-primary-light text-primary";
      case "Ongoing":
        return "bg-yellow-100 text-warning";
      case "Draft":
        return "bg-slate-100 text-text-muted";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-main">
            Assessment Dashboard
          </h1>

          <p className="text-text-muted mt-1">
            Plan, record and track learner assessments aligned with CBC.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-hover">
          <Plus size={18} />
          New Assessment
        </button>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <TopCard
          title="Assessments Planned"
          value="12"
          icon={<ClipboardCheck />}
          bg="bg-primary-light"
          text="text-primary"
        />

        <TopCard
          title="Completed"
          value="7"
          icon={<CheckCircle2 />}
          bg="bg-secondary-light"
          text="text-secondary"
        />

        <TopCard
          title="Learners Assessed"
          value="36"
          icon={<Users />}
          bg="bg-blue-50"
          text="text-primary"
        />

        <TopCard
          title="Class Average"
          value="78%"
          icon={<Star />}
          bg="bg-orange-50"
          text="text-warning"
        />
      </div>

      {/* MAIN GRID */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* LEFT SECTION */}
        <div className="space-y-6 xl:col-span-2">
          {/* ASSESSMENTS TABLE */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-text-main">
                  My Assessments
                </h2>

                <p className="mt-1 text-sm text-text-muted">
                  Manage and monitor all assessments
                </p>
              </div>

              <button className="text-sm font-semibold text-primary">
                View All
              </button>
            </div>

            {/* FILTERS */}
            <div className="mb-5 flex flex-col gap-3 lg:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3">
                <Filter size={16} className="text-text-muted" />

                <select className="bg-transparent text-sm outline-none">
                  <option>Term 2</option>
                  <option>Term 1</option>
                </select>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3">
                <BookOpen size={16} className="text-text-muted" />

                <select className="bg-transparent text-sm outline-none">
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                </select>
              </div>

              <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-white px-4 py-3">
                <Search size={16} className="text-text-muted" />

                <input
                  type="text"
                  placeholder="Search assessments..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Assessment
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Learning Area
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Type
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Date
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Status
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {assessments.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-border transition hover:bg-slate-50"
                    >
                      <td className="py-5 font-medium text-text-main">
                        {item.title}
                      </td>

                      <td className="py-5 text-text-muted">{item.area}</td>

                      <td className="py-5 text-text-muted">{item.type}</td>

                      <td className="py-5 text-text-muted">{item.date}</td>

                      <td className="py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="py-5">
                        <div className="flex items-center gap-2">
                          <button className="rounded-lg border border-border p-2 hover:bg-slate-100">
                            <Eye size={16} />
                          </button>

                          <button className="rounded-lg border border-border p-2 hover:bg-slate-100">
                            <FileText size={16} />
                          </button>

                          <button className="rounded-lg border border-border p-2 hover:bg-slate-100">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* LEARNERS PERFORMANCE */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-text-main">
                Learner Performance Snapshot
              </h2>

              <p className="mt-1 text-sm text-text-muted">
                Competency-based learner progress overview
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Learner
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Average
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Communication
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Critical Thinking
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Creativity
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Citizenship
                    </th>

                    <th className="pb-4 text-sm font-semibold text-text-muted">
                      Trend
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {learners.map((learner, index) => (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-slate-50"
                    >
                      <td className="py-5 font-medium text-text-main">
                        {learner.name}
                      </td>

                      <td className="py-5 font-bold text-secondary">
                        {learner.average}
                      </td>

                      <td className="py-5 text-text-muted">
                        {learner.communication}
                      </td>

                      <td className="py-5 text-text-muted">
                        {learner.critical}
                      </td>

                      <td className="py-5 text-text-muted">
                        {learner.creativity}
                      </td>

                      <td className="py-5 text-text-muted">
                        {learner.citizenship}
                      </td>

                      <td className="py-5">
                        <div className="flex items-center gap-1 text-secondary">
                          <TrendingUp size={18} />
                          Improving
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          {/* QUICK ACTIONS */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-text-main">
              Quick Actions
            </h2>

            <div className="space-y-4">
              <ActionCard
                title="Create Rubric"
                desc="Build competency rubrics"
                bg="bg-primary-light"
                icon={<ClipboardCheck className="text-primary" />}
              />

              <ActionCard
                title="Bulk Score Entry"
                desc="Save time entering scores"
                bg="bg-secondary-light"
                icon={<FileText className="text-secondary" />}
              />

              <ActionCard
                title="Generate Reports"
                desc="Download learner reports"
                bg="bg-orange-50"
                icon={<Calendar className="text-warning" />}
              />
            </div>
          </div>

          {/* CBC TIPS */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-text-main">
              CBC Assessment Tips
            </h2>

            <div className="space-y-4 text-sm text-text-muted">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></div>

                <p>Use rubrics for consistent learner evaluation.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary"></div>

                <p>Track competencies instead of only exam scores.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-warning"></div>

                <p>Record observations immediately after activities.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-danger"></div>

                <p>Generate reports automatically for parents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* TOP CARD */
function TopCard({ title, value, icon, bg, text }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-muted">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-text-main">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${text}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

/* ACTION CARD */
function ActionCard({ title, desc, icon, bg }) {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-2xl border border-border p-4 transition hover:bg-slate-50">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-text-main">{title}</h3>

        <p className="text-sm text-text-muted">{desc}</p>
      </div>
    </div>
  );
}