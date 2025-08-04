import { SquareBottomDashedScissors as DevIcon, type LucideProps } from "lucide-react"
export const SquareBottomDashedScissors: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-bottom-dashed-scissors`} />
    </svg>
  )
