import { UndoDot as DevIcon, type LucideProps } from "lucide-react"
export const UndoDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#undo-dot`} />
    </svg>
  )
