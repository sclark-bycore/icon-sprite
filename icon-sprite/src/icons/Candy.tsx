import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Candy as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Candy({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Candy", size, width, height);
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
  return  renderUse("candy", width, height, size, SPRITE_PATH, props)
}
