import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Thermometer as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Thermometer({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Thermometer", size, width, height);
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
  return  renderUse("thermometer", width, height, size, SPRITE_PATH, props)
}
