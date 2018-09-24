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
	
	let next = [...document.body.querySelector('div#grand-node').children]
	console.log(`next=${next}`)
	let depth=0;
	let current = next.shift() //grab one element from next
	console.log('current=')
	console.log(current)
	while (current !== undefined) {
		try{
			while (current.children !== undefined){
				if (current.children.length>0) { 
					for (let i = 0; i < current.children.length; i++) {
						next.push(current.children[i]) 
						console.log(`current = ${current}`)
					}
				} else {
					console.log('no children here!')
					console.log(current)
					return(current)
                }
			console.log(`now next=${next}`)
			current = next.shift()
        }
		}	 
		catch(error){
			console.log(error)
		}
	// if we haven't
	return current
	}
}

deepestChild()