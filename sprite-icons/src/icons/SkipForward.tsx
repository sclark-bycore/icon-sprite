import { SkipForward as DevIcon, type LucideProps } from "lucide-react"
export const SkipForward: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#skip-forward`} />
    </svg>
  )
