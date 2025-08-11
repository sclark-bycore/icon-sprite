import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Dice5 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Dice5({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Dice5", size, width, height);
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
  return  renderUse("dice-5", width, height, size, SPRITE_PATH, props)
}
