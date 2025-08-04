import { Shell as DevIcon, type LucideProps } from "lucide-react"
export const Shell: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shell`} />
    </svg>
  )
