import { ServerCog as DevIcon, type LucideProps } from "lucide-react"
export const ServerCog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#server-cog`} />
    </svg>
  )
