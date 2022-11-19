import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  Flex, SlideFade, useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

function ScrollOnTop() {
  const {
    isOpen, onOpen, onClose,
  } = useDisclosure();
  const [isMd] = useMediaQuery('(min-width: 768px)', {
    ssr: true,
    fallback: false,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    const scrollMeetPoint = isMd ? 700 : 250;
    if (position > scrollMeetPoint) {
      onOpen();
    } else {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

  });

  return (
    <SlideFade
      in={isOpen}
      offsetY="20px"
      style={{
        zIndex: 1,
        position: 'fixed',
        bottom: 0,
        right: 0,
      }}
    >
      <Flex
        position="fixed"
        bg="brandBlue.500"
        bottom="40px"
        right={['20px', null, '40px']}
        zIndex={2}
        borderRadius="50%"
        w={['40px', null, '52px']}
        h={['40px', null, '52px']}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        m="0"
        onClick={scrollToTop}
      >
        <ChevronUpIcon
          color="white"
          fontSize={['28px', null, '36px']}
        />
      </Flex>
    </SlideFade>
  );
}

export default ScrollOnTop;
