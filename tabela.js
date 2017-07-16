var g1Przycisk = document.querySelector("#g1");
var g2Przycisk = document.getElementById("g2");
var reset = document.querySelector("#restart");
var g1Ekran = document.querySelector("#wynik1");
var g2Ekran = document.querySelector("#wynik2");
var doIlu = document.querySelector("input");
var maxWynik = document.querySelector("p span");
var input = document.querySelector("input");
var g1Wynik = 0;
var g2Wynik = 0;
var koniecGry = false;
var gracieDo = 5;


g1Przycisk.addEventListener("click", function(){
  	if(!koniecGry){
		g1Wynik++
		input.disabled = true;
			if(g1Wynik === gracieDo){
				koniecGry = true;
				g1Ekran.classList.add("winner");
				console.log("Wygrał gracz pierwszy");
			}
	g1Ekran.textContent = g1Wynik;	
}
});

g2Przycisk.addEventListener("click", function(){
	if(!koniecGry){
		g2Wynik++
		input.disabled = true;
			if(g2Wynik === gracieDo){
				koniecGry = true;
				g2Ekran.classList.add("winner");
				console.log("Wygrał gracz drugi");
			}
		}
	g2Ekran.textContent = g2Wynik;
});

function resetGry(){
	g1Wynik = 0;
	g2Wynik = 0;
	koniecGry = false;
	g1Ekran.textContent = 0;
	g2Ekran.textContent = 0;
	g1Ekran.classList.remove("winner");
	g2Ekran.classList.remove("winner");
	input.disabled = false;
}

reset.addEventListener("click", function(){
	resetGry();
});


doIlu.addEventListener("change", function(){
	maxWynik.textContent = this.value;
	gracieDo = Number(this.value);
});