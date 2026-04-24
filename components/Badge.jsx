export default function Badge({ text, type = "default", className = "" }) {
  const base = "px-2 py-1 text-xs rounded-lg font-medium";

  const styles = {
    default: "bg-border text-text-muted",
    success: "bg-secondary-light text-secondary",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
    info: "bg-primary-light text-primary",
  };

  return (
    <span className={`${base} ${styles[type]} ${className}`}>
      {text}
    </span>
  );
}