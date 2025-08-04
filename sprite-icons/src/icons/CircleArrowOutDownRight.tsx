import { CircleArrowOutDownRight as DevIcon, type LucideProps } from "lucide-react"
export const CircleArrowOutDownRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-arrow-out-down-right`} />
    </svg>
  )
