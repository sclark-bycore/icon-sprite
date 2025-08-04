import { Clock3 as DevIcon, type LucideProps } from "lucide-react"
export const Clock3: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-3`} />
    </svg>
  )
