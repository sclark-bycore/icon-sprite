import { TextCursorInput as DevIcon, type LucideProps } from "lucide-react"
export const TextCursorInput: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#text-cursor-input`} />
    </svg>
  )
