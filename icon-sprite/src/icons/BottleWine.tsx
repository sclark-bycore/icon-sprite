import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { BottleWine as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function BottleWine({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("BottleWine", size, width, height);
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
  return  renderUse("bottle-wine", width, height, size, SPRITE_PATH, props)
}
