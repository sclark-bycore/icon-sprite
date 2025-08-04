import { SkipBack as DevIcon, type LucideProps } from "lucide-react"
export const SkipBack: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#skip-back`} />
    </svg>
  )
