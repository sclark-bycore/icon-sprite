import { Infinity as DevIcon, type LucideProps } from "lucide-react"
export const Infinity: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#infinity`} />
    </svg>
  )
