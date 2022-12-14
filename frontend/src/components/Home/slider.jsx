import { Box } from "@chakra-ui/react";

export default function Video() {
  return (
    <>
      <Box
        allowFullScreen
        w="99%"
        h="800px"
        as="iframe"
        src="https://player.vimeo.com/video/681364200?autoplay=1&autopause=1&background=1&loop=1&muted=1&transparent=0&responsive=1&portrait=0&title=0&byline=0&color=444444"
        // src="https://tv.apple.com/b2f65977-278f-4ece-8c0b-b1ec736a37bd"
        title="Sohil khan"
        allow="autoplay"
      ></Box>
    </>
  );
}
