import { RulerDimensionLine as DevIcon, type LucideProps } from "lucide-react"
export const RulerDimensionLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ruler-dimension-line`} />
    </svg>
  )
