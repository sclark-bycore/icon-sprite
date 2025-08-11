import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Album as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Album({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Album", size, width, height);
  if (process.env.NODE_ENV !== "production" && DevIcon) {
    return (
      <DevIcon
        {...(props as any)}
        {...(size != null ? { size } : {})}
        {...(width != null ? { width } : {})}
        {...(height != null ? { height } : {})}
      />
    );
  }
  return  renderUse("album", width, height, size, SPRITE_PATH, props)
}
