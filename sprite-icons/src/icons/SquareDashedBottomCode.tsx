import { SquareDashedBottomCode as DevIcon, type LucideProps } from "lucide-react"
export const SquareDashedBottomCode: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-dashed-bottom-code`} />
    </svg>
  )
