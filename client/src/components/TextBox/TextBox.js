import React from 'react';

const TextBox = (props) => {
  return (
    <div className="justify-center">
      <form>
        <input
          className="mx-auto flex mt-12 outline-none placeholder-white bg-clone3 shadow rounded-full border border-solid border-gray-400 p-2 pl-4 pr-64 focus:border-clone"
          placeholder="Kullanıcı Adı"
        />
        <input
          className="mx-auto flex mt-12 outline-none placeholder-white bg-clone3 shadow rounded-full border border-solid border-gray-400 p-2 pl-4 pr-64 focus:border-clone"
          placeholder="Şifre"
        />
        <button className="bg-clone hover:bg-tekno text-white hover:text-white font-medium mt-8 py-2 px-12 rounded-full rounded focus:outline-none focus:shadow-outline appearance-none" type="submit">
          Giriş
        </button>
      </form>
    </div>
  );
}

export default TextBox;