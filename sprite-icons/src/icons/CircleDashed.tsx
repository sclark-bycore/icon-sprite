import { CircleDashed as DevIcon, type LucideProps } from "lucide-react"
export const CircleDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-dashed`} />
    </svg>
  )
