import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { RollerCoaster as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function RollerCoaster({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("RollerCoaster", size, width, height);
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
  return  renderUse("roller-coaster", width, height, size, SPRITE_PATH, props)
}
