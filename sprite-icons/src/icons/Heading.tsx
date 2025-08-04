import { Heading as DevIcon, type LucideProps } from "lucide-react"
export const Heading: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heading`} />
    </svg>
  )
