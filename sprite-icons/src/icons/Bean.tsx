import { Bean as DevIcon, type LucideProps } from "lucide-react"
export const Bean: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bean`} />
    </svg>
  )
