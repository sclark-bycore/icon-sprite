import { Lollipop as DevIcon, type LucideProps } from "lucide-react"
export const Lollipop: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lollipop`} />
    </svg>
  )
