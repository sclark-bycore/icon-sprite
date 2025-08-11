import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Syringe as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Syringe({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Syringe", size, width, height);
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
  return  renderUse("syringe", width, height, size, SPRITE_PATH, props)
}
