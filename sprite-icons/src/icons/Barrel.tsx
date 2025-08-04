import { Barrel as DevIcon, type LucideProps } from "lucide-react"
export const Barrel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#barrel`} />
    </svg>
  )
