import { UnfoldVertical as DevIcon, type LucideProps } from "lucide-react"
export const UnfoldVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#unfold-vertical`} />
    </svg>
  )
