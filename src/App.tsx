import reactLogo from "./assets/react.svg";
import { SampleButton } from "./components/SampleButton";

export default function App() {
  return (
    <div className="flex w-full min-w-96 flex-col gap-8 bg-slate-800 p-8 text-white">
      <h2 className="mx-auto text-xl">This UI is built with React</h2>
      <img src={reactLogo} alt="The React Logo" className="mx-auto size-20" />
      <h3 className="mx-auto text-lg">Click and check the console!</h3>
      <SampleButton />
    </div>
  );
}
