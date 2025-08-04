import { Replace as DevIcon, type LucideProps } from "lucide-react"
export const Replace: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#replace`} />
    </svg>
  )
