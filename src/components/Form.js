import React, {   useState } from "react";
import Table from "./Table";

function FormCalc() {
  const [price, setPrice] = useState(100);
const [multiplyFactor, setMultiplyFactor] = useState(1.25);
const [divisionFactor, setDivisionFactor] = useState(1.75);
const [priceArray,setPriceArray] = useState([]);


function handleSubmit(){
setPriceArray([...priceArray,{
  price: price,
  mulResult : price*multiplyFactor,
  divResult : price/divisionFactor,
  mulFactor : multiplyFactor,
  divFactor : divisionFactor,
}])

console.log(priceArray)
}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-5 justify-items-stretch border bg-gradient-to-t from-purple-100 to-amber-50 border-green-500 shadow-lg shadow-indigo-500/50 ">
      <form className="justify-self-center" onSubmit={(e) => {e.preventDefault();handleSubmit()}}>
        <div className="mb-2">
          <label>multiply By:</label>
          <input
            type="text"
            value={multiplyFactor}
            onChange={e => setMultiplyFactor(e.target.value)}
            className="form-input block rounded  border-blue-100"
          />
        </div>
        <div className="mb-2">
          <label>Divide By:</label>
          <input
            type="text"
            value={divisionFactor}
            onChange={e => setDivisionFactor(e.target.value)}
            className="form-input rounded block border-blue-100"
          />
        </div>
        <div className="mb-4"> 
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) =>setPrice(e.target.value)}
            className="form-input rounded block border-blue-100"
          />
        </div>
        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >submit</button>

      </form>
      <div>
        {(priceArray.length === 0 ? <h1 className=" text-xl text-sky-500">Please add some entries to see the results! </h1> :<Table calcPricesArray={priceArray}/> )}
        
      </div>
    </div>
  );
}

export default FormCalc;
