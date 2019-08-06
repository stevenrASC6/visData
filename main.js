
var i = 0
function displayName(){
    
        
        vname1 = people.results[i].name["first"];
        vname2 = people.results[i].name["last"];

        vdob = people.results[i].dob["age"];
        vemail = people.results[i].email;
        vcell = people.results[i].cell;
        pic = document.createElement("img");
        pic.src = people.results[i].picture.large
        // document.getElementById("boxes");
        // box = document.createElement("h3");
        // box.innerHTML = i;
        // document.getElementById("boxes").appendChild(box);

        box = document.createElement("h3");
        breek = document.createElement("br");
        boxes.appendChild(pic)

        box.innerHTML = "Name: " + vname1 + " " + vname2 + "  Age:" + vdob  +"  Email: " + vemail + "  Cell: " + vcell;
        
        document.getElementById("boxes").appendChild(box);

        console.log(vname1 +" \n hello");
        i++
        
    }


    // console.log(vname);


document.body.addEventListener("keyup",displayName);