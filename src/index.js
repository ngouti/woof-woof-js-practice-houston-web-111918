let dogBar = document.getElementById('dog-bar')
let dogInfo = document.getElementById('dog-info')


fetch('http://localhost:3000/pups')
        .then(res => res.json())
        .then(res => {
            res.forEach(function(ele){
                let dog = document.createElement('span')
                dog.innerText = ele.name
                dogBar.append(dog)
            })
         
            
            // dogBar.append(dog)
            // dogBar.innerHTML = dog
            // console.log(dog)
        })
       

function fetchData(){

}