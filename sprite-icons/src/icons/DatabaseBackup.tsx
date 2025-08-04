import { DatabaseBackup as DevIcon, type LucideProps } from "lucide-react"
export const DatabaseBackup: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#database-backup`} />
    </svg>
  )
