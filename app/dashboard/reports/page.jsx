"use client";

import { useMemo, useRef, useState } from "react";
import html2pdf from "html2pdf.js";

import {
  Download,
  FileSpreadsheet,
  FileText,
  Printer,
  User,
  BookOpen,
  GraduationCap,
  Sparkles,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function GenerateReportsPage() {
  const reportRef = useRef(null);

  const [learner, setLearner] = useState("Brian Mwangi");
  const [term, setTerm] = useState("Term 2");
  const [grade, setGrade] = useState("Grade 4");

  /* REPORT TYPE */
  const [reportType, setReportType] = useState("full");

  /* SUBJECT */
  const [selectedSubject, setSelectedSubject] =
    useState("Mathematics");

  /* COMPETENCY */
  const [selectedCompetency, setSelectedCompetency] =
    useState("Communication & Collaboration");

  const learnersData = {
    "Brian Mwangi": {
      admission: "CBC-2045",
      teacher: "Mr. John Kamau",

      remarks:
        "Brian demonstrates excellent creativity and collaboration skills. He actively participates in learning activities and shows steady improvement.",

      data: [
        {
          subject: "Mathematics",
          strand: "Fractions",
          score: 85,
          level: "Exceeding Expectation",
          remark: "Excellent understanding",
        },

        {
          subject: "English",
          strand: "Writing",
          score: 78,
          level: "Meeting Expectation",
          remark: "Good writing skills",
        },

        {
          subject: "Science",
          strand: "Environment",
          score: 90,
          level: "Exceeding Expectation",
          remark: "Outstanding participation",
        },

        {
          subject: "CRE",
          strand: "Values",
          score: 70,
          level: "Approaching Expectation",
          remark: "Needs more practice",
        },
      ],
    },
  };

  /* FILTER REPORT */
  const previewData = useMemo(() => {
    let rows = learnersData[learner]?.data || [];

    /* SUBJECT REPORT */
    if (reportType === "subject") {
      rows = rows.filter(
        (row) => row.subject === selectedSubject
      );
    }

    /* COMPETENCY REPORT */
    if (reportType === "competency") {
      rows = rows.map((row) => ({
        ...row,
        strand: selectedCompetency,
      }));
    }

    return rows;
  }, [
    learner,
    reportType,
    selectedSubject,
    selectedCompetency,
  ]);

  /* GENERATE */
  const handleGenerateReport = () => {
    alert("CBC Report Generated Successfully");
  };

  /* PRINT */
  const handlePrint = () => {
    const printContents = reportRef.current.innerHTML;

    const printWindow = window.open(
      "",
      "",
      "width=1000,height=700"
    );

    printWindow.document.write(`
      <html>
        <head>
          <title>CBC Learner Report</title>

          <style>
            body{
              font-family:Arial;
              padding:40px;
              color:#0F172A;
            }

            table{
              width:100%;
              border-collapse:collapse;
              margin-top:20px;
            }

            th{
              background:#2568D6;
              color:white;
              padding:12px;
              text-align:left;
            }

            td{
              border:1px solid #E2E8F0;
              padding:12px;
            }
          </style>
        </head>

        <body>
          ${printContents}
        </body>
      </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();
  };

  /* DOWNLOAD PDF */
  const handleDownloadPDF = () => {
    const element = reportRef.current;

    html2pdf()
      .set({
        margin: 0.3,

        filename: `${learner}-cbc-report.pdf`,

        image: {
          type: "jpeg",
          quality: 1,
        },

        html2canvas: {
          scale: 2,
        },

        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(element)
      .save();
  };

  /* DOWNLOAD EXCEL */
  const handleDownloadExcel = () => {
    let csv =
      "Learning Area,Strand,Score,Level,Remarks\n";

    previewData.forEach((row) => {
      csv += `${row.subject},${row.strand},${row.score},${row.level},${row.remark}\n`;
    });

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `${learner}-cbc-report.csv`;

    link.click();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-main">
            Generate Learner Reports
          </h1>

          <p className="mt-2 text-text-muted">
            Generate professional CBC learner reports.
          </p>
        </div>

        <button
          onClick={handleGenerateReport}
          className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-white"
        >
          <CheckCircle2 size={18} />
          Generate Report
        </button>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* LEFT */}
        <div className="space-y-6 xl:col-span-2">
          {/* CONFIG */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <SelectField
                label="Learner"
                value={learner}
                setValue={setLearner}
                icon={<User size={18} />}
                options={Object.keys(learnersData)}
              />

              <SelectField
                label="Term"
                value={term}
                setValue={setTerm}
                icon={<GraduationCap size={18} />}
                options={["Term 1", "Term 2", "Term 3"]}
              />

              <SelectField
                label="Grade"
                value={grade}
                setValue={setGrade}
                icon={<BookOpen size={18} />}
                options={["Grade 4", "Grade 5", "Grade 6"]}
              />

              {/* REPORT TYPE */}
              <SelectField
                label="Report Type"
                value={reportType}
                setValue={setReportType}
                icon={<Sparkles size={18} />}
                options={[
                  "full",
                  "subject",
                  "competency",
                ]}
              />
            </div>

            {/* SUBJECT DROPDOWN */}
            {reportType === "subject" && (
              <div className="mt-6">
                <SelectField
                  label="Choose Subject"
                  value={selectedSubject}
                  setValue={setSelectedSubject}
                  icon={<BookOpen size={18} />}
                  options={[
                    "Mathematics",
                    "English",
                    "Science",
                    "CRE",
                  ]}
                />
              </div>
            )}

            {/* COMPETENCY DROPDOWN */}
            {reportType === "competency" && (
              <div className="mt-6">
                <SelectField
                  label="Choose Competency"
                  value={selectedCompetency}
                  setValue={setSelectedCompetency}
                  icon={<Sparkles size={18} />}
                  options={[
                    "Communication & Collaboration",
                    "Critical Thinking",
                    "Creativity & Imagination",
                    "Citizenship",
                  ]}
                />
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleDownloadPDF}
                className="rounded-2xl bg-primary px-6 py-3 font-semibold text-white"
              >
                Download PDF
              </button>

              <button
                onClick={handleDownloadExcel}
                className="rounded-2xl border border-border bg-white px-6 py-3 font-semibold text-text-main"
              >
                Download Excel
              </button>
            </div>
          </div>

          {/* REPORT */}
          <div
            ref={reportRef}
            className="rounded-3xl bg-white p-10 shadow-sm"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b-4 border-primary pb-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  Sunrise Primary School
                </h1>

                <p className="mt-2 text-text-muted">
                  CBC Learner Progress Report
                </p>
              </div>

              <button
                onClick={handlePrint}
                className="rounded-2xl bg-primary-light p-4 text-primary"
              >
                <Printer size={24} />
              </button>
            </div>

            {/* STUDENT INFO */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <InfoCard
                title="Learner"
                value={learner}
              />

              <InfoCard
                title="Admission No"
                value={learnersData[learner]?.admission}
              />

              <InfoCard title="Grade" value={grade} />

              <InfoCard title="Term" value={term} />

              <InfoCard
                title="Teacher"
                value={learnersData[learner]?.teacher}
              />

              <InfoCard
                title="Report Type"
                value={reportType.toUpperCase()}
              />
            </div>

            {/* SUBJECT TITLE */}
            {reportType === "subject" && (
              <div className="mt-8 rounded-2xl bg-primary-light p-4">
                <h2 className="text-xl font-bold text-primary">
                  Subject Report: {selectedSubject}
                </h2>
              </div>
            )}

            {/* COMPETENCY TITLE */}
            {reportType === "competency" && (
              <div className="mt-8 rounded-2xl bg-primary-light p-4">
                <h2 className="text-xl font-bold text-primary">
                  Competency Report:
                  {" "}
                  {selectedCompetency}
                </h2>
              </div>
            )}

            {/* TABLE */}
            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-2xl">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">
                      Learning Area
                    </th>

                    <th className="p-4 text-left">
                      Strand
                    </th>

                    <th className="p-4 text-left">
                      Score
                    </th>

                    <th className="p-4 text-left">
                      Performance
                    </th>

                    <th className="p-4 text-left">
                      Remarks
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {previewData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border even:bg-slate-50"
                    >
                      <td className="p-4 font-semibold">
                        {row.subject}
                      </td>

                      <td className="p-4">
                        {row.strand}
                      </td>

                      <td className="p-4 font-bold text-secondary">
                        {row.score}%
                      </td>

                      <td className="p-4">
                        <span className="rounded-full bg-secondary-light px-3 py-1 text-xs font-bold text-secondary">
                          {row.level}
                        </span>
                      </td>

                      <td className="p-4">
                        {row.remark}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* REMARKS */}
            <div className="mt-10 rounded-2xl border-l-4 border-primary bg-primary-light p-6">
              <h3 className="text-xl font-bold text-primary">
                Teacher Remarks
              </h3>

              <p className="mt-3 leading-8 text-text-main">
                {learnersData[learner]?.remarks}
              </p>
            </div>

            {/* SIGNATURES */}
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <div className="border-t border-text-main pt-2">
                  <p className="font-semibold">
                    Class Teacher Signature
                  </p>
                </div>
              </div>

              <div>
                <div className="border-t border-text-main pt-2">
                  <p className="font-semibold">
                    Head Teacher Signature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-text-main">
              Quick Export
            </h2>

            <div className="space-y-4">
              <ExportButton
                icon={<FileText size={18} />}
                title="Download PDF"
                onClick={handleDownloadPDF}
              />

              <ExportButton
                icon={<FileSpreadsheet size={18} />}
                title="Export Excel"
                onClick={handleDownloadExcel}
              />

              <ExportButton
                icon={<Printer size={18} />}
                title="Print Report"
                onClick={handlePrint}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INFO CARD */
function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <p className="text-sm text-text-muted">{title}</p>

      <h3 className="mt-2 text-lg font-bold text-text-main">
        {value}
      </h3>
    </div>
  );
}

/* SELECT */
function SelectField({
  label,
  icon,
  options,
  value,
  setValue,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-text-main">
        {label}
      </label>

      <div className="flex items-center justify-between rounded-2xl border border-border bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="text-primary">{icon}</div>

          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-transparent text-sm text-text-main outline-none"
          >
            {options.map((option, index) => (
              <option key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <ChevronDown
          size={16}
          className="text-text-muted"
        />
      </div>
    </div>
  );
}

/* EXPORT BUTTON */
function ExportButton({
  icon,
  title,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-border px-5 py-4 transition hover:bg-slate-50"
    >
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>

        <span className="font-medium text-text-main">
          {title}
        </span>
      </div>

      <Download
        size={18}
        className="text-text-muted"
      />
    </button>
  );
}