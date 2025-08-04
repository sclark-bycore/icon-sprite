import { FlipVertical2 as DevIcon, type LucideProps } from "lucide-react"
export const FlipVertical2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flip-vertical-2`} />
    </svg>
  )
