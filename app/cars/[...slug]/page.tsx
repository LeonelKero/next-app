
interface Props {
  params: { slug: string[] };
}

const CarPage = ({ params: { slug } }: Props) => {
  return <div>CarPage this is the complete path {slug}</div>;
};

export default CarPage;
