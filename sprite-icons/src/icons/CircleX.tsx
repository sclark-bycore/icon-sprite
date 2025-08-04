import { CircleX as DevIcon, type LucideProps } from "lucide-react"
export const CircleX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-x`} />
    </svg>
  )
