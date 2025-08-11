import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { FolderInput as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function FolderInput({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("FolderInput", size, width, height);
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
  return  renderUse("folder-input", width, height, size, SPRITE_PATH, props)
}
