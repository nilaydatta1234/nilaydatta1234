export function Club({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5-1.8-.3-3.5.5-4.5 2a4 4 0 005.5 5.5c-1 1.5-2 2.5-3 3h8c-1-.5-2-1.5-3-3a4 4 0 005.5-5.5c-1-1.5-2.7-2.3-4.5-2 1.2-.7 2-2 2-3.5a4 4 0 00-4-4z" />
    </svg>
  );
}
