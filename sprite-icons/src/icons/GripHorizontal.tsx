import { GripHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const GripHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#grip-horizontal`} />
    </svg>
  )
