import { Presentation as DevIcon, type LucideProps } from "lucide-react"
export const Presentation: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#presentation`} />
    </svg>
  )
