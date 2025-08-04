import { CircleFadingArrowUp as DevIcon, type LucideProps } from "lucide-react"
export const CircleFadingArrowUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-fading-arrow-up`} />
    </svg>
  )
