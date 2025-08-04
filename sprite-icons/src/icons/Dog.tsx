import { Dog as DevIcon, type LucideProps } from "lucide-react"
export const Dog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#dog`} />
    </svg>
  )
