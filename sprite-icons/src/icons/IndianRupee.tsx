import { IndianRupee as DevIcon, type LucideProps } from "lucide-react"
export const IndianRupee: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#indian-rupee`} />
    </svg>
  )
