import { createRoot } from "react-dom/client"

const App = () => <div>Remote App</div>

const root = createRoot(document.getElementById('root')!)
root.render(<App />)