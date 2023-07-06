import {render} from "@testing-library/react-native"
import ErrorBoundary from "../app/ErrorBoundary"

test("This should check for ErrorBoundary loads properly", ()=>{
    const screen= render(<ErrorBoundary />)
    console.log(screen.root)
})