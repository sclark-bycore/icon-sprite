import { CaseSensitive as DevIcon, type LucideProps } from "lucide-react"
export const CaseSensitive: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#case-sensitive`} />
    </svg>
  )
