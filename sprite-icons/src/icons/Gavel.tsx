import { Gavel as DevIcon, type LucideProps } from "lucide-react"
export const Gavel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gavel`} />
    </svg>
  )
