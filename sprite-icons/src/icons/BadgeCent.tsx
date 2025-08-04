import { BadgeCent as DevIcon, type LucideProps } from "lucide-react"
export const BadgeCent: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-cent`} />
    </svg>
  )
