import { RemoveFormatting as DevIcon, type LucideProps } from "lucide-react"
export const RemoveFormatting: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#remove-formatting`} />
    </svg>
  )
