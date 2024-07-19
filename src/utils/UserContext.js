import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Normie User",
});

export default UserContext;