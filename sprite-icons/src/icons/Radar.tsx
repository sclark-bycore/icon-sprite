import { Radar as DevIcon, type LucideProps } from "lucide-react"
export const Radar: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#radar`} />
    </svg>
  )
