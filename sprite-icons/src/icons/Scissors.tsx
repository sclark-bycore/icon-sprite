import { Scissors as DevIcon, type LucideProps } from "lucide-react"
export const Scissors: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scissors`} />
    </svg>
  )
