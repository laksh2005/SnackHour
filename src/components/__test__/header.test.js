import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { act } from "react";

//WE IMPORTED THESE BECAUSE THERE WERE PART OF OUR HEADER COMPONENT
//SO WE NEED THE TESTER FILE TO KNOW ABOUT THESE FOR OUR CODE TO GET ACCEPTED
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should load Header component with a login button", () =>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
            </BrowserRouter>
        )

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
})

it("Should load Header component with a cart button", () =>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
            </BrowserRouter>
        )

    const cartItems = screen.getByText("Cart 🛒 (0) Items");

    expect(cartItems).toBeInTheDocument();
})

it("Should change loging btn to logoutbtn on click in the Header component", () =>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
            </BrowserRouter>
        )
    

    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})