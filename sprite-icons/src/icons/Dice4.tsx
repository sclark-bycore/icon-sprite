import { Dice4 as DevIcon, type LucideProps } from "lucide-react"
export const Dice4: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#dice-4`} />
    </svg>
  )
