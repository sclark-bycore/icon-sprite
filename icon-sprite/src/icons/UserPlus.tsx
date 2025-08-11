import { UserPlus as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";

interface Props extends LucideProps { size?: number | string | undefined; width?: number | string | undefined; height?: number | string | undefined; }

export function UserPlus({ size, width, height, ...props }: Props) {
  warnMissingIconSize("UserPlus", size, width, height);

  return process.env.NODE_ENV !== "production" ? (
    <DevIcon
      {...props}
      {...(size != null ? { size } : {})}
      {...(width != null ? { width } : {})}
      {...(height != null ? { height } : {})}
    />
  ) : (
    <svg
      {...props}
      {...(size != null ? { width: size, height: size } : {})}
      {...(width != null ? { width } : {})}
      {...(height != null ? { height } : {})}
    >
      <use href={`${SPRITE_PATH}#user-plus`} />
    </svg>
  );
}
