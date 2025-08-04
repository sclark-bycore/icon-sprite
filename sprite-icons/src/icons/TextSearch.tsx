import { TextSearch as DevIcon, type LucideProps } from "lucide-react"
export const TextSearch: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#text-search`} />
    </svg>
  )
