"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Plus, Users, Eye, GraduationCap } from "lucide-react";

const initialLearners = [
  {
    id: 1,
    name: "Faith Wanjiku",
    admission: "CBC-1021",
    grade: "Grade4",
    stream: "North",
    progress: "Excellent",
  },
  {
    id: 2,
    name: "Brian Otieno",
    admission: "CBC-1045",
    grade: "Grade4",
    stream: "East",
    progress: "Good",
  },
  {
    id: 3,
    name: "Mary Achieng",
    admission: "CBC-1101",
    grade: "Grade4",
    stream: "East",
    progress: "Excellent",
  },
  {
    id: 4,
    name: "John Mwangi",
    admission: "CBC-1200",
    grade: "Grade4",
    stream: "West",
    progress: "Average",
  },
];

export default function LearnersPage() {
  const searchParams = useSearchParams();

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);

  const [learners, setLearners] = useState(initialLearners);

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");

  /* =========================
     SAFE PARAM LOADING
  ========================= */
  useEffect(() => {
    setSelectedClass(searchParams.get("class"));
    setSelectedStream(searchParams.get("stream"));
  }, [searchParams]);

  /* =========================
     FILTER LEARNERS
  ========================= */
  const filteredLearners =
    selectedClass && selectedStream
      ? learners.filter(
          (l) =>
            l.grade === selectedClass &&
            l.stream === selectedStream
        )
      : learners;

  /* =========================
     ADD LEARNER
  ========================= */
  const addLearner = () => {
    if (!name || !admission) return;

    const newLearner = {
      id: Date.now(),
      name,
      admission,
      grade: selectedClass || "Grade4",
      stream: selectedStream || "North",
      progress: "New",
    };

    setLearners((prev) => [...prev, newLearner]);

    setName("");
    setAdmission("");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-text-main">
            Learners Management
          </h1>

          <p className="text-text-muted mt-1">
            {selectedClass && selectedStream
              ? `${selectedClass} - ${selectedStream} Stream`
              : "Manage CBC learners and profiles"}
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-soft"
        >
          <Plus size={18} />
          Add Learner
        </button>

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">

            <h2 className="text-xl font-bold mb-4">
              Add New Learner
            </h2>

            <div className="space-y-3">

              <input
                type="text"
                placeholder="Learner Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                placeholder="Admission Number"
                value={admission}
                onChange={(e) => setAdmission(e.target.value)}
                className="w-full border p-3 rounded-xl"
              />

            </div>

            <div className="flex justify-end gap-3 mt-5">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-xl"
              >
                Cancel
              </button>

              <button
                onClick={addLearner}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Save
              </button>

            </div>

          </div>
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <div className="bg-card p-5 rounded-2xl border">
          <div className="flex justify-between">
            <div>
              <p>Total Learners</p>
              <h2 className="text-3xl font-bold">
                {filteredLearners.length}
              </h2>
            </div>
            <Users />
          </div>
        </div>

        <div className="bg-card p-5 rounded-2xl border">
          <p>Class</p>
          <h2 className="text-2xl font-bold">
            {selectedClass || "All"}
          </h2>
          <GraduationCap />
        </div>

        <div className="bg-card p-5 rounded-2xl border">
          <p>Stream</p>
          <h2 className="text-2xl font-bold">
            {selectedStream || "All"}
          </h2>
          <Eye />
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-card rounded-2xl border overflow-hidden">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b">
              <th className="p-4">Learner</th>
              <th>Admission</th>
              <th>Grade</th>
              <th>Stream</th>
              <th>Progress</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLearners.map((l) => (
              <tr key={l.id} className="border-t">

                <td className="p-4 font-medium">
                  {l.name}
                </td>

                <td>{l.admission}</td>
                <td>{l.grade}</td>
                <td>{l.stream}</td>

                <td>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {l.progress}
                  </span>
                </td>

                <td>
                  <Link
                    href={`/dashboard/learners/profile/${l.id}`}
                    className="text-blue-600 font-medium"
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
  );
}