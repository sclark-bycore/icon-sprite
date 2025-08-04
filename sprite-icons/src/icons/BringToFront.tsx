import { BringToFront as DevIcon, type LucideProps } from "lucide-react"
export const BringToFront: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bring-to-front`} />
    </svg>
  )
