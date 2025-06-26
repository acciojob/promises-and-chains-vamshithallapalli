//your JS code here. If required.

document.getElementById("voteForm").addEventListener("submit", function(e){
	e.preventDefault();
let age = document.getElementById("age").value.trim();
let name = document.getElementById("name").value.trim();

if(age === "" || name === ""){
	alert("Please enter valid details")
	return;
}

age = parseInt(age);

let votePromise = new Promise((function(resolve, reject){
	setTimeout(function(){
		if(age > 18){
			resolve();
		}
		else{
			reject();
		}
	}, 4000)
}))

votePromise.then(function(){
	alert(`Welcome, ${name}. You can vote.`)
}).catch(function(){
	alert(`Oh sorry Doe. You aren't old enough`);
})

})