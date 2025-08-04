import { Unlink2 as DevIcon, type LucideProps } from "lucide-react"
export const Unlink2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#unlink-2`} />
    </svg>
  )
