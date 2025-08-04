import { SaveAll as DevIcon, type LucideProps } from "lucide-react"
export const SaveAll: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#save-all`} />
    </svg>
  )
