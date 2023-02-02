import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      ref={contactRef}
      className="flex flex-col justify-center items-center bg-gradient-to-r from-white to-gray-200"
    >
      <p className="text-green-800 text-4xl md:text-5xl 2xl:text-7xl my-4 text-center">
        Certification and Contact
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center border rounded-md border-slate-500 p-2 m-2 sm:p-2 sm:m-4 bg-gradient-to-l from-white to-gray-300 w-72 sm:w-auto 2xl:w-7/12 drop-shadow-2xl">
          <Image
            width={300}
            height={300}
            alt="Davis certification"
            src="/images/daviscertification.png"
            className="p-2 drop-shadow-lg w-60 md:w-80"
          />
          <div className="flex grid grid-cols-3 gap-4 justify-center items-center p-2 m-4">
            <Image
              width={80}
              height={1}
              alt="Davis certification"
              src="/images/js.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={80}
              height={1}
              alt="Davis certification"
              src="/images/nodejs.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={80}
              height={1}
              alt="Davis certification"
              src="/images/react.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={80}
              height={1}
              alt="Davis certification"
              src="/images/mongodb.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={80}
              height={1}
              alt="Davis certification"
              src="/images/express.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={80}
              height={1}
              alt="Davis certification"
              src="/images/tailwind.png"
              className="p-2 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 border rounded-md border-slate-500 p-2 m-2 sm:p-4 sm:m-4 mb-8 bg-gradient-to-r from-white to-gray-300 w-72 sm:w-7/12 h-5/6 drop-shadow-2xl"
      >
        <p className="text-xl mt-2">Contact Me</p>
        <input
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={handleChange}
          className="p-2 w-60 lg:w-96 border rounded-md border-slate-500"
        ></input>
        <input
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={handleChange}
          className="p-2 w-60 lg:w-96 border rounded-md border-slate-500"
        ></input>
        <textarea
          placeholder="Add a message!"
          name="message"
          value={message}
          onChange={handleChange}
          className="p-2 w-60 lg:w-96 h-40 border rounded-md border-slate-500"
        ></textarea>
        <button className="p-2 mb-2 w-24 border rounded-md border-slate-500 text-white bg-gray-800 hover:bg-gray-500">
          Submit
        </button>
      </form>
    </div>
  );
}
