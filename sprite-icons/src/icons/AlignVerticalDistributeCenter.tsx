import { AlignVerticalDistributeCenter as DevIcon, type LucideProps } from "lucide-react"
export const AlignVerticalDistributeCenter: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-vertical-distribute-center`} />
    </svg>
  )
