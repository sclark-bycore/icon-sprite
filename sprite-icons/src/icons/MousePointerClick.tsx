import { MousePointerClick as DevIcon, type LucideProps } from "lucide-react"
export const MousePointerClick: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mouse-pointer-click`} />
    </svg>
  )
