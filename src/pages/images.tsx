import Image from 'next/image'
import { ImageType } from '../types/image';
import { getImages } from '../services/getImages.service'
import { logInfo } from '../utils/logs.utils';
import { NextPage } from 'next';

/* NOTE: this Page Component 'ImagesPage' is an example */

export const getStaticProps = async () => {
  // getStaticProps & getServerSideProps are Next built-in functions (only available in next Pages, => /pages folder).
  // They are used for SEO and fast pages load
  // it pre-render datas before the client renders and serve an HTML page with fetched datas.

  // - getStaticProps, static generations fetching (recommended, called once at build time, faster load thant SSR)
  // other alernative
  // - getServerSideProps, SSR fetching  (called at each requests, slower than static fetch)

  const images: ImageType[] | undefined = await getImages();
  return { props: { images } }
}

const ImagesPage: NextPage = ({ images }: any) => {
  // in order to display remote url images on nextjs, we have to specify the host source in nex.config.js > images > domains
  logInfo('fetched images:', images);

  return (
    <div>
      {images.map(({ id, author, download_url }: ImageType) => (
        <div key={id}>
          <Image src={download_url} alt={`${author} photo`} width={450} height={250} objectFit='cover' />
          <p>{author}</p>
        </div>
      ))}
    </div>
  )
}

export default ImagesPage;