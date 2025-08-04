import { LetterText as DevIcon, type LucideProps } from "lucide-react"
export const LetterText: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#letter-text`} />
    </svg>
  )
