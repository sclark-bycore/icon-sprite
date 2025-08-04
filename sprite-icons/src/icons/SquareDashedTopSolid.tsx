import { SquareDashedTopSolid as DevIcon, type LucideProps } from "lucide-react"
export const SquareDashedTopSolid: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-dashed-top-solid`} />
    </svg>
  )
