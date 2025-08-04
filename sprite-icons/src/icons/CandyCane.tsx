import { CandyCane as DevIcon, type LucideProps } from "lucide-react"
export const CandyCane: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#candy-cane`} />
    </svg>
  )
