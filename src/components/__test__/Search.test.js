import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/ResListmock.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

//here we are creating a call back function, to show how fetch exactly was working in body component
//since fetch in not here, so we are desribing its function, on our own
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search resList for pizza",async()=>{

        render(
            <BrowserRouter>
              <Body />
            </BrowserRouter>
        )

        const cardsBeforeSearch = screen.getAllByTestId('resCard');

        expect(cardsBeforeSearch.length).toBe(8);
      
        const searchBtn = screen.getByRole('button', { name: '🔍' });
      
        const searchInput = screen.getByTestId('searchInput');
      
        fireEvent.change(searchInput, { target: { value: 'pizza' } });
      
        fireEvent.click(searchBtn);
      
        const cardsAfterSearch = screen.getAllByTestId('resCard');
      
        expect(cardsAfterSearch.length).toBe(2);
})