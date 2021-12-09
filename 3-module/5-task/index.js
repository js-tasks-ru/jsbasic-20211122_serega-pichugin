function getMinMax(str) {
  let arr = str
  let result = {
      min: 0,
      max: 0
  }

  arr = arr.split(' ')
  .map(item => {
      
      if( 
          !isNaN(+item)            
      ){
          return item
      }
       
  })
  .filter(function (item) {
      return item != null;
    })
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }

    result.max = getMaxOfArray(arr) //?
    result.min = getMinOfArray(arr)
  
  return result
}
