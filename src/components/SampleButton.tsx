export function SampleButton() {
  function onClickHandler() {
    console.log("Button clicked!");
  }

  return (
    <button
      className="mx-auto w-fit rounded bg-black px-4 py-2"
      onClick={onClickHandler}
    >
      Click Me!
    </button>
  );
}
