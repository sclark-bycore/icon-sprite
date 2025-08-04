import { CircleDot as DevIcon, type LucideProps } from "lucide-react"
export const CircleDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-dot`} />
    </svg>
  )
