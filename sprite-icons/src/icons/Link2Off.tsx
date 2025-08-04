import { Link2Off as DevIcon, type LucideProps } from "lucide-react"
export const Link2Off: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#link-2-off`} />
    </svg>
  )
