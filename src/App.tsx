import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
