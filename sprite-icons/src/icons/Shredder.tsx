import { Shredder as DevIcon, type LucideProps } from "lucide-react"
export const Shredder: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shredder`} />
    </svg>
  )
