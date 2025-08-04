import { X as DevIcon, type LucideProps } from "lucide-react"
export const X: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#x`} />
    </svg>
  )
