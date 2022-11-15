import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Header } from "../Header.tsx";
import { Footer } from "../Footer.tsx";

export default function BaseLayout(props) {
  return (
    <>
      <Head>
        <title>Kovenko</title>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/icons8-source-code-16.png"
        >
        </link>
        <link rel="stylesheet" href="/main.css" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <div
        class={` h-screen `}
      >
        <Header />
        <main class="">
          {props.children}
        </main>
        <Footer />
      </div>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      >
      </script>
    </>
  );
}
