function App() {
  const [textInput, setTextInput] = React.useState("");

  return (
    <div className="text-center px-4">
      <h1 className="px-4">Markdown Previewer</h1>
      <textarea
        name="textInput"
        id=""
        cols="30"
        rows="10"
        className="textarea"
        value={textInput}
      ></textarea>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
