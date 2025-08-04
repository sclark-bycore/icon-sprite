import { CardSim as DevIcon, type LucideProps } from "lucide-react"
export const CardSim: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#card-sim`} />
    </svg>
  )
