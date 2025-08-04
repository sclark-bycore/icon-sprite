import { ListMusic as DevIcon, type LucideProps } from "lucide-react"
export const ListMusic: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-music`} />
    </svg>
  )
