import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data, showItems, setshowIndex, dummy}) => {

    const handleClick= () => {
        setshowIndex();
    }

    return( <div>
        {/*HEADER*/}

        <div className="w-6/12 mx-auto my-4 bg-purple-50 hover:bg-purple-100 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔻</span>
            </div>

            {showItems && <ItemList items={data.itemCards} />}

        {/*MENU ITEMS*/}

        {/*this line means that show the itemlist only if showItems is true*/ }
        {showItems && <ItemList 
        items={data.itemCards}
        dummy={dummy}/>}
        
        </div> 
    </div>
    )
}

export default RestaurantCategory;