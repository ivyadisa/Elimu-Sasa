export default function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
      </div>

      <div className="text-[#2563EB] text-2xl">
        {icon}
      </div>
    </div>
  );
}