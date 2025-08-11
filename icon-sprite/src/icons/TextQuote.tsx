import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { TextQuote as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function TextQuote({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("TextQuote", size, width, height);
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
  return  renderUse("text-quote", width, height, size, SPRITE_PATH, props)
}
