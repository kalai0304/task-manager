// arr = [8, 9, 10, 1, 3, 5];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// let fileter = arr.filter((ele) => {
//   return ele >= 5;
// });
// console.log(fileter);

// obj = [
//   {
//     name: "kalai",
//     age: "20",
//   },
//   {
//     name: "abi",
//     age: "51",
//   },
//   {
//     name: "john",
//     age: "63",
//   },
// ];
// obj.map((ele) => {
//   console.log(ele.name);
// });
// // obj.filter((ele)=>{
// //     if(ele.age>50){
// //         console.log(ele.name +" "+ele.age);
// //     }
// // })
// obj.filter((ele) => ele.age > 50).map((x) => console.log(x.name + " " + x.age));
// let data = document.querySelector("div");
// console.log(data);
// cart = false;
// let button = document.getElementById("button");
// button.addEventListener("click", () => {
//   button.innerText = "added";
//   if (!cart) {
//     cart = true;
//     alert("cart added");
//   } else {
//     button.innerText = "add to cart";
//   }
// });

// let startbtn = document.querySelector(".startbtn");
// startbtn.addEventListener("click", () => {
//   startbtn.innerText = "Stop";
//   // startbtn.style.background;
//   startbtn.style.backgroundColor = "red";
// });
let id=0;
const users = [
  {
    userid:`${++id}`,
    task: "Meeting",
    description: "Client presentation for social media strategy",
    duration: "01:45:59", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Project",
    description: "Design mockups for the website redesign",
    duration: "18:00:00", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Personal work",
    description: "Pay bills and update budget spreadsheet",
    duration: "20:30:04", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Meeting",
    description: "One-on-one with manager for performance review",
    duration: "00:30:43", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Project",
    description: "Write content for upcoming blog post",
    duration: "00:55:10", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Personal work",
    description: "Grocery shopping and meal prepping",
    duration: "07:50:00", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Meeting",
    description: "Team training session on new software",
    duration: "09:00:00", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Project",
    description: "Develop user interface (UI) for the new mobile app",
    duration: "02:40:00", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Personal work",
    description: "Go for a walk and listen to a podcast",
    duration: "00:30::09", // In minutes
  },
  {
    userid:`${++id}`,
    task: "Meeting",
    description: "Quick follow-up Meeting with client",
    duration: "15:09:10", // In minutes
  },
];

// Display a initial table
// let userlist = document.getElementById("userlist");
// let html = "";
// users.map((val) => {
//   html += "<tr>";
//   html += "<td>" + val.task + "</td>";
//   html += "<td>" + val.description + "</td>";
//   html += "<td>" + val.duration + "</td>";
//   html += "</tr>";
//   userlist.innerHTML = html;
// });

let filteredlist = document.getElementById("filteredtable");
let html3 = "";

users.map((val, index) => {
    // console.log(val.userid);
  html3 += "<tr>";
  html3 += `<td><input type=text class='d-none inputele' id='i${index}' value=""/>
            <span class='spanele' id="i${index}_id">${val.task}</span></td>`;

  html3 += `<td><input type=text class='d-none inputele' id='ii${index}' value=""/>
            <span class='spanele' id="ii${index}_id">${val.description}</span></td>`;

  html3 += "<td>" + val.duration + "</td>";
  html3 += `<td> <button id='edit${index}' onClick=handleEdit(${index})>Edit</button>
                <button onClick=handleDelete(${index})>Delete</button></td>`;
  html3 += "</tr>";
  filteredlist.innerHTML = html3;
});

// Filter task
function filtertask() {
  let filteredlist = document.getElementById("filteredtable");
  let html1 = "";

  let selecttask = document.getElementById("selecttask").value;
  if (selecttask != "") {
    users
      .filter((tsk) => tsk.task === selecttask)
      .map((val, index) => {
        console.log(val.userid);

        html1 += "<tr>";
        html1 += `<td><input type=text class='d-none inputele' id='i${index}' value=""/>
        <span class='spanele' id="i${index}_id">${val.task}</span></td>`;

        html1 += `<td><input type=text class='d-none inputele' id='ii${index}' value=""/>
        <span class='spanele' id="ii${index}_id">${val.description}</span></td>`;
        html1 += "<td>" + val.duration + "</td>";
        html1 += `<td> <button id='edit${index}' onClick=handleEdit(${index})>Edit</button>
        <button onClick=handleDelete(${index})>Delete</button></td>`;
        html1 += "</tr>";
        filteredlist.innerHTML = html1;
      });
  } else {
    display();
  }
}

// Display data
const display = () => {
  let filteredlist = document.getElementById("filteredtable");
  let html = "";
  users.map((val, index) => {
    // console.log(val.userid);

    html += "<tr>";
    html += `<td><input type=text class='d-none inputele' id='i${index}' value=""/>
    <span class='spanele' id="i${index}_id">${val.task}</span></td>`;

    html += `<td><input type=text class='d-none inputele' id='ii${index}' value=""/>
        <span class='spanele' id="ii${index}_id">${val.description}</span></td>`;
    html += "<td>" + val.duration + "</td>";
    html += `<td> <button id='edit${index}' onClick=handleEdit(${index})>Edit</button>
    <button onClick=handleDelete(${index})>Delete</button></td>`;
    html += "</tr>";
    filteredlist.innerHTML = html;
  });
};

