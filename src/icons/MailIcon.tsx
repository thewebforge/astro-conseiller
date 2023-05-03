import { JSX } from "solid-js";

interface Props extends JSX.SvgSVGAttributes<SVGSVGElement> {
  main?: string;
  accent?: string;
}

export default function MailIcon({
  main = "fill-canvas-900",
  accent = "fill-brand-500",
  ...rest
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill-rule="evenodd">
        <path
          class={accent}
          d="M6.57 13.84c-.54.68-1.13 1.29-1.7 1.92s-1.13 1.29-1.72 1.91l-.63.67c-.73.58-.63.88.52.65a31.47 31.47 0 0 0 2.43-2.18 15.24 15.24 0 0 0 1.89-2.37l.41-.76c.12-.8-.13-.94-.71-.51Zm12.2 1.24-.76-.79a11.84 11.84 0 0 1-1-1.17c-.62-.49-1-.54-.66.53a12.06 12.06 0 0 0 1.45 2.12 19.39 19.39 0 0 0 1.77 1.74L21 18.66c1.21.46 1.2.09.62-.65-.55-.58-1.09-1.16-1.65-1.73Z"
        />
        <path
          class={main}
          d="M24 14.16c-.09-2.05-.38-4.08-.49-6.15 0-.73.18-1.92.05-2.87a2.33 2.33 0 0 0-.59-1.39A3 3 0 0 0 21.32 3a19.25 19.25 0 0 0-3.62 0c-1.22 0-2.45 0-3.68-.06s-2.47-.13-3.68-.22S8 2.45 6.76 2.46a38.2 38.2 0 0 0-5.08.63 2 2 0 0 0-1.19.7A2.6 2.6 0 0 0 0 5.11 17.07 17.07 0 0 0 .15 8c.1 2.07.05 4.13.1 6.2 0 .89.06 1.79.13 2.68a10.93 10.93 0 0 0 .35 2.2 2.79 2.79 0 0 0 .89 1.45 3.9 3.9 0 0 0 1.65.63 34.19 34.19 0 0 0 3.66.16c1.76.13 3.53.19 5.3.18s3.56-.11 5.32-.3c.93-.1 2-.11 3-.26a6.41 6.41 0 0 0 1.34-.33 2.78 2.78 0 0 0 1.42-1.31 6.35 6.35 0 0 0 .69-2.44 24.36 24.36 0 0 0 0-2.7ZM.71 5.72A4.4 4.4 0 0 1 1 4.18a1.36 1.36 0 0 1 .81-.46 34.37 34.37 0 0 1 4.92-.54c1.19 0 2.41.16 3.51.26s2.47.21 3.71.28 2.48.11 3.72.13a24.92 24.92 0 0 1 3 0 2.55 2.55 0 0 1 1.56.57 1.72 1.72 0 0 1 .33 1.19v.19c-.42.4-.84.78-1.28 1.15-1.86 1.57-3.84 3-5.63 4.63-.53.5-1.26 1.32-2 1.95a3 3 0 0 1-1.37.74 1.81 1.81 0 0 1-1.1-.46c-.72-.51-6-4.38-8-5.86C2.35 7.32.78 5.74.71 5.72Zm22.11 11.06a4.07 4.07 0 0 1-1 2.58 1.25 1.25 0 0 1-.88.35 9 9 0 0 1-.93.16c-.85.1-1.73.11-2.52.2a70.2 70.2 0 0 1-10.44.19c-.84-.05-2 .06-3.08 0A5.46 5.46 0 0 1 2.8 20c-1.17 0-1.38-2-1.5-3.16-.09-.88-.14-1.76-.18-2.63C1 12.14 1 10.07.89 8c0-.38-.09-.88-.14-1.41a17.36 17.36 0 0 0 2 2c1.39 1.17 2.92 2.21 4.36 3.32C10 14.22 10 14.47 10.89 15a2.45 2.45 0 0 0 1.53.42 3.46 3.46 0 0 0 1.58-.68c.1-.08 0 .16 2.87-2.81 1.59-1.53 3.32-2.91 5-4.4.26-.23.5-.47.74-.71a11.86 11.86 0 0 0-.07 1.24c.08 2.06.34 4.09.41 6.14a24.76 24.76 0 0 1-.13 2.58Z"
        />
      </g>
    </svg>
  );
}
