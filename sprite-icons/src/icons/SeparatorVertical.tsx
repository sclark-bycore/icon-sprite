import { SeparatorVertical as DevIcon, type LucideProps } from "lucide-react"
export const SeparatorVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#separator-vertical`} />
    </svg>
  )
