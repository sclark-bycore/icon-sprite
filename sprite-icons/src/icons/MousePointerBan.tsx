import { MousePointerBan as DevIcon, type LucideProps } from "lucide-react"
export const MousePointerBan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mouse-pointer-ban`} />
    </svg>
  )
