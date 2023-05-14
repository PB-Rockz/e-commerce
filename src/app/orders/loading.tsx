import React from "react";

type Props = {};

function loading({}: Props) {
  return (
    <main className="max-w-screen-lg mx-auto p-10 bg-white">
      <h1 className="text-3xl border-b mb-2 pb-1 border-teal-700">
        Getting Orders...
      </h1>
    </main>
  );
}

export default loading;
