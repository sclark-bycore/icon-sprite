import { ArchiveRestore as DevIcon, type LucideProps } from "lucide-react"
export const ArchiveRestore: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#archive-restore`} />
    </svg>
  )
