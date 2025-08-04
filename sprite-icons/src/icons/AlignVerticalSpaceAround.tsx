import { AlignVerticalSpaceAround as DevIcon, type LucideProps } from "lucide-react"
export const AlignVerticalSpaceAround: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-vertical-space-around`} />
    </svg>
  )
