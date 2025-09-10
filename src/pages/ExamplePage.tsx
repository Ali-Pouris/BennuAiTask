type ExamplePageProps = {
  title: string;
};

const ExamplePage = ({ title }: ExamplePageProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-6xl font-extrabold text-white">{title} Page!</h1>
    </div>
  );
};

export default ExamplePage;
