import { RectangleCircle as DevIcon, type LucideProps } from "lucide-react"
export const RectangleCircle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rectangle-circle`} />
    </svg>
  )
