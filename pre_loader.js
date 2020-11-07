/*------pre_loader-----*/

var myVar;

		function myFunction() {
			myVar = setTimeout (showPage, 3000);
		}

		function showPage() {
			document.getElementById("loader_wrapper").style.display = "none";
			document.getElementById("container").style.display = "grid";
		}

/*---button animation -----*/
 var menuBtn= document.querySelector('.lbl-btn');
 let menuOpen="true";
 
 menuBtn.addEventListener('click', () => {
	 if(menuOpen){
		 menuBtn.classList.add('open');
		 menuOpen= false;
	 }
	 else if (!menuOpen){
		 menuBtn.classList.remove('open');
		 menuOpen= true;
	 }
 });
