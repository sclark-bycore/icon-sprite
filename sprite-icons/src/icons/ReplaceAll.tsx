import { ReplaceAll as DevIcon, type LucideProps } from "lucide-react"
export const ReplaceAll: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#replace-all`} />
    </svg>
  )
