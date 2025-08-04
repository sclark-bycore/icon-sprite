import { BadgeMinus as DevIcon, type LucideProps } from "lucide-react"
export const BadgeMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-minus`} />
    </svg>
  )
