"use client";

import { useState, useRef } from "react";

export default function LessonPlanPage() {
  const [isEditing, setIsEditing] = useState(true);
  const [loading, setLoading] = useState(false);

  const pdfRef = useRef(null);

  const [lesson, setLesson] = useState({
    title: "",
    grade: "",
    subject: "",
    strand: "",
    substrand: "",

    // NEW (personalization)
    teacherName: "",
    schoolName: "",
    term: "",
    week: "",

    // CBC CONTENT
    outcomes: [],
    inquiryQuestion: "",
    introduction: "",
    activities: [],
    resources: [],
    reflection: "",

    competencies: [],
    pcis: [],
    values: [],
    assessment: [],
  });

  // -----------------------------
  // HELPERS
  // -----------------------------
  const updateField = (field, value) => {
    setLesson((prev) => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (field, index, value) => {
    const updated = [...lesson[field]];
    updated[index] = value;
    setLesson((prev) => ({ ...prev, [field]: updated }));
  };

  // -----------------------------
  // SMART CBC AI
  // -----------------------------
  const fakeAI = async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: `${input.subject} – ${input.strand}`,

          outcomes: [
            `Explain concepts of ${input.strand}`,
            `Apply ${input.subject} knowledge in real life`,
            `Demonstrate understanding of ${input.substrand || input.strand}`,
          ],

          inquiryQuestion: `How does ${input.strand} apply in daily life?`,

          introduction: `Ask learners what they know about ${input.strand} and relate it to daily experiences.`,

          activities: [
            `Group discussion on ${input.strand}`,
            "Teacher explanation",
            "Learners complete activity",
          ],

          resources: ["Textbooks", "Charts", "Digital content"],

          reflection:
            "Most learners understood the lesson, but some need reinforcement.",

          competencies: ["Critical thinking", "Communication"],
          pcis: ["Environmental awareness"],
          values: ["Respect", "Responsibility"],

          assessment: [
            "Oral questions",
            "Written exercise",
          ],
        });
      }, 1200);
    });
  };

  // -----------------------------
  // GENERATE
  // -----------------------------
  const generateLessonWithAI = async () => {
    if (!lesson.grade || !lesson.subject || !lesson.strand) {
      alert("Fill Grade, Subject & Strand");
      return;
    }

    setLoading(true);

    const data = await fakeAI(lesson);

    setLesson((prev) => ({ ...prev, ...data }));
    setLoading(false);
  };

  // -----------------------------
  // PDF DOWNLOAD (FIXED)
  // -----------------------------
  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    const html2pdf = (await import("html2pdf.js")).default;

    html2pdf()
      .set({
        margin: 0.5,
        filename: `${lesson.title || "CBC-Lesson"}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4" },
      })
      .from(element)
      .save();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 space-y-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold">AI Powered Lesson Planner</h1>
        <p>Create high-quality CBC lesson plans in seconds</p>
      </div>

      {isEditing ? (
        <div className="grid md:grid-cols-2 gap-6">

          {/* FORM */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 className="font-semibold text-lg">Lesson Details</h2>

            {/* PERSONALIZATION */}
            <div className="grid grid-cols-2 gap-3">
              <input className="input" placeholder="Teacher Name"
                onChange={(e) => updateField("teacherName", e.target.value)} />

              <input className="input" placeholder="School Name"
                onChange={(e) => updateField("schoolName", e.target.value)} />

              <input className="input" placeholder="Term"
                onChange={(e) => updateField("term", e.target.value)} />

              <input className="input" placeholder="Week"
                onChange={(e) => updateField("week", e.target.value)} />
            </div>

            {/* LESSON DETAILS */}
            <div className="grid grid-cols-2 gap-3">
              <input className="input" placeholder="Grade"
                onChange={(e) => updateField("grade", e.target.value)} />

              <input className="input" placeholder="Subject"
                onChange={(e) => updateField("subject", e.target.value)} />

              <input className="input" placeholder="Strand"
                onChange={(e) => updateField("strand", e.target.value)} />

              <input className="input" placeholder="Sub-strand"
                onChange={(e) => updateField("substrand", e.target.value)} />
            </div>

            <button
              onClick={generateLessonWithAI}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl"
            >
              {loading ? "Generating..." : "✨ Generate Lesson"}
            </button>

            <input
              className="input"
              placeholder="Lesson Title"
              value={lesson.title}
              onChange={(e) => updateField("title", e.target.value)}
            />

            {/* Outcomes */}
            <div>
              <h3 className="text-green-600 font-semibold">Outcomes</h3>
              {lesson.outcomes.map((o, i) => (
                <input
                  key={i}
                  className="input mt-2"
                  value={o}
                  onChange={(e) =>
                    updateArrayField("outcomes", i, e.target.value)
                  }
                />
              ))}
            </div>

            <input
              className="input"
              placeholder="Inquiry Question"
              value={lesson.inquiryQuestion}
              onChange={(e) =>
                updateField("inquiryQuestion", e.target.value)
              }
            />

            <button
              onClick={() => setIsEditing(false)}
              className="w-full py-3 bg-green-600 text-white rounded-xl"
            >
              Preview Lesson
            </button>
          </div>

          {/* LIVE PREVIEW */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold">{lesson.title}</h3>
            <ul className="list-disc ml-5 mt-3">
              {lesson.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-6">

          {/* TOP BAR */}
          <div className="flex justify-between">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              ← Back
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Download PDF
            </button>
          </div>

          {/* PDF CONTENT */}
          <div
            ref={pdfRef}
            className="bg-white p-8 rounded-2xl shadow space-y-6"
          >

            {/* PROFESSIONAL HEADER */}
            <div className="text-center border-b pb-4">
              <h2 className="text-lg font-bold">{lesson.schoolName}</h2>
              <p>{lesson.teacherName}</p>
              <p>Term {lesson.term} • Week {lesson.week}</p>
            </div>

            <h1 className="text-2xl font-bold text-center">
              {lesson.title}
            </h1>

            <p className="text-center text-gray-500">
              Grade {lesson.grade} • {lesson.subject}
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="text-green-700 font-semibold">Outcomes</h3>
                <ul className="list-disc ml-5">
                  {lesson.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-purple-700 font-semibold">Inquiry</h3>
                <p>{lesson.inquiryQuestion}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-blue-700 font-semibold">Assessment</h3>
                <ul className="list-disc ml-5">
                  {lesson.assessment.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p><strong>Competencies:</strong> {lesson.competencies.join(", ")}</p>
                <p><strong>PCIs:</strong> {lesson.pcis.join(", ")}</p>
                <p><strong>Values:</strong> {lesson.values.join(", ")}</p>
              </div>

              {/* NEW CBC SECTIONS */}
              <div className="col-span-2 space-y-4">
                <div>
                  <h3 className="font-semibold">Introduction</h3>
                  <p>{lesson.introduction}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Activities</h3>
                  <ul className="list-disc ml-5">
                    {lesson.activities.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Resources</h3>
                  <ul className="list-disc ml-5">
                    {lesson.resources.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Reflection</h3>
                  <p>{lesson.reflection}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}