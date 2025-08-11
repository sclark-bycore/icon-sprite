import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { TableOfContents as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function TableOfContents({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("TableOfContents", size, width, height);
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
  return  renderUse("table-of-contents", width, height, size, SPRITE_PATH, props)
}
