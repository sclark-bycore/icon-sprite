"use client";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { CUSTOM_SVG_DIR, SPRITE_PATH } from "./config";
import { renderUse } from "./_shared";
import { IconProps } from "./icons/CustomIcon";

type Payload = { attrs: Record<string, string>; innerHTML: string };
const mem = new Map<string, Payload>();

function extractSVGContent(svg: string): Payload {
	const div = document.createElement("div");
	div.innerHTML = svg.trim();
	const svgEl = div.querySelector("svg");
	if (!svgEl) throw new Error("Bad SVG: <svg> not found");
	// sanitize
	div.querySelectorAll("script").forEach((n) => n.remove());
	svgEl.querySelectorAll("*").forEach((el) => {
		for (const { name } of Array.from(el.attributes)) if (/^on[a-z]+/i.test(name)) el.removeAttribute(name);
	});
	const attrs: Record<string, string> = {};
	for (const a of Array.from(svgEl.attributes)) if (!/^(width|height)$/i.test(a.name)) attrs[a.name] = a.value;
	return { attrs, innerHTML: svgEl.innerHTML.trim() };
}

function DevCustomIcon({ name, size, height, width, ...rest }: IconProps) {
	const [payload, setPayload] = useState<Payload | null>(() => (typeof window !== "undefined" ? mem.get(name) ?? null : null));
	const svgRef = useRef<SVGSVGElement>(null);

	// After mount, stamp raw attributes so React doesn't validate/camelCase them.
	useLayoutEffect(() => {
		const el = svgRef.current;
		if (!el || !payload) return;
		// Merge class from payload with incoming className, if any
		const incomingClass = (rest as any).className ?? "";
		let payloadClass = payload.attrs.class ?? payload.attrs.className ?? "";
		const mergedClass = [incomingClass, payloadClass].filter(Boolean).join(" ").trim();
		if (mergedClass) el.setAttribute("class", mergedClass);
		// Apply all other attrs (skip class handled above and width/height)
		for (const [k, v] of Object.entries(payload.attrs)) {
			if (k === "class" || k === "className") continue;
			if (/^(width|height)$/i.test(k)) continue;
			if (k === "xmlns" || k.startsWith("xmlns:")) continue;
			el.setAttribute(k, v);
		}
	}, [payload, rest]);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const ctrl = new AbortController();
		// sanitize for leading/trailing slashes
		const base = "/" + String(CUSTOM_SVG_DIR).replace(/^\/+|\/+$/g, "");
		const url = `${base}/${encodeURIComponent(name)}.svg?v=${Date.now()}`;
		fetch(url, { cache: "no-store", signal: ctrl.signal })
			.then((r) => (r.ok ? r.text() : Promise.reject(new Error(`HTTP ${r.status}`))))
			.then((txt) => {
				if (ctrl.signal.aborted) return;
				const p = extractSVGContent(txt);
				mem.set(name, p);
				setPayload(p);
			})
			.catch((err) => {
				if (err.name !== "AbortError") console.warn(`[CustomIcon] failed to load ${url}:`, err);
				if (!ctrl.signal.aborted) setPayload(null);
			});
		return () => ctrl.abort();
	}, [name]);

	if (payload) {
		return (
			<svg
				ref={svgRef}
				{...(size != null ? { width: size, height: size } : {})}
				{...(height != null ? { height } : {})}
				{...(width != null ? { width } : {})}
				{...rest}
				dangerouslySetInnerHTML={{ __html: payload.innerHTML }}
			/>
		);
	}

	// fallback if fetch fails in dev
	return renderUse(name, width, height, size, SPRITE_PATH, rest);
}

export default DevCustomIcon;
