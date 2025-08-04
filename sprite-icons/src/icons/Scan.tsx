import { Scan as DevIcon, type LucideProps } from "lucide-react"
export const Scan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scan`} />
    </svg>
  )
