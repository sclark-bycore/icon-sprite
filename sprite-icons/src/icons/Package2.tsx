import { Package2 as DevIcon, type LucideProps } from "lucide-react"
export const Package2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#package-2`} />
    </svg>
  )
