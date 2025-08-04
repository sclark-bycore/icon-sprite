import { AlignEndVertical as DevIcon, type LucideProps } from "lucide-react"
export const AlignEndVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-end-vertical`} />
    </svg>
  )
