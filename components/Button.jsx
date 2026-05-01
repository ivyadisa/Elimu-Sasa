"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function LessonPlanPage() {
  const [isEditing, setIsEditing] = useState(true);
  const [loading, setLoading] = useState(false);

  const [lesson, setLesson] = useState({
    title: "",
    grade: "",
    subject: "",
    strand: "",
    substrand: "",

    outcomes: [],
    inquiryQuestion: "",
    competencies: [],
    pcis: [],
    values: [],
    assessment: [],
  });

  // -----------------------------
  // UPDATE HELPERS
  // -----------------------------
  const updateField = (field, value) => {
    setLesson((prev) => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (field, index, value) => {
    const updated = [...lesson[field]];
    updated[index] = value;
    setLesson((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayItem = (field) => {
    setLesson((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  // -----------------------------
  // AI (dynamic)
  // -----------------------------
  const fakeAI = async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: `${input.subject} - ${input.strand}`,
          outcomes: [
            `Describe key concepts of ${input.strand}`,
            `Explain application of ${input.subject} in real life`,
            `Apply knowledge through activities`,
          ],
          inquiryQuestion: `How does ${input.strand} affect our daily lives?`,
          competencies: [
            "Critical thinking",
            "Communication",
            "Collaboration",
          ],
          pcis: ["Life skills", "Health awareness"],
          values: ["Responsibility", "Respect"],
          assessment: [
            "Oral questioning",
            "Group discussion",
            "Written exercise",
          ],
        });
      }, 1200);
    });
  };

  // -----------------------------
  // AI GENERATION
  // -----------------------------
  const generateLessonWithAI = async () => {
    if (!lesson.grade || !lesson.subject || !lesson.strand) {
      alert("Please fill Grade, Subject and Strand first");
      return;
    }

    setLoading(true);

    const data = await fakeAI({
      grade: lesson.grade,
      subject: lesson.subject,
      strand: lesson.strand,
      substrand: lesson.substrand,
    });

    setLesson((prev) => ({
      ...prev,
      title: data.title,
      outcomes: data.outcomes,
      inquiryQuestion: data.inquiryQuestion,
      competencies: data.competencies,
      pcis: data.pcis,
      values: data.values,
      assessment: data.assessment,
    }));

    setLoading(false);
  };

  // -----------------------------
  // PDF EXPORT
  // -----------------------------
  const exportPDF = async () => {
    const element = document.getElementById("lesson-preview");

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${lesson.title || "cbc-lesson"}.pdf`);
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            CBC Lesson Planner
          </h1>
          <p className="text-gray-500">
            AI-powered teaching assistant for Kenyan teachers
          </p>
        </div>
      </div>

      {/* EDIT MODE */}
      {isEditing ? (
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT FORM PANEL */}
          <div className="md:col-span-1 bg-white p-5 rounded-2xl shadow space-y-4">

            <h2 className="font-bold text-lg">Lesson Setup</h2>

            <input className="input" placeholder="Grade"
              value={lesson.grade}
              onChange={(e) => updateField("grade", e.target.value)}
            />

            <input className="input" placeholder="Subject"
              value={lesson.subject}
              onChange={(e) => updateField("subject", e.target.value)}
            />

            <input className="input" placeholder="Strand"
              value={lesson.strand}
              onChange={(e) => updateField("strand", e.target.value)}
            />

            <input className="input" placeholder="Sub-strand"
              value={lesson.substrand}
              onChange={(e) => updateField("substrand", e.target.value)}
            />

            <button
              onClick={generateLessonWithAI}
              disabled={loading}
              className="bg-blue-600 text-white w-full py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Generating..." : "✨ Generate AI Lesson"}
            </button>

            {loading && (
              <p className="text-blue-500 text-sm animate-pulse">
                AI is building CBC structure...
              </p>
            )}
          </div>

          {/* RIGHT FORM PREVIEW */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow space-y-6">

            <input className="text-xl font-bold w-full border-b pb-2"
              placeholder="Lesson Title"
              value={lesson.title}
              onChange={(e) => updateField("title", e.target.value)}
            />

            {/* OUTCOMES */}
            <div>
              <h3 className="font-semibold text-green-600">Learning Outcomes</h3>
              {lesson.outcomes.map((o, i) => (
                <input key={i} className="input mt-2"
                  value={o}
                  onChange={(e) => updateArrayField("outcomes", i, e.target.value)}
                />
              ))}
            </div>

            {/* INQUIRY */}
            <input className="input"
              placeholder="Inquiry Question"
              value={lesson.inquiryQuestion}
              onChange={(e) => updateField("inquiryQuestion", e.target.value)}
            />

            {/* ASSESSMENT */}
            <div>
              <h3 className="font-semibold text-purple-600">Assessment</h3>
              {lesson.assessment.map((a, i) => (
                <input key={i} className="input mt-2"
                  value={a}
                  onChange={(e) => updateArrayField("assessment", i, e.target.value)}
                />
              ))}
            </div>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-xl w-full"
            >
              Preview Lesson
            </button>

          </div>
        </div>
      ) : (

      /* ---------------- PREVIEW MODE ---------------- */
      <div id="lesson-preview" className="bg-white p-8 rounded-2xl shadow-lg space-y-8 relative">

        {/* PDF BUTTON (ONLY IN PREVIEW) */}
        <button
          onClick={exportPDF}
          className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
        >
          📄 Export PDF
        </button>

        {/* HEADER */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {lesson.title}
          </h2>
          <p className="text-gray-500 mt-1">
            Grade {lesson.grade} • {lesson.subject}
          </p>
        </div>

        {/* OUTCOMES */}
        <section className="bg-green-50 p-4 rounded-xl">
          <h3 className="font-bold text-green-700 mb-2">Learning Outcomes</h3>
          <ol className="list-decimal ml-6 space-y-1">
            {lesson.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ol>
        </section>

        {/* INQUIRY */}
        <section className="bg-purple-50 p-4 rounded-xl">
          <h3 className="font-bold text-purple-700 mb-2">Inquiry Question</h3>
          <p>{lesson.inquiryQuestion}</p>
        </section>

        {/* ASSESSMENT */}
        <section className="bg-blue-50 p-4 rounded-xl">
          <h3 className="font-bold text-blue-700 mb-2">Assessment</h3>
          <ul className="list-disc ml-6 space-y-1">
            {lesson.assessment.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        {/* CBC COMPONENTS */}
        <section className="bg-gray-100 p-4 rounded-xl">
          <p><strong>Competencies:</strong> {lesson.competencies.join(", ")}</p>
          <p><strong>PCIs:</strong> {lesson.pcis.join(", ")}</p>
          <p><strong>Values:</strong> {lesson.values.join(", ")}</p>
        </section>

        {/* BACK BUTTON */}
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Edit Lesson
        </button>

      </div>
      )}
    </div>
  );
}