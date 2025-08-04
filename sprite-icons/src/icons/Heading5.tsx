import { Heading5 as DevIcon, type LucideProps } from "lucide-react"
export const Heading5: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heading-5`} />
    </svg>
  )
