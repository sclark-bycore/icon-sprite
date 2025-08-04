import { SplinePointer as DevIcon, type LucideProps } from "lucide-react"
export const SplinePointer: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#spline-pointer`} />
    </svg>
  )
