import { useState } from "preact/hooks";

import { paramsEmailJS, urlEmailJS } from "../config/configApi.js";
import { validateEmail } from "./useHelpers.ts";

export function useSendMessage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingTelegram, setLoadingTelegram] = useState(false);

  const [sendMessage, setSendMessage] = useState(false);
  const [sendErrorMessage, setSendErrorMessage] = useState(false);

  const validateData = () => {
    setErrorName(!name);
    setErrorEmail(!email || !validateEmail(email));
    setErrorMessage(!message);
    return name && email && validateEmail(email) && message;
  };

  const clearFormData = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const statusOk = () => {
    setSendMessage(true);
    clearFormData();
    setTimeout(() => setSendMessage(false), 4000);
  };

  const statusError = () => {
    setSendErrorMessage(true);
    clearFormData();
    setTimeout(() => setSendErrorMessage(false), 4000);
  };

  const sendTelegram = async () => {
    const formData = { name, email, message };
    const dataJSON = JSON.stringify(formData);
    setLoadingTelegram(true);
    const requestOptions = {
      method: "POST",
      body: dataJSON,
      redirect: "follow",
    };
    const text = await fetch(urlEmailJS, requestOptions);
    try {
      const result = await text.text();
      console.log(result);
      setLoadingTelegram(false);
      statusOk();
    } catch (error) {
      console.log(error);
      setLoadingTelegram(false);
      statusError();
    }
  };

  const sendEmail = async () => {
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    setLoadingEmail(true);
    const request = await window.emailjs.send(
      paramsEmailJS.serviceID,
      paramsEmailJS.templateID,
      templateParams,
      paramsEmailJS.userID
    );
    try {
      console.log("result", request);
      setLoadingEmail(false);
      statusOk();
    } catch (error) {
      console.log("error", error);
      setLoadingEmail(false);
      statusError();
    }
  };

  const onSendEmail = async (event) => {
    event.preventDefault();
    validateData() && (await sendEmail());
  };

  const onSendTelegram = async (event) => {
    event.preventDefault();
    validateData() && (await sendTelegram());
  };

  return {
    name,
    email,
    message,
    errorName,
    errorEmail,
    errorMessage,
    loadingEmail,
    loadingTelegram,
    sendMessage,
    sendErrorMessage,
    setName,
    setEmail,
    setMessage,
    onSendEmail,
    onSendTelegram,
  };
}
