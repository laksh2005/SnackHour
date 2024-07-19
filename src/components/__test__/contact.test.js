import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
import { act } from "react"


//sometimes we might write "it" instead of "test" while starting a test case
//it makes not difference in test, just an alternative start, a smaller word

describe("Contact Us page Test Cases", () => {
    
    beforeAll(()=>{
        console.log("This function runs before all tests")
    })
    beforeEach(()=>{
        console.log("This function runs before each test")
    })
    afterEach(()=>{
        console.log("This function runs after each test")
    })


    it("Should load the Contact component", () =>{
        render(<Contact />);

        const heading = screen.getByRole("heading");
    
        //ASSERTION
        expect(heading).toBeInTheDocument();
    
    });
    
    test("Should load the button in Contact component", () =>{
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        //ASSERTION
        expect(button).toBeInTheDocument();
    
    });
    
    
    it("Should load 2 input boxes inside the Contact component", () =>{
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //QUERYING
        console.log(inputBoxes.length);
    
        //ASSERTION
        expect(inputBoxes.length).toBe(2);
    })
})