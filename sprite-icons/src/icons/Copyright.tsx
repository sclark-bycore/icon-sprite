import { Copyright as DevIcon, type LucideProps } from "lucide-react"
export const Copyright: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#copyright`} />
    </svg>
  )
