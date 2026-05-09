"use client";

import Link from "next/link";
import {
  Search,
  Plus,
  Users,
  Eye,
  Filter,
  GraduationCap,
} from "lucide-react";

const learners = [
  {
    id: 1,
    name: "Faith Wanjiku",
    admission: "CBC-1021",
    grade: "Grade 7",
    stream: "North",
    progress: "Excellent",
  },
  {
    id: 2,
    name: "Brian Otieno",
    admission: "CBC-1045",
    grade: "Grade 6",
    stream: "East",
    progress: "Good",
  },
];

export default function LearnersPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-main">
            Learners Management
          </h1>

          <p className="text-text-muted mt-1">
            Manage CBC learners and profiles
          </p>
        </div>

        <button className="bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-soft transition-all">
          <Plus size={18} />
          Add Learner
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-card rounded-2xl p-5 shadow-soft border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-muted text-sm">Total Learners</p>

              <h2 className="text-3xl font-bold text-text-main mt-2">
                1,284
              </h2>
            </div>

            <div className="bg-primary-light p-3 rounded-xl">
              <Users className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-soft border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-muted text-sm">Classes</p>

              <h2 className="text-3xl font-bold text-text-main mt-2">
                24
              </h2>
            </div>

            <div className="bg-secondary-light p-3 rounded-xl">
              <GraduationCap className="text-secondary" />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-soft border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-muted text-sm">Performance</p>

              <h2 className="text-3xl font-bold text-success mt-2">
                89%
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-xl">
              <Eye className="text-success" />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-soft mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative w-full md:w-[350px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light"
          />

          <input
            type="text"
            placeholder="Search learner..."
            className="w-full bg-background border border-border rounded-xl py-3 pl-11 pr-4 outline-none focus:border-primary"
          />
        </div>

        <button className="border border-border px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-primary-light transition-all text-text-main">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-light text-left">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-primary">
                  Learner
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-primary">
                  Admission No
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-primary">
                  Grade
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-primary">
                  Stream
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-primary">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {learners.map((learner) => (
                <tr
                  key={learner.id}
                  className="border-t border-border hover:bg-background transition-all"
                >
                  <td className="px-6 py-5 font-medium text-text-main">
                    {learner.name}
                  </td>

                  <td className="px-6 py-5 text-text-muted">
                    {learner.admission}
                  </td>

                  <td className="px-6 py-5 text-text-muted">
                    {learner.grade}
                  </td>

                  <td className="px-6 py-5 text-text-muted">
                    {learner.stream}
                  </td>

                  <td className="px-6 py-5">
                    <Link
                      href={`/dashboard/learners/profile/${learner.id}`}
                      className="bg-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-primary-hover transition-all"
                    >
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}