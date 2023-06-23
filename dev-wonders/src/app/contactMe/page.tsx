"use client";
import React, { useEffect, useState } from "react";
import Cursor from "@/components/Cursor";
import NextButton from "@/components/NextButton";
import SocialMediaLinks from "@/components/Home/SocialMediaLinks";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/Home/NavBar";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = ({ e }: { e: any }) => {
    e.preventDefault();

    const emailSubject = "New Message";
    const recipient = "hmakki387@gmail.com";
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  const handleNameChange = ({ e }: { e: any }) => {
    setName(e.target.value);
  };

  const handleEmailChange = ({ e }: { e: any }) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = ({ e }: { e: any }) => {
    setMessage(e.target.value);
  };
  function Button() {
    return (
      <button
        className="btn btn-default"
        type="submit"
        aria-label="Send Message"
      >
        Send Message
      </button>
    );
  }
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    let index = 0;

    function reveal() {
      if (index === reveals.length) {
        return;
      }

      setTimeout(() => {
        reveals[index].classList.add("active");
        index++;
        reveal();
      }, 200);
    }

    reveal();
  }, []);

  return (
    <div className="snipcss-RDU5U">
      <Cursor />
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />

      <NavBar toggleSideBar={toggleSideBar} />

      <div className="ContactDiv">
        <h1 className="AboutTitle">Contact.</h1>
        <article>
          <p>
            shoot me an email directly on
            <b className="MyEmail"> hmakki387@gmail.com</b>
          </p>
        </article>
      </div>

      <br />

      <form
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <div className="fields">
          <div className="field half">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control NameArea TransparentInput"
              placeholder="Name"
              aria-required="true"
              value={name}
              onChange={() => {
                handleNameChange;
              }}
            />
          </div>
          <div className="field half">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control TransparentInput"
              placeholder="Email"
              aria-required="true"
              value={email}
              onChange={() => {
                handleEmailChange;
              }}
            />
          </div>
          <div className="field">
            <textarea
              name="message"
              id="message"
              rows={5}
              className="form-control TextArea"
              placeholder="Message"
              aria-required="true"
              spellCheck="false"
              value={message}
              onChange={() => {
                handleMessageChange;
              }}
            ></textarea>
          </div>
        </div>

        <Button />
      </form>
      <div>
        <NextButton Content="Go Back Home" URI="/" />
        <div className="WindowsSocialMediaDiv">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
