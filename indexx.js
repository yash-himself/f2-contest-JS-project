

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    // map function printing the candidate with profession developer
    arr.map((devCandidate) => {
        if (devCandidate.profession === "developer") {
            console.log(devCandidate);
        }
    })
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log

    // foreach printing the candidate with profession developer
    arr.forEach((devCandidate)=>{
        if (devCandidate.profession === "developer") {
            console.log(devCandidate);
        }
    })
}

function addData() {
    //Write your code here, just console.log

    // new candidate object
    let newCandidate={id:4,name:"susan",age:"20",profession:"intern"}
    // pushing new candidate
    arr.push(newCandidate)
    // printing 
    console.log(arr[arr.length-1]);
}

function removeAdmin() {
    //Write your code here, just console.log

    arr.filter((candidate) => {
       
      if(candidate.profession!="admin"){console.log(candidate)}
    })
}

function concatenateArray() {
    //Write your code here, just console.log
    let arr2 =[
    { id: 5, name: "john wick", age: "34", profession: "tester" },
    { id: 6, name: "jack sparrow", age: "38", profession: "engineer" },
    { id: 7, name: "Lucifer", age: "90", profession: "electrician" },
];
 let newArr=arr.concat(arr2);
    console.log(newArr);

}







