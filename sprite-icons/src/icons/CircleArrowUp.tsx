import { CircleArrowUp as DevIcon, type LucideProps } from "lucide-react"
export const CircleArrowUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-arrow-up`} />
    </svg>
  )
