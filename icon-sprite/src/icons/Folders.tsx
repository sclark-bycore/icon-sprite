import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Folders as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Folders({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Folders", size, width, height);
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
  return  renderUse("folders", width, height, size, SPRITE_PATH, props)
}
