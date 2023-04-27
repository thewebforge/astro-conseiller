import { JSX } from "solid-js";

interface Props extends JSX.SvgSVGAttributes<SVGSVGElement> {
  main?: string;
  accent?: string;
}

export default function ChefIcon({
  main = "fill-canvas-900",
  accent = "fill-brand-500",
  ...rest
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill-rule="evenodd">
        <path
          class={accent}
          d="M15.11 14.24a24.72 24.72 0 0 0-.51-3.64.36.36 0 0 0-.39-.3.34.34 0 0 0-.29.39c0 .6.06 1.19.07 1.79s0 1.4 0 2.1v2.1L14.1 18a.4.4 0 0 0 .79.07l.2-1.39c.02-.8.07-1.62.02-2.44Z"
        />
        <path
          class={main}
          d="M22.31 4.91A3.86 3.86 0 0 0 20.42 3a4.14 4.14 0 0 0-2.62-.38 3.78 3.78 0 0 0-1 .36l-.23.14a.61.61 0 0 0 0-.11 12 12 0 0 0-1.32-1.8A3.94 3.94 0 0 0 13.92.3a4.7 4.7 0 0 0-2.41-.24A5.23 5.23 0 0 0 9.33 1a3.35 3.35 0 0 0-.81.87 2.15 2.15 0 0 0-.3.81 6.19 6.19 0 0 0-3.59-.62 3.72 3.72 0 0 0-3 2.31 3.3 3.3 0 0 0-.06 2.23 5.39 5.39 0 0 0 1.82 2.61l1.31.92.17.1-.28.88a12.26 12.26 0 0 0-.43 2A19.62 19.62 0 0 0 4 15.67c0 1.26 0 2.52.06 3.76a8 8 0 0 0 .38 2.93 1.94 1.94 0 0 0 1.18 1.1 9.08 9.08 0 0 0 1.52.3c1.1.12 2.21.07 3.35.18a16 16 0 0 0 2 0c.68 0 1.35-.08 2-.16.78-.09 1.51 0 2.26-.1a5.73 5.73 0 0 0 1.06-.18c.21-.06.51-.11.76-.19a1.65 1.65 0 0 0 .44-.22 1.68 1.68 0 0 0 .58-.95 10.54 10.54 0 0 0 .16-1.83 34 34 0 0 0 .06-3.45 29.87 29.87 0 0 0-.34-3.44c-.1-.68-.4-2.39-.52-3.13v-.07l.05-.02 1.57-.63a3.56 3.56 0 0 0 1.76-2 3.67 3.67 0 0 0-.02-2.66Zm-3.73 15.37a14.11 14.11 0 0 1-.11 1.43c0 .21-.07.42-.21.52l-.83.22a4.4 4.4 0 0 1-.86.14c-.76.06-1.5 0-2.3.1-.57.07-1.21.12-1.86.14a12.24 12.24 0 0 1-1.83 0c-1.13-.11-2.24-.06-3.34-.18a7.45 7.45 0 0 1-1.3-.25 1 1 0 0 1-.58-.77 7.36 7.36 0 0 1-.19-2 2.35 2.35 0 0 0 .45.14c.47.09 1 .12 1.41.18a19.2 19.2 0 0 0 2.27.13c1.11 0 2.21-.12 3.33-.16h2.15l2.64-.28 1.2-.09-.04.73Zm3-13a2.65 2.65 0 0 1-1.32 1.49l-1.53.58a2.29 2.29 0 0 0-.57.28.72.72 0 0 0-.21.29 2.15 2.15 0 0 0 0 .58c.11.74.38 2.45.46 3.13a27.7 27.7 0 0 1 .28 3.33v1.82h-1.24c-.1 0-1.81.09-4.8 0l-2 .13a22.3 22.3 0 0 1-3.53.22H5.75a2.62 2.62 0 0 1-.6-.13c0-1.08-.1-2.18-.1-3.27a19.58 19.58 0 0 1 .13-2.43c0-.32.08-.63.14-.94s.13-.61.22-.92.19-.51.26-.77a2.36 2.36 0 0 0 .08-.45.69.69 0 0 0-.19-.52 2 2 0 0 0-.48-.33L4 8.49a4.85 4.85 0 0 1-1.45-1.73 2.55 2.55 0 0 1-.12-2.06 3.15 3.15 0 0 1 3.15-1.95 5.58 5.58 0 0 1 3.77 1.49 2.53 2.53 0 0 1 .55.81 8.39 8.39 0 0 1 .47 1.52.29.29 0 0 0 .36.22.3.3 0 0 0 .27-.36 8.33 8.33 0 0 0-.47-1.64 3.45 3.45 0 0 0-.66-1 5.69 5.69 0 0 0-1-.79 1.38 1.38 0 0 1 .31-.67 2.76 2.76 0 0 1 .71-.55 4.93 4.93 0 0 1 1.85-.57 4.21 4.21 0 0 1 1.87.13 2.94 2.94 0 0 1 1.07.59A9.54 9.54 0 0 1 16 3.44h.07l-.46.34a5.41 5.41 0 0 0-1 1 2.68 2.68 0 0 0-.47.92.34.34 0 1 0 .66.18 1.89 1.89 0 0 1 .36-.67 5 5 0 0 1 .93-.84 7.69 7.69 0 0 1 1.12-.73 2.7 2.7 0 0 1 .79-.26 3.43 3.43 0 0 1 2.12.34 3.06 3.06 0 0 1 1.47 1.52 2.76 2.76 0 0 1-.05 2.02Z"
        />
        <path
          class={accent}
          d="M9.49 16.12v-2.59c0-.57-.06-1.21 0-1.82a3.55 3.55 0 0 1 .17-1.09.34.34 0 0 0-.17-.45.35.35 0 0 0-.45.18 4.14 4.14 0 0 0-.38 1.28c-.1.61-.12 1.26-.19 1.83 0 .36-.07.71-.08 1.07v1.56c0 .74.09 1.46.08 2.19 0 .37.6.63.74 0a17.79 17.79 0 0 0 .28-2.16Z"
        />
      </g>
    </svg>
  );
}