import { Clock7 as DevIcon, type LucideProps } from "lucide-react"
export const Clock7: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-7`} />
    </svg>
  )
