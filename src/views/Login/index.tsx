import React, { ReactElement, useState } from "react";
import { AxiosResponse } from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { getUserInfo, login } from "api";

const Login = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();

  const handleSubmit = () => {
    const params: ILoginParams = {
      username,
      password,
    };
    login(params)
      .then(async (res: AxiosResponse) => {
        if (res.data && res.data.user) {
          const { token } = res.data.user;
          const from = (location as any)?.state?.from?.pathname || "/home";
          const userRes = await getUserInfo();
          const userInfo = userRes?.data || {};
          localStorage.setItem("token", token);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          history.push(from);
        }
      })
      .catch((err: AxiosResponse) => {
        console.log(err);
        alert("用户名或密码错误");
      });
  };
  return (
    <div>
      <form>
        <label htmlFor="username">用户名:</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">密码:</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
      </form>
      <button onClick={handleSubmit}>登录</button>
    </div>
  );
};

export default Login;
