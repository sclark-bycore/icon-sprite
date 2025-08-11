import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { AppWindow as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function AppWindow({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("AppWindow", size, width, height);
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
  return  renderUse("app-window", width, height, size, SPRITE_PATH, props)
}
