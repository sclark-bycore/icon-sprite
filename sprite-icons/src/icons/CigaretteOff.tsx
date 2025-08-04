import { CigaretteOff as DevIcon, type LucideProps } from "lucide-react"
export const CigaretteOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cigarette-off`} />
    </svg>
  )
