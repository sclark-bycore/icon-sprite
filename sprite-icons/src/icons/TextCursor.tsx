import { TextCursor as DevIcon, type LucideProps } from "lucide-react"
export const TextCursor: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#text-cursor`} />
    </svg>
  )
