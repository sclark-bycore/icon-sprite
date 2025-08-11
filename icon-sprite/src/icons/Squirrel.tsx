import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Squirrel as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Squirrel({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Squirrel", size, width, height);
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
  return  renderUse("squirrel", width, height, size, SPRITE_PATH, props)
}
