import {render} from "@testing-library/react"
import App from "./App";

describe("Customers Testing", ()=>{
    test("Render the title of Customers List ", ()=>{
        const {getByText} = render(<App/>)
        const linkElement = getByText("Liste des clients")
        expect(linkElement).toBeInTheDocument()
    })
})