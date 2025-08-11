import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { AudioWaveform as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function AudioWaveform({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("AudioWaveform", size, width, height);
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
  return  renderUse("audio-waveform", width, height, size, SPRITE_PATH, props)
}
