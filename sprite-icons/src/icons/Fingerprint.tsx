import { Fingerprint as DevIcon, type LucideProps } from "lucide-react"
export const Fingerprint: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fingerprint`} />
    </svg>
  )
