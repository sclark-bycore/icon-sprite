import { TableOfContents as DevIcon, type LucideProps } from "lucide-react"
export const TableOfContents: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#table-of-contents`} />
    </svg>
  )
