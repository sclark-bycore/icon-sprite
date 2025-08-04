import { DiamondPlus as DevIcon, type LucideProps } from "lucide-react"
export const DiamondPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#diamond-plus`} />
    </svg>
  )
