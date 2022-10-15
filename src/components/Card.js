import React from 'react';

export default function Clock(props) {

  return (
    <div>
      <div>Company: {props.winner.company}</div>
      <div>Team: {props.winner.team}</div>
      <div>Name: {props.winner.name}</div>
      <div>phoneNumber: {props.winner.phoneNumber}</div>
      <div>email: {props.winner.email}</div>
    </div>
  );
}