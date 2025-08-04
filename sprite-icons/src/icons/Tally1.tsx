import { Tally1 as DevIcon, type LucideProps } from "lucide-react"
export const Tally1: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tally-1`} />
    </svg>
  )
