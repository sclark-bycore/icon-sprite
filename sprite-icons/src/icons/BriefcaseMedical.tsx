import { BriefcaseMedical as DevIcon, type LucideProps } from "lucide-react"
export const BriefcaseMedical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#briefcase-medical`} />
    </svg>
  )
