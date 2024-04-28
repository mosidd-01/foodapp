export default function InnerContainer({ children }) {
  return (
    <div className="bg-gray-800 flex-1 px-2.5 py-2.5 mx-2.5 my-2.5">
      {children}
    </div>
  );
}
