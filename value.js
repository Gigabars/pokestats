function between(x, min, max) {
    return x >= min && x <= max;
}
function genstats()
{
var hp = document.querySelector("#hpbox");
var atk = document.querySelector("#atkbox");
var def = document.querySelector("#defbox");
var spatk = document.querySelector("#spatkbox");
var spdef = document.querySelector("#spdefbox");
var speed = document.querySelector("#speedbox");
hp = hp.value;
atk = atk.value;
def = def.value;
spatk = spatk.value;
spdef = spdef.value;
speed = speed.value;
var hpout = document.querySelector("#hpout");
var atkout = document.querySelector("#atkout");
var defout = document.querySelector("#defout");
var spatkout = document.querySelector("#spatkout");
var spdefout = document.querySelector("#spdefout");
var speedout = document.querySelector("#speedout");
hpout.innerText = hp;
atkout.innerText = atk;
defout.innerText = def;
spatkout.innerText =  spatk;
spdefout.innerText = spdef;
speedout.innerText = speed;

//Image code And Name Code
var img = document.querySelector("#imgbox");
img = img.value;
document.querySelector("#pokeimg").src = img;
var name = document.querySelector("#namebox");
name = name.value;
var nameout = document.querySelector("#nameout");
nameout.innerText = name;

// This chunk of code takes the value inputed in the box and poops it out into the stat bars, the formating of the bars is done past this line.
//Colors that can be used, Red 1-45, Deep Orange 46-60, Orange 61-90, Yellow 91-110, Lime 111-140, light-green 141-160, green 161-199, Anything past 200 is Aqua.
//HP formating
var hpint = Number(hp);
var hpintclean = Number(hp);
hpint = hp / 3;
hpout.style.width = hpint + "%";
if (between(hpintclean, 1, 45))
{
    hpout.classList.add("w3-red");
    hpout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");

}
else if (between(hpintclean, 46, 60))
{
    hpout.classList.add("w3-deep-orange");
    hpout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(hpintclean, 61, 90))
{
    hpout.classList.add("w3-orange");
    hpout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(hpintclean, 91, 110))
{
    hpout.classList.add("w3-yellow");
    hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(hpintclean, 111, 140))
{
    hpout.classList.add("w3-lime");
    hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(hpintclean, 141, 160))
{
    hpout.classList.add("w3-light-green");
    hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
}
else if (between(hpintclean, 161, 199))
{
    hpout.classList.add("w3-green");
    hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
}
else if (between(hpintclean, 200, 255))
{
    hpout.classList.add("w3-aqua");
    hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
}
//Atk formating
var atkint = Number(atk);
var atkintclean = Number(atk);
atkint = atk / 3;
atkout.style.width = atkint + "%";
if (between(atkintclean, 1, 45))
{
    atkout.classList.add("w3-red");
    atkout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");

}
else if (between(atkintclean, 46, 60))
{
    atkout.classList.add("w3-deep-orange");
    atkout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(atkintclean, 61, 90))
{
    atkout.classList.add("w3-orange");
    atkout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(atkintclean, 91, 110))
{
    atkout.classList.add("w3-yellow");
    atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(atkintclean, 111, 140))
{
    atkout.classList.add("w3-lime");
    atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(atkintclean, 141, 160))
{
    atkout.classList.add("w3-light-green");
    atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
}
else if (between(atkintclean, 161, 199))
{
    atkout.classList.add("w3-green");
    atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
}
else if (between(atkintclean, 200, 255))
{
    atkout.classList.add("w3-aqua");
    atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
}
//def formating
var defint = Number(def);
var defintclean = Number(def);
defint = def / 3;
defout.style.width = defint + "%";
if (between(defintclean, 1, 45))
{
    defout.classList.add("w3-red");
    defout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");

}
else if (between(defintclean, 46, 60))
{
    defout.classList.add("w3-deep-orange");
    defout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(defintclean, 61, 90))
{
    defout.classList.add("w3-orange");
    defout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(defintclean, 91, 110))
{
    defout.classList.add("w3-yellow");
    defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(defintclean, 111, 140))
{
    defout.classList.add("w3-lime");
    defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(defintclean, 141, 160))
{
    defout.classList.add("w3-light-green");
    defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
}
else if (between(defintclean, 161, 199))
{
    defout.classList.add("w3-green");
    defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
}
else if (between(defintclean, 200, 255))
{
    defout.classList.add("w3-aqua");
    defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
}
//Atk formating
var spatkint = Number(spatk);
var spatkoutclean = Number(spatk);
spatkint = spatk / 3;
spatkout.style.width = spatkint + "%";
if (between(spatkoutclean, 1, 45))
{
    spatkout.classList.add("w3-red");
    spatkout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");

}
else if (between(spatkoutclean, 46, 60))
{
    spatkout.classList.add("w3-deep-orange");
    spatkout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spatkoutclean, 61, 90))
{
    spatkout.classList.add("w3-orange");
    spatkout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spatkoutclean, 91, 110))
{
    spatkout.classList.add("w3-yellow");
    spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spatkoutclean, 111, 140))
{
    spatkout.classList.add("w3-lime");
    spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spatkoutclean, 141, 160))
{
    spatkout.classList.add("w3-light-green");
    spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
}
else if (between(spatkoutclean, 161, 199))
{
    spatkout.classList.add("w3-green");
    spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
}
else if (between(spatkoutclean, 200, 255))
{
    spatkout.classList.add("w3-aqua");
    spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
}
//spDef formating
var spdefint = Number(spdef);
var spdefoutclean = Number(spdef);
spdefint = spdef / 3;
spdefout.style.width = spdefint + "%";
if (between(spdefoutclean, 1, 45))
{
    spdefout.classList.add("w3-red");
    spdefout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");

}
else if (between(spdefoutclean, 46, 60))
{
    spdefout.classList.add("w3-deep-orange");
    spdefout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spdefoutclean, 61, 90))
{
    spdefout.classList.add("w3-orange");
    spdefout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spdefoutclean, 91, 110))
{
    spdefout.classList.add("w3-yellow");
    spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spdefoutclean, 111, 140))
{
    spdefout.classList.add("w3-lime");
    spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(spdefoutclean, 141, 160))
{
    spdefout.classList.add("w3-light-green");
    spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
}
else if (between(spdefoutclean, 161, 199))
{
    spdefout.classList.add("w3-green");
    spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
}
else if (between(spdefoutclean, 200, 255))
{
    spdefout.classList.add("w3-aqua");
    spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
}
//Speed formating
var speedint = Number(speed);
var speedoutclean = Number(speed);
speedint = speed / 3;
speedout.style.width = speedint + "%";
if (between(speedoutclean, 1, 45))
{
    speedout.classList.add("w3-red");
    speedout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");

}
else if (between(speedoutclean, 46, 60))
{
    speedout.classList.add("w3-deep-orange");
    speedout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(speedoutclean, 61, 90))
{
    speedout.classList.add("w3-orange");
    speedout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(speedoutclean, 91, 110))
{
    speedout.classList.add("w3-yellow");
    speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(speedoutclean, 111, 140))
{
    speedout.classList.add("w3-lime");
    speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
}
else if (between(speedoutclean, 141, 160))
{
    speedout.classList.add("w3-light-green");
    speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
}
else if (between(speedoutclean, 161, 199))
{
    speedout.classList.add("w3-green");
    speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
}
else if (between(speedoutclean, 200, 255))
{
    speedout.classList.add("w3-aqua");
    speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
}
//Code to set TOTAL stat number.
var totalint;
totalint = speedoutclean + spdefoutclean + spatkoutclean + defintclean + atkintclean + hpintclean;
document.querySelector("#totalout").innerText = totalint;


