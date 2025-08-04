import { RotateCcwSquare as DevIcon, type LucideProps } from "lucide-react"
export const RotateCcwSquare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rotate-ccw-square`} />
    </svg>
  )
