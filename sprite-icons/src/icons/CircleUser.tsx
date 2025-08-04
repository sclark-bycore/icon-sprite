import { CircleUser as DevIcon, type LucideProps } from "lucide-react"
export const CircleUser: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-user`} />
    </svg>
  )
