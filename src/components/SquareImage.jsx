import { Box } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

function SquareImage(props) {
  const {
    image, alt, noBorder, ...resProps
  } = props;
  const imageThumb = getImage(image);

  return (
    <Box
      textAlign="center"
      position="relative"
      w="100%"
      _after={{
        content: '""',
        display: 'block',
        paddingBottom: '100%',
      }}
      {...resProps}
    >
      <Box
        w="100%"
        h="100%"
        position="absolute"
        border={noBorder ? 'unset' : '2px solid'}
        borderColor="brandRed.500"
      >
        <Box as={GatsbyImage} image={imageThumb} alt={alt} objectFit="cover" h="100%" w="100%" />
      </Box>
    </Box>
  );
}

export default SquareImage;
