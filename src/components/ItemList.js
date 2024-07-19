import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem} from "../utils/cartSlice";



const ItemList = ({items, dummy}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //DISPATCHING AN ACTION
        //WE WILL GET THIS FROM A HOOK useDispatch FROM REACT-REDUX
        //whatever i will pass in below in  additem, it will go into reducer action function in carslice.js, into the action.payload
        dispatch(addItem(item));
    }


    return <div>
        <div>
            {items.map(item=> 
            <div key={item.card.info.id} 
            className=" p-2 m-2 border-purple-600 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span className="font-bold"> - ₹{item.card.info.price /100 || item.card.info.defaultPrice /100}</span>
                    </div>
                    <p className="text-xs ">{item.card.info.description}</p>
                </div>

                <div className="w-3/12 p-4">
                <div>
                    <button 
                    className="font-bold mx-16 rounded-lg p-2 bg-white text-green-400 shadow-lg absolute"
                    onClick={() => handleAddItem(item)}>
                    ADD +</button>
                </div>
                <img 
                src={CDN_URL + item.card.info.imageId}
                />
                </div>
            </div>
            )}
        </div>
    </div>
}

export default ItemList;