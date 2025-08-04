import { Shrimp as DevIcon, type LucideProps } from "lucide-react"
export const Shrimp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shrimp`} />
    </svg>
  )
