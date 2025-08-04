import { AlignRight as DevIcon, type LucideProps } from "lucide-react"
export const AlignRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-right`} />
    </svg>
  )
