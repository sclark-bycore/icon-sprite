import { SmilePlus as DevIcon, type LucideProps } from "lucide-react"
export const SmilePlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#smile-plus`} />
    </svg>
  )
