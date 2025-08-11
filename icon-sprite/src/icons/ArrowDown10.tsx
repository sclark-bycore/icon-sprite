import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ArrowDown10 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ArrowDown10({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ArrowDown10", size, width, height);
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
  return  renderUse("arrow-down-1-0", width, height, size, SPRITE_PATH, props)
}
