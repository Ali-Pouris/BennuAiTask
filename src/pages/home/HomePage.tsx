import { randInt } from "three/src/math/MathUtils.js";
import { useGetUsers } from "../../api/users/userQueries";
import CardComponent from "./components/CardComponent";
import { Button, Tooltip } from "antd";
import { useAuthStore } from "../../stores/authStore";
import { getRandomSuit } from "../../utils/functions/randomSuit";
import { LoadingOutlined } from "@ant-design/icons";

const HomePage = () => {
  const { data, isFetching, isError, refetch } = useGetUsers();
  const { user } = useAuthStore();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-14">
      <span className="text-4xl font-extrabold text-white">
        Hello {user?.firstName} {user?.lastName}! 👋
      </span>

      <div className="relative flex h-[312px] w-[978px] items-center justify-center gap-6 rounded-3xl border border-white p-10 shadow-2xl backdrop-blur-2xl">
        {isFetching ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-56 w-40 animate-pulse items-center justify-center rounded-2xl border border-white bg-white/10 text-4xl text-white backdrop-blur-2xl"
            >
              <LoadingOutlined spin />
            </div>
          ))
        ) : !isError && data && data?.length > 0 ? (
          data
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)
            .map((item) => (
              <Tooltip
                key={item.id}
                title={`${item.firstName} ${item.lastName}`}
                placement="bottom"
              >
                <div>
                  <CardComponent
                    rank={
                      user?.gender === "male"
                        ? randInt(2, 10)
                        : (randInt(11, 14) as any)
                    }
                    suit={getRandomSuit()}
                  />
                </div>
              </Tooltip>
            ))
        ) : !isError ? (
          <div>There is no data!</div>
        ) : (
          <div className="flex flex-col gap-4">
            <span>OOPS Errooooooooooooooooooooor!</span>
            <Button
              variant="solid"
              color={"primary"}
              onClick={() => {
                refetch();
              }}
            >
              Retry?
            </Button>
          </div>
        )}

        <div className="absolute top-0 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-between gap-10 px-10">
          <span className="rounded-full bg-white px-8">
            You are {user?.gender}!
          </span>
          <span className="rounded-full bg-white px-8">
            You can only view {user?.gender == "male" ? "numbered" : "face"}{" "}
            cards!!!
          </span>
        </div>
      </div>

      <Button
        loading={isFetching}
        variant="solid"
        type="primary"
        size="large"
        onClick={() => {
          refetch();
        }}
      >
        Get 5 Random Cards!
      </Button>
    </div>
  );
};

export default HomePage;
