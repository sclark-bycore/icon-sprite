import { CircleChevronUp as DevIcon, type LucideProps } from "lucide-react"
export const CircleChevronUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-chevron-up`} />
    </svg>
  )
