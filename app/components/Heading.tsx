interface IProps {
  title: string;
  isCenter?: boolean;
}

const Heading = ({ title, isCenter }: IProps) => {
  return (
    <h1
      className={`${
        isCenter && "text-center"
      } bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl`}
    >
      {title}
    </h1>
  );
};

export default Heading;
