import {
  User,
  Mail,
  Phone,
  School,
  BadgeCheck,
  BookOpen,
} from "lucide-react";

export default function LearnerProfilePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl border border-border shadow-soft p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-24 h-24 rounded-full bg-primary-light flex items-center justify-center text-primary text-3xl font-bold">
              FW
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-text-main">
                Faith Wanjiku
              </h1>

              <p className="text-text-muted mt-1">
                CBC Learner Profile Overview
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Grade 7
                </span>

                <span className="bg-secondary-light text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  Active Learner
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-soft p-6">
            <h2 className="text-xl font-semibold text-text-main mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-xl p-4">
                <User className="text-primary mb-3" />

                <p className="text-sm text-text-muted">Full Name</p>

                <h3 className="font-semibold text-text-main">
                  Faith Wanjiku
                </h3>
              </div>

              <div className="bg-background border border-border rounded-xl p-4">
                <School className="text-primary mb-3" />

                <p className="text-sm text-text-muted">Admission No</p>

                <h3 className="font-semibold text-text-main">
                  CBC-1021
                </h3>
              </div>

              <div className="bg-background border border-border rounded-xl p-4">
                <Mail className="text-primary mb-3" />

                <p className="text-sm text-text-muted">Parent Email</p>

                <h3 className="font-semibold text-text-main">
                  parent@gmail.com
                </h3>
              </div>

              <div className="bg-background border border-border rounded-xl p-4">
                <Phone className="text-primary mb-3" />

                <p className="text-sm text-text-muted">Parent Phone</p>

                <h3 className="font-semibold text-text-main">
                  +254700123456
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-soft p-6">
            <h2 className="text-xl font-semibold text-text-main mb-6">
              Performance
            </h2>

            <div className="space-y-5">
              <div className="bg-background border border-border rounded-xl p-4">
                <BadgeCheck className="text-success mb-3" />

                <p className="text-text-muted">Average Score</p>

                <h3 className="text-3xl font-bold text-success">
                  84%
                </h3>
              </div>

              <div className="bg-background border border-border rounded-xl p-4">
                <BookOpen className="text-primary mb-3" />

                <p className="text-text-muted">Subjects</p>

                <h3 className="text-3xl font-bold text-text-main">
                  12
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}