import { AlignEndHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const AlignEndHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-end-horizontal`} />
    </svg>
  )
