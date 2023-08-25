import React, { useEffect, useState } from 'react';
import {
  Box, Container, Flex, Heading, Image, TabList, TabPanel, TabPanels, Tabs, Text,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';
import SEO from '../components/SEO';
import logoFossil from '../images/logo-fossil.svg';
import CustomTab from '../components/CustomTab';
import useParams from '../hooks/useParams';

const citiesData = [
  {
    id: 1,
    city: 'balikpapan',
    label: 'Balikpapan',
    content: (images) => (
      <>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Kegiatan implementasi tindak lanjut Apresiasi Film Indonesia
          di Kota Balikpapan yang diadakan pada Sabtu,15 April 2023,
          di Senyiur Meeting Room, Swiss-Belhotel Balikpapan. Acara yang berlangsung
          dari pukul 09.00 hingga 18.00 WITA ini mempertemukan sejumlah
          pembicara dan peserta dengan tujuan menggali potensi serta
          mengembangkan sumber daya, khususnya di bidang perfilman.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Pembicara yang hadir dalam acara ini antara lain,
          Marlina Yulianti –Pamong Budaya Perfilman di Direktorat Perfilman,
          Musik dan Media Kementerian Kebudayaan, Pendidikan, Riset dan Teknologi,
          Nauval Yazid–Direktur Festival Europe on Screen, dan
          Angkasa Ramadhan–penulis dan sutradara film pendek.
          Masing-masing pembicara membantu memberikan pemahaman tentang program Kemdikbud,
          pengelolaan festival, dan penulisan naskah film secara mendalam.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Acara ini dihadiri oleh 18 peserta yang terdiri dari para
          pelaku perfilman baik yang mewakili komunitas maupun individu
          dan para pegiat film di Balikpapan. Dalam kegiatan ini, Lintang Aulia
          selaku manajer proyek Tindak Lanjut dan Redemptus Rangga Raditya selaku direktur program
          Apresiasi Film Indonesia bertindak sebagai pelaksana program.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Salah satu sorotan penting dalam acara ini adalah perbincangan
          mengenai penyelenggaraan Balikpapan Film Festival (BFF) dan
          tantangan yang dihadapi oleh penyelenggara.
          Dalam forum diskusi yang penuh ide, disorot juga infrastruktur
          Gedung Kesenian Balikpapan yang dianggap sangat mampu mendukung
          kegiatan seni di kota ini, termasuk BFF.
          Menurut pembicara, Nauval Yazid, mengungkapkan pandangan
          bahwa fasilitas infrastruktur di Balikpapan sangat baik,
          dengan kapasitas yang besar dan harga sewa yang terjangkau,
          ruang ini mampu mengakomodir kegiatan seni dan budaya di Balikpapan.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Namun, dengan infrastruktur yang memadai, pembicara juga
          menggambarkan kendala yang dihadapi oleh para pelaku film di Balikpapan.
          Minimnya pengetahuan tentang eksibisi atau pengelolaan festival
          film menjadi salah satu faktor berkembangannya BFF, terutama dalam
          aspek programasi atau kuratorial film. Sebagai solusi, pembicara
          berpendapat bahwa pelatihan dalam bidang ini dapat meningkatkan
          kualitas pelaksanaan BFF serta menghasilkan program film yang lebih berkualitas.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Di sisi lain, pelatihan skenario juga dibahas secara mendalam
          dalam acara ini oleh Angkasa Ramadhan. Meskipun kebanyakan diskusi
          terfokus pada teknis penulisan naskah, pembicara menyoroti kurangnya
          kepekaan untuk pengembangan dan kedalaman cerita. Menurut Angkasa,
          fasilitas dan hal-hal yang berkaitan dengan materi seperti alat produksi
          dan pendanaan sudah cukup memadai untuk produksi film pendek. Namun,
          dalam hal penulisan skenario, pembicara menyarankan perlunya pelatihan
          yang lebih mendalam dan berkelanjutan. Komunitas film Balikpapan
          disarankan untuk lebih peka terhadap fenomena sekitar dan memanfaatkan
          lokalitas yang dimiliki secara optimal dalam berkarya.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dalam perbandingan dengan kota Palangkaraya, pembicara menunjukkan bahwa
          cerita film pendek di Balikpapan masih memiliki ruang untuk pertumbuhan
          yang lebih besar dan menarik. Ini menjadi tantangan bagi komunitas film
          untuk terus berinovasi dalam pengembangan karya-karya berkualitas.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Kegiatan Tindak Lanjut yang dilakukan Apresiasi Film Indonesia adalah
          bentuk upaya jangka pendek untuk pengembangan sumber daya dan pengetahuan
          pelaku perfilman. Di Balikpapan, melalui serangkaian dialog dan pelatihan,
          acara ini berhasil membuka pintu menuju perkembangan seni dan budaya yang
          lebih cemerlang di Balikpapan. Diharapkan, semangat dan antusiasme yang
          tercipta dalam acara ini akan terus berkembang dalam langkah-langkah
          selanjutnya menuju kemajuan yang lebih besar.
        </Text>
      </>
    ),
  },
  {
    id: 2,
    city: 'aceh',
    label: 'Banda Aceh',
    content: (images) => (
      <>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Pada 3 Juni 2023, di kota Banda Aceh, acara Tindak Lanjut
          yang merupakan salah satu program dari Apresiasi
          Film Indonesia 2023ditangani oleh tiga orang dari tim AFI,
          yaitu Lintang Aulia (manajer proyek), Abidzar Ghifary (manajer film),
          dan Redemptus Rangga Raditya (direktur program),
          sebagai pelaksana acara yang memastikan kelancaran acara.
          Kegiatan ini berlangsung dari pukul 09.00 hingga 18.00 WIB,
          bertempat di Rasamala Hotel, Kota Banda Aceh.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dua pembicara yang hadir sebagai narasumber adalah
          Alex Sihar–Staf Khusus Direktorat Jenderal Kebudayaan
          dan Ifan Adriansyah Ismail–seorang penulis naskah film panjang.
          Kedua narasumber ini akan berbagi pengalaman dan
          pengetahuan terkait bidang perfilman.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Sejumlah 25 peserta yang hadir dalam acara ini.
          Para peserta adalah pelaku kegiatan perfilman di Aceh
          yang hadir secara pribadi maupun mewakili komunitas,
          seperti Aceh Documentary, Trieng, Fisuar Film, dan
          sejumlah komunitas lain.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Sosialisasi Dana Indonesia oleh Alex Sihar,
          diharap mampu memberikan informasi mendalam
          terkait dukungan pemerintah untuk kegiatan kebudayaan
          termasuk perfilman. Dana Indonesiana dalam konteks perfilman
          adalah inisiatif yang dijalankan oleh Ditjen Kebudayaan,
          Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
          Republik Indonesia (Kemendikbudristek RI) untuk mendukung
          dan memajukan industri perfilman Indonesia. Melalui program
          ini, diharapkan dapat memperluas akses masyarakat pada sumber
          pendanaan untuk memperkuat keterlibatan publik dalam
          ekosistem pemajuan kebudayaan yang berkelanjutan.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dengan dana yang disediakan oleh Dana Indonesiana untuk
          perfilman, para sineas, pembuat film, sutradara, penulis
          skenario, dan kru produksi dapat mengakses sumber daya
          untuk menghasilkan karya-karya yang kreatif, orisinil,
          dan bermakna. Pendanaan ini bisa digunakan untuk berbagai
          tahap produksi, mulai dari riset, pengembangan skenario, produksi,
          hingga pasca produksi dan distribusi. Program ini bertujuan untuk
          menggalang dan mengalokasikan dana dalam rangka pengembangan
          film-film berkualitas yang mencerminkan keberagaman budaya dan cerita khas Indonesia.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Untuk pelatihan penulisan naskah, sebelumnya komunitas Aceh
          Documentary telah melaksanakan kegiatan pelatihan penulisan
          reguler secara mandiri. Menyambut kegiatan tersebut, tim AFI
          mengadakan pelatihan lanjutan dengan Ifan Ismail sebagai pembicara.
          Lima cerita hasil pelatihan mandiri diterima tim AFI dan pembicara,
          sebagian besar cerita masih berbentuk outline atau sinopsis.
          Hal ini tentu menarik untuk dibedah dan didiskusikan bersama
          dengan tujuan pengembangan dan penajaman cerita dari peserta.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dalam sesi diskusi pada pelatihan, para peserta berpartisipasi aktif.
          Ifan menyoroti beberapa cerita yang memiliki potensi untuk diproduksi.
          Yang menarik pula dalam cerita para peserta, ditemukan kesamaan yang
          sering muncul adalah persoalan disfungsi peran seorang ayah. Ifan
          juga menyebut, para peserta perlu untuk memperkuat penokohan dalam
          cerita masing-masing peserta karena sangat penting untuk keutuhan
          cerita pada skenario nantinya sebelum diproduksi sebagai film panjang.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Aceh Documentary menyambut akhir pelatihan ini dengan harapan tinggi.
          Mereka berkomitmen untuk terus mendukung pengembangan film khususnya
          di wilayah Banda Aceh. Dengan adanya program pelatihan ini diharapkan
          dapat memberi dorongan bagi para peserta untuk mengembangkan
          pengetahuan mereka dalam penulisan naskah dan berkontribusi pada
          perkembangan dunia perfilman.
        </Text>
      </>
    ),
  },
  {
    id: 3,
    city: 'kupang',
    label: 'Kupang',
    content: (images) => (
      <>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Kegiatan implementasi tindak lanjut Apresiasi Film Indonesia di Kota
          Kupang diselenggarakan pada Rabu, 22 Juni 2023 bertempat di ruang
          pertemuan Palacio 2 - Aston Kupang Hotel & Convention Center. Acara
          yang berlangsung dari pukul 10.00 hingga 17.00 WITA ini berkolaborasi
          dengan Pemerintah Pusat, Pemerintah Daerah, dan Komunitas film di Kota
          Kupang untuk memperkuat ekosistem perfilman Indonesia.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dalam upaya memperkuat sinergi antara pemerintah dan komunitas di Kupang,
          AFI 2023 mengadakan focus group discussion (FGD) dengan tema `&quot;`Sinergitas
          Kegiatan Perfilman Kupang`&quot;`. Acara ini mendapat dukungan dari Penjabat
          Wali Kota Kupang, George M. Hadjoh, serta dihadiri oleh Kepala Dinas
          Pendidikan dan Kebudayaan Provinsi NTT, Kepala Dinas Pendidikan dan
          Kebudayaan Kota Kupang, Kepala UPT Badan Pelestarian Kebudayaan Wilayah
          XVI, Kepala UPTD Museum, dan Kepala UPT Taman Budaya Gerson Poyk. Dalam
          FGD tersebut, lembaga pemerintah memaparkan program pendidikan dan kebudayaan
          yang dapat diakses oleh komunitas untuk berkegiatan di Kupang.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Komunitas Film Kupang (KFK) telah berperan aktif dalam membangun ekosistem
          film di Kota Kupang sejak 2011. Mereka merilis film dokumenter berjudul
          Nokas pada 2016, dan mendapat pengakuan di festival-festival internasional,
          seperti Eurasia International Film Festival di Kazakhstan dan Singapore
          International Film Festival. Pada 2022, KFK juga menginisiasi Flobamora
          Film Festival di Kupang. Festival ini diharapkan bisa menjadi wadah apresiasi
          dan pertemuan antara penonton, pembuat film, dan komunitas film. Festival
          ini dikelola oleh KFK dengan dukungan Kemdikbudristek RI.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dalam konteks ini, pemerintah daerah dapat memberikan dukungan berupa
          fasilitas dan program penguatan untuk memperkuat ekosistem perfilman.
          Beberapa fasilitas yang telah disediakan oleh pemerintah, seperti Bioskop
          Keliling dan Fasilitas Pemajuan Kebudayaan dari Badan Pelestarian Kebudayaan
          Wilayah XVI, mini theater dan program dokumentasi kebudayaan dari UPTD Museum
          Daerah Provinsi NTT, serta ruang pertunjukan indoor dan outdoor dari
          UPT Taman Budaya Gerson Poyk, yang dapat diakses oleh komunitas film.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dalam diskusi, Dinas Pendidikan dan Kebudayaan Provinsi NTT dan Dinas
          Pendidikan dan Kebudayaan Kota Kupang juga menyatakan bahwa mereka
          memiliki dana khusus (specific grant) dari Menteri Dalam Negeri
          untuk mendukung program kebudayaan. Pendanaan tersebut telah digunakan
          untuk kegiatan lomba paduan suara, bimbingan teknis guru seni budaya,
          dan kajian terkait cagar budaya.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Selain itu, komunitas juga mengungkapkan kebutuhan akan intervensi
          pemerintah di bidang edukasi. KFK menyoroti pentingnya intervensi
          pemerintah dalam memberikan pelatihan dan pembinaan kepada siswa SMA/SMK,
          serta kemungkinan para anggota komunitas menjadi narasumber pelatihan
          dalam bidang perfilman dan konten audiovisual.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Forum diskusi ini merupakan awal pertemuan antara pemerintah daerah
          dan komunitas film di Kupang. Komunitas mengusulkan adanya forum
          akhir tahun untuk memperkuat komunikasi dan kerjasama antara semua
          pelaku terkait program bersama dan kalender kegiatan. Tujuan akhirnya
          adalah terjalinnya kerjasama yang berkesinambungan antara
          komunitas dan pemerintah daerah.
        </Text>
      </>
    ),
  },
];

function TindakLanjut({ data }) {
  const [city, setCity] = useState('balikpapan');
  const { getParams } = useParams();
  const params = getParams();

  const { getCol } = useLayout();
  const followBanner = getImage(data.file);
  const images = data.allFile.nodes;

  useEffect(() => {
    if (params?.city) {
      setCity(params.city);
    }
  }, [params?.city]);

  return (
    <Layout>
      <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
        <Flex
          as="section"
          flexDir={['column', null, 'row']}
          justifyContent={['center', null, 'flex-end']}
          background="fossil.500"
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
                TINDAK LANJUT
              </Heading>
              <Text>
                Elia dolupta tenimolut paruntem liate estiae. Ut quas que et acestium,
                net eos exerum assinus aut alis ressunt rest quo elestibus exerspid
                quam atur am nobiti abo. Omnis essed eriat.
              </Text>
            </Flex>
          </Box>
          <Box position="relative" w={['100%', null, getCol(6)]}>
            <Box
              as={GatsbyImage}
              quality={100}
              image={followBanner}
              alt="mengapa banner"
              layout="full_width"
              w="100%"
            />
            <Image
              src={logoFossil}
              position="absolute"
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
          justifyContent="center"
          mt="100px"
        >
          <Box w={['100%', null, getCol(9)]}>
            <Tabs
              variant="unstyled"
              index={citiesData.findIndex((item) => item.city === city)}
            >
              <TabList
                borderY="2px solid #000000"
                flexWrap={['wrap', null, 'unset']}
              >
                {citiesData.map((item) => (
                  <CustomTab
                    key={item.id}
                    _notFirst={{
                      borderLeft: ['0', null, '2px solid #000000'],
                    }}
                    onClick={() => {
                      setCity(item.city);
                    }}
                  >
                    {item.label}
                  </CustomTab>
                ))}
              </TabList>
              <TabPanels mt="50px">
                {citiesData.map((item) => (
                  <TabPanel key={item.id} p="0" mt="50px">
                    {item.content(images)}
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default TindakLanjut;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query TindakLanjutQuery {
    file(relativePath: {eq: "follows/follows-header.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    allFile(filter: {relativeDirectory: {eq: "follows"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
