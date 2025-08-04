import { SquareDashedBottom as DevIcon, type LucideProps } from "lucide-react"
export const SquareDashedBottom: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-dashed-bottom`} />
    </svg>
  )
