import { CassetteTape as DevIcon, type LucideProps } from "lucide-react"
export const CassetteTape: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cassette-tape`} />
    </svg>
  )
