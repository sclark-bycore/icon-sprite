import { ChevronsUp as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-up`} />
    </svg>
  )
