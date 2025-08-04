import { BriefcaseConveyorBelt as DevIcon, type LucideProps } from "lucide-react"
export const BriefcaseConveyorBelt: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#briefcase-conveyor-belt`} />
    </svg>
  )
