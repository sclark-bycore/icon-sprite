import { FastForward as DevIcon, type LucideProps } from "lucide-react"
export const FastForward: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fast-forward`} />
    </svg>
  )
