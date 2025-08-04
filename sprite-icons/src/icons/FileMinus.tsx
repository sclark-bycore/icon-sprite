import { FileMinus as DevIcon, type LucideProps } from "lucide-react"
export const FileMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-minus`} />
    </svg>
  )
