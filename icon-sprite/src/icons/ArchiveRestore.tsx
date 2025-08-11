import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ArchiveRestore as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ArchiveRestore({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ArchiveRestore", size, width, height);
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
  return  renderUse("archive-restore", width, height, size, SPRITE_PATH, props)
}
