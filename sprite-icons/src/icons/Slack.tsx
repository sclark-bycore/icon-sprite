import { Slack as DevIcon, type LucideProps } from "lucide-react"
export const Slack: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#slack`} />
    </svg>
  )
