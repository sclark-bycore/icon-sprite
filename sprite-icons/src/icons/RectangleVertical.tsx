import { RectangleVertical as DevIcon, type LucideProps } from "lucide-react"
export const RectangleVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rectangle-vertical`} />
    </svg>
  )
