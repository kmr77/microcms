import React from "react";

export function Header(props) {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.discription} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </>
  );
}
