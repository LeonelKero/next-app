type Props = {
  params: { userId: number; photoId: number };
};

const PhotoDetails = ({ params: { userId, photoId } }: Props) => {
  return (
    <>
      <div>User ID - {userId}</div>
      <div>Photo ID - {photoId}</div>
    </>
  );
};

export default PhotoDetails;
