import { PilcrowRight as DevIcon, type LucideProps } from "lucide-react"
export const PilcrowRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pilcrow-right`} />
    </svg>
  )
