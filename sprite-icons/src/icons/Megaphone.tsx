import { Megaphone as DevIcon, type LucideProps } from "lucide-react"
export const Megaphone: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#megaphone`} />
    </svg>
  )
