import {
  Box, Container,
  Flex,
  Heading, Image, Text,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import {
  GatsbyImage, getImage,
} from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayout from '../hooks/useLayout';
import logoBlueOcean from '../images/logo-blue-ocean.svg';

function Mengapa({ data }) {
  const { getCol } = useLayout();
  const howBanner = getImage(data.file);

  return (
    <Layout>
      <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
        <Flex
          as="section"
          flexDir={['column', null, 'row']}
          justifyContent={['center', null, 'flex-end']}
          background="blueOcean.500"
          mt={{ md: '62px' }}
        >
          <Box w={['100%', null, getCol(5)]}>
            <Flex
              flexDir="column"
              justifyContent="center"
              p={['30px', null, '0 25px 0 0']}
              h="100%"
              color="white"
            >
              <Heading
                as="h2"
              >
                MENGAPA DAN BAGAIMANA
              </Heading>
              <Text>
                Sinema hidup lewat kerjasama. Apresiasi Film Indonesia
                terlahir sebagai kerja pengetahuan dan berkembang sebagai simpul
                berbagai kegiatan dan jaringan perfilman.
              </Text>
            </Flex>
          </Box>
          <Box position="relative" w={['100%', null, getCol(6)]}>
            <Box
              as={GatsbyImage}
              quality={100}
              image={howBanner}
              alt="mengapa banner"
              layout="full_width"
              w="100%"
            />
            <Image
              src={logoBlueOcean}
              position="absolute"
              alt="logo afi blue"
              w="100px"
              h="100px"
              top="50%"
              right="0"
              transform="translate(0%, -50%)"
              zIndex={1}
            />
          </Box>
        </Flex>
        <Flex
          as="section"
          flexDir={['column', null, 'row']}
          justifyContent="center"
          mt={{ md: '100px' }}
        >
          <Box
            w={['100%', null, getCol(9)]}
            borderTop="2px solid #000000"
            pt="16px"
          >
            <Heading
              as="h3"
              fontSize={['30px', '25px', null, null, '28px']}
              mb="24px"
            >
              KOLABORASI PENDATAAN DAN PENAYANGAN
            </Heading>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Pertanyaan tentang cakupan sinema Indonesia seringnya terbentur pada ketersediaan
              informasi. Selama satu dekade terakhir, hadir sejumlah inisiatif untuk menghimpun
              data tentang perfilman Indonesia. Tantangan utamanya adalah merangkai berbagai
              potongan informasi yang berhasil dihimpun menjadi suatu wawasan terpadu. Perihal
              ini sudah ada sejumlah titik terang, walau masih dalam proses. Setidaknya, pada hari
              ini, kita bisa dengan tajam menunjuk potensi dan capaian perfilman Indonesia di
              industri domestik dan panggung dunia. Apresiasi Film Indonesia (AFI) memperkaya
              khasanah yang sudah ada tentang film Indonesia dengan mengungkap capaian dan
              perkembangan perfilman di tingkat akar rumput.
            </Text>
            <Heading
              as="h5"
              fontFamily="Plus Jakarta Sans"
              mt="48px"
              mb="16px"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="800"
            >
              Landasan Program
            </Heading>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Objek penelitiannya: komunitas film. Dengan rupa-rupa dinamika sosial yang ada
              di Indonesia, istilah ‘komunitas’ tentunya bisa dimaknai dalam berbagai bentuk.
              Sebuah komunitas bisa berwujud kumpulan informal, bisa juga suatu organisasi dengan
              kerangka program dan legal yang tertata. Berdasarkan pengalaman pada riset
              sebelumnya, wujud komunitas film bisa merentang dari kelompok ekstrakurikuler di
              kampus dan sekolah, perkumpulan produksi, penyelenggara layar mandiri, kelompok
              hobi, grup studi, himpunan penonton, hingga kolaborasi suami-istri. Keragaman
              bentuk ini yang coba ditelusuri dalam penelitian Apresiasi Film Indonesia.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Kerangka penelitannya: realitas material. Program ini menerjemahkan kegiatan
              komunitas film dalam serangakaian variabel yang bisa diukur terkait status legal,
              pengelolaan dana, keterlibatan anggota, pemanfaatan ruang, pemakaian peralatan,
              produksi karya, penyelenggaraan acara, hingga mitigasi risiko. Dengan berfokus
              pada aspek-aspek konkret dari kegiatan dan keberadaan komunitas film, penelitian
              ini diharapkan bisa menghasilkan wawasan yang relevan dan bisa ditindaklanjuti.
              Selain sebagai produk pengetahuan, hasil penelitian ini bisa turut berperan
              sebagai acuan bagi pemerintah, pelaku perfilman, dan berbagai pemangku kepentingan
              untuk berpartisipasi dalam pemajuan budaya sinema di Indonesia.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Penelitian AFI secara spesifik menargetkan komunitas yang aktif berkegiatan
              produksi dan/ atau ekshibisi film. Kedua kegiatan ini kami tempatkan sebagai
              pondasi budaya sinema. Selama ada sekumpulan orang yang membuat dan menonton
              film secara berkelanjutan di suatu kota, maka ada dasar yang kokoh untuk
              pemajuan budaya sinema. Rekam jejak produksi dan ekshibisi film pula yang
              menjadi dasar kami memilih sepuluh kota sasaran.
            </Text>
            <Heading
              as="h5"
              fontFamily="Plus Jakarta Sans"
              mt="48px"
              mb="16px"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="800"
            >
              Kolaborasi Pendataan dan Penayangan
            </Heading>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Penelitian AFI berlaku secara kuantitatif dan kualitatif. Kerangka, rencana, dan
              dokumen kerja riset dirumuskan melalui focus group discussion di Jakarta pada
              11-13 Juli 2022. Tim program mengundang sepuluh pelaku perfilman dari sepuluh kota,
              yang dianggap memiliki pengalaman dan pengetahuan tentang ekosistem perfilman di
              Indonesia, sebagai rekan diskusi. Setiap narasumber juga diarahkan untuk berbagi
              wawasan seputar bidang yang mereka geluti, dari produksi, ekshibisi, pendidikan,
              hingga pendanaan film. Materi presentasi setiap narasumber turut menjadi bahan
              pertimbangan tim riset dalam menyusun rencana kerja. Perangkat kerja yang sama,
              dengan pembaharuan di sejumlah variabel, kembali digunakan untuk AFI 2023, yang
              proses penghimpunan dan pengolahan datanya merentang dari April hingga Agustus 2023.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Pendataan kuantitatif menggunakan metode purposive sampling. Berkolaborasi dengan
              pegiat komunitas di setiap kota, tim riset menyebarkan kuesioner untuk diisi oleh
              komunitas yang berkegiatan produksi dan/atau ekshibisi film. Sampel dibatasi pada
              komunitas yang punya karya atau kegiatan pada tiga tahun terakhir. Hasil dari
              pendataan ini kemudian diolah sebagai bahan untuk infografis dan tulisan panorama
              perfilman setiap kota.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Pendataan kualitatif melibatkan pegiat komunitas di setiap kota. Tim riset
              berkolaborasi dengan penulis lokal untuk mewawancarai lima narasumber dari setiap
              kota, untuk menggali wawasan mengenai keberdayaan komunitas terkait sumber daya,
              rentang kegiatan, peningkatan kapasitas, hingga pengelolaan risiko.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Selama proses pendataan, tim riset turut menghimpun arsip foto dan karya film.
              Materi arsip dipilah untuk pendamping tulisan hasil pendataan kualitatif,
              sementara karya film dikurasi dan diurus perizinannya untuk tayang publik secara
              gratis di layar digital Rangkai.
            </Text>
            <Heading
              as="h5"
              fontFamily="Plus Jakarta Sans"
              mt="48px"
              mb="16px"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="800"
            >
              Penguatan Pelaku dan Jaringan Perfilman
            </Heading>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Hasil riset berperan sebagai acuan bagi Kementerian Pendidikan, Kebudayaan, Riset,
              dan Teknologi untuk turut berkontribusi dalam penguatan pelaku dan jaringan
              perfilman. Dalam rencana kerja AFI, upaya penguatan tersebut diberi tajuk Tindak
              Lanjut, yang wujudnya bisa merentang dari lokakarya atau pelatihan hingga forum
              mediasi. Program yang dilaksanakan bersifat jangka pendek, dengan diskusi dan
              proyeksi untuk kepentingan jangka panjang. Bentuk program dirumuskan berdasarkan
              hasil riset di lapangan, yang kemudian dielaborasi melalui diskusi langsung dengan
              stakeholder di kota sasaran, baik dari lingkar perfilman maupun pemerintahan daerah.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Mengapa;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query HowPageQuery {
    file(relativePath: {eq: "how/MengapaBW.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
