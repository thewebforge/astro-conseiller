import { JSX } from "solid-js";

interface Props extends JSX.SvgSVGAttributes<SVGSVGElement> {
  main?: string;
  accent?: string;
}

export default function GrowTeamIcon({
  main = "fill-canvas-900",
  accent = "fill-brand-500",
  ...rest
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill-rule="evenodd">
        <path
          class={main}
          d="M6.31 21.26a3.09 3.09 0 0 0-.39-.6 3.61 3.61 0 0 0-1.06-.74 1.77 1.77 0 0 0 1-2.49 2.59 2.59 0 0 0-2.62-1.56 2.52 2.52 0 0 0-1.74 1.31 2 2 0 0 0 .22 2.22 1.88 1.88 0 0 0 .75.49 3.52 3.52 0 0 0-1.16.81 3.09 3.09 0 0 0-.39.6 3 3 0 0 0-.23.7 6.52 6.52 0 0 0-.15 1.57.42.42 0 0 0 .35.43.4.4 0 0 0 .45-.35A10 10 0 0 1 2.12 22l.26-.51c.09-.18.15-.36.25-.53a3.61 3.61 0 0 1 .45-.6.33.33 0 0 0 .14-.3 3.5 3.5 0 0 0 .7.08s.05 0 .08-.05a.39.39 0 0 0 .15.23 3.61 3.61 0 0 1 .45.6c.1.17.16.35.25.53l.26.51a9.68 9.68 0 0 1 .78 1.67.39.39 0 0 0 .46.34.41.41 0 0 0 .35-.46 6.49 6.49 0 0 0-.16-1.57 3 3 0 0 0-.23-.68Zm-3.23-2.05a1.15 1.15 0 0 1-.53-.44.87.87 0 0 1 .1-.95 1.24 1.24 0 0 1 .84-.59 1.32 1.32 0 0 1 1.39.69c.44.8-.3 1.91-1.8 1.29Zm11.47 2.05a3.09 3.09 0 0 0-.39-.6 3.61 3.61 0 0 0-1.06-.74 1.77 1.77 0 0 0 1.05-2.49 2.59 2.59 0 0 0-2.62-1.56 2.52 2.52 0 0 0-1.79 1.31A2 2 0 0 0 10 19.4a1.88 1.88 0 0 0 .75.49 3.52 3.52 0 0 0-1.16.81 3.09 3.09 0 0 0-.39.6 3 3 0 0 0-.23.66 6.52 6.52 0 0 0-.15 1.57.42.42 0 0 0 .35.47.4.4 0 0 0 .45-.35 10 10 0 0 1 .74-1.65l.26-.51c.09-.18.15-.36.25-.53a3.61 3.61 0 0 1 .45-.6.33.33 0 0 0 .14-.3 3.5 3.5 0 0 0 .7.08s.05 0 .08-.05a.39.39 0 0 0 .15.23 3.61 3.61 0 0 1 .45.6c.1.17.16.35.25.53l.26.51a9.68 9.68 0 0 1 .78 1.67.39.39 0 0 0 .46.34.41.41 0 0 0 .35-.46 6.49 6.49 0 0 0-.16-1.57 3 3 0 0 0-.23-.68Zm-3.23-2.05a1.15 1.15 0 0 1-.53-.44.87.87 0 0 1 .1-.95 1.24 1.24 0 0 1 .84-.59 1.32 1.32 0 0 1 1.39.69c.44.81-.3 1.9-1.8 1.29Zm11.47 2.05a3.09 3.09 0 0 0-.39-.6 3.56 3.56 0 0 0-1-.74 1.77 1.77 0 0 0 1-2.49 2.59 2.59 0 0 0-2.62-1.56A2.52 2.52 0 0 0 18 17.18a2 2 0 0 0 .22 2.22 2 2 0 0 0 .75.49 3.56 3.56 0 0 0-1.17.81 3.09 3.09 0 0 0-.39.6 3 3 0 0 0-.23.66 6.52 6.52 0 0 0-.18 1.57.42.42 0 0 0 .35.47.4.4 0 0 0 .45-.35 10 10 0 0 1 .8-1.65l.26-.51c.09-.18.15-.36.25-.53a3.61 3.61 0 0 1 .45-.6.33.33 0 0 0 .14-.3 3.51 3.51 0 0 0 .71.08s0 0 .07-.05a.36.36 0 0 0 .15.23 3.61 3.61 0 0 1 .45.6c.1.17.16.35.25.53l.26.51a9.68 9.68 0 0 1 .78 1.67.39.39 0 0 0 .46.34.41.41 0 0 0 .35-.46 6.49 6.49 0 0 0-.18-1.59 3 3 0 0 0-.21-.66Zm-3.22-2.05a1.15 1.15 0 0 1-.53-.44.87.87 0 0 1 .1-.95 1.24 1.24 0 0 1 .84-.59 1.32 1.32 0 0 1 1.39.69.89.89 0 0 1-.49 1.33c-.28.11 0 .15-.47.15a2.76 2.76 0 0 1-.84-.19ZM16.25 6.73A3.21 3.21 0 0 0 15.8 6a4.78 4.78 0 0 0-1.49-1.12 2.37 2.37 0 0 0 .78-2.18A3 3 0 0 0 12.81 0a3.45 3.45 0 0 0-3.12 1.58 2.29 2.29 0 0 0 .66 3.32h.1a7.91 7.91 0 0 0-1.39 1.21 4.47 4.47 0 0 0-.73 1.08 3 3 0 0 0-.23 2.36.4.4 0 0 0 .49.28.41.41 0 0 0 .29-.5 1.48 1.48 0 0 1 .17-.74 5.51 5.51 0 0 1 .45-.75c.16-.25.34-.5.5-.77.39-.6.7-1.21 1-1.67 0 0 0-.08.06-.13a5.16 5.16 0 0 0 1 .23.36.36 0 0 0 .41-.29.36.36 0 0 0-.29-.42 3.91 3.91 0 0 1-.71-.23 2.2 2.2 0 0 1-.58-.37 1.29 1.29 0 0 1-.39-1.52 2 2 0 0 1 .68-.8 2 2 0 0 1 1.43-.5A1.71 1.71 0 0 1 14 2.87c.15.75-.06 1.55-.94 1.62a.41.41 0 1 0 0 .81 2 2 0 0 0 .61-.12.34.34 0 0 0 .13.25 5.39 5.39 0 0 1 .91 1.32l.3.58a7.44 7.44 0 0 1 .8 2.16.42.42 0 0 0 .83-.07 7.52 7.52 0 0 0-.13-1.89 3.43 3.43 0 0 0-.26-.8Z"
        />
        <path
          class={accent}
          d="m14.78 12.21-2 1.26-.15.12c.07-.43.14-.87.18-1.31a4.87 4.87 0 0 0 0-.66 4.85 4.85 0 0 0 0-.66c-.06-.52-.18-1-.23-1.53a.37.37 0 0 0-.35-.43.36.36 0 0 0-.38.33 9.66 9.66 0 0 0-.37 1.57 5.17 5.17 0 0 0 0 .68 5 5 0 0 0 .05.67c0 .38.11.75.18 1.13l-.38-.25c-.57-.35-1.15-.65-1.73-1a.35.35 0 1 0-.43.56l2 1.95a6.77 6.77 0 0 0 .59.57.76.76 0 0 0 .78.11 1.82 1.82 0 0 0 .45-.31c.22-.2.41-.47.58-.64l1.7-1.54a.4.4 0 0 0 .08-.57.41.41 0 0 0-.57-.05Zm-7.9.29c-.41.21-.81.42-1.19.65a7.32 7.32 0 0 0-.81.5h-.06a11.22 11.22 0 0 1 .38-1.25l.37-.8a8 8 0 0 1 .43-.72 4.89 4.89 0 0 1 1.29-1.57.37.37 0 0 0 .13-.49.35.35 0 0 0-.49-.14 4.93 4.93 0 0 0-2 1.45 4.13 4.13 0 0 0-.58.91 5 5 0 0 0-.35 1 6.47 6.47 0 0 0-.19 1.31l-2-1.6a.36.36 0 0 0-.51 0 .37.37 0 0 0 0 .5l1.92 2.35.54.52c-.06.07.22.2.3.24a.67.67 0 0 0 .36.08 1.27 1.27 0 0 0 .65-.2 5.22 5.22 0 0 0 .68-.63 8.36 8.36 0 0 1 .54-.61l1-.83a.41.41 0 0 0-.45-.68Zm16.47-.77a.35.35 0 0 0-.5 0l-2 1.6a7.26 7.26 0 0 0-.19-1.31 5.06 5.06 0 0 0-.36-1 4.49 4.49 0 0 0-.57-.91 5.07 5.07 0 0 0-2-1.45.36.36 0 1 0-.36.63 4.89 4.89 0 0 1 1.31 1.57l.41.76.37.8c.13.26.25.83.37 1.25h-.05c-.27-.18-.53-.35-.81-.5s-.79-.44-1.2-.65a.41.41 0 0 0-.56.12.4.4 0 0 0 .12.56l1 .83c.21.18.41.38.61.58a4.65 4.65 0 0 0 .68.63 1.24 1.24 0 0 0 .64.2.66.66 0 0 0 .36-.08c.09 0 .37-.17.3-.24l.55-.52 1.91-2.35a.35.35 0 0 0-.03-.52Z"
        />
      </g>
    </svg>
  );
}