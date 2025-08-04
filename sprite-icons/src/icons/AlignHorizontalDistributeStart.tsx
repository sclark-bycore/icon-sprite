import { AlignHorizontalDistributeStart as DevIcon, type LucideProps } from "lucide-react"
export const AlignHorizontalDistributeStart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-horizontal-distribute-start`} />
    </svg>
  )
