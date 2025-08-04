import { LockKeyhole as DevIcon, type LucideProps } from "lucide-react"
export const LockKeyhole: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lock-keyhole`} />
    </svg>
  )
