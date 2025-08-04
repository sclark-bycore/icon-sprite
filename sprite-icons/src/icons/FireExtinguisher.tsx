import { FireExtinguisher as DevIcon, type LucideProps } from "lucide-react"
export const FireExtinguisher: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fire-extinguisher`} />
    </svg>
  )