// Delete row
const handleDelete = (i) => {
  console.log(i, 1);
  users.splice(i, 1);
  let filteredlist = document.getElementById("filteredtable");
  filteredlist.innerHTML = "";
  filtertask();
};

// Handle edit
const handleEdit = (index) => {
  let whathere = document.getElementById(`edit${index}`).innerText;
  console.log("what here" + whathere);

  let originalInputText1= document.getElementById(`i${index}`).value;
  let originalInputText2= document.getElementById(`ii${index}`).value;
 
  let originalSpanText1 = document.getElementById(`i${index}_id`).innerText;
  let originalSpanText2 = document.getElementById(`ii${index}_id`).innerText;

  console.log("originalInputText1 :"+ originalInputText1 +"originalInputText2 :" +originalInputText2);
  console.log("originalSpanText1 :"+ originalSpanText1 +"originalSpanText2 :" +originalSpanText2);


  if (whathere == "Edit") {
    document.getElementById(`edit${index}`).innerText = "Save";

    document.getElementById(`i${index}`).classList.remove("d-none");
    document.getElementById(`ii${index}`).classList.remove("d-none");

    console.log(document.getElementById(`i${index}`).value);

    
    document.getElementById(`i${index}`).value = originalSpanText1;
    document.getElementById(`ii${index}`).value = originalSpanText2;
    
    document.getElementById(`i${index}_id`).innerText = "";
    document.getElementById(`ii${index}_id`).innerText = "";

    console.log("span" + document.getElementById(`i${index}_id`).innerText);
  }

  if (whathere == "Save") {

    document.getElementById(`edit${index}`).innerText = "Edit";

    let taskvalue= document.getElementById(`i${index}`).value;
    let descriptionvalue=document.getElementById(`ii${index}`).value;
    if(document.getElementById(`i${index}`).innerText == "" && document.getElementById(`ii${index}`).innerText==""){
        document.getElementById(`i${index}_id`).innerText=originalInputText1;
        document.getElementById(`ii${index}_id`).innerText=originalInputText2
    }else{
        document.getElementById(`i${index}_id`).innerText = taskvalue;
        document.getElementById(`ii${index}_id`).innerText = descriptionvalue;
    }


    let ids=[1];
    if(ids.includes(users[0 ].userid)){
        users[0].task = `${taskvalue}`
        users[0].task= `${descriptionvalue}`
    }
    document.getElementById(`i${index}`).classList.add("d-none");
    document.getElementById(`ii${index}`).classList.add("d-none");
  }
};


// Stop timer
var timer=document.getElementById("showtimer");
let minutes=0;
let seconds=0;
let hour=0;
let isRunning=false;
let stiID;
let timeformate="00:00:00";
document.getElementById("stop-start-btn").addEventListener("click",()=>{
    if(!isRunning){
        isRunning=true;
        document.getElementById("stop-start-btn").textContent="Stop"
        stiID=setInterval(() => {
            seconds++;
            if(seconds>=60){
                minutes++;
                seconds=0;
                if(minutes>=60){
                    hour++;
                    minutes=0;
                }
            }
            
            timeformate=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
            timer.innerHTML=`<h4>${timeformate}</h4>`
            timer.value=`${timeformate}`
            console.log(timeformate)
            console.log("stop-stat-btn: "+document.getElementById("showtimer").value);

        }, 1000);
    }else{
        document.getElementById("reset-btn").disabled=false;
        document.getElementById("add-btn").disabled=false;
        clearInterval(stiID);
        isRunning=false;
        document.getElementById("stop-start-btn").textContent="Start"
    }
    // Reset the button
    document.getElementById("reset-btn").addEventListener("click",()=>{
        clearInterval(stiID);
        console.log("reset-btn: "+timer.value);
        isRunning=false;
        document.getElementById("add-btn").disabled=true;
        document.getElementById("reset-btn").disabled=true;

        seconds=0;
        minutes=0;
        hour=0;
        timeformate=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
        timer.innerHTML=`<h4>${timeformate}</h4>`
            timer.value=`${timeformate}`
        document.getElementById("stop-start-btn").textContent="Start"
        // timer.textContent='00:00:00';
    })
    
    
});


// Add task
let form = document.getElementById("addtask");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("add-btn").disabled=true;
  document.getElementById("reset-btn").disabled=true;

  let tsk = document.getElementById("inputtask").value;
  let des = document.getElementById("inputdescription").value;

//   document.getElementById("inputduration").value = 
  console.log("inside add task: "+document.getElementById("showtimer").value);

  let dur = document.getElementById("showtimer").value;
  users.push({
    task: tsk,
    description: des,
    duration: dur,
  });

  display();
  tsk = document.getElementById("inputtask").value = "";
  des = document.getElementById("inputdescription").value = "";
//   dur = document.getElementById("inputduration").value = "";
  seconds=0;
  minutes=0;
  hour=0;
  timeformate=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
  timer.innerHTML=`<h4>${timeformate}</h4>`
      timer.value=`${timeformate}`
});

