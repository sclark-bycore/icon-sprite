import { MousePointer2 as DevIcon, type LucideProps } from "lucide-react"
export const MousePointer2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mouse-pointer-2`} />
    </svg>
  )
