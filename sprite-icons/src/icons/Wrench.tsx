import { Wrench as DevIcon, type LucideProps } from "lucide-react"
export const Wrench: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wrench`} />
    </svg>
  )
