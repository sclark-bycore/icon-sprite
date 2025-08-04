import { Tally2 as DevIcon, type LucideProps } from "lucide-react"
export const Tally2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tally-2`} />
    </svg>
  )
