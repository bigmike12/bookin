import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen container sm:w-600 sm:mt-32">
      <h3 className="p-3 text-3xl font-bold sm:text-6xl sm:font-bold hover:cursor-default">
        Ooops...
        <br />
        We are sorry, this user does not exist.
      </h3>
      <a href="/">
        <p className="mt-4 sm:text-xl text-white bg-gray-900 border-3 rounded px-3 py-2 hover:bg-gray-400 hover:cursor-default">
          Register Here
        </p>
      </a>
    </div>
  );
};

export default NotFoundPage;
