import { Recycle as DevIcon, type LucideProps } from "lucide-react"
export const Recycle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#recycle`} />
    </svg>
  )
