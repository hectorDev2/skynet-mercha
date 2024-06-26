export const ClientSection = ({
  title,
  theme = "primary",
  image,
  color,
}: {
  title: string;
  theme: string;
  image: string;
  color: string;
}) => {
  return (
    <div className="my-[50px] grid mx-[10px] md:mx-[100px] lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {title}
        </span>
      </h2>
      <p className="text-muted-foreground text-xl mt-4 mb-8 "></p>
      <div className="flex flex-col gap-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex-col p-6 space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-12"
                fill={`var(--${theme})`}
              >
                <title>Free Icons</title>
                <g id="Layer_10" data-name="Layer 10">
                  <path
                    className="cls-1"
                    d="M21.55,80.68c.08-4.89.14-9.73.08-14.61l-.11-5.33c-.07-6.26-.16-12.52-.39-18.78-.1-2.78-.27-5.57-.5-8.31-.33-3.52-.62-7.07-.9-10.53-.07-1.08.21-1,.77-.19a10.42,10.42,0,0,1,1.64,4.58A107.94,107.94,0,0,1,23,38.41q.24,5.45.26,10.93c0,4.37.25,8.92.33,13.39.09,4.91.13,9.84.08,14.76,0,3-.06,6,0,9.06.05,4.57.13,9.16.5,13.67.29,3.51.81,6.92,1.4,10.34.14.75.27,1.49.41,2.24.49,2.82.54,3.73,0,4.45a3.13,3.13,0,0,1-.35.48c-.43.36-1-.72-1.54-2.78a104.72,104.72,0,0,1-2.42-19.44c-.23-4.94-.19-9.89-.18-14.82Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M49.41,104.67c4.89.25,9.8.35,14.7.3,1.79,0,3.57-.14,5.36-.17,6.3-.16,12.61-.54,18.87-1.26,2.78-.33,5.56-.77,8.29-1.27,1.75-.35,3.5-.69,5.24-1.1s3.5-.68,5.26-1c1.1-.18,1,.13.22.72A15,15,0,0,1,103,103c-3.58.92-7.22,1.54-10.87,2.12s-7.33.88-11,1.08c-4.43.27-9,.68-13.55.81q-7.45.24-14.93,0c-3.06-.1-6.12-.23-9.18-.42l-13.84-1c-3.57-.25-7.07-.39-10.61-.67-.77-.07-1.54-.1-2.32-.19-2.9-.31-3.8-.63-4.32-1.38a2.82,2.82,0,0,1-.34-.51c-.2-.56,1-.81,3.14-.68,6.27.4,12.85.93,19.5,1.42,4.95.36,9.87.79,14.81,1Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M34.75,75.38c0,2.72,0,5.45,0,8.17l.11,3c.09,3.5.14,7,.49,10.46,0,.36.09.73.16,1.07,0,.12,0,.19.07.28s.07.18.17.19a1.35,1.35,0,0,0,.29,0,4.41,4.41,0,0,0,.53,0c.37,0,.77,0,1.15,0,1-.07,1.94-.22,2.91-.35s2-.2,2.93-.31c.57-.06.62.25.18.72A5.16,5.16,0,0,1,41.27,100c-1,.17-1.94.32-2.93.43-.5,0-1,.09-1.52.1a7.6,7.6,0,0,1-.82,0,3.49,3.49,0,0,1-.66-.11c-.22-.06-.44-.11-.66-.19-.89-.41-1-2-1-2.27-.07-.56-.12-1.11-.16-1.66-.07-1.09-.1-2.17-.11-3.26,0-2.47-.22-5-.28-7.52C33,82.7,33,79.94,33,77.18l.07-5.09c0-1.29.07-2.58.14-3.87,0-.65.07-1.29.14-1.94a8.62,8.62,0,0,1,.15-1.11c.08-.43.22-.9.67-1a3.41,3.41,0,0,1,1,0l.77.06,1.46.13a25.11,25.11,0,0,0,2.87,0c.41,0,.81,0,1.21-.09,1.47-.17,1.76-.28,2.26-.13.11,0,.25,0,.35.06s.18.25,0,.56a2.77,2.77,0,0,1-1.33.88,14.22,14.22,0,0,1-5.64.31l-1.38-.12-.61,0h0s0,0,0,0c-.05.41-.09.86-.12,1.31-.15,2.67-.19,5.44-.19,8.18Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M44.13,80.37l-.1,3.7c0,.45,0,.9,0,1.35,0,1.58-.11,3.17-.13,4.75,0,.71,0,1.41.07,2.11l.1,1.34A7.93,7.93,0,0,1,44,94.93a.28.28,0,0,1-.08.12l-.06,0h0l-.13.05-.06,0c.13,0,.07,0,0,0h-.11a.68.68,0,0,1-.23-.11,2,2,0,0,1-.85-1.17,30,30,0,0,1-.06-5.53c.09-1.11,0-2.25,0-3.39l0-3.73,0-2.3c0-1.16,0-2.32,0-3.48,0-.89-.15-1.77-.22-2.66,0-.2,0-.39-.05-.59,0-.74.12-1,.61-1.11a2,2,0,0,1,.33-.08c.37,0,.67.26.75.78a30,30,0,0,1,.3,4.88l0,3.72Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M56.93,68c0,3.21,0,6.43.09,9.64l.12,3.52c.09,4.13.17,8.27.41,12.38.06.92.13,1.83.24,2.73l.09.66.06.33,0,.18c0,.09,0,.23.14.27a1.12,1.12,0,0,0,.32,0h.73l.84,0,1.72-.18c1.14-.16,2.31-.22,3.44-.35.68-.08.72.23.18.72a6.51,6.51,0,0,1-3,1.4,26,26,0,0,1-3.74.37l-.31,0a3.4,3.4,0,0,1-.45,0,4.21,4.21,0,0,1-.81-.23c-.1-.08-.27-.09-.32-.24a3.7,3.7,0,0,1-.28-.28,2.51,2.51,0,0,1-.31-.79l-.08-.43,0-.25L56,96.87,55.88,96c-.19-2.44-.24-4.84-.25-7.26,0-2.9-.21-5.9-.27-8.85q-.11-4.87-.13-9.74v-6c0-3,0-6.06.16-9.09a13,13,0,0,1,.18-2,1.36,1.36,0,0,1,.21-.54.89.89,0,0,1,.49-.23,5.26,5.26,0,0,1,1.2,0c1.16.11,2.28.22,3.4.25.49,0,1,0,1.45,0A14.79,14.79,0,0,1,65,52.39c.12,0,.27,0,.38,0s.2.26-.07.61a3.06,3.06,0,0,1-1.62.93c-2.24.56-4.5.16-6.52,0A37,37,0,0,0,57,58.24c0,3.22,0,6.47,0,9.72Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M65.74,73.72,65.67,79c0,.64,0,1.28,0,1.92l-.09,6.73c0,1,0,2,.08,3l.11,1.9a14.12,14.12,0,0,1-.09,1.87.48.48,0,0,1-.07.18s0,.07-.29.14l.12,0H65.4l-.1,0a.71.71,0,0,1-.24-.16,3.22,3.22,0,0,1-.85-1.67,61.8,61.8,0,0,1-.1-7.82c.09-1.57,0-3.19,0-4.8V71.65c0-1.64,0-3.29,0-4.92,0-1.27-.17-2.51-.25-3.77,0-.27,0-.55-.06-.83,0-1,.12-1.39.6-1.58.11,0,.22-.1.33-.13.38-.07.67.36.75,1.09a60,60,0,0,1,.37,6.93v5.28Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M79.38,59.1q0,5.84.16,11.67L79.69,75c.12,5,.25,10,.5,15,.11,2.21.3,4.45.58,6.59,0,.25,0,.29.07.4s0,.2.17.2l.2,0h.26l.85,0c.58,0,1.16-.08,1.75-.15,1.17-.11,2.36-.2,3.53-.34.81-.11.83.21.16.73a8.66,8.66,0,0,1-3.63,1.45c-.59.08-1.18.14-1.79.19-.3,0-.62,0-.94,0a6.43,6.43,0,0,1-.77-.05,7.69,7.69,0,0,1-.79-.21c-.1-.08-.23-.12-.29-.24a.7.7,0,0,1-.26-.28,2.43,2.43,0,0,1-.27-.77l-.09-.43,0-.25-.06-.45c-.08-.6-.15-1.18-.19-1.77-.1-1.17-.16-2.34-.22-3.5-.1-2.34-.16-4.67-.18-7,0-3.5-.26-7.13-.35-10.7-.1-3.92-.16-7.85-.2-11.78l0-7.25c0-3.66,0-7.34.17-11,0-.88.07-1.75.14-2.64l.06-.66,0-.34c0-.16.06-.32.09-.48a2.1,2.1,0,0,1,.34-.84.79.79,0,0,1,.77-.27c.92.13,1.29.18,1.83.24s1,.11,1.55.14,1.18.06,1.77.07a17.79,17.79,0,0,0,2.2-.09c.44,0,.65,0,.94-.08a1.79,1.79,0,0,0,.39-.13c.09,0,.16,0,.18.13a.88.88,0,0,1-.18.6,3.11,3.11,0,0,1-2,1.06,14.18,14.18,0,0,1-3.37.15c-.56,0-1.11-.1-1.66-.17s-1.36-.2-1.17-.15c0,0,0,0,0,.06s0,0,0,.08l0,.52c-.07.7-.1,1.44-.14,2.19-.06,1.48-.09,3-.11,4.52,0,3.89,0,7.83,0,11.75Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M88.36,64.82l-.09,7.39,0,2.69c0,3.17-.07,6.34-.11,9.51,0,1.4,0,2.81.07,4.21,0,.89.07,1.79.1,2.69s0,1.82-.09,2.65a.61.61,0,0,1-.08.26l-.07.08,0,0-.17.06s0,0,0,0c.21-.07.08,0,.1,0h0l-.1,0a.89.89,0,0,1-.24-.24,5.47,5.47,0,0,1-.84-2.38c-.17-3.66-.23-7.32-.07-11,.09-2.21,0-4.5,0-6.76V66.45l0-4.58c0-2.32,0-4.64,0-6.94,0-1.78-.17-3.53-.25-5.3,0-.39,0-.77-.06-1.17,0-1.45.12-1.94.6-2.23.12-.06.23-.15.34-.19.37-.11.65.48.74,1.53.29,3.13.35,6.46.37,9.79v7.46Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M33.63,86.13l.1-2.6.15-2.6c0-.63,0-1.26,0-1.89.14-2.24.31-4.47.38-6.71,0-1,0-2-.07-3a10.71,10.71,0,0,1,.12-3.78c.11-.4.58-.38,1.14-.09a4.47,4.47,0,0,1,.91.64,1.67,1.67,0,0,1,.6,1,33.87,33.87,0,0,1,.52,3.85,31.9,31.9,0,0,1-.13,3.9,36,36,0,0,0,.15,4.75c0,1.75.06,3.5,0,5.25l0,3.23c0,1.63-.06,3.27,0,4.89.08,1.25.42,2.48.58,3.72a8.11,8.11,0,0,1,.12.82,1.52,1.52,0,0,1-.32,1.11,1.75,1.75,0,0,1-1,.49,4.34,4.34,0,0,1-.6.14,1.65,1.65,0,0,1-1.64-1,11.41,11.41,0,0,1-.86-3.35c-.15-1.14-.21-2.31-.26-3.48-.06-1.73,0-3.48,0-5.23Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M56,81.05l.08-3.42.14-3.42c0-.83,0-1.66,0-2.49.12-2.94.28-5.87.34-8.81,0-1.3,0-2.6-.06-3.89a21.76,21.76,0,0,1,.09-5c.09-.52.5-.48,1-.07a4.06,4.06,0,0,1,.81.87A2.54,2.54,0,0,1,59,56.13c.2,1.69.4,3.38.47,5.08s0,3.4-.12,5.11c-.15,2.05.09,4.17.12,6.26,0,2.29,0,4.59,0,6.89l-.05,4.24c0,2.15,0,4.3.05,6.42.07,1.65.37,3.27.52,4.9,0,.36.1.71.11,1.08a2.53,2.53,0,0,1-.28,1.44,1.48,1.48,0,0,1-.83.64,4.25,4.25,0,0,1-.53.19c-.58.13-1.1-.42-1.45-1.38a36.15,36.15,0,0,1-1-9c-.05-2.29,0-4.59,0-6.89Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M78.45,75.22l.09-4.47.15-4.48c0-1.08,0-2.17,0-3.26.13-3.83.29-7.66.36-11.5,0-1.7,0-3.4,0-5.09a38,38,0,0,1,.09-6.49c.09-.67.5-.62,1-.07A5.63,5.63,0,0,1,80.91,41a4.1,4.1,0,0,1,.53,1.68c.2,2.21.4,4.42.46,6.64s0,4.44-.13,6.68c-.15,2.67.08,5.44.11,8.18,0,3,0,6,0,9l-.05,5.54c0,2.8-.06,5.61,0,8.39.07,2.16.37,4.27.52,6.4,0,.47.09.93.11,1.41,0,1.76-.35,2.33-1.11,2.71a3.59,3.59,0,0,1-.53.25c-.58.17-1.1-.55-1.45-1.82a61.48,61.48,0,0,1-1-11.85c0-3,0-6,0-9Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M113.37,98.22a.59.59,0,0,0,.16-.08l.1-.08c.05,0,.05,0,0-.06l-.16-.08-.12-.06s-.32-.11-.49-.17c-.61-.19-1.23-.34-1.83-.56-2.1-.77-4.14-1.67-6.17-2.59l-2.73-1.18a9,9,0,0,1-3.3-2.1c-.3-.35.06-.53.56-.62a3.06,3.06,0,0,1,1.75.11c2.21.93,4.5,2,6.8,3.07a36.68,36.68,0,0,0,4.38,1.55l.9.28.45.14.25.07.39.1c.53.11,1,.26,1.55.35l1.59.27,0,.27-.3.42c-.21.28-.4.52-.6.77s-.49.59-.76.87l-.87.82c-.5.44-.86.72-1.3,1.08-1.29,1-2.62,1.94-3.87,2.93-1,.76-1.86,1.62-2.77,2.43-.2.18-.39.38-.59.55-.78.64-1.12.72-1.65.4a3.28,3.28,0,0,1-.37-.22c-.35-.29-.26-.84.24-1.42a32.47,32.47,0,0,1,5.13-4.56l2.06-1.52,1-.77.48-.39c.09-.06.05,0,.08,0Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M72.14,35A81.06,81.06,0,0,1,62,39.5c-1.27.44-2.51,1-3.78,1.38A102.21,102.21,0,0,1,44.49,44l-3.1.45c-1,.14-2.07.23-3.1.33-1.32.11-2.65.19-4,.2a18.71,18.71,0,0,1-4-.32c-.84-.2-.66-.32.05-.42.35,0,.84-.13,1.44-.24s1.27-.17,2-.22c1.32-.05,2.64-.26,4-.4l2-.29c.66-.08,1.32-.16,2-.28,2.63-.4,5.26-.91,7.88-1.47A68.88,68.88,0,0,0,59,38.42c1.67-.68,3.39-1.25,5-2.05s3.33-1.42,4.9-2.32l3-1.56c1-.49,1.9-1.15,2.85-1.72a73.78,73.78,0,0,0,8.24-5.84c1-.88,1.9-1.77,2.81-2.67l1.38-1.34c.46-.45.86-1,1.29-1.43s.73-.85,1.12-1.26c1.44-1.54,2-1.89,2.88-1.76a4.32,4.32,0,0,1,.56.1c.55.21.27,1.14-.71,2.4a39.79,39.79,0,0,1-4.85,5.42c-.91.83-1.84,1.66-2.77,2.49s-2,1.51-3,2.27L79.39,30.8c-.76.54-1.59,1-2.38,1.49-1.6,1-3.15,2-4.84,2.81Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M96.44,12.56l0-.14,0-.08c0-.05,0-.11,0-.18s-.08,0-.13,0a1.44,1.44,0,0,0-.29.11c-.48.27-1,.57-1.46.81A20.77,20.77,0,0,1,89,14.8c-.86.14-1.72.29-2.57.39a11.4,11.4,0,0,1-3.3.07c-.34,0-.29-.36,0-.7a2.31,2.31,0,0,1,1.38-.8c2.12-.29,4.17-.65,6.26-1.08a14.74,14.74,0,0,0,3.6-1.49l.74-.4,1.09-.62c.4-.22.78-.44,1.16-.63A11.33,11.33,0,0,1,98.44,9l-.13,1.79-.13,2-.11,1.39a26.59,26.59,0,0,1-.72,4.22,18.25,18.25,0,0,1-1,3.19,5.79,5.79,0,0,1-.31.67c-.46.81-.78.95-1.28.82-.11,0-.23-.06-.34-.11-.35-.17-.4-.65-.14-1.19a22.76,22.76,0,0,0,1.68-5.18c.12-.69.24-1.39.31-2.11,0-.35.07-.72.1-1.08l.06-.87Z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Exelencia
              </h3>
              <p className="text-muted-foreground text-md mt-2">
                Comparte historias detrás de cada escultura. ¿Qué inspiró al
                artista? ¿Cuál fue el proceso creativo? La excelencia radica en
                los detalles y la pasión.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex-col p-6 space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-12 "
                fill={`var(--${theme})`}
              >
                <title>Free Icons</title>
                <g id="Layer_21" data-name="Layer 21">
                  <path
                    className="cls-1"
                    d="M59.87,118c-4,.68-8.08,1.46-12.24,1.85A36.91,36.91,0,0,1,35,119.22a16.72,16.72,0,0,1-8.31-4.74,17.79,17.79,0,0,1-3.9-7.45,77.46,77.46,0,0,1-1.46-7.9c-.72-5.26-1.09-10.52-1.55-15.75a136.6,136.6,0,0,0-1.81-13.8c-.53-2.91-1.13-5.81-1.88-8.66-.19-.71-.38-1.42-.59-2.13s-.37-1.42-.55-2.13c-.42-1.41-.87-2.81-1.38-4.2-.7-1.69-.56-1.52.44-.25a25.18,25.18,0,0,1,3.87,7.09,91,91,0,0,1,2.26,9c.57,3,1,6.06,1.37,9.11.71,6.1,1,12.19,1.68,18.22a71.88,71.88,0,0,0,1.93,10.8,17.49,17.49,0,0,0,2.17,4.77,13.34,13.34,0,0,0,3.63,3.63c3.17,2.1,7.2,2.81,11.19,2.86a69.24,69.24,0,0,0,12.11-1.16l7.48-1.29c2.47-.46,4.94-1,7.39-1.59,3.71-.91,7.41-1.93,11-3.09a80.37,80.37,0,0,0,10.59-4.11,28.19,28.19,0,0,0,3.72-2.15,8,8,0,0,0,2.68-2.76A15.26,15.26,0,0,0,98,97.57a26.4,26.4,0,0,0,.13-4.18c-.07-1.23-.21-2.44-.38-3.68-.65-4.59-1.14-5.95-.49-7.24a6.47,6.47,0,0,1,.28-.82c.23-.61,1.91,1,2.77,4.58a38.31,38.31,0,0,1,.78,4.06,34.2,34.2,0,0,1,.25,4.2,29,29,0,0,1-.39,4.32l-.23,1.09-.3,1.1a10.39,10.39,0,0,1-1,2.35,12.42,12.42,0,0,1-3.57,3.32,33.67,33.67,0,0,1-3.83,2.13,73.9,73.9,0,0,1-7.91,3.14c-4,1.34-8,2.45-12,3.45s-8.11,2-12.23,2.66Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M87.47,31.43a12.15,12.15,0,0,0-4.86-.13,46.31,46.31,0,0,0-5.13,1.28c-3.45,1-6.88,2.23-10.3,3.44L59.7,38.76c-4.41,1.56-8.84,3.1-13.32,4.53A141.12,141.12,0,0,1,32.76,47a61.74,61.74,0,0,1-6.23,1,23.19,23.19,0,0,1-6.39,0l-1-.21c-.34-.09-.68-.22-1-.33a5.19,5.19,0,0,1-1-.46c-.16-.09-.32-.17-.48-.27a3.56,3.56,0,0,1-.48-.39,3.06,3.06,0,0,1-.75-1A3.26,3.26,0,0,1,15.14,44a5.23,5.23,0,0,1,.56-2.21,12.57,12.57,0,0,1,2.48-3.37,16.58,16.58,0,0,1,3.22-2.55c.75-.43,1.19-.46,1.2-.33s-.29.44-.76,1a31.83,31.83,0,0,0-4.06,5.32c-.6,1-.87,2.21-.55,2.68a1.8,1.8,0,0,0,1,.71l.35.2.41.13a5.72,5.72,0,0,0,.83.26,22.12,22.12,0,0,0,7.58.05A114.35,114.35,0,0,0,43,42.25c6.24-1.8,12.57-4.23,18.83-6.5,3.45-1.24,6.9-2.49,10.39-3.67,1.75-.59,3.5-1.15,5.28-1.68A33.49,33.49,0,0,1,83,29.15a11.4,11.4,0,0,1,7.06,1.07,9.19,9.19,0,0,1,2.71,2.48,13,13,0,0,1,1.58,3.22A35.21,35.21,0,0,1,95.7,46.26c0,3.45-.09,6.86,0,10.23q0,2,.24,3.87a16,16,0,0,0,.31,1.86c.06.31.16.6.23.89l.07.22.11.32c.07.21.13.43.18.65a1.14,1.14,0,0,1-.38,1.24,3.6,3.6,0,0,1-1.26.71,13.22,13.22,0,0,1-2,.48c-1.32.22-2.62.36-3.92.5l-3.39.38c-4.22.44-5.39.72-6.35.8-.22,0-.49.11-.64.12s-.16-.06-.08-.23a2.19,2.19,0,0,1,.64-.67,10.35,10.35,0,0,1,3.49-1.46A61.09,61.09,0,0,1,90,65.06c1.17-.16,2.35-.31,3.44-.55.27-.05.53-.12.78-.19a1.77,1.77,0,0,0,.31-.11h0s.06,0,0-.16l0,0a.46.46,0,0,1,0-.12l-.13-.49a9.22,9.22,0,0,1-.23-1c-.14-.65-.21-1.29-.29-1.93-.13-1.28-.2-2.54-.22-3.79-.06-2.5,0-5,0-7.42a52.54,52.54,0,0,0-.72-10.65A13.24,13.24,0,0,0,91.08,34a6.16,6.16,0,0,0-3.61-2.55Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M91.62,78.84c1.25-.25,2.49-.55,3.72-.86l1.84-.51L98.81,77l.17,0a.32.32,0,0,0,0-.17l0-.28,0-.73a12.57,12.57,0,0,1,0-1.36l.13-1.26.24-2.47c.14-1.64.25-3.29.29-4.94a28.3,28.3,0,0,0-.19-4.33,11.37,11.37,0,0,0-.62-2.57,2.55,2.55,0,0,0-.58-.91.8.8,0,0,0-.82-.18c-.43.14-.63-.14-.26-.69a1.45,1.45,0,0,1,1.34-.51,2.4,2.4,0,0,1,1.68,1.24,10.22,10.22,0,0,1,1,3.07,25.87,25.87,0,0,1,.35,3,35.06,35.06,0,0,1-.17,5.89c-.11,1.16-.18,2.35-.24,3.54,0,.61-.08,1.2-.07,1.72,0,.27,0,.55,0,.83l.07,1a3.67,3.67,0,0,1-.2,1.53c-.43.25-.93.44-1.39.65-.7.25-1.28.44-1.92.64q-1.89.59-3.81,1.08c-1.57.41-3.15.77-4.75,1.08a34.13,34.13,0,0,1-3.69.52,13.55,13.55,0,0,1-1.92.06,4.59,4.59,0,0,1-2.13-.52,7.71,7.71,0,0,1-2.13-2.31,16.08,16.08,0,0,1-1.36-2.64,9.89,9.89,0,0,1-.46-1.22,4,4,0,0,1-.2-1.75,1.26,1.26,0,0,1,.65-.83,1.75,1.75,0,0,1,.42-.23.68.68,0,0,1,.68.28,2.7,2.7,0,0,1,.62,1.07,21,21,0,0,0,1.92,4.16,4.82,4.82,0,0,0,1.2,1.39l0,0h0l-.2.31h0l.07-.1.13-.2h0l0,0c.07,0,.24,0,.36.07s.34,0,.5,0a4.86,4.86,0,0,0,.54,0,26.48,26.48,0,0,0,3.63-.4c1.24-.2,2.49-.47,3.74-.75Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M77,19.55a8,8,0,0,0-1.33-1.93c-.21-.19-.45-.31-.66-.48a4.19,4.19,0,0,0-2.68-.93,4.4,4.4,0,0,0-1.42.35,4.17,4.17,0,0,1-1.9.5c-.45,0-.68-2.38.12-2.63a17.14,17.14,0,0,1,2.11-.53,7.87,7.87,0,0,1,1.29-.05,5,5,0,0,1,1.28.27,8.87,8.87,0,0,1,2.78,1.25,8.11,8.11,0,0,1,2.08,2.35,14.28,14.28,0,0,1,.86,1.64c.4.83.64,1.71.95,2.55.23.66.57,1.28.8,1.95a2.26,2.26,0,0,1,.17.43c.13.57,0,.77-.62,1l-.43.14a1,1,0,0,1-1.12-.4,19.07,19.07,0,0,1-1.32-3.16,16.37,16.37,0,0,0-1-2.25Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M27.21,34.77c.28.79.57,1.59.89,2.38.11.29.27.56.38.85l1.16,3.09c.17.46.38.91.59,1.35a6.13,6.13,0,0,1,.66,1.76c.06.39-1.34.41-1.65-.21a21.48,21.48,0,0,1-1.4-3.5,19.15,19.15,0,0,0-.92-2.14c-.34-.79-.67-1.6-1-2.4-.19-.5-.39-1-.58-1.49-.3-.75-.55-1.52-.86-2.27-.23-.58-.55-1.12-.79-1.7a2.19,2.19,0,0,1-.17-.38c-.16-.49-.09-.68.3-.89l.27-.15a.66.66,0,0,1,.84.31,15.36,15.36,0,0,1,1.41,3c.29.78.6,1.57.9,2.36Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M49,17.22c-2.08.83-4.18,1.61-6.27,2.4-.76.29-1.5.63-2.27.91-2.69,1-5.4,2-8.07,3C31.2,24,30,24.48,28.88,25c-1.45.68-2.95,1.41-4.26,2.08-.27.16-.63,0-.5-.63a3.16,3.16,0,0,1,1.56-1.8,62.43,62.43,0,0,1,9.26-3.9c1.9-.65,3.79-1.52,5.68-2.28L46.89,16c1.28-.51,2.57-1,3.84-1.56,1.93-.82,3.87-1.63,5.73-2.54,1.45-.7,2.8-1.52,4.19-2.29l.91-.5c1.15-.61,1.58-.68,2-.49a2,2,0,0,1,.29.12c.24.14-.07.68-.84,1.31a35.38,35.38,0,0,1-7.76,4.55c-2.06.94-4.16,1.81-6.24,2.68Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M67.68,24.37c-.34-1-.7-2.09-1.07-3.12-.14-.38-.34-.73-.48-1.11l-1.39-4.06A16.67,16.67,0,0,0,64,14.34a5.9,5.9,0,0,1-.87-2.3c0-.53,2.38-.71,2.71.1a27.47,27.47,0,0,1,1.55,4.64,20.42,20.42,0,0,0,1.1,2.83c.4,1.05.78,2.1,1.15,3.16l.69,2c.35,1,.65,2,1,3,.28.77.69,1.47,1,2.23a5.44,5.44,0,0,1,.22.5c.2.65.1.9-.5,1.18-.13.06-.26.13-.4.18a1,1,0,0,1-1.18-.41,21,21,0,0,1-1.75-3.91c-.37-1-.74-2-1.12-3.08Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M59.88,20.52H59.8l-.59.17c-.41.11-.81.25-1.22.38-.81.28-1.62.58-2.43.91-.6.24-1.16.54-1.77.78-2.11.85-4.3,1.66-6.52,2.34l-2.94,1a11.7,11.7,0,0,1-3.88.82c-.82,0-.16-2.48,1.19-2.77,2.45-.58,4.86-1.26,7.39-2a38.41,38.41,0,0,0,4.46-1.83A52.69,52.69,0,0,1,58.6,18.4l.53-.15.75-.21,1.49-.38L62,19.4c.56,1.63,1.13,3.26,1.68,4.88.44,1.21,1,2.37,1.44,3.59.1.27.21.53.3.81.3,1,.21,1.41-.37,1.76a2.3,2.3,0,0,1-.4.23c-.46.2-.94-.13-1.26-.81-.94-2-1.72-4.23-2.52-6.46l-.73-2.07L60,20.8l0-.13h0v-.06h0Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M32.91,35.71l.42,1.42c.05.18.15.33.19.51.17.63.32,1.26.5,1.89a6.19,6.19,0,0,0,.32.81,2,2,0,0,1,.34,1.06c0,.25-1.37.38-1.53,0a8.16,8.16,0,0,1-.66-2.08A6.88,6.88,0,0,0,32,38.07c-.19-.47-.32-1-.47-1.45l-.27-.91c-.15-.45-.24-.92-.4-1.37s-.31-.66-.44-1a.83.83,0,0,1-.08-.22c-.06-.3,0-.42.29-.56l.18-.09a.56.56,0,0,1,.61.15,5.5,5.5,0,0,1,1,1.71c.21.44.33.92.5,1.38Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M33.7,35.9c.13.4.25.8.37,1.2,0,.15.13.28.17.43.14.52.28,1.07.42,1.59a5.46,5.46,0,0,0,.26.67,1.91,1.91,0,0,1,.29.89c0,.21-1.13.32-1.26,0A6.74,6.74,0,0,1,33.4,39,5.4,5.4,0,0,0,33,37.88c-.15-.39-.27-.8-.4-1.21l-.24-.75c-.14-.38-.23-.77-.37-1.14s-.29-.54-.4-.82a1.08,1.08,0,0,1-.08-.19c-.06-.24,0-.34.21-.47l.15-.08a.43.43,0,0,1,.5.1,4.43,4.43,0,0,1,.93,1.41,11.6,11.6,0,0,1,.45,1.16Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M85.33,74.08c.25-.06.45-.13.52-.44a.88.88,0,0,0-.08-.39l-.06-.37a1.16,1.16,0,0,0-.21-.34,2,2,0,0,0-.82-.61.93.93,0,0,0-.77,0c-.21.15-.22.29-.42.69-.07.11-.45.16-.84,0a1.44,1.44,0,0,1-.55-.38.87.87,0,0,1-.12-.71,2.24,2.24,0,0,1,.93-1.24,2.78,2.78,0,0,1,1.3-.43,3.22,3.22,0,0,1,2.16.56,7.3,7.3,0,0,1,1.07.9,4.61,4.61,0,0,1,.72,1.19,3.25,3.25,0,0,1-.48,3,3.36,3.36,0,0,1-1.46,1.06,3.31,3.31,0,0,1-2.72-.08A3,3,0,0,1,82,74.93a2.21,2.21,0,0,1-.16-.52c0-.58.21-.77.91-.8.16,0,.32,0,.48,0a2,2,0,0,1,1.14.41c.06.06.12.13.17.17l.13,0a.48.48,0,0,0,.18,0c.08,0,.08-.07.08-.07s0,0,.06,0a.82.82,0,0,0,.32-.12Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M84.86,74.27c.12,0,.15-.27.09-.49s-.1-.11-.13-.19a2.51,2.51,0,0,0-.42-1,.35.35,0,0,0-.28-.14c-.05,0-.11.16-.25.1a2.42,2.42,0,0,1-.51-.73c-.22-.4-.27-.92,0-1.07a1.4,1.4,0,0,1,.33-.15,1.61,1.61,0,0,1,.44,0,2.56,2.56,0,0,1,.7,0,1.73,1.73,0,0,1,.94.55c.26.31.66.43.91.75a3.77,3.77,0,0,1,.65,1.19,2.88,2.88,0,0,1,.15,1,2.12,2.12,0,0,1-.76,1.48c-.27.25-.51.59-.78.8a1.39,1.39,0,0,1-.19.15c-.12,0-.21,0-.31-.17a3.12,3.12,0,0,1-.15-.39c0-.1-.07-.22-.11-.35l-.09-.33a3.06,3.06,0,0,1-.07-.55l0-.41A1,1,0,0,1,85,74a1.31,1.31,0,0,0,.07-.55,3,3,0,0,0,.29.44l.15.16a.39.39,0,0,0,.1.08c.17.08-.14-.09-.73.12Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M88,81.45a24.29,24.29,0,0,0,2.53-.32c.31,0,.61-.17.92-.23,1.09-.21,2.19-.46,3.28-.75a14.12,14.12,0,0,0,1.43-.48A5.67,5.67,0,0,1,98,79.14c.41,0,.25,1.26-.39,1.56a18.45,18.45,0,0,1-3.76,1.15c-.79.14-1.55.47-2.35.67a26.12,26.12,0,0,1-2.66.55c-.56.07-1.12.15-1.69.18s-.85,0-1.29,0a11.53,11.53,0,0,1-1.31-.09,6.28,6.28,0,0,1-1-.16c-.17,0-.35-.06-.52-.11l-.5-.23c-.14-.08-.3-.13-.43-.22-.47-.42-.53-.64-.34-1,0-.08.09-.16.14-.23a.77.77,0,0,1,.83-.16,16.89,16.89,0,0,0,2.85.39,9.24,9.24,0,0,0,1.18,0A10.46,10.46,0,0,0,88,81.41Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M26.49,53.14l-1.13.11c-.14,0-.27,0-.41,0-.5,0-1,0-1.48,0h-.65a2.31,2.31,0,0,1-.83-.1c-.17-.06.12-.49.41-.5.52,0,1,0,1.59,0a4.63,4.63,0,0,0,1-.14l1.1-.16.68-.12c.34-.07.69-.12,1-.22s.51-.17.77-.25l.17-.06c.21,0,.29,0,.38.19a.75.75,0,0,1,.06.13.31.31,0,0,1-.15.39,3.64,3.64,0,0,1-1.38.57l-1.12.19Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M76.44,40l-1.17.15-.43.08c-.5.06-1,.12-1.51.21-.23,0-.44.1-.66.16a3.52,3.52,0,0,1-.84.19c-.19,0-.09-.49.22-.62a8.37,8.37,0,0,1,1.69-.49,7.83,7.83,0,0,0,1.05-.3c.38-.1.78-.18,1.17-.26l.72-.15,1.1-.22c.28-.05.55-.17.83-.24l.18,0c.23-.05.32,0,.4.22a.94.94,0,0,1,.06.15.38.38,0,0,1-.17.43,4.88,4.88,0,0,1-1.47.57L76.45,40Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M44.57,49.43l-.77.07-.28,0c-.33,0-.67.06-1,.11a3.34,3.34,0,0,0-.43.1,2.07,2.07,0,0,1-.55.11c-.12,0-.06-.34.14-.42a4.77,4.77,0,0,1,1.12-.31,5.84,5.84,0,0,0,.69-.18c.25-.07.51-.11.77-.16l.48-.08.72-.13c.18,0,.36-.11.54-.16l.12,0c.15,0,.2,0,.26.16l0,.1a.26.26,0,0,1-.11.3,3,3,0,0,1-1,.38l-.76.1Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M99.49,91s12.18-.88,14.94,4.77c3.94,8-25.72,15.38-33.94,17-9.44,1.85-7.43,1.59-7.43,1.59s20.5-5.4,23.43-9.41S100.21,93.08,99.49,91Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M54.63,40.73c-3.88,1.28-7.8,2.5-11.75,3.6-1.45.4-2.89.83-4.35,1.18a68.56,68.56,0,0,1-7.85,1.4,23.57,23.57,0,0,1-8.11-.21,13.8,13.8,0,0,1-1.79-.58,7.26,7.26,0,0,1-1.69-1.06,3,3,0,0,1-.93-2,4.66,4.66,0,0,1,.34-2,11.58,11.58,0,0,1,2.65-3.89,13.82,13.82,0,0,1,3.71-2.75c.95-.39.89,0,.39.66a37.37,37.37,0,0,1-2.4,3,14.52,14.52,0,0,0-2.31,3.36A3.21,3.21,0,0,0,20.19,43a1.13,1.13,0,0,0,.6.86A8.58,8.58,0,0,0,24.51,45a26,26,0,0,0,4.34.11,55.22,55.22,0,0,0,10.81-2c3.94-1,7.85-2.22,11.75-3.49,2.39-.79,4.79-1.59,7.17-2.43,3.6-1.28,7.23-2.56,10.79-3.89,2.76-1,5.44-2.17,8.21-3.14.61-.22,1.21-.44,1.83-.64,2.33-.69,3.16-.61,3.76-.36a2.16,2.16,0,0,1,.4.18c.29.24-.59.74-2.18,1.48-2.39,1-4.87,2-7.39,3l-7.7,2.89q-5.77,2.11-11.65,4.13Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M29.58,115.23a12.62,12.62,0,0,0,3.25,2.11c.42.23.9.32,1.34.51a13.16,13.16,0,0,0,5,.86,23.41,23.41,0,0,0,2.34-.22,11.87,11.87,0,0,1,3.1-.13c.32,0,.27.34,0,.66a2.17,2.17,0,0,1-1.27.75,19.94,19.94,0,0,1-6.33.4,23.32,23.32,0,0,1-3.95-.83,15.21,15.21,0,0,1-3.92-2c-.36-.28-.72-.56-1.07-.85s-.67-.61-1-.93a13.86,13.86,0,0,1-2.39-3.34,12,12,0,0,1-1.23-2.93c-.05-.23-.11-.45-.15-.69-.1-.88.08-1.17.46-1.36a2,2,0,0,1,.28-.11c.3-.08.6.25.77.78s.31.79.44,1.18l.52,1.14a14.06,14.06,0,0,0,1.26,2.15,13.81,13.81,0,0,0,2.52,2.84Z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Productos de calidad
              </h3>
              <p className="text-muted-foreground text-md mt-2">
                Cada obra viene con un certificado que garantiza su
                autenticidad. Valoramos la confianza de nuestros clientes y nos
                esforzamos por cumplir con los más altos estándares.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex-col p-6 space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-12 "
                fill={`var(--${theme})`}
              >
                <title>Free Icons</title>
                <g id="Layer_46" data-name="Layer 46">
                  <path
                    className="cls-1"
                    d="M60.58,28c1.89.06,3.8.09,5.7.09l2.08,0q3.66,0,7.34-.13c1.08,0,2.17-.11,3.25-.18,1.38-.05,2.76-.21,4.16-.14.43,0,.38,0,0,.16a8.62,8.62,0,0,1-1.81.48,68.81,68.81,0,0,1-8.5.56c-1.71,0-3.49.11-5.24.14-1.92,0-3.84,0-5.77,0l-3.55-.08c-1.79,0-3.59-.13-5.36-.22-1.39-.06-2.74-.08-4.11-.17l-.91-.05c-1.12-.14-1.46-.29-1.67-.57a1.77,1.77,0,0,1-.14-.16c-.09-.11.4-.32,1.22-.31,2.43.07,5,.27,7.54.39,1.91.09,3.83.17,5.74.2Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M58.21,28.25,55.88,28,55,28c-1-.11-2-.21-3-.35l-1.32-.13A7.5,7.5,0,0,1,49,27.23c-.19-.06-.1-.18.08-.29a1.25,1.25,0,0,1,.76-.22,26.71,26.71,0,0,1,3.44.27c.69.11,1.41.12,2.12.18l2.33.19,1.44.12c.73,0,1.46.1,2.18.12.56,0,1.12,0,1.67,0h.37c.45,0,.59.07.69.29a.94.94,0,0,1,.06.15c0,.17-.15.31-.49.36a14.62,14.62,0,0,1-3.11.07c-.78,0-1.56-.09-2.34-.15Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M55.41,88.66A15.53,15.53,0,0,0,61.2,95.9a18,18,0,0,0,3,1.69,17.28,17.28,0,0,0,12,1,17.58,17.58,0,0,0,5-2.22,23.83,23.83,0,0,0,5.14-4.73c.47-.55.77-.25.71.5a4.94,4.94,0,0,1-1.58,3,19.84,19.84,0,0,1-14.14,5.57,23.55,23.55,0,0,1-4.69-.61,20.07,20.07,0,0,1-4.42-1.72,18.08,18.08,0,0,1-7.41-7.12A16.32,16.32,0,0,1,53,85.22a18.1,18.1,0,0,1,1.46-9.39,20,20,0,0,1,4.09-6.07,15.5,15.5,0,0,1,1.19-1.1c1.59-1.28,2.26-1.45,2.83-1.31a1.7,1.7,0,0,1,.38.12c.33.22-.26.79-1.33,1.65a18.94,18.94,0,0,0-6.7,10.28,15.76,15.76,0,0,0,.57,9.24Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M51.72,117.14c1.84.13,3.69.22,5.53.28l2,0q3.56.14,7.13.18c1.06,0,2.12,0,3.16-.06a28.81,28.81,0,0,1,4,0c.42.07.37.3,0,.59a3,3,0,0,1-1.77.68,71.46,71.46,0,0,1-8.28,0c-1.66-.09-3.39,0-5.09,0-1.86,0-3.73-.1-5.6-.17l-3.45-.19c-1.74-.1-3.49-.25-5.22-.41-1.35-.12-2.68-.2-4-.42a5.74,5.74,0,0,1-.9-.18,2.54,2.54,0,0,1-1.15-.49.74.74,0,0,1-.31-.62,1.55,1.55,0,0,1,0-.31c.09-.31.61-.38,1.26-.19,2.16.42,4.62.65,7.08.88,1.83.15,3.69.3,5.54.39Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M23.72,104.17c-.23-.08-10,3-12.25,6.71s19,8,35,6.48L24,109.76Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M61.21,36.17c-4.82,1.74-12.35-1.35-14.67-2.75s-4.65-7.22-4.65-7.22l8.26.44S53.39,35.06,61.21,36.17Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M54.26,52.54A60.85,60.85,0,0,0,40.31,66.29a92.51,92.51,0,0,0-5.57,8.21,82.37,82.37,0,0,0-4.54,8.81,67.35,67.35,0,0,0-4.29,13.74c-.21,1-.35,2.09-.53,3.13s-.23,2.1-.35,3.15l-.17,3.16,0,1.59a4.59,4.59,0,0,0,0,.85L27.22,110c1,.47,2,.76,3,1.15,2,.8,4,1.3,6.08,1.94a126.74,126.74,0,0,0,25.38,3.83,143.43,143.43,0,0,0,22.81-.59,138.46,138.46,0,0,0,28.41-6.16c2.89-.89,2.67-.41.4.9-.57.33-1.27.71-2.08,1.13a20.66,20.66,0,0,1-2.77,1.27q-1.57.6-3.42,1.23c-.61.2-1.24.42-1.9.61l-2,.49a133.29,133.29,0,0,1-30,3.6,140.45,140.45,0,0,1-30.14-3l-4.45-1.08c-1.49-.38-3-.86-4.45-1.29s-2.93-1-4.41-1.55c-.74-.24-1.44-.61-2.17-.92l-2.72-1.23a4.91,4.91,0,0,1-.05-1l0-.87,0-1.18c0-.79,0-1.58.05-2.37,0-1.58.22-3.14.36-4.71A66.71,66.71,0,0,1,25,91.06a77,77,0,0,1,8.39-18.72,87.13,87.13,0,0,1,5.83-8.43A70.89,70.89,0,0,1,46,56.24a48.83,48.83,0,0,1,10.09-7.68,38.07,38.07,0,0,1,5.8-2.67,31.16,31.16,0,0,1,6.25-1.45,27.84,27.84,0,0,1,9.67.53,31.8,31.8,0,0,1,9,3.64,50.62,50.62,0,0,1,14,12.94,84.72,84.72,0,0,1,7.82,12.35,94.47,94.47,0,0,1,5.74,13.36c.68,2,1.33,4,1.84,6.14a41.26,41.26,0,0,1,1.38,8.43,8.82,8.82,0,0,1-.48,3.84,7.34,7.34,0,0,1-.48,1.12c-.59.72-.73-2.44-1.83-8A93.23,93.23,0,0,0,106,74.49a79.27,79.27,0,0,0-7-11.19,52.82,52.82,0,0,0-9.08-9.51c-5-4.06-11.12-6.87-17.5-7.06s-12.69,2.13-18,5.85Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M88.87,83c-.27,21-34.27,22.53-35.3,1.17A18.87,18.87,0,0,1,66.38,65.86C77.86,62.18,88.23,71.8,88.87,83c.07,1.28,2.07,1.29,2,0C90.2,71.23,80.23,61.16,68,63.42c-9.55,1.75-16.79,11.11-16.39,20.77,1,24,39,22.4,39.3-1.17A1,1,0,0,0,88.87,83Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M73.13,81.46c-.57.86-1.15,1.75-1.76,2.57-.22.3-.38.65-.6,1l-2.35,3.28c-.35.49-.61,1-.91,1.55a11.29,11.29,0,0,1-.57,1,4,4,0,0,1-.84.87c-.22.16-.46-.07-.67-.44a2.08,2.08,0,0,1-.34-1.36,13.57,13.57,0,0,1,2.33-4c.6-.74,1-1.64,1.57-2.45s1.26-1.75,1.93-2.57l1.22-1.55c.61-.78,1.24-1.56,1.8-2.36.44-.62.8-1.29,1.23-1.91.1-.14.18-.28.29-.42a1.12,1.12,0,0,1,.53-.44.66.66,0,0,1,.46,0,.85.85,0,0,1,.19.06c.18.09.17.4.06.86a36.13,36.13,0,0,1-1.9,3.71c-.53.91-1.09,1.8-1.63,2.71Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M72.51,45V41.46a1.38,1.38,0,0,0-2.75,0V45a1.38,1.38,0,0,0,2.75,0Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M78.21,38.25c-3.61.17-7.21.1-10.79,0-1.3,0-2.61,0-3.91-.08C59,38,54.16,37.77,49.7,36a17,17,0,0,1-2.84-1.47,13.76,13.76,0,0,1-2.45-2A15.52,15.52,0,0,1,42,29.22c-.65-1.17-1.09-2.42-1.68-3.49-.38-.61-.22-.74.46-.36a11.33,11.33,0,0,1,2.47,2.57c2.73,4.34,7,6.7,12.17,7.61a59.49,59.49,0,0,0,9.63.63c3.59.1,7.17.2,10.74.11,2.19,0,4.39-.15,6.57-.35a38.47,38.47,0,0,0,9.71-1.74,8.24,8.24,0,0,0,3.09-1.84,20.32,20.32,0,0,0,2.35-2.82l1-1.37C99.74,26.47,100.36,26,101,26a2.09,2.09,0,0,1,.44,0c.4.13,0,.9-.81,2.14a27.7,27.7,0,0,1-4.39,5.76,9.48,9.48,0,0,1-1.64,1.2c-.3.18-.62.32-.93.48s-.59.25-.89.35A25.44,25.44,0,0,1,89.13,37a52.14,52.14,0,0,1-5.46.81c-1.8.2-3.63.36-5.45.46Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M61.61,26.1q4.2.22,8.4.27c1,0,2-.05,3.06,0,3.61,0,7.21-.08,10.81-.25,1.6-.09,3.2-.25,4.77-.46,1-.07,2-.25,3-.36.5-.06,1-.12,1.51-.2s1-.07,1.53-.11.58,0,.09.31l-1,.61a6.6,6.6,0,0,1-1.54.57c-1,.22-2.06.49-3.1.67s-2.09.3-3.14.4c-2.1.2-4.21.35-6.33.36-2.53,0-5.15.2-7.74.23-2.84,0-5.69,0-8.53-.08l-5.24-.22c-2.65-.13-5.3-.33-7.93-.54-2-.15-4.06-.24-6.09-.47-.45-.06-.89-.09-1.34-.16l-.58-.1-.47-.16a5.7,5.7,0,0,1-.68-.31,2.09,2.09,0,0,1-.41-.32,2,2,0,0,1-.22-.4c-.05-.13-.13-.24-.15-.32-.09-.24.71-.6,1.88-.48,3.5.33,7.22.72,11,1,1.4.11,2.8.21,4.21.29s2.82.15,4.23.21Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M73.91,82.23a2.62,2.62,0,1,1-4.3-2A2.64,2.64,0,0,1,73.91,82.23Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M67.82,15.63c.15,0,0,.19-.2.51a1.45,1.45,0,0,1-.42.35,1.35,1.35,0,0,1-.34,0,5.47,5.47,0,0,1-.82-.62,1.87,1.87,0,0,1-.42-.56c-.21-.41-.42-.82-.58-1.22a.93.93,0,0,1-.05-.29,2,2,0,0,0-.22-.93c0-.05,0-.11-.11-.13a2.2,2.2,0,0,1-.38-.94c0-.28,0-.55,0-.83,0,0,0-.06,0-.12a.26.26,0,0,0,.09-.28,1.45,1.45,0,0,1,0-.36.76.76,0,0,1,.12-.24.65.65,0,0,1,.3-.15c.09,0,.17-.07.26-.12l.1,0a3.43,3.43,0,0,1,.86.49s.52.94.56,1,0,.12,0,.19.36.74.36.77.13.29,0,.49c0,0,0,.06,0,.09a4.25,4.25,0,0,1,.17.77,1.49,1.49,0,0,0,.14.37s0,0,0,.08,0,.07,0,.09a2.83,2.83,0,0,0,.39.8c0,.05.06.42.12.46S67.76,15.62,67.82,15.63Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M79.73,20.75c0,.15-.21.08-.56-.16a2.05,2.05,0,0,1-.42-.41c0-.11-.1-.22-.13-.3s.13-.53.15-.71a1.16,1.16,0,0,1,.19-.44c.17-.27.33-.57.5-.86a.43.43,0,0,1,.16-.17,1.33,1.33,0,0,0,.5-.63c0-.05,0-.08,0-.15s.34-.76.44-.81.44-.31.67-.45c0,0,0-.07.12-.05s.21,0,.27-.08a.73.73,0,0,1,.29-.19.9.9,0,0,1,.27,0,.87.87,0,0,1,.28.25c0,.09.15.15.24.23l.09.08a3,3,0,0,1,0,.78l-.17.37a3.3,3.3,0,0,0-.18.45c0,.05-.07.06-.12.09s-.23.64-.25.66-.1.26-.31.29c0,0,0,0-.06.06a2.22,2.22,0,0,1-.44.58,2.69,2.69,0,0,0-.19.32l-.07,0s-.06,0-.07.06a5.92,5.92,0,0,0-.51.76c0,.07-.39.24-.43.32S79.73,20.69,79.73,20.75Z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Cumplimiento de tareas
              </h3>
              <p className="text-muted-foreground text-md mt-2">
                Cumplimos con los plazos de entrega prometidos. Sabemos que su
                tiempo es valioso, y nos esforzamos por ser puntuales en cada
                transacción.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(background-opacity-logo.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
        }}
        className=""
      >
        <img
          style={{ filter: `drop-shadow(5px 10px 10px ${color})` }}
          alt="images escultura png"
          src={`${image}`}
          className="w-[300px]
        md:w-[500px] lg:w-[600px] object-contain"
        />
      </div>
    </div>
  );
};
