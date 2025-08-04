import { Accessibility as DevIcon, type LucideProps } from "lucide-react"
export const Accessibility: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#accessibility`} />
    </svg>
  )
