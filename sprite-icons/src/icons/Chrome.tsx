import { Chrome as DevIcon, type LucideProps } from "lucide-react"
export const Chrome: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chrome`} />
    </svg>
  )
