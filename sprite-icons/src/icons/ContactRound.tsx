import { ContactRound as DevIcon, type LucideProps } from "lucide-react"
export const ContactRound: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#contact-round`} />
    </svg>
  )
