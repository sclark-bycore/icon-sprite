import { FileAxis3d as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";

interface Props extends LucideProps { size?: number | string | undefined; width?: number | string | undefined; height?: number | string | undefined; }

export function FileAxis3d({ size, width, height, ...props }: Props) {
  warnMissingIconSize("FileAxis3d", size, width, height);

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
      <use href={`${SPRITE_PATH}#file-axis-3d`} />
    </svg>
  );
}
