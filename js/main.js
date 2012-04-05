// Visual Frameworks Project 2
// Harry D Lee 4/12
// main.js

// Wait until the DON is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
		function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	function getSelectedCheckbox(){
		var checkbox = document.forms(0).fiction;
		for(var i=0; i<checkBox.length; i++){
			if(checkBox.length[i].checked){
				fiction = checkBox[i].value;
			}
		}
	}
	
	function getCheckBoxValue(){
		if($('fiction').checked){
			fiction = $('fiction').value;
		}else{
			fiction = "No"
		}
	}
	
	function getCheckBoxValue(){
		if($('nonfiction').checked){
			nonfiction = $('nonfiction').value;
		}else{
			nonfiction = "No"
		}
	}
	
	function storeData(){
		var id 				= Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object
		//Object properties contain array with the form label and iput value.
		getCheckBoxValue();
		getFormValue();
		var item						= {};
			item.booklisted				= ["Book Listed:", $('bookllisted').value];
			item.authorname				= ["Author Name:", $('authorname').value];
			item.titleofbook			= ["Title of Book:", $('titleofbook').value];
			item.dateenter				= ["Date Enter:", $('dateenter').value];
			item.fiction				= ["Fiction:", fiction];
			item.nonfiction				= ["Nonfiction:", nonfiction];
			item.checksubjectofbook		= ["Check Subject of Book:", $('checksubjectofbook').value];
			item.ratethebook			= ["Rate the Book:", $('ratethebook').value];
			item.notes					= ["Notes:", $('notes').value];
		//Save data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Save");
	}
	
	function getData(){
		//Write Date
		var makeDiv = docment.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.creaeElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			var linksli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = locaStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.creatElement('ul');
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linkLi); // Create our edit and delet buttons.*/
		}
	}
	
	
	//Variable defaults
	

	function storeData(){
		localStorage.setItem("test", "hello");
		alert(localStorage.value(0));
	}

	//Sat Link & Submit Click Events
	/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click",  getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);

});