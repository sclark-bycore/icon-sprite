import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { AlignVerticalDistributeEnd as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function AlignVerticalDistributeEnd({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("AlignVerticalDistributeEnd", size, width, height);
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
  return  renderUse("align-vertical-distribute-end", width, height, size, SPRITE_PATH, props)
}
