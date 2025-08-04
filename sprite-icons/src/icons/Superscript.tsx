import { Superscript as DevIcon, type LucideProps } from "lucide-react"
export const Superscript: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#superscript`} />
    </svg>
  )
