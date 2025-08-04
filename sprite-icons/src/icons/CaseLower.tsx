import { CaseLower as DevIcon, type LucideProps } from "lucide-react"
export const CaseLower: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#case-lower`} />
    </svg>
  )
