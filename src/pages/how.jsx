import {
  Box, Container, Divider, GridItem, Heading, Text,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import {
  GatsbyImage, getImage,
} from 'gatsby-plugin-image';
import React from 'react';
import GridContainer, { GridItemLeftContent } from '../components/GridContainer';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import SquareImage from '../components/SquareImage';

function How({ data }) {
  const howBanner = getImage(data.file);
  const images = data.allFile.nodes;

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={howBanner}
        alt={data.file.name}
      />
      <Container mt="44px">
        <GridContainer>
          <GridItemLeftContent />
          <GridItem>
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="600"
              color="brandRed.500"
            >
              Pertanyaan tentang cakupan sinema Indonesia seringnya
              terbentur pada ketersediaan informasi
            </Heading>

            <Text fontSize="16px" mb="24px">
              Selama satu dekade terakhir, hadir sejumlah inisiatif untuk menghimpun data
              tentang perfilman Indonesia. Tantangan utamanya adalah merangkai berbagai
              potongan informasi yang berhasil dihimpun menjadi suatu wawasan terpadu.
              Perihal ini sudah ada sejumlah titik terang, walau masih dalam proses. Setidaknya,
              pada hari ini, kita bisa dengan tajam menunjuk potensi dan capaian perfilman
              Indonesia di industri domestik dan panggung dunia. Apresiasi Film Indonesia
              2022 memperkaya khasanah yang sudah ada tentang film Indonesia dengan
              mengungkap capaian dan perkembangan perfilman di tingkat akar rumput.
            </Text>

            <Divider opacity={1} borderColor="brandRed.500" mb="32px" />

            <Text fontSize={['18px', null, '24px']} fontWeight="700" color="brandBlue.500">
              Landasan Program
            </Text>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItemLeftContent>
            <Lightbox
              image={images.find((item) => item.name === 'Produksi-film-Sekarang-Kita-Jalan-Bersama')}
              alt="Produksi film Sekarang Kita Jalan Bersama"
              mb="16px"
              size="2xl"
            >
              <SquareImage
                image={getImage(images.find((item) => item.name === 'Produksi-film-Sekarang-Kita-Jalan-Bersama'))}
                alt="Produksi film Sekarang Kita Jalan Bersama"
              />
            </Lightbox>
            <Text
              fontSize="16px"
              lineHeight="shorter"
              color="brandBlue.500"
              fontWeight={700}
              fontStyle="italic"
              textAlign="left"
            >
              Produksi film &quot;Sekarang Kita Jalan Bersama&quot;
            </Text>
          </GridItemLeftContent>
          <GridItem>
            <Text fontSize="16px" mb="24px">
              Objek penelitiannya: komunitas film. Dengan rupa-rupa dinamika sosial yang ada
              di Indonesia, istilah &apos;komunitas&apos;
              tentunya bisa dimaknai dalam berbagai bentuk.
              Sebuah komunitas bisa berwujud kumpulan informal, bisa juga suatu organisasi
              dengan kerangka program dan legal yang tertata. Berdasarkan pengalaman
              pada riset sebelumnya, wujud komunitas film bisa merentang dari kelompok
              ekstrakurikuler di kampus dan sekolah, perkumpulan produksi, penyelenggara
              layar mandiri, kelompok hobi, grup studi, himpunan penonton, hingga kolaborasi
              suami-istri. Keragaman bentuk ini yang coba ditelusuri dalam penelitian Apresiasi
              Film Indonesia 2022.
            </Text>
            <Text fontSize="16px" mb="24px">
              Kerangka penelitannya: realitas material. Program ini menerjemahkan kegiatan
              komunitas film dalam serangakaian variabel yang bisa diukur terkait status
              legal, pengelolaan dana, keterlibatan anggota, pemanfaatan ruang, pemakaian
              peralatan, produksi karya, penyelenggaraan acara, hingga mitigasi risiko. Dengan
              berfokus pada aspek-aspek konkret dari kegiatan dan keberadaan komunitas
              film, penelitian ini diharapkan bisa menghasilkan wawasan yang relevan dan
              bisa ditindaklanjuti. Selain sebagai produk pengetahuan, hasil penelitian ini bisa
              turut berperan sebagai acuan bagi pemerintah, pelaku perfilman, dan berbagai
              pemangku kepentingan untuk berpartisipasi dalam pemajuan budaya sinema di
              Indonesia.
            </Text>
            <Text fontSize="16px" mb="24px">
              Penelitian Apresiasi Film Indonesia 2022 secara spesifik menargetkan komunitas
              yang aktif berkegiatan produksi dan/atau ekshibisi film. Kedua kegiatan ini kami
              tempatkan sebagai pondasi budaya sinema. Selama ada sekumpulan orang yang
              membuat dan menonton film secara berkelanjutan di suatu kota, maka ada dasar
              yang kokoh untuk pemajuan budaya sinema. Rekam jejak produksi dan ekshibisi
              film pula yang menjadi dasar kami memilih sepuluh kota sasaran.
            </Text>

            <Divider opacity={1} borderColor="brandRed.500" mb="32px" />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItemLeftContent>
            <Lightbox
              image={images.find((item) => item.name === 'BasriandSalma2022')}
              alt="Proses produksi film Basri and Salma in a never-ending comedy pada tahun 2022"
              mb="16px"
              size="2xl"
            >
              <SquareImage
                image={getImage(images.find((item) => item.name === 'BasriandSalma2022'))}
                alt="Proses produksi film Basri and Salma in a never-ending comedy pada tahun 2022"
              />
            </Lightbox>
            <Text
              fontSize="16px"
              lineHeight="shorter"
              color="brandBlue.500"
              fontWeight={700}
              fontStyle="italic"
              textAlign="left"
            >
              Proses produksi film Basri and Salma in a
              never-ending comedy pada tahun 2022
            </Text>
          </GridItemLeftContent>
          <GridItem>
            <Text fontSize={['18px', null, '24px']} fontWeight="700" color="brandBlue.500">
              Pelaksanaan Program
            </Text>

            <Text fontSize="16px" mb="24px">
              Penelitian Apresiasi Film Indonesia 2022 berlaku secara kuantitatif dan kualitatif.
              Kerangka, rencana, dan dokumen kerja riset dirumuskan melalui focus group
              discussion di Jakarta pada 11-13 Juli 2022. Tim program mengundang sepuluh
              pelaku perfilman dari sepuluh kota, yang dianggap memiliki pengalaman dan
              pengetahuan tentang ekosistem perfilman di Indonesia, sebagai rekan diskusi.
              Setiap narasumber juga diarahkan untuk berbagi wawasan seputar bidang yang
              mereka geluti, dari produksi, ekshibisi, pendidikan, hingga pendanaan film. Materi
              presentasi setiap narasumber turut menjadi bahan pertimbangan tim riset dalam
              menyusun rencana kerja.
            </Text>

            <Text fontSize="16px" mb="24px">
              Pengambilan data kuantitatif dilaksanakan dari Juli hingga Oktober
              menggunakan metode purposive sampling. Berkolaborasi dengan pegiat
              komunitas di setiap kota, tim riset menyebarkan kuesioner untuk diisi oleh
              komunitas yang berkegiatan produksi dan/atau ekshibisi film. Sampel dibatasi
              pada komunitas yang punya karya atau kegiatan pada tiga tahun terakhir. Hasil
              dari pendataan ini kemudian diolah sebagai bahan untuk infografis dan tulisan
              panorama perfilman setiap kota.
            </Text>

            <Text fontSize="16px" mb="24px">
              Pendataan kualitatif berlangsung dari Juli hingga September. Pendataan ini
              turut melibatkan pegiat komunitas di setiap kota. Tim riset berkolaborasi dengan
              penulis lokal untuk mewawancarai lima narasumber dari setiap kota, untuk
              menggali wawasan mengenai keberdayaan komunitas terkait sumber daya,
              rentang kegiatan, peningkatan kapasitas, hingga pengelolaan risiko.
            </Text>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItemLeftContent>
            <Lightbox
              image={images.find((item) => item.name === 'Pemutaran-Film-Semarang')}
              alt="Pemutaran Film Secara Luring Apresiasi Film Indonesia 2022 di Semarang"
              mb="16px"
              size="2xl"
            >
              <SquareImage
                image={getImage(images.find((item) => item.name === 'Pemutaran-Film-Semarang'))}
                alt="Pemutaran Film Secara Luring Apresiasi Film Indonesia 2022 di Semarang"
              />
            </Lightbox>
            <Text
              fontSize="16px"
              lineHeight="shorter"
              color="brandBlue.500"
              fontWeight={700}
              fontStyle="italic"
              textAlign="left"
            >
              Pemutaran Film Secara Luring Apresiasi Film
              Indonesia 2022 di Semarang
            </Text>
          </GridItemLeftContent>
          <GridItem>
            <Text fontSize="16px" mb="24px">
              Selama proses pendataan, tim riset turut menghimpun arsip foto dan karya
              film. Materi arsip dipilah untuk pendamping tulisan hasil pendataan kualitatif,
              sementara karya film dikurasi dan diurus perizinannya untuk tayang publik secara
              gratis di layar digital Rangkai.
            </Text>
          </GridItem>
        </GridContainer>
      </Container>
    </Layout>
  );
}

export default How;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query HowPageQuery {
    file(relativePath: {eq: "how/how_banner.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    default: file(relativePath: {eq: "default.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    allFile(filter: {relativeDirectory: {eq: "how"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
