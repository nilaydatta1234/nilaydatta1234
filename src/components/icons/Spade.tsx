export function Spade({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C12 2 4 10 4 14a4 4 0 004 4c1.5 0 2.8-.8 3.5-2-.3 1.8-1 3.5-2.5 5h6c-1.5-1.5-2.2-3.2-2.5-5 .7 1.2 2 2 3.5 2a4 4 0 004-4c0-4-8-12-8-12z" />
    </svg>
  );
}
