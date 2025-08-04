import { CircleFadingPlus as DevIcon, type LucideProps } from "lucide-react"
export const CircleFadingPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-fading-plus`} />
    </svg>
  )
