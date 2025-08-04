import { FlaskConical as DevIcon, type LucideProps } from "lucide-react"
export const FlaskConical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flask-conical`} />
    </svg>
  )
