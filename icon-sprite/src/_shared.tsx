export type Dim = number | string | undefined;
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: Dim; width?: Dim; height?: Dim };
export function renderUse(id: string, width: Dim, height: Dim, size: Dim, SPRITE_PATH: string, props: IconProps) {
	return (
		<svg
			{...props}
			{...(size != null ? { width: size, height: size } : {})}
			{...(width != null ? { width } : {})}
			{...(height != null ? { height } : {})}
		>
			<use href={`${SPRITE_PATH}#${id}`} />
		</svg>
	);
}
