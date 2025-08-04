import { CircleUserRound as DevIcon, type LucideProps } from "lucide-react"
export const CircleUserRound: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-user-round`} />
    </svg>
  )
