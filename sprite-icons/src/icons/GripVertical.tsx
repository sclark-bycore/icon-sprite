import { GripVertical as DevIcon, type LucideProps } from "lucide-react"
export const GripVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#grip-vertical`} />
    </svg>
  )
