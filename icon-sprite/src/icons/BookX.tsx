import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { BookX as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function BookX({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("BookX", size, width, height);
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
  return  renderUse("book-x", width, height, size, SPRITE_PATH, props)
}
