import { LogIn as DevIcon, type LucideProps } from "lucide-react"
export const LogIn: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#log-in`} />
    </svg>
  )
