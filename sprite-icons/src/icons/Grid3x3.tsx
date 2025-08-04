import { Grid3x3 as DevIcon, type LucideProps } from "lucide-react"
export const Grid3x3: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#grid-3x3`} />
    </svg>
  )
