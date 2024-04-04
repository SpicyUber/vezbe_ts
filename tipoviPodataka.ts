//Primitivni tipovi podataka

let godine:number =25;

//string

let ime:string="Danica";

//boolean

let studira:boolean=true;

//Kompleksni tipovi

//1.
let predmeti:string[]=["EPOS","Cloud","Programiranje1"];
let ocene:number[]=[10,9,8];

//2.tuples
//uredjene ntorke

let entorka:[string,number]=["Danica",24];

//3.Enumi
enum Modul{
    TEPOS,
    InformacioniSistemi,
    SoftverskoInz
}

let konkretniModul:Modul= Modul.TEPOS;

//4.Objekti

let student:{ime:string,godine:number,studira:boolean
}={ime:"danica",godine:2,studira:true}

//5.Unija

let brojIliString: number|string="ne";

//6.Any tip
let biloSta:any="bilo sta";

//7.void

function sayHello():void{console.log("hello");}

//8.null i undefined

let n:null=null;
let u:undefined=undefined;

//9. Type Assertions

let nekaVrednost:any="Ovo je string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log(godine,ime,studira); //primitivni
console.log(predmeti,ocene); //nizove
console.log(entorka); //tuple
console.log(konkretniModul); //enum
console.log(biloSta); //any
console.log(student); //objekat
console.log(brojIliString); //unija tipova
console.log(n,u);//null,undefined
console.log(duzinaStringa);//type assertion