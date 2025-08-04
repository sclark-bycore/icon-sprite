import { Columns4 as DevIcon, type LucideProps } from "lucide-react"
export const Columns4: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#columns-4`} />
    </svg>
  )
