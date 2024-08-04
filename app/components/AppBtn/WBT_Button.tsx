// "use client";

interface Props {
  children: string;
  class_name?: string;
  onClick: () => void;
}

const WBT_Button = ({ children, class_name, onClick }: Props) => {
  return (
    <button className={class_name} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default WBT_Button;
