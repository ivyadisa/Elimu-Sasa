"use client";

export default function AnalyticsPage() {
  return (
    <div className="container-custom py-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-main">
          Analytics Dashboard
        </h1>
        <p className="text-text-light text-sm">
          Overview of lessons, assessments and learner performance
        </p>
      </div>

      {/* 🔢 Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Lessons" value="128" />
        <StatCard title="Assessments" value="42" />
        <StatCard title="Learners" value="310" />
        <StatCard title="Completion Rate" value="76%" />
      </div>

      {/* 📊 Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Lesson Analytics */}
        <Card title="Lesson Planning">
          <div className="h-40 flex items-center justify-center text-text-light">
            Lesson trend chart
          </div>
        </Card>

        {/* Assessment Analytics */}
        <Card title="Assessments">
          <div className="space-y-2 text-sm text-text-light">
            <p>Average Score: <span className="text-text-main font-medium">68%</span></p>
            <p>Pass Rate: <span className="text-text-main font-medium">72%</span></p>
            <p>Fail Rate: <span className="text-text-main font-medium">28%</span></p>
          </div>
        </Card>

        {/* Learner Analytics */}
        <Card title="Learners">
          <div className="space-y-2 text-sm text-text-light">
            <p>Active Learners: <span className="text-text-main font-medium">280</span></p>
            <p>Inactive: <span className="text-text-main font-medium">30</span></p>
          </div>
        </Card>

        {/* Reports */}
        <Card title="Reports">
          <ul className="text-sm text-text-light space-y-2">
            <li>Generated Term 1 Report</li>
            <li>Downloaded Grade 5 Summary</li>
            <li>Exported Assessment Results</li>
          </ul>
        </Card>

      </div>

      {/* 📌 Recent Activity */}
      <Card title="Recent Activity">
        <ul className="space-y-3 text-sm text-text-light">
          <li>Created Math Lesson - Grade 4</li>
          <li>Updated English Assessment - Grade 2</li>
          <li>Added new learner - Grade 6</li>
        </ul>
      </Card>

    </div>
  );
}

/* 🔹 Stat Card */
function StatCard({ title, value }) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-text-light">{title}</p>
      <h2 className="text-2xl font-bold text-primary mt-1">
        {value}
      </h2>
    </div>
  );
}

/* 🔹 Reusable Card */
function Card({ title, children }) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-text-main mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}