import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { SlidersHorizontal as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function SlidersHorizontal({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("SlidersHorizontal", size, width, height);
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
  return  renderUse("sliders-horizontal", width, height, size, SPRITE_PATH, props)
}
