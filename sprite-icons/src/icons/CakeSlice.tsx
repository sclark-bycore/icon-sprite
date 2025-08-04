import { CakeSlice as DevIcon, type LucideProps } from "lucide-react"
export const CakeSlice: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cake-slice`} />
    </svg>
  )
