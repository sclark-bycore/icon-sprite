import { Menu as DevIcon, type LucideProps } from "lucide-react"
export const Menu: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#menu`} />
    </svg>
  )
