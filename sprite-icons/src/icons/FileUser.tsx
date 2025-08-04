import { FileUser as DevIcon, type LucideProps } from "lucide-react"
export const FileUser: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-user`} />
    </svg>
  )
