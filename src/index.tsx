import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "simplebar/dist/simplebar.min.css"
import { store } from "store"
import "styles/index.css"
import "tippy.js/dist/tippy.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
