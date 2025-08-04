import { Grid2x2Plus as DevIcon, type LucideProps } from "lucide-react"
export const Grid2x2Plus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#grid-2x2-plus`} />
    </svg>
  )
