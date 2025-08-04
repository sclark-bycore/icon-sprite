import { Bandage as DevIcon, type LucideProps } from "lucide-react"
export const Bandage: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bandage`} />
    </svg>
  )
