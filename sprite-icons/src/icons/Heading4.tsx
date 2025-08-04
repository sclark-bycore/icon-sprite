import { Heading4 as DevIcon, type LucideProps } from "lucide-react"
export const Heading4: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heading-4`} />
    </svg>
  )
