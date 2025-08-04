import { Grid2x2X as DevIcon, type LucideProps } from "lucide-react"
export const Grid2x2X: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#grid-2x2-x`} />
    </svg>
  )
