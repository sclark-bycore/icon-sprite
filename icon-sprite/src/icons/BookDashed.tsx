import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { BookDashed as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function BookDashed({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("BookDashed", size, width, height);
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
  return  renderUse("book-dashed", width, height, size, SPRITE_PATH, props)
}
