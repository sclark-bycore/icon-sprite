import { Clock9 as DevIcon, type LucideProps } from "lucide-react"
export const Clock9: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-9`} />
    </svg>
  )
