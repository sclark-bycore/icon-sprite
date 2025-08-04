import { AlignLeft as DevIcon, type LucideProps } from "lucide-react"
export const AlignLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-left`} />
    </svg>
  )
