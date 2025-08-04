import { RotateCcwKey as DevIcon, type LucideProps } from "lucide-react"
export const RotateCcwKey: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rotate-ccw-key`} />
    </svg>
  )
