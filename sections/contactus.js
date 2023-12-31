"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <section id="contact" className="mb-20">
      <div className="w-12/12 py-10 text-center items-center mx-auto text-3xl mt-20 font-header-h ">
        Send me an Email
      </div>
      {formSuccess ?
      <div className="w-12/12 py-10 text-center items-center mx-auto text-xl mt-20 font-header-h ">{formSuccessMessage}</div>
      :
      <form className="container mx-auto flex flex-wrap" method="POST" action="https://www.formbackend.com/f/d05359ddcca42474" onSubmit={submitForm}>
        {/*  <label className='lg:w-6/12 sm:w-12/12'>Name</label> */}
        <input className="border-yellow-500 border-[1px] w-4/12 p-4 m-2 mx-auto" type="text" name="name" placeholder="Your Name" onChange={handleInput} value={formData.name}/>

        {/*   <label>Email</label> */}
        <input className="border-yellow-500 border-[1px] w-4/12 p-4 m-2 mx-auto" type="text" name="email" placeholder="Your Email" onChange={handleInput} value={formData.email}/>
        {/*    <label>Message</label> */}
        <textarea
          className="border-yellow-500 border-[1px] w-10/12  h-20 p-4 my-2 mx-2 mx-auto" name="message" placeholder="Your Text" onChange={handleInput} value={formData.message}/>
        <input
          className="border-yellow-500 border-[1px] w-12/12 w-10/12 p-4 m-4 mx-auto hover:bg-gray-700"
          type="submit"
          value="Send"
        />
      </form>
        }
    </section>

  );
}
