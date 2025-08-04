import { RotateCwSquare as DevIcon, type LucideProps } from "lucide-react"
export const RotateCwSquare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rotate-cw-square`} />
    </svg>
  )
