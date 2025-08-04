import { FlipHorizontal2 as DevIcon, type LucideProps } from "lucide-react"
export const FlipHorizontal2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flip-horizontal-2`} />
    </svg>
  )
