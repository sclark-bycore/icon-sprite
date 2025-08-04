import { Calendar as DevIcon, type LucideProps } from "lucide-react"
export const Calendar: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar`} />
    </svg>
  )
