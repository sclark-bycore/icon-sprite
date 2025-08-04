import { Bitcoin as DevIcon, type LucideProps } from "lucide-react"
export const Bitcoin: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bitcoin`} />
    </svg>
  )
