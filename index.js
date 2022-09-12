marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

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
        onChange={(e) => setTextInput(e.target.value)}
        className="textarea"
        value={textInput}
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={textInput} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
