import { Squircle as DevIcon, type LucideProps } from "lucide-react"
export const Squircle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#squircle`} />
    </svg>
  )