//Code for ALL set typings.
var type1out = document.querySelector("#type1box").value;
var type2out = document.querySelector("#type2box").value;
var type2button = document.querySelector(".type2"); //Only doing this to hide the element for mono-types.
var type1box = document.querySelector(".type1");
var type2box = document.querySelector(".type2");
//check to hide button 2 for mono-types
if (type2out === "")
{
    type2button.style.display = "none";
}
if (type2out !== "")
{
    type2button.style.display = "block";
}
//change to lower
type1out = type1out.toLowerCase();
if (type1out == "normal")
{
type1box.id = "ty-normal";
type1box.textContent = "Normal";
}
else if (type1out == "fire")
{
type1box.id = "ty-fire";
type1box.textContent = "Fire";
}
else if (type1out == "water")
{
type1box.id = "ty-water";
type1box.textContent = "Water";
}
else if (type1out == "electric")
{
type1box.id = "ty-electric";
type1box.textContent = "Electric";
}
else if (type1out == "grass") //Best type don't @ me.
{
type1box.id = "ty-grass";
type1box.textContent = "Grass";
}
else if (type1out == "ice")
{
type1box.id = "ty-ice";
type1box.textContent = "ice";
}
else if (type1out == "fighting")
{
type1box.id = "ty-fighting";
type1box.textContent = "Fighting";
}
else if (type1out == "poison")
{
type1box.id = "ty-poison";
type1box.textContent = "Poison";
}
else if (type1out == "ground")
{
type1box.id = "ty-ground";
type1box.textContent = "Ground";
}
else if (type1out == "flying")
{
type1box.id = "ty-flying";
type1box.textContent = "Flying";
}
else if (type1out == "psychic")
{
type1box.id = "ty-psychic";
type1box.textContent = "Psychic";
}
else if (type1out == "bug")
{
type1box.id = "ty-bug";
type1box.textContent = "Bug";
}
else if (type1out == "rock")
{
type1box.id = "ty-rock";
type1box.textContent = "Rock";
}
else if (type1out == "ghost")
{
type1box.id = "ty-ghost";
type1box.textContent = "Ghost";
}
else if (type1out == "dragon")
{
type1box.id = "ty-dragon";
type1box.textContent = "Dragon";
}
else if (type1out == "dark")
{
type1box.id = "ty-dark";
type1box.textContent = "Dark";
}
else if (type1out == "steel")
{
type1box.id = "ty-steel";
type1box.textContent = "Steel";
}
else if (type1out == "fairy")
{
type1box.id = "ty-fairy";
type1box.textContent = "Fairy";
}
else 
{
    type1box.id = "ty-what"
    type1box.textContent = "???"
}
//type 2 box
type2out = type2out.toLowerCase();
if (type2out == "normal")
{
type2box.id = "ty-normal";
type2box.textContent = "Normal";
}
else if (type2out == "fire")
{
type2box.id = "ty-fire";
type2box.textContent = "Fire";
}
else if (type2out == "water")
{
type2box.id = "ty-water";
type2box.textContent = "Water";
}
else if (type2out == "electric")
{
type2box.id = "ty-electric";
type2box.textContent = "Electric";
}
else if (type2out == "grass") //Best type don't @ me.
{
type2box.id = "ty-grass";
type2box.textContent = "Grass";
}
else if (type2out == "ice")
{
type2box.id = "ty-ice";
type2box.textContent = "ice";
}
else if (type2out == "fighting")
{
type2box.id = "ty-fighting";
type2box.textContent = "Fighting";
}
else if (type2out == "poison")
{
type2box.id = "ty-poison";
type2box.textContent = "Poison";
}
else if (type2out == "ground")
{
type2box.id = "ty-ground";
type2box.textContent = "Ground";
}
else if (type2out == "flying")
{
type2box.id = "ty-flying";
type2box.textContent = "Flying";
}
else if (type2out == "psychic")
{
type2box.id = "ty-psychic";
type2box.textContent = "Psychic";
}
else if (type2out == "bug")
{
type2box.id = "ty-bug";
type2box.textContent = "Bug";
}
else if (type2out == "rock")
{
type2box.id = "ty-rock";
type2box.textContent = "Rock";
}
else if (type2out == "ghost")
{
type2box.id = "ty-ghost";
type2box.textContent = "Ghost";
}
else if (type2out == "dragon")
{
type2box.id = "ty-dragon";
type2box.textContent = "Dragon";
}
else if (type2out == "dark")
{
type2box.id = "ty-dark";
type2box.textContent = "Dark";
}
else if (type2out == "steel")
{
type2box.id = "ty-steel";
type2box.textContent = "Steel";
}
else if (type2out == "fairy")
{
type2box.id = "ty-fairy";
type2box.textContent = "Fairy";
}
else 
{
    type2box.id = "ty-what"
    type2box.textContent = "???"
}

//finaly the ability box
var ab = document.querySelector("#abilitybox").value;
document.querySelector("#Abilitysout").textContent = "Abilities: " + ab;
}
