export default function Logo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="#09090B" />
      <path
        d="M20 0V100M40 0V100M60 0V100M80 0V100"
        stroke="#27272A"
        strokeWidth="0.5"
      />
      <path
        d="M0 20H100M0 40H100M0 60H100M0 80H100"
        stroke="#27272A"
        strokeWidth="0.5"
      />
      <path
        d="M30 25V75"
        stroke="#FAFAFA"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M68 28L42 50L68 72"
        stroke="#FAFAFA"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="28" r="3" fill="#3B82F6" />
    </svg>
  );
}
