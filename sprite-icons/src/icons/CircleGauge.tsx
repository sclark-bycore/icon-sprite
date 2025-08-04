import { CircleGauge as DevIcon, type LucideProps } from "lucide-react"
export const CircleGauge: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-gauge`} />
    </svg>
  )
