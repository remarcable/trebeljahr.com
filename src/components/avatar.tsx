import Image from "next/image";
type AvatarProps = {
  picture: string;
};

const Avatar = ({ picture }: AvatarProps) => {
  return (
    <div className="avatar-container">
      <Image
        src={picture}
        alt="Picture of the author"
        // placeholder="blur"
        className="round"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
    </div>
  );
};

type Props = {
  name: string;
  picture: string;
};

export const AvatarWithAuthor = ({ name, picture }: Props) => {
  return (
    <div className="avatar-with-author">
      <Avatar picture={picture} />
      <div style={{ marginLeft: "10px" }}>by {name}</div>
    </div>
  );
};
