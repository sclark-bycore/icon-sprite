import { Fuel as DevIcon, type LucideProps } from "lucide-react"
export const Fuel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fuel`} />
    </svg>
  )
