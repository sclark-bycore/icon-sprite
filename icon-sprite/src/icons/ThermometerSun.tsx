import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ThermometerSun as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ThermometerSun({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ThermometerSun", size, width, height);
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
  return  renderUse("thermometer-sun", width, height, size, SPRITE_PATH, props)
}
