import UserCard from "@/components/common/UserCard";
import { User } from "@/interfaces/interfaces";
import { GetStaticProps } from "next";
import React from "react";

const users = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map((userarg, idx) => {
        return <UserCard key={idx} user={userarg} />;
      })}
    </>
  );
};

export default users;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
};
