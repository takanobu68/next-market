import Image from 'next/image';
import Head from 'next/head';

const ReadSingleItem = (props) => {
  const { image, title, price, description } = props.singleItem;
  return (
    <div className="grid-container-si">
      <Head>
        <title>{props.singleItem.title}</title>
      </Head>
      <div>
        <Image src={image} width="750" height="500" alt="item-image" />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>\{price}</h2>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReadSingleItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `next-market-mocha-omega.vercel.app/api/item/${context.query.id}`
  );
  const singleItem = await response.json();

  return {
    props: singleItem,
  };
};
