import {
  Box, LinkBox, LinkOverlay,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function ImagePlay({
  children, href, ...props
}) {
  return (
    <Box
      position="relative"
      {...props}
    >
      <Box>
        {children}
      </Box>
      <LinkBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        zIndex={2}
        top="0"
        left="0"
        width="100%"
        height="100%"
        cursor="pointer"
      >
        <LinkOverlay
          href={href}
          target="_blank"
          isExternal
        >
          <StaticImage
            src="../images/play_circle.svg"
            alt="play circle"
            layout="fixed"
            placeholder="blurred"
            width={80}
            height={80}
          />
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
}

export default ImagePlay;
