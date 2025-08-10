import { SpellCheck2 as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../config.js";

interface Props extends LucideProps { size?: number | string; }
export const SpellCheck2: React.FC<Props> = ({size, ...props}) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} size={size}/>
  ) : (
    <svg {...props}
    {...(size != null ? { width: size, height: size } : {})}
		>
      <use href={`${SPRITE_PATH}#spell-check-2`} />
    </svg>
  )
