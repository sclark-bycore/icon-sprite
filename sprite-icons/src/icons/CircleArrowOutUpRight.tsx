import { CircleArrowOutUpRight as DevIcon, type LucideProps } from "lucide-react"
export const CircleArrowOutUpRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-arrow-out-up-right`} />
    </svg>
  )
