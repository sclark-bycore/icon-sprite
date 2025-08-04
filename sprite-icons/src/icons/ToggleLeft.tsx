import { ToggleLeft as DevIcon, type LucideProps } from "lucide-react"
export const ToggleLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#toggle-left`} />
    </svg>
  )
