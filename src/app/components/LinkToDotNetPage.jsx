import React from "react";
import DotNetPageButton from "./button-links/DotNetPageButton";

const LinkToDotNetPage = () => {
  return (
    <div className="text-center">
      <p>You can also link to see purely DotNet Based Front End:</p>
      <p>{"(This will log you to out)"}</p>
      <DotNetPageButton />
    </div>
  );
};

export default LinkToDotNetPage;
