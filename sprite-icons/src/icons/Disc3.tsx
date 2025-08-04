import { Disc3 as DevIcon, type LucideProps } from "lucide-react"
export const Disc3: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#disc-3`} />
    </svg>
  )
