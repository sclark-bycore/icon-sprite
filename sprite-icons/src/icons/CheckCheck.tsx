import { CheckCheck as DevIcon, type LucideProps } from "lucide-react"
export const CheckCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#check-check`} />
    </svg>
  )
