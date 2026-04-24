"use client";

export default function Topbar() {
  return (
    <div className="h-[70px] bg-card border-b border-border flex justify-between items-center px-5">
      
      <input
        placeholder="Search lessons, assessments, reports..."
        className="w-[60%] p-2.5 rounded-xl border border-border outline-none focus:ring-2 focus:ring-primary-light"
      />

      <div className="flex gap-3 text-xl text-text-main">
        <span className="cursor-pointer hover:text-primary">🔔</span>
        <span className="cursor-pointer hover:text-primary">✉️</span>
        <span className="cursor-pointer hover:text-primary">👤</span>
      </div>
    </div>
  );
}