import { useDimensions, Box } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';

function SquareImage(props) {
  const {
    image, alt, noBorder, ...resProps
  } = props;
  const ref = useRef();
  const dimensions = useDimensions(ref);
  const imageThumb = getImage(image);

  return (
    <Box
      textAlign="center"
      ref={ref}
      {...resProps}
    >
      <Box
        w="100%"
        h={dimensions?.contentBox?.width}
        border={noBorder ? 'unset' : '2px solid'}
        borderColor="brandRed.500"
      >
        <Box as={GatsbyImage} image={imageThumb} alt={alt} objectFit="cover" h="100%" w="100%" />
      </Box>
    </Box>
  );
}

export default SquareImage;
