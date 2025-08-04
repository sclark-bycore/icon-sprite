import { Donut as DevIcon, type LucideProps } from "lucide-react"
export const Donut: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#donut`} />
    </svg>
  )
