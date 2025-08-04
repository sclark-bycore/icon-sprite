import { FlipVertical as DevIcon, type LucideProps } from "lucide-react"
export const FlipVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flip-vertical`} />
    </svg>
  )
