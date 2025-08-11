import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { LampWallDown as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function LampWallDown({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("LampWallDown", size, width, height);
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
  return  renderUse("lamp-wall-down", width, height, size, SPRITE_PATH, props)
}
