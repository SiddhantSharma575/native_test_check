import "react-native"
import React from "react"
import {render , screen} from "@testing-library/react-native"
import FirstElementTest from "../components/FirstElementTest"
import renderer from 'react-test-renderer'

describe("First ELement Check",  () => {
    it("Text Content check", async () => {
        render(<FirstElementTest />)
        const textElement = await screen.getByTestId("sample") 
        
    })
})

// test("First Text Element check", () => {
//     const tree = renderer.create(<FirstElementTest />).getInstance()
//     console.log(tree)
// })