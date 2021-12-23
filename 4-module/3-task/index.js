function highlight(table) {
  
  if(table.rows){

    for ( let tr of table.rows){
        
      viewTd(tr)
      function viewTd(props) {
        if(props.cells){

          for (let td of props.cells){
            
            if(td.dataset.available == 'true'){
              tr.classList.add('available')
            } else if(td.dataset.available == 'false'){
              tr.classList.add('unavailable')              
            }
            
            if(td.dataset.available == undefined){
              tr.hidden = true
            }
            
            if(td.textContent < 18){
              tr.style.textDecoration = 'line-through';
            }

            if(td.textContent == 'm'){
              tr.classList.add('male');
            } else if(td.textContent == 'f'){
              tr.classList.add('female');
            }

          }

        }

      }

    }

  }

}
