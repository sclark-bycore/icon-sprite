import { CirclePercent as DevIcon, type LucideProps } from "lucide-react"
export const CirclePercent: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-percent`} />
    </svg>
  )
