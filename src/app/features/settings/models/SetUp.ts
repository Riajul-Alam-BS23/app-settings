

export interface SingleAlert{
    label: string;
    subLabel: string;
    option: string[];
    default: string;
}

export interface AlertOptions{
    label: string;
    subLabel: string;
    options:SingleAlert[];
}




// interface InnerObject{
//     label: string;
//     subLabel: string;

// }


// export interface Settings{
//     object1:{
//       innerObject1:{
//         label:string,
//         value:string,
        
//       }
//     }
//   }
  