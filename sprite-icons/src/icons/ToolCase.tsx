import { ToolCase as DevIcon, type LucideProps } from "lucide-react"
export const ToolCase: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tool-case`} />
    </svg>
  )
