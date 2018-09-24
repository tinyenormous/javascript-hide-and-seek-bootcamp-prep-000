function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n){
  let ulList=document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<ulList.length; i++){
    ulList[i].innerHTML = (parseInt(ulList[i].innerHTML)+n).toString();
  }
}

function deepestChild() {
	
		  let next = [...document.body.querySelector('#app').children]
			console.log('next=')
			console.log(next)
      let depth=0;
		  let current = next.shift() //grab one element from next
 			console.log('current=')
		  console.log(current)
      // console.log(current.children[2])

		  while (current) {
      // 			console.log(current.children.length)
		    if (current.children.length>0) { //test for objects with (typeof current === "object")
		      for (let i = 0; i < current.children.length; i++) {
		        next.push(current.children[i]) //I believe unshifting this value would make a depth first algo
				    console.log(next)
            // console.log(i)
            // depth++
            // console.log(depth)
		      }
		    }
        // depth--
        // console.log(depth)
		    current = next.shift()
		  }
		 
		  // if we haven't
		  return current
		}