import { Mountain as DevIcon, type LucideProps } from "lucide-react"
export const Mountain: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mountain`} />
    </svg>
  )
