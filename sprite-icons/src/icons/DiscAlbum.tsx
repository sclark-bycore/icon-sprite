import { DiscAlbum as DevIcon, type LucideProps } from "lucide-react"
export const DiscAlbum: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#disc-album`} />
    </svg>
  )
