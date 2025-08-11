import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ZoomOut as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ZoomOut({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ZoomOut", size, width, height);
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
  return  renderUse("zoom-out", width, height, size, SPRITE_PATH, props)
}
