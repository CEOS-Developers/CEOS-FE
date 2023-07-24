export default function Home() {
  return <></>;
}

export const getStaticProps = async () => {
  return {
    redirect: {
      destination: '/applyStatement',
    },
  };
};
