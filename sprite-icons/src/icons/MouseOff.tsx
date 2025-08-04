import { MouseOff as DevIcon, type LucideProps } from "lucide-react"
export const MouseOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mouse-off`} />
    </svg>
  )
