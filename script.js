let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


const title = document.getElementById("title");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const date = document.getElementById("date");

const addBtn = document.getElementById("addBtn");

const transactionList = document.getElementById("transactionList");

const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const balance = document.getElementById("balance");

const search = document.getElementById("search");
const filter = document.getElementById("filter");



/* Add Transaction */

addBtn.addEventListener("click",()=>{


    if(title.value==="" || amount.value===""){

        alert("Please enter transaction details");
        return;

    }



    let transaction={

        id:Date.now(),

        title:title.value,

        amount:Number(amount.value),

        type:type.value,

        category:category.value,

        date:date.value || new Date().toLocaleDateString()

    };



    transactions.push(transaction);


    saveData();


    displayTransactions();


    updateSummary();


    title.value="";
    amount.value="";


});






/* Display Transactions */


function displayTransactions(){


    transactionList.innerHTML="";



    let data=transactions;



    if(search.value){

        data=data.filter(item=>

            item.title.toLowerCase()
            .includes(search.value.toLowerCase())

        );

    }




    if(filter.value!="all"){

        data=data.filter(item=>

            item.category==filter.value

        );

    }





    data.forEach(item=>{


        let row=document.createElement("tr");



        row.innerHTML=`

        <td>${item.date}</td>

        <td>${item.title}</td>

        <td>${item.category}</td>

        <td>${item.type}</td>


        <td>

        ₹${item.amount}

        </td>


        <td>

        <button class="delete" onclick="deleteTransaction(${item.id})">

        Delete

        </button>

        </td>


        `;



        transactionList.appendChild(row);



    });



}






/* Delete Transaction */


function deleteTransaction(id){


    transactions=

    transactions.filter(item=>

        item.id!==id

    );


    saveData();

    displayTransactions();

    updateSummary();


}







/* Update Dashboard */


function updateSummary(){


    let income=0;

    let expense=0;



    transactions.forEach(item=>{


        if(item.type==="income"){

            income+=item.amount;

        }

        else{

            expense+=item.amount;

        }


    });



    totalIncome.innerHTML="₹"+income;


    totalExpense.innerHTML="₹"+expense;


    balance.innerHTML="₹"+(income-expense);



    updateChart(expense);

}





/* Local Storage */


function saveData(){

    localStorage.setItem(

        "transactions",

        JSON.stringify(transactions)

    );

}







/* Search */


search.addEventListener(

"input",

displayTransactions

);



filter.addEventListener(

"change",

displayTransactions

);








/* Dark Mode */


document.getElementById("darkBtn")
.onclick=function(){


    document.body.classList.toggle("dark");


};








/* Chart */


let chart;



function updateChart(expense){



    const ctx=document
    .getElementById("expenseChart");



    if(chart){

        chart.destroy();

    }




    chart=new Chart(ctx,{


        type:"doughnut",


        data:{


            labels:[

                "Expense"

            ],


            datasets:[{


                data:[expense || 1]


            }]


        }



    });



}







/* Load Data */


displayTransactions();

updateSummary();