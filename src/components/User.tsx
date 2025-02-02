import { FC, memo } from "react";

const User: FC<{ foo: () => void; arr: number[] }> = memo(({ arr }) => {
  console.log(`user`);
  console.log(arr);
  return <div>user</div>;
});

export default User;
