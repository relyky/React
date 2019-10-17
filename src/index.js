import React, { useState } from "react"
import ReactDOM from "react-dom"
import FormContainer from "./js/components/container/FormContainer.jsx"

function App() {
    return
    <div>
        <p>Create a new article</p>
        <FormContainer />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)
