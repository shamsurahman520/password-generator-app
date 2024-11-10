"use client";

import { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [includeSpecialChar, setIncludeSpecialChar] = useState(true);
  const [includeLetters, setIncludeLetters] = useState(true);

  const generatePassword = () => {
    const length = 12;
    let charset = "0123456789";
    if (includeLetters) {
      charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeSpecialChar) {
      charset += "!@#$%^&*";
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-center font-bold text-xl text-blue-700">Random Password Generator</h1>

      <div className="bg-slate-600 w-[35%] h-48 mx-auto mt-2 rounded">
        <div className="flex gap-4 justify-center pt-4">
          <div>
            <input
              type="text"
              value={password}
              readOnly
              className="w-64 h-8 rounded-md bg-slate-200"
              placeholder="Generated password max length 12"
            />
          </div>
          <div>
            <button
              className="bg-slate-200 h-8 w-20 rounded-md hover:bg-slate-500"
              onClick={generatePassword}
            >
              Generate
            </button>
          </div>
          <div>
            <button
              className="bg-slate-200 h-8 w-12 rounded-md hover:bg-slate-500"
              onClick={copyPassword}
              disabled={!password}
            >
              Copy
            </button>
          </div>
        </div>
        <div className="flex gap-10 justify-center pt-4">
          <div>
            <label className="text-white">Include Special Char</label>
            <input
              type="checkbox"
              className="ml-2"
              checked={includeSpecialChar}
              onChange={(e) => setIncludeSpecialChar(e.target.checked)}
            />
          </div>
          <div>
            <label className="text-white">Include Letters</label>
            <input
              type="checkbox"
              className="ml-2"
              checked={includeLetters}
              onChange={(e) => setIncludeLetters(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
