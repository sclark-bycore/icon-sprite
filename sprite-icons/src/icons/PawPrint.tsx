import { PawPrint as DevIcon, type LucideProps } from "lucide-react"
export const PawPrint: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#paw-print`} />
    </svg>
  )
