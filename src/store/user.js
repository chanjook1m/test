import React, { createContext, useState, useReducer } from 'react';

export const UserContext = createContext();

const initUser = {
  name: '1z3r0',
  job: 'fe-developer',
};

export default function UserStore({ children }) {
  // const [job, setJob] = useState('fe-developer');

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'changeJob':
        return { ...state, job: action.text };
      default:
        return null;
    }
  };

  const [user, dispatch] = useReducer(userReducer, initUser);

  console.log(user);

  return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
}