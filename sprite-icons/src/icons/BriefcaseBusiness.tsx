import { BriefcaseBusiness as DevIcon, type LucideProps } from "lucide-react"
export const BriefcaseBusiness: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#briefcase-business`} />
    </svg>
  )
