//Primitivni tipovi podataka
var godine = 25;
//string
var ime = "Danica";
//boolean
var studira = true;
//Kompleksni tipovi
//1.
var predmeti = ["EPOS", "Cloud", "Programiranje1"];
var ocene = [10, 9, 8];
//2.tuples
//uredjene ntorke
var entorka = ["Danica", 24];
//3.Enumi
var Modul;
(function (Modul) {
    Modul[Modul["TEPOS"] = 0] = "TEPOS";
    Modul[Modul["InformacioniSistemi"] = 1] = "InformacioniSistemi";
    Modul[Modul["SoftverskoInz"] = 2] = "SoftverskoInz";
})(Modul || (Modul = {}));
var konkretniModul = Modul.TEPOS;
//4.Objekti
var student = { ime: "danica", godine: 2, studira: true };
//5.Unija
var brojIliString = "ne";
//6.Any tip
var biloSta = "bilo sta";
//7.void
function sayHello() { console.log("hello"); }
//8.null i undefined
var n = null;
var u = undefined;
//9. Type Assertions
var nekaVrednost = "Ovo je string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira); //primitivni
console.log(predmeti, ocene); //nizove
console.log(entorka); //tuple
console.log(konkretniModul); //enum
console.log(biloSta); //any
console.log(student); //objekat
console.log(brojIliString); //unija tipova
console.log(n, u); //null,undefined
console.log(duzinaStringa); //type assertion
