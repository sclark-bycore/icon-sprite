import { Link2 as DevIcon, type LucideProps } from "lucide-react"
export const Link2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#link-2`} />
    </svg>
  )
