import { Trophy as DevIcon, type LucideProps } from "lucide-react"
export const Trophy: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#trophy`} />
    </svg>
  )
