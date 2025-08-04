import { PaintRoller as DevIcon, type LucideProps } from "lucide-react"
export const PaintRoller: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#paint-roller`} />
    </svg>
  )
