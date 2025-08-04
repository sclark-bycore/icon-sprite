import { Tally3 as DevIcon, type LucideProps } from "lucide-react"
export const Tally3: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tally-3`} />
    </svg>
  )
