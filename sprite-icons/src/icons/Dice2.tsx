import { Dice2 as DevIcon, type LucideProps } from "lucide-react"
export const Dice2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#dice-2`} />
    </svg>
  )
