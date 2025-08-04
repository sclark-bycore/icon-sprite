import { Columns3Cog as DevIcon, type LucideProps } from "lucide-react"
export const Columns3Cog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#columns-3-cog`} />
    </svg>
  )
