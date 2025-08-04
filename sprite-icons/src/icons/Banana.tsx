import { Banana as DevIcon, type LucideProps } from "lucide-react"
export const Banana: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#banana`} />
    </svg>
  )
