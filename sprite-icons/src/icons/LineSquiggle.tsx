import { LineSquiggle as DevIcon, type LucideProps } from "lucide-react"
export const LineSquiggle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#line-squiggle`} />
    </svg>
  )
