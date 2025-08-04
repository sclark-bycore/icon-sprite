import { Disc2 as DevIcon, type LucideProps } from "lucide-react"
export const Disc2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#disc-2`} />
    </svg>
  )
