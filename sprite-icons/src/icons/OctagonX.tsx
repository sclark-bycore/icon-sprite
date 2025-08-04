import { OctagonX as DevIcon, type LucideProps } from "lucide-react"
export const OctagonX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#octagon-x`} />
    </svg>
  )
