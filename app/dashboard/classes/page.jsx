"use client";

import { useState } from "react";
import Link from "next/link";

const initialClasses = [
  {
    id: 1,
    name: "Grade 1",
    teacher: "Mrs Akinyi",
    streams: 2,
    learners: 64,
  },
  {
    id: 2,
    name: "Grade 2",
    teacher: "Mr Otieno",
    streams: 3,
    learners: 89,
  },
  {
    id: 3,
    name: "Grade 3",
    teacher: "Mrs Wanjiku",
    streams: 1,
    learners: 35,
  },
];

export default function ClassesPage() {
  const [classes, setClasses] = useState(initialClasses);
  const [className, setClassName] = useState("");
  const [teacher, setTeacher] = useState("");

  const addClass = () => {
    if (!className || !teacher) return;

    const newClass = {
      id: Date.now(),
      name: className,
      teacher,
      streams: 0,
      learners: 0,
    };

    setClasses([...classes, newClass]);
    setClassName("");
    setTeacher("");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Classes</h1>
          <p className="text-gray-500">
            Manage school classes and streams
          </p>
        </div>

        <button
          onClick={addClass}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
        >
          Add Class
        </button>
      </div>

      {/* Add Class Form */}
      <div className="bg-white p-5 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Create New Class</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Class Name (e.g Grade 4)"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Class Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none"
          />
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid md:grid-cols-3 gap-5">
        {classes.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/classes/${item.id}`}
          >
            <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{item.name}</h2>

                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {item.streams} Streams
                </span>
              </div>

              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Teacher:</span>{" "}
                  {item.teacher}
                </p>

                <p>
                  <span className="font-medium">Learners:</span>{" "}
                  {item.learners}
                </p>
              </div>

              <button className="mt-5 w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-xl transition">
                View Streams
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}