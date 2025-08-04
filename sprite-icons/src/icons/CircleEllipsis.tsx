import { CircleEllipsis as DevIcon, type LucideProps } from "lucide-react"
export const CircleEllipsis: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-ellipsis`} />
    </svg>
  )
