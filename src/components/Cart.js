import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    //to read our cart info, we will have to subscribe to the store
    //we will do it using useselector
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart 🛒</h1>
        {/*here we will reuse the ItemLisr component from itemlist.js */}
        <div className="w-6/12 m-auto bg-white hover:bg-yellow-50 border border-black border-dotted">
        <button 
            className="p-2 m-2 bg-white text-black hover:text-white hover:bg-red-500 rounded-lg"
            onClick={handleClearCart}
            >
            Clear Cart</button>
            {cartItems.length === 0 && <h1 >Go and pick something to eat!</h1>
            }
            <ItemList items={cartItems} />
        </div>
    </div>
}

export default Cart;