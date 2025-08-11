import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { BrickWallFire as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function BrickWallFire({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("BrickWallFire", size, width, height);
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
  return  renderUse("brick-wall-fire", width, height, size, SPRITE_PATH, props)
}
