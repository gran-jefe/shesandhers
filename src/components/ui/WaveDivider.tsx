export function WaveDivider({
  flip = false,
  colorClass = 'text-white'
}: {
  flip?: boolean
  colorClass?: string
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full ${colorClass}`}
        preserveAspectRatio="none"
      >
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
    </div>
  )
}
