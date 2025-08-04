import { BrushCleaning as DevIcon, type LucideProps } from "lucide-react"
export const BrushCleaning: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#brush-cleaning`} />
    </svg>
  )
