import {
  User,
  Mail,
  Phone,
  School,
  BadgeCheck,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function LearnerDetailsPage({ params }) {
  const learnerId = params?.id;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP HEADER */}
        <div className="bg-card border border-border rounded-2xl shadow-soft p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-full bg-primary-light flex items-center justify-center text-primary text-3xl font-bold">
                L
              </div>

              <div>
                <h1 className="text-3xl font-bold text-text-main">
                  Learner Profile
                </h1>

                <p className="text-text-muted mt-1">
                  Learner ID: {learnerId}
                </p>
              </div>
            </div>

            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-2xl transition-all">
              Edit Learner
            </button>

          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* ACADEMIC INFO */}
            <div className="bg-card border border-border rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-text-main mb-5">
                Academic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="bg-background border border-border rounded-xl p-4">
                  <BookOpen className="text-primary mb-3" />
                  <p className="text-text-muted text-sm">Subjects</p>
                  <h3 className="text-2xl font-bold text-text-main">
                    12 Subjects
                  </h3>
                </div>

                <div className="bg-background border border-border rounded-xl p-4">
                  <BadgeCheck className="text-success mb-3" />
                  <p className="text-text-muted text-sm">Overall Score</p>
                  <h3 className="text-2xl font-bold text-success">
                    84%
                  </h3>
                </div>

              </div>
            </div>

            {/* ACTIVITY */}
            <div className="bg-card border border-border rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-text-main mb-5">
                Recent Activities
              </h2>

              <div className="space-y-4">

                <div className="flex items-start gap-4 border-b border-border pb-4">
                  <div className="bg-primary-light p-3 rounded-xl">
                    <Calendar className="text-primary" size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-text-main">
                      Mathematics Assessment Uploaded
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      Recently submitted
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary-light p-3 rounded-xl">
                    <User className="text-secondary" size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-text-main">
                      Parent Meeting Recorded
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      Updated by teacher
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* QUICK STATS */}
            <div className="bg-card border border-border rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-text-main mb-5">
                Quick Stats
              </h2>

              <div className="space-y-4">

                <div className="bg-primary-light rounded-xl p-4">
                  <p className="text-primary text-sm">Attendance</p>
                  <h3 className="text-3xl font-bold text-primary mt-2">
                    96%
                  </h3>
                </div>

                <div className="bg-secondary-light rounded-xl p-4">
                  <p className="text-secondary text-sm">Assignments</p>
                  <h3 className="text-3xl font-bold text-secondary mt-2">
                    28
                  </h3>
                </div>

              </div>
            </div>

            {/* NOTES */}
            <div className="bg-card border border-border rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-text-main mb-5">
                Teacher Notes
              </h2>

              <textarea
                placeholder="Write notes about learner..."
                className="w-full h-40 bg-background border border-border rounded-xl p-4 outline-none focus:border-primary resize-none"
              />

              <button className="w-full mt-4 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl transition-all">
                Save Notes
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}