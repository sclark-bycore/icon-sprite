import { LibraryBig as DevIcon, type LucideProps } from "lucide-react"
export const LibraryBig: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#library-big`} />
    </svg>
  )
