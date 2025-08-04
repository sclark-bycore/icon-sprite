import { Clock8 as DevIcon, type LucideProps } from "lucide-react"
export const Clock8: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-8`} />
    </svg>
  )
