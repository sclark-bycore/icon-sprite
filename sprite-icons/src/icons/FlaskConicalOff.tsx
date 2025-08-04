import { FlaskConicalOff as DevIcon, type LucideProps } from "lucide-react"
export const FlaskConicalOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flask-conical-off`} />
    </svg>
  )
