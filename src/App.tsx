import reactLogo from "./assets/react.svg";

export default function App() {
  function onClickHandler() {
    console.log("Button clicked!");
  }

  return (
    <div className="flex w-full min-w-96 flex-col gap-8 bg-slate-800 p-8 text-white">
      <h2 className="mx-auto text-xl">This UI is built with React</h2>
      <img src={reactLogo} alt="The React Logo" className="mx-auto size-20" />
      <h3 className="mx-auto text-lg">Click and check the console!</h3>
      <button
        className="mx-auto w-fit rounded bg-black px-4 py-2"
        onClick={onClickHandler}
      >
        Click Me!
      </button>
    </div>
  );
}
