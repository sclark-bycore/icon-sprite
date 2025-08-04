import { CodeXml as DevIcon, type LucideProps } from "lucide-react"
export const CodeXml: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#code-xml`} />
    </svg>
  )
