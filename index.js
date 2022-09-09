console.log("hi moto...");
// 5887f5a86692ad61b51f9b9775eb7f5c

let newsAccordion=document.getElementById('newsAccordion');

// Create an ajax get request

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.mediastack.com/v1/news?access_key=5887f5a86692ad61b51f9b9775eb7f5c', true);
    
//what to do when response is ready
xhr.onload = function () {
    if(this.status === 200){

        let json=JSON.parse(this.responseText);
        let data=json.data;
       console.log(data);
       let newsHtml="";
       data.forEach(function(element,index){
           
       


       
        //    console.log(data["news"]);

           let news=`
                        <div class="card">
                       <div class="card-header" id="heading${index}">
                               <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                   <b> Breaking news${index+1} </b>
                                   
                                    ${element["title"]}
                            </button>
                        </h2>
                    </div>

                        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">
                     ${element["description"]} 
                    </div>
                </div>
                </div>
                `;
                newsHtml+=news;
            });


        
       newsAccordion.innerHTML=newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send();


