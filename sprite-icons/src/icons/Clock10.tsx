import { Clock10 as DevIcon, type LucideProps } from "lucide-react"
export const Clock10: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-10`} />
    </svg>
  )
