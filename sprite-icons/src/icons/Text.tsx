import { Text as DevIcon, type LucideProps } from "lucide-react"
export const Text: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#text`} />
    </svg>
  )
