import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ListRestart as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ListRestart({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ListRestart", size, width, height);
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
  return  renderUse("list-restart", width, height, size, SPRITE_PATH, props)
}
