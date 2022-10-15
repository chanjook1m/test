import React, { useState } from 'react';

export default function SimpleForm() {
  // const [nickName, setNickName] = useState('');
  // const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    // if (e.target.name === 'nickname') {
    //   return setNickName(e.target.value);
    // }
    // else if (e.target.name === 'password') {
    //   return setPassword(e.target.value);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, password } = userInfo;
    alert(`${nickname} - ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        value={userInfo.nickname}>
      </input>
      <label>패스워드 : </label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={userInfo.password}>
      </input>
      <input type="submit" value="제출"></input>
    </form>
  );
}