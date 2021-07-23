import React, { FC } from "react";
import requests from "../../lib/requests";
import Item from "./Item";

type Props = {
  className?: string;
};
const Nav: FC<Props> = ({ className = "" }) => {
  return (
    <nav className={"relative " + className}>
      <div className="flex text-2xl py-2 px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll no-scrollbar">
        {Object.entries(requests).map(([id, { title, url }]) => (
          // eslint-disable-next-line react/jsx-key
          <Item
            {...{
              key: id,
              genre: id as keyof typeof requests,
              title,
              url,
            }}
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A]  h-10 w-1/12" />
    </nav>
  );
};

export default Nav;