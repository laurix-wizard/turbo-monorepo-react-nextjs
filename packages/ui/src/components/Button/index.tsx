import * as React from "react";

interface IButtonProps {
  color: string;
}

export const Button = ({color}:IButtonProps) => {
  return <button className="text-yellow-600 bg-gray-500">Boop {`${color}`}</button>;
};
