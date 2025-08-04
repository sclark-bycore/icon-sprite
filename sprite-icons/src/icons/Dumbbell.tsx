import { Dumbbell as DevIcon, type LucideProps } from "lucide-react"
export const Dumbbell: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#dumbbell`} />
    </svg>
  )
