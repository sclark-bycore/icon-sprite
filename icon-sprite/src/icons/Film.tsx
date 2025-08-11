import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Film as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Film({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Film", size, width, height);
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
  return  renderUse("film", width, height, size, SPRITE_PATH, props)
}
