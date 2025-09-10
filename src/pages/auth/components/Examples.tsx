import { LinkOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useGetUsers } from "../../../api/users/userQueries";
import ExampleUserItem from "./ExampleUserItem";

const Examples = () => {
  const { data, isFetching, refetch } = useGetUsers();

  return (
    <div className="-mr-16 flex h-96 w-96 flex-col items-center justify-between gap-4 rounded-3xl border border-white bg-white/10 p-4 pr-20 shadow-2xl backdrop-blur-2xl">
      <div className="flex w-full flex-row justify-between px-4">
        <span className="flex flex-1 text-lg font-bold text-gray-800">
          Random Users:
        </span>
        <Button
          variant="solid"
          onClick={() => {
            refetch();
          }}
        >
          Reresh
        </Button>
      </div>
      <div className="flex h-full flex-col items-center justify-between">
        {!isFetching && data && data.length > 0 ? (
          data
            ?.sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((item) => <ExampleUserItem key={item.id} {...item} />)
        ) : (
          <div className="flex h-full items-center justify-center text-3xl text-white">
            <LoadingOutlined spin />
          </div>
        )}
      </div>
      <Button
        size="large"
        color="primary"
        variant="link"
        className="min-h-10"
        href="https://dummyjson.com/docs/users"
        target="_blank"
      >
        <LinkOutlined />
        Dummyjson Website
      </Button>
    </div>
  );
};

export default Examples;
