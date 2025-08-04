import { PilcrowLeft as DevIcon, type LucideProps } from "lucide-react"
export const PilcrowLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pilcrow-left`} />
    </svg>
  )
