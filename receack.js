
// no 1
function password(inputObj) {
    if (inputObj.hasOwnProperty("name") && inputObj.hasOwnProperty("birthYear" ) && inputObj.hasOwnProperty("siteName")
    && typeof inputObj.name === "string" && typeof inputObj.birthYear === "number" && typeof inputObj.siteName === "string"
    && inputObj.birthYear.toString().length === 4) {
    const passwordString =inputObj.siteName + "#" +inputObj.name + "@" + inputObj.birthYear;
    return passwordString;
    } else{
    return "invalid"
    }
    }

    console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" })); // output is okey Google#kolimuddin@1999

    console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));    // Facebook#rahat@2002 out put is okey but i dont undestand why cut my number 

    console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));  // invalide passwored 



    // ==========================================================

    // no 2 

    function monthlySavings(allPayments, livingCost) {
    if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
    return "invalid input";
    }
    const totalIncome = allPayments.reduce((sum, payment) => sum + payment, 0);
    const savings = totalIncome - livingCost;
    if (savings >= 0) {
    const bankTax = allPayments.some(payment => payment > 3000) ? 0.2 * totalIncome : 0;
    const finalSavings = savings - bankTax;
    return finalSavings >= 0 ? finalSavings : "earn more";
    } else {
    return "earn more";
    }
    }


    console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));  // output 500 is ok but why cut my number please tell me 
    console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));   // output earn more —------------------------------(string) is okk but why cut my number
    console.log(monthlySavings(100, [ 900 , 2700 , 3400])); ///  // output invalid input is okey but why cut my number please tell me 
