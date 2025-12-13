export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 bg-indigo-500 text-white p-4 rounded-full shadow-lg hover:bg-indigo-600 transition"
    >
      💬 Chat
    </button>
  );
}
