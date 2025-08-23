"use client";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState(null);

  // "use server"; marks this as a server-side function
  // not working: header set to localhost:3000 != my header *.app.github.dev

  // workaround:
  // fetch data to an API route

  async function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/handler", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    setStatus(response.ok ? "Message sent!" : "Error: Message not sent.");
  }

  /*const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("formFields", formFields);
    console.log("TODO: Send these form field to a backend");
    return formFields;*/

  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact us!</h1>
      <form className="space-y-4" onSubmit={submitForm}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-grey-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-grey-700"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            name="message"
            rows={4}
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button type="submit" className="text-white bg-blue-600 rounded-md p-3">
          Send Message
        </button>
        {status && <div className="mt-2">{status}</div>}
      </form>
    </main>
  );
}
