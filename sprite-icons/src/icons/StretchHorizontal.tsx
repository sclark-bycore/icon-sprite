import { StretchHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const StretchHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#stretch-horizontal`} />
    </svg>
  )
