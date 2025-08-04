import { BoomBox as DevIcon, type LucideProps } from "lucide-react"
export const BoomBox: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#boom-box`} />
    </svg>
  )
