import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Tickets as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Tickets({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Tickets", size, width, height);
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
  return  renderUse("tickets", width, height, size, SPRITE_PATH, props)
}
