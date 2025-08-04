import { Server as DevIcon, type LucideProps } from "lucide-react"
export const Server: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#server`} />
    </svg>
  )
