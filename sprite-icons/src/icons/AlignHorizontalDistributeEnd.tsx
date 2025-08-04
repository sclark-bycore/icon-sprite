import { AlignHorizontalDistributeEnd as DevIcon, type LucideProps } from "lucide-react"
export const AlignHorizontalDistributeEnd: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-horizontal-distribute-end`} />
    </svg>
  )
