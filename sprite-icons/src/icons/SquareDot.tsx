import { SquareDot as DevIcon, type LucideProps } from "lucide-react"
export const SquareDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-dot`} />
    </svg>
  )
