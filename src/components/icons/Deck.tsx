export function Deck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <rect x="3" y="5" width="14" height="18" rx="2" opacity="0.4" />
      <path d="M9 10l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
