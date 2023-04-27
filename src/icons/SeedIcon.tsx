import { JSX } from "solid-js";

interface Props extends JSX.SvgSVGAttributes<SVGSVGElement> {
  main?: string;
  accent?: string;
}

export default function SeedIcon({
  main = "fill-canvas-900",
  accent = "fill-brand-500",
  ...rest
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill-rule="evenodd">
        <path
          class={main}
          d="M20.67 8.44a10 10 0 0 0-1.78.22 4.09 4.09 0 0 0-1.17.43 22.2 22.2 0 0 0-2.19 1.67 4.6 4.6 0 0 1-.92.53 2.84 2.84 0 0 1-1.18.18 1.37 1.37 0 0 1-.95-.4.92.92 0 0 1 0-1 11.55 11.55 0 0 1 1.29-1.88 4.29 4.29 0 0 0 .55-.92 1 1 0 0 0 0-.76 1.51 1.51 0 0 0-.39-.51 6.67 6.67 0 0 0-.81-.6c-.15-.1-.31-.21-.47-.3a5.31 5.31 0 0 0-.53-.27.72.72 0 0 0-.41 0 2.39 2.39 0 0 0-.43.25l-1.47.82a17.42 17.42 0 0 1-2.7 1.32 3.59 3.59 0 0 1-1.77.24 3.15 3.15 0 0 1-.82-.23.9.9 0 0 1-.45-.41c0-.11 0-.23.09-.35a2.55 2.55 0 0 1 .37-.57 9.2 9.2 0 0 1 1.4-1.39 14.13 14.13 0 0 1 1.64-1.17 42.2 42.2 0 0 1 3.61-1.75c.43-.19.86-.42 1.31-.58A3.65 3.65 0 0 1 13.3.8a6.29 6.29 0 0 1 1.93.11 8.34 8.34 0 0 1 1.86.64c.33.16.64.34.95.53.74.45 1.44 1 2.2 1.41a.28.28 0 0 0 .38-.1.27.27 0 0 0-.1-.38c-.74-.46-1.42-1-2.14-1.47-.32-.2-.65-.4-1-.58a9.45 9.45 0 0 0-2-.75A6.91 6.91 0 0 0 13.23 0a4.18 4.18 0 0 0-1.05.22c-.46.16-.92.38-1.37.56-.74.3-1.51.61-2.25 1-.51.23-1 .48-1.48.75a14.19 14.19 0 0 0-1.79 1.15 10.29 10.29 0 0 0-1.58 1.51 4.11 4.11 0 0 0-.6 1 1.42 1.42 0 0 0 0 1 1.8 1.8 0 0 0 .71.81 3.86 3.86 0 0 0 1.34.45 4.67 4.67 0 0 0 2.3-.28 17.72 17.72 0 0 0 2.86-1.42L11.75 6l.15-.09.65.35.54.36c.13.09.46.11-.14 1a8.4 8.4 0 0 0-1.48 2.53 1.61 1.61 0 0 0 .38 1.5 2.07 2.07 0 0 0 1.21.61 3.42 3.42 0 0 0 1.86-.26 5.23 5.23 0 0 0 1.08-.63 19.74 19.74 0 0 1 2.07-1.67 3.86 3.86 0 0 1 1-.39 8.62 8.62 0 0 1 1.65-.23.32.32 0 0 0 0-.64Z"
        />
        <path
          class={accent}
          d="M5.58 12.86a.33.33 0 0 0-.07-.45c-.14-.17-.22-.38-.36-.59a2.51 2.51 0 0 0-.27-.37c-.22-.22-.46-.34-.65-.52a.29.29 0 0 0-.39-.09.28.28 0 0 0-.1.38A4 4 0 0 0 4 12a1 1 0 0 0 .18.28 1.88 1.88 0 0 0 .25.24 2.65 2.65 0 0 0 .72.42.33.33 0 0 0 .43-.08Zm3.6 1.56a3.72 3.72 0 0 0-.76.35 1.86 1.86 0 0 0-.28.21 1.31 1.31 0 0 0-.22.25 5.93 5.93 0 0 0-.36.71.28.28 0 0 0 0 .4.28.28 0 0 0 .39 0 6.52 6.52 0 0 0 .77-.43 2.24 2.24 0 0 0 .34-.35c.17-.2.28-.41.45-.59a.32.32 0 0 0 .1-.44.32.32 0 0 0-.43-.11Zm6.57 1.7a.31.31 0 0 0-.1-.44c-.16-.18-.26-.39-.42-.59a1.54 1.54 0 0 0-.35-.37 3.25 3.25 0 0 0-.82-.44.28.28 0 0 0-.36.44c.14.21.22.43.37.66a1.64 1.64 0 0 0 .21.25 1.94 1.94 0 0 0 .27.21 3.34 3.34 0 0 0 .76.37.31.31 0 0 0 .44-.09Zm-2.32 1.95c-.33 0-.64-.09-1-.12a3 3 0 0 0-.42 0 2 2 0 0 0-.43 0 9.17 9.17 0 0 0-1 .28.28.28 0 0 0 0 .56c.34.06.65.15 1 .18a3 3 0 0 0 .42 0l.5.03a9.2 9.2 0 0 0 1-.26.32.32 0 0 0 .28-.35.31.31 0 0 0-.35-.32ZM6 17.83a5.47 5.47 0 0 0-.54.41.91.91 0 0 0-.18.21 1.67 1.67 0 0 0-.12.23c-.09.21-.14.4-.23.61a.32.32 0 0 0 .5.4 4.69 4.69 0 0 0 .55-.42 1 1 0 0 0 .19-.21.89.89 0 0 0 .14-.25 4.07 4.07 0 0 0 .16-.67.28.28 0 0 0-.09-.39.27.27 0 0 0-.38.08Zm-.3 3.63a6.73 6.73 0 0 0-.52.65 1.15 1.15 0 0 0-.14.32 1.24 1.24 0 0 0-.09.33 7.77 7.77 0 0 0-.08.83.32.32 0 0 0 .22.4.33.33 0 0 0 .4-.22c.13-.23.28-.43.41-.67a1.92 1.92 0 0 0 .1-.29 1.31 1.31 0 0 0 .1-.32c.05-.28.05-.53.08-.81a.28.28 0 0 0-.15-.37.29.29 0 0 0-.33.15Zm5.67 1.05a2.39 2.39 0 0 0-.27-.43 3.71 3.71 0 0 0-.72-.59.29.29 0 0 0-.4 0 .27.27 0 0 0 0 .39c.1.25.13.48.23.73a1.56 1.56 0 0 0 .16.28 1.71 1.71 0 0 0 .21.26 4.08 4.08 0 0 0 .66.52.33.33 0 0 0 .45 0 .32.32 0 0 0 0-.45c-.15-.22-.21-.48-.32-.71Zm4.33-2.37a.29.29 0 1 0-.57 0 5 5 0 0 0-.22.84 1.82 1.82 0 0 0 .07.71 7.25 7.25 0 0 0 .28.78.32.32 0 0 0 .37.27.33.33 0 0 0 .27-.36c0-.28.06-.53.08-.8v-.33a1.88 1.88 0 0 0-.05-.33c-.06-.29-.17-.51-.23-.78Z"
        />
      </g>
    </svg>
  );
}