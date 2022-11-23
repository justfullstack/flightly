"use strict";

class UI{
    constructor(){
        this.display = document.getElementById("displayRow");
        this.notify = document.getElementById("notification");
    }



    showResults(data){
        const results = data.airports;

        let output;

        for(let index=0; index < results.length; index++ ){
            output += "<tr>";
            output += "<td>" + results[index].name  + "</td>";
            output += "<td>" + results[index].iata  + "</td>";
            output += "<td>" + results[index].state.type  + "</td>";
            output += "<td>" + results[index].city  + "</td>";
            output += "<td>" + results[index].state.name  + "</td>";
            output += "<td>" + results[index].country.name  + "</td>";
            output += "</tr>";
        }


        
        this.notify.innerHTML = `
        <article class="message is-primary">
            <div class="message-body">
                Showing <span class="tag is-success">${test.length}</span> results for '${data.term.toUpperCase()} '
            </div>  
        </article>
        `;

        this.display.innerHTML = output;

    }


    showAlert(data){
        this.notify.innerHTML = `
        <article class="message is-danger">
            <div class="message-body"> 
                ${data.message}
            </div>  
        </article>
        `


        // time out
        setTimeout(() =>{
           this.clearAlert();
        }, 3000);
    }


    clearAlert(){
        const currentAlert = document.querySelector(".is-danger");

        if (currentAlert){
            currentAlert.remove();
        }
    }


    inputSpinner(){
        const spinner = document.getElementById("loading");
        spinner.classList.remove("hidden");


        setTimeout(() => {
            spinner.classList.add("hidden"); 
        }, 3000)
    }
    
    
};

 
export const ui = new UI();