import { ChevronsRightLeft as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsRightLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-right-left`} />
    </svg>
  )
