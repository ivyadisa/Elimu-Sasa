export default function Card({
  title,
  children,
  action,
  className = "",
  onClick,
}) {
  const base =
    "bg-card p-4 rounded-2xl shadow-soft transition-all duration-200";

  // Only apply hover effects if card is clickable
  const interactive = onClick
    ? "cursor-pointer hover:bg-primary-light hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          onClick();
        }
      }}
      className={`${base} ${interactive} ${className}`}
    >
      {/* HEADER */}
      {(title || action) && (
        <div className="flex justify-between items-center mb-3">
          {title && (
            <h3 className="text-lg font-medium text-text-main">
              {title}
            </h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}

      {/* CONTENT */}
      {children}
    </div>
  );
}