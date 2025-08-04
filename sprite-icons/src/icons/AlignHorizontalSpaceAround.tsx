import { AlignHorizontalSpaceAround as DevIcon, type LucideProps } from "lucide-react"
export const AlignHorizontalSpaceAround: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-horizontal-space-around`} />
    </svg>
  )
