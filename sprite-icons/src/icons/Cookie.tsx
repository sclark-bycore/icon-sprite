import { Cookie as DevIcon, type LucideProps } from "lucide-react"
export const Cookie: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cookie`} />
    </svg>
  )
