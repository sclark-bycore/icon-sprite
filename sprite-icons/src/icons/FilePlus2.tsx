import { FilePlus2 as DevIcon, type LucideProps } from "lucide-react"
export const FilePlus2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-plus-2`} />
    </svg>
  )
