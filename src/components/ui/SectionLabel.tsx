interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-block">
      <span className="font-lato text-xs font-light tracking-widest uppercase text-sh-plum dark:text-sh-rose">
        {children}
      </span>
    </div>
  )
}
