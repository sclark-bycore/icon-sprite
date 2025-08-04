import { StickyNote as DevIcon, type LucideProps } from "lucide-react"
export const StickyNote: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sticky-note`} />
    </svg>
  )
