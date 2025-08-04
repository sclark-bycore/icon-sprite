import { Volume1 as DevIcon, type LucideProps } from "lucide-react"
export const Volume1: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#volume-1`} />
    </svg>
  )
