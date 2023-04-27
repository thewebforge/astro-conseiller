import { JSX } from "solid-js";

interface Props extends JSX.SvgSVGAttributes<SVGSVGElement> {
  main?: string;
  accent?: string;
}

export default function DecouuverteIcon({
  main = "fill-canvas-900",
  accent = "fill-brand-500",
  ...rest
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill-rule="evenodd">
        <path
          class={main}
          d="M18.86 18.1a.29.29 0 0 0 .31-.27.28.28 0 0 0-.27-.3c-1.9-.19-2.74-1.44-2.64-2.67a2.65 2.65 0 0 1 2.81-2.36 2.36 2.36 0 0 1 2.41 2.3 2.45 2.45 0 0 1-1.93 2.88.32.32 0 0 0 .08.64 2.72 2.72 0 0 0 1.09-.32 8.71 8.71 0 0 1 .73 1l.35.58.34.61a10.72 10.72 0 0 1 .65 1.57.32.32 0 0 0 .63-.13 8 8 0 0 0-.33-1.83 4.71 4.71 0 0 0-.33-.76 4 4 0 0 0-.49-.68 5.2 5.2 0 0 0-.91-.75 3.57 3.57 0 0 0 1-2.85 3.31 3.31 0 0 0-3.33-3.31 3.6 3.6 0 0 0-3.72 3.4c-.02 1.55 1.1 3.15 3.55 3.25ZM9.7 22.07a.3.3 0 0 0 .07-.26A8 8 0 0 0 9.43 20a3.43 3.43 0 0 0-.33-.76 4 4 0 0 0-.48-.68 5.2 5.2 0 0 0-.91-.75 3.61 3.61 0 0 0 1-2.85 3.33 3.33 0 0 0-3.34-3.31A3.59 3.59 0 0 0 1.68 15a3.08 3.08 0 0 0 1.77 2.89 7.47 7.47 0 0 0-1.28.85 5 5 0 0 0-1 1.12 3.26 3.26 0 0 0-.46 2.54H.27a.29.29 0 0 0 0 .57c3.11 0 5.13.12 8.25.12h1.6c.82-.1.92-.41.34-.84a.9.9 0 0 0-.76-.18Zm-1.23 0c-2.39.07-4.77.19-7.14.3v-.08a2.51 2.51 0 0 1 .43-1.4 6.83 6.83 0 0 1 .9-1.14 21.49 21.49 0 0 1 1.53-1.59 4.39 4.39 0 0 0 1 .14.29.29 0 1 0 0-.57c-1.9-.19-2.73-1.44-2.63-2.67a2.64 2.64 0 0 1 2.81-2.36A2.36 2.36 0 0 1 7.82 15a2.45 2.45 0 0 1-1.92 2.9.33.33 0 0 0-.29.36.32.32 0 0 0 .36.28 2.72 2.72 0 0 0 1.1-.32 10 10 0 0 1 .72 1c.13.19.24.39.36.58s.23.4.33.61a9.72 9.72 0 0 1 .65 1.57c0 .06.06.09.09.14Z"
        />
        <path
          class={main}
          d="M23.68 22.26c-1.8-.07-3.61-.12-5.42-.16v-.25a20 20 0 0 0-.65-2.85 3.12 3.12 0 0 0-.3-.61.93.93 0 0 0-.35-.31 6.2 6.2 0 0 0-1.6-.27 17.77 17.77 0 0 0-3.44.07 2.74 2.74 0 0 0-1.12.36.66.66 0 0 0-.31.66c.16.94.53 1.8.76 2.68 0 .15.07.31.1.47a2.8 2.8 0 0 0 .49 1 27.85 27.85 0 0 0 3.42 0c2.81-.05 5.61-.13 8.41-.16a.33.33 0 0 0 .33-.33.32.32 0 0 0-.32-.3ZM15.49 22h-3.44c0-.21-.05-.41-.08-.62-.15-.79-.41-1.59-.51-2.42h.08a14.76 14.76 0 0 1 3.05-.12 13.52 13.52 0 0 1 1.94.11l.25.42a17.9 17.9 0 0 1 .85 2.7Z"
        />
        <path
          class={accent}
          d="M7.93 9.72a.27.27 0 0 0 .36-.17 7.42 7.42 0 0 1 1.62-2.47A3 3 0 0 1 12.3 6a2.55 2.55 0 0 1 1.29.57 3.28 3.28 0 0 1 .92 1.15 4.58 4.58 0 0 1 .48.93 1.78 1.78 0 0 1-.75.2c-.61 0-1.25-.07-1.8-.05-.39 0-.79.06-1.18.11-.58.09-1.15.2-1.72.32a.32.32 0 0 0 .11.64c.56-.08 1.13-.16 1.69-.21a10.29 10.29 0 0 1 1.11 0 16.8 16.8 0 0 0 2.17.15 2.45 2.45 0 0 0 1.07-.37.67.67 0 0 0 .31-.6 7.3 7.3 0 0 0-.46-1.54 4.12 4.12 0 0 0-1.23-1.55A3.49 3.49 0 0 0 12.39 5a1.55 1.55 0 0 0-.22 0c.05-.35.09-.71.11-1.07s0-.43 0-.65v-.65c-.07-.5-.2-1-.29-1.49a.29.29 0 0 0-.29-.28.3.3 0 0 0-.28.29 17.13 17.13 0 0 0-.19 1.74 7 7 0 0 0 .06 1c0 .41.11.8.16 1.2A4.08 4.08 0 0 0 9.79 6a7.58 7.58 0 0 0-2 3.32.27.27 0 0 0 .14.4Z"
        />
      </g>
    </svg>
  );
}
