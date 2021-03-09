const calculate = () => {
    let web = document.getElementById("web").value;
    let java = document.getElementById("java").value;
    let dbms = document.getElementById("dbms").value;
    let maths = document.getElementById("maths").value;
    let grades = "";

    let totalGrades = parseFloat(web) + parseFloat(java) + parseFloat(dbms) + parseFloat(maths);
    //console.log(totalGrades);
    let p = (totalGrades/400) * 100;
    //console.log(p);

    if(p<=100 && p>=80) {
        grades="A";
    } else if(p<=79 && p>=60) {
        grades="B";
    }
    else if(p<=59 && p>=40) {
        grades="C";
    } else if(p<=39 && p>=30){
        grades="D";
    } else {
        grades="F";
    }
    //console.log(grades);

    if(p>=39) {
        document.getElementById("showData").innerHTML=`Your score is ${totalGrades} out of 400 and percentage is
        ${p}%. <br> 
        Your grade is ${grades}.
        You are Pass.
        `
    } else {
        document.getElementById("showData").innerHTML=`Your score is ${totalGrades} out of 400 and percentage is
        ${p}%. <br> 
        Your grade is ${grades}.
        You are Fail.
        `
    }
}