import { ListVideo as DevIcon, type LucideProps } from "lucide-react"
export const ListVideo: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-video`} />
    </svg>
  )
