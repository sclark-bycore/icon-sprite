import { VenetianMask as DevIcon, type LucideProps } from "lucide-react"
export const VenetianMask: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#venetian-mask`} />
    </svg>
  )
