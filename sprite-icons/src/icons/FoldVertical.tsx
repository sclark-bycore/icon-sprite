import { FoldVertical as DevIcon, type LucideProps } from "lucide-react"
export const FoldVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fold-vertical`} />
    </svg>
  )
