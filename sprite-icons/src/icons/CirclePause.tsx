import { CirclePause as DevIcon, type LucideProps } from "lucide-react"
export const CirclePause: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-pause`} />
    </svg>
  )
