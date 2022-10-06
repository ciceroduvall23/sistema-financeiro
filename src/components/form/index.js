import React, { useState } from "react";
import * as C from "./style"

const Form = () => {
    const [desc,setDesc] = useState("");
    const [amount, setAmount ] = useState("");
    const [IsExpense, setExpense] = useState(false);

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descrição e o valor");
            return;
         } else if (amount < 1) { 
                alert("O valor tem que ser positivo");
                return;
         }  
    };

    return (
       <>

       <C.Container>
        <C.InputContent>
            <C.Label>Descrição</C.Label>
           <C.Input value={desc} onChance={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
        <C.Label>Valor</C.Label>
           <C.Input 
            value={amount}
             type="number" 
             onChance={(e) => setAmount(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
        <C.Input 
             type="radio" 
             id="rIncome"
             defaultCkecked
             name="group1"
             onChance={() => setExpense(!IsExpense)} />

             <C.Label htmlFor ="rIncome">Entrada</C.Label>
             <C.Input 
             type="radio" 
             id="rExpenses"
             name="group1"
             onChance={() => setExpense(!IsExpense)} />
               <C.Label htmlFor ="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
       </C.Container>
       </>
    );
};

export default Form;