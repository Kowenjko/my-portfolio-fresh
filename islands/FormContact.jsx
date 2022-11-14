import { JSX } from "preact";
import { useSendMessage } from "../composables/useSendMessage.js";

export default function FormContact() {
  const {
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
  } = useSendMessage();

  return (
    <form>
      <p
        class={`bg-[#e9f3e9] text-[#4caf50] text-sm rounded-lg py-2 px-5 mb-4 ${
          sendMessage ? "block" : "hidden"
        }`}
      >
        Your message has been successfully sent.
      </p>
      <p
        class={`dark:bg-[#533643] dark:text-[#b59a98] text-sm bg-[#ffeaea] text-[#f44336] rounded-lg px-5 py-2 mb-4 ${
          sendErrorMessage ? "block" : "hidden"
        }`}
      >
        An error occurred while sending the message.
      </p>
      <input
        class="pl-4 h-12 rounded-lg w-full outline-none"
        type="text"
        placeholder="Name"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />
      <p
        class={`dark:bg-[#533643] dark:text-[#b59a98] bg-[#ffeaea] text-[#f44336] rounded px-5 py-1 my-1 text-sm ${
          errorName ? "block" : "hidden"
        }`}
      >
        Please enter your name.
      </p>
      <input
        class="pl-4 h-12 mt-4 rounded-lg w-full outline-none"
        type="text"
        placeholder="Email"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      />
      <p
        class={`dark:bg-[#533643] dark:text-[#b59a98] bg-[#ffeaea] text-[#f44336] rounded px-5 py-1 my-1 text-sm ${
          errorEmail ? "block" : "hidden"
        }`}
      >
        Please enter a valid email address.
      </p>
      <textarea
        class="pl-4 pt-2 h-44 mt-4 rounded-lg w-full outline-none"
        placeholder="Message"
        value={message}
        onInput={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <p
        class={`dark:bg-[#533643] dark:text-[#b59a98] bg-[#ffeaea] text-[#f44336] rounded px-5 py-1 mt-1 text-sm ${
          errorMessage ? "block" : "hidden"
        }`}
      >
        Please enter your message.
      </p>
      <div class="w-full flex gap-4">
        <button
          onClick={onSendEmail}
          class="submit-button relative transition-all duration-300  w-full bg-[#237BFF] rounded-lg text-white mt-4 py-3 hover:bg-blue-700 focus:outline-none show-loading"
        >
          <i class="uil uil-envelope-alt pr-2"></i> Send Message
          {loadingEmail && <span class="loading"></span>}
        </button>
        <button
          onClick={onSendTelegram}
          class="submit-button relative transition-all duration-300  w-full bg-[#237BFF] rounded-lg text-white mt-4 py-3 hover:bg-blue-700 focus:outline-none show-loading"
        >
          <i class="uil uil-telegram-alt pr-2"></i> Send Message
          {loadingTelegram && <span class="loading"></span>}
        </button>
      </div>
    </form>
  );
}
