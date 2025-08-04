import { GraduationCap as DevIcon, type LucideProps } from "lucide-react"
export const GraduationCap: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#graduation-cap`} />
    </svg>
  )
