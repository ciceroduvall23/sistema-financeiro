import React, { useState } from "react";


const Form = () => {
    const [desc,setDesc] = useState("");
    const [amount, setAmount ] = useState("");
    const [IsExpense, setExpense] = useState(false);

    const handleSave = () =>{
        if(!desc || ! amount){
            alert("Informe a descrição e o valor");
            return;
         } else if (amount < 1) { 
                alert("O valor tem que ser positivo");
         }  
    };
    return (
       <div>Form</div>
    );
};

export default Form;