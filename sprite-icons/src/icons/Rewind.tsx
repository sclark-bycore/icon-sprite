import { Rewind as DevIcon, type LucideProps } from "lucide-react"
export const Rewind: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rewind`} />
    </svg>
  )
