import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { RotateCcwKey as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function RotateCcwKey({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("RotateCcwKey", size, width, height);
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
  return  renderUse("rotate-ccw-key", width, height, size, SPRITE_PATH, props)
}
