import { PocketKnife as DevIcon, type LucideProps } from "lucide-react"
export const PocketKnife: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pocket-knife`} />
    </svg>
  )
