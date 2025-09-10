import LoginForm from "./LoginForm";

const MainAuthCard = () => {
  return (
    <div className="group box relative mr-22 flex h-96 w-[625px] flex-row gap-14 rounded-3xl bg-white pl-10 shadow-2xl outline-4 -outline-offset-[14px] outline-gray-100">
      <div className="flex flex-col items-center justify-between gap-4 py-10">
        <div className="flex w-full flex-col gap-0">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Bennu Ai Task
          </h1>
          <span className="text-xs text-gray-600">
            By{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/ali-mohammad-ali-pour-5b5940261/?originalSubdomain=ir"
              target="_blank"
            >
              Ali Mohammad Ali Pour
            </a>
          </span>
        </div>
        <LoginForm />
      </div>
      <img
        className="pointer-events-none absolute top-0 right-0 z-10 w-[600px] translate-x-1/3 -translate-y-1/5 rounded-3xl drop-shadow-2xl"
        src="./authPic2.png"
        alt="AuthPhoto"
      />
    </div>
  );
};

export default MainAuthCard;
