import { View as DevIcon, type LucideProps } from "lucide-react"
export const View: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#view`} />
    </svg>
  )
