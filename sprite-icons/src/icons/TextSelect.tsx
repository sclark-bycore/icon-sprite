import { TextSelect as DevIcon, type LucideProps } from "lucide-react"
export const TextSelect: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#text-select`} />
    </svg>
  )
