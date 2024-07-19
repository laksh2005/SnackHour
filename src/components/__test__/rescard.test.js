import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardmock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it("Should render restro card component with PROPS data", () =>{

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();

})