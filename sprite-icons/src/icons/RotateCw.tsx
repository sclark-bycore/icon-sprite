import { RotateCw as DevIcon, type LucideProps } from "lucide-react"
export const RotateCw: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rotate-cw`} />
    </svg>
  )
