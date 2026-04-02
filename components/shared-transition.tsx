import React from "react";
import { ViewTransition } from "react";

const SharedTransition = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return <ViewTransition name={name} share={'auto'} >{children}</ViewTransition>;
};

export default SharedTransition;
