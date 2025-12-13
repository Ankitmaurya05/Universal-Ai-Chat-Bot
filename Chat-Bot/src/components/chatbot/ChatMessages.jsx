export default function ChatMessages({ messages }) {
  return (
    <>
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex mb-3 transition-transform duration-200 ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow transform transition-all ${
              msg.role === "user"
                ? "bg-indigo-500 text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </>
  );
}
