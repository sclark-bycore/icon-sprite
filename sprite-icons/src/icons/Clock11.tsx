import { Clock11 as DevIcon, type LucideProps } from "lucide-react"
export const Clock11: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-11`} />
    </svg>
  )
