import { CandyOff as DevIcon, type LucideProps } from "lucide-react"
export const CandyOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#candy-off`} />
    </svg>
  )
