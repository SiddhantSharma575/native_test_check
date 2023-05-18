import "react-native"
import React from "react"
import {render , screen} from "@testing-library/react-native"
import FirstElementTest from "../components/FirstElementTest"
import renderer from 'react-test-renderer'

describe("First ELement Check",  () => {
    it("Text Content check", async () => {
         const renderer =   render(<FirstElementTest />)
        // const textElement = await screen.getByTestId("sample") 
        // expect(textElement)
        const text = renderer.getByTestId("sample")
        console.log(screen.getByTestId("sample").props)
        expect(text.props.children).toBe("Text Element Check")
    })
})

// test("First Text Element check", () => {
    // const tree = renderer.create(<FirstElementTest />).getInstance()
    // console.log(tree)
// })