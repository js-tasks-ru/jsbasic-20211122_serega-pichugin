function sumSalary(salaries) {
  let currency = 0

    for( key in salaries){
          
      if(
        typeof( salaries[key]) === "number" &&
        !isNaN(salaries[key]) &&
        isFinite(salaries[key])
        ) {
            currency += salaries[key]
      }      
  
    }

    return currency
}
