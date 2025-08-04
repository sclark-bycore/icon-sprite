import { Download as DevIcon, type LucideProps } from "lucide-react"
export const Download: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#download`} />
    </svg>
  )
