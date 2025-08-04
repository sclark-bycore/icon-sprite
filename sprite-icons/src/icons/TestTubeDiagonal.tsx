import { TestTubeDiagonal as DevIcon, type LucideProps } from "lucide-react"
export const TestTubeDiagonal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#test-tube-diagonal`} />
    </svg>
  )
