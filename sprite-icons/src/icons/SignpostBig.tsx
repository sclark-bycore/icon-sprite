import { SignpostBig as DevIcon, type LucideProps } from "lucide-react"
export const SignpostBig: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#signpost-big`} />
    </svg>
  )
