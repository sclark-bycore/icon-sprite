import { RussianRuble as DevIcon, type LucideProps } from "lucide-react"
export const RussianRuble: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#russian-ruble`} />
    </svg>
  )
