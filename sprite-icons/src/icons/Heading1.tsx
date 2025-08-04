import { Heading1 as DevIcon, type LucideProps } from "lucide-react"
export const Heading1: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heading-1`} />
    </svg>
  )
