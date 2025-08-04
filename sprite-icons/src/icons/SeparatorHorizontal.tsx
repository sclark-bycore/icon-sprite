import { SeparatorHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const SeparatorHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#separator-horizontal`} />
    </svg>
  )
