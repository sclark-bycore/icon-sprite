import { Folder as DevIcon, type LucideProps } from "lucide-react"
export const Folder: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder`} />
    </svg>
  )
