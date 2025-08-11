import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Bolt as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Bolt({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Bolt", size, width, height);
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
  return  renderUse("bolt", width, height, size, SPRITE_PATH, props)
}
