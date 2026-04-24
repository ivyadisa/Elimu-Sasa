export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-sm",
    secondary:
      "bg-secondary text-white hover:opacity-90 shadow-sm",
    outline:
      "border border-border text-text-main hover:bg-background",
    danger:
      "bg-danger text-white hover:opacity-90 shadow-sm",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}