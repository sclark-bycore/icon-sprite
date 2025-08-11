import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { TrendingUpDown as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function TrendingUpDown({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("TrendingUpDown", size, width, height);
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
  return  renderUse("trending-up-down", width, height, size, SPRITE_PATH, props)
}
