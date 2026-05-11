"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClassDetailsPage() {
  const [streams, setStreams] = useState([
    {
      id: 1,
      name: "East",
      learners: 34,
      teacher: "Mrs Akinyi",
    },
    {
      id: 2,
      name: "West",
      learners: 30,
      teacher: "Mr Otieno",
    },
  ]);

  const [streamName, setStreamName] = useState("");
  const [teacher, setTeacher] = useState("");

  const addStream = () => {
    if (!streamName || !teacher) return;

    const newStream = {
      id: Date.now(),
      name: streamName,
      learners: 0,
      teacher,
    };

    setStreams([...streams, newStream]);

    setStreamName("");
    setTeacher("");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Grade 4 Streams
        </h1>

        <p className="text-gray-500 mt-1">
          Manage streams under this class
        </p>
      </div>

      {/* Add Stream Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add New Stream
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Stream Name"
            value={streamName}
            onChange={(e) => setStreamName(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter Class Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={addStream}
          className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Save Stream
        </button>
      </div>

      {/* Streams Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {streams.map((stream) => (
          <div
            key={stream.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition"
          >
            {/* Stream Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {stream.name}
              </h2>

              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {stream.learners} Learners
              </span>
            </div>

            {/* Teacher */}
            <p className="text-gray-600 mb-5">
              <span className="font-medium">
                Teacher:
              </span>{" "}
              {stream.teacher}
            </p>

            {/* View Learners Button */}
            <Link
              href={`/dashboard/learners?class=Grade4&stream=${stream.name}`}
            >
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition duration-200">
                View Learners
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}