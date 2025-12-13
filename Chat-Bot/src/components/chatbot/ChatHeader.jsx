export default function ChatHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-2xl">
      <div>
        <p className="font-semibold">AI Friend 🤖</p>
        <p className="text-xs opacity-80">online</p>
      </div>
      <button onClick={onClose} className="text-xl">✕</button>
    </div>
  );
}
