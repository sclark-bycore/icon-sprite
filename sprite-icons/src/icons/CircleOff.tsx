import { CircleOff as DevIcon, type LucideProps } from "lucide-react"
export const CircleOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-off`} />
    </svg>
  )
