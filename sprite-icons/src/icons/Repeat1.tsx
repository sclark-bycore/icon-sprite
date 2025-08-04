import { Repeat1 as DevIcon, type LucideProps } from "lucide-react"
export const Repeat1: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#repeat-1`} />
    </svg>
  )
