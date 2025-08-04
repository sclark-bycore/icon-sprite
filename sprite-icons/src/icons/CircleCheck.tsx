import { CircleCheck as DevIcon, type LucideProps } from "lucide-react"
export const CircleCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-check`} />
    </svg>
  )
