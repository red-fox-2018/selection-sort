

function selectionSort(array) {
 	  

  for(var i=0;i<array.length;i++) { 
  	var arrMin=array[i]; 
  	var index=0;  

	  for(var j=i;j<array.length;j++) {
		  if(array[j]<arrMin){  
		    arrMin=array[j];  
		    index=j; 
		  }
	  }

    
    if(i!== index){ 
		var penampung=array[i];  
		array[i]=arrMin;  
		array[index]=penampung;  
    }

  }
 	return array;
}



//test case
console.log(selectionSort([33,2,52,106,73]));
