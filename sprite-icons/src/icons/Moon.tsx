import { Moon as DevIcon, type LucideProps } from "lucide-react"
export const Moon: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#moon`} />
    </svg>
  )
