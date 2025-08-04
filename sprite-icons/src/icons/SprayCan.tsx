import { SprayCan as DevIcon, type LucideProps } from "lucide-react"
export const SprayCan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#spray-can`} />
    </svg>
  )
