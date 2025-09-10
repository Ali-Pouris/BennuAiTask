import { useState } from "react";
import type { User } from "../../../api/users/userApi";
import { LoadingOutlined } from "@ant-design/icons";

const ExampleUserItem = (item: User) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="text-md relative flex w-64 flex-row items-center justify-center gap-2 rounded-3xl border border-white bg-white/10 px-3 py-[14px] text-gray-800 backdrop-blur-2xl">
      <span className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-white/20 text-lg text-gray-700">
        {loading && <LoadingOutlined spin />}
        <img
          className="max-h-12 max-w-12"
          src={item.image}
          alt={item.username + " Profile Image"}
          style={loading ? { display: "none" } : {}}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </span>
      <div className="flex w-[208px] flex-col gap-0">
        <p>
          <span className="mr-2 text-sm text-gray-600">username:</span>
          <span>{item.username}</span>
        </p>
        <p>
          <span className="mr-2 text-sm text-gray-600">password:</span>
          <span>{item.password}</span>
        </p>
      </div>
      <div className="absolute top-0 right-0 flex h-6 w-6 translate-x-1/5 -translate-y-1/5 items-center justify-center rounded-full bg-white text-sm text-gray-900">
        {item.gender == "male" ? "M" : "F"}
      </div>
    </div>
  );
};

export default ExampleUserItem;
