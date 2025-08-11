import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { FileBox as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function FileBox({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("FileBox", size, width, height);
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
  return  renderUse("file-box", width, height, size, SPRITE_PATH, props)
}
