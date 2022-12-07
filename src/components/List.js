import React from "react";
import ShoppingCard from "./Shopping-card";
const List = (props) => {
  if  (props.list.length === 0){
    return <h2> Nothing Foung! Try again. </h2>
  }

  return(
    <div>
        {props.list.map((item) => {
          return  <ShoppingCard card={item} />;
          })};
        
    </div>    
   );
   
 
};

export default List;


// import React from "react";
// import ShoppingCard from "./Shopping-card";
// const List = (props) => {
//   let searchedTerm = <p>Nothing found!</p>;
//   if (props.list.length > 0) {
//     searchedTerm = props.list.map((item) => {
//       return <ShoppingCard card={item} />;
//     });
//   }
//   return <div>{searchedTerm}</div>;
// };

// export default List;
