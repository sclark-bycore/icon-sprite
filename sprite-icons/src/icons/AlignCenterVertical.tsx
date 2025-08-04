import { AlignCenterVertical as DevIcon, type LucideProps } from "lucide-react"
export const AlignCenterVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-center-vertical`} />
    </svg>
  )
