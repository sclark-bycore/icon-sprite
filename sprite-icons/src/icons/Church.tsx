import { Church as DevIcon, type LucideProps } from "lucide-react"
export const Church: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#church`} />
    </svg>
  )
