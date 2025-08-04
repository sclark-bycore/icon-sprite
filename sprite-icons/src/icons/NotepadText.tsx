import { NotepadText as DevIcon, type LucideProps } from "lucide-react"
export const NotepadText: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#notepad-text`} />
    </svg>
  )
