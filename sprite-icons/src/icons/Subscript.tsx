import { Subscript as DevIcon, type LucideProps } from "lucide-react"
export const Subscript: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#subscript`} />
    </svg>
  )
