import { Copyleft as DevIcon, type LucideProps } from "lucide-react"
export const Copyleft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#copyleft`} />
    </svg>
  )
