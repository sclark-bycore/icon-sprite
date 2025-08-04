import { CircleCheckBig as DevIcon, type LucideProps } from "lucide-react"
export const CircleCheckBig: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-check-big`} />
    </svg>
  )
