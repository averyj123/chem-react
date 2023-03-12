
const elements = {
   H: 1.008,
   Li: 6.94,
   Na: 22.990,
   K: 39.098,
   Rb: 85.468,
   Cs: 132.91,
   Fr: 223,
   Be: 9.0122,
   Mg:24.305,
   Ca:40.078,
   Sr:87.62,
   Ba:137.33,
   Ra:226,
   Sc:44.956,
   Y: 88.906,
   Ti: 47.867,
   Zr: 91.224,
   Hf: 178.49,
   Rf: 267,
   V: 50.942,
   Nb: 92.906,
   Ta: 180.95,
   Db:368,
   Cr: 51.996,
   Mo: 95.95,
   W:183.84,
   Sg:269,
   Mn:54.938,
   Tc: 98,
   Re: 186.21,
   Bh:270,
   Fe:55.845,
   Ru: 101.07,
   Os: 190.23,
   Hs: 277,
   Co: 58.933,
   Rh: 102.91,
   Ir: 192.22,
   Mt: 278,
   Ni:58.693,
   Pd: 106.42,
   Pt: 195.08,
   Ds: 281,
   Cu: 63.546,
   Ag: 107.87,
   Au: 196.97,
   Rg: 282,
   Zn: 65.38,
   Cd: 112.41,
   Hg: 200.59,
   Cn: 285,
   B: 10.81,
   Al:26.982,
   Ga:69.723,
   In: 114.82,
   Tl: 204.38,
   Nh: 286,
   C: 12.011,
   Si: 28.085,
   Ge: 72.630,
   Sn: 118.71,
   Pb: 207.2,
   Fl: 289,
   N: 14.007,
   O: 15.999,
   P: 30.974,
   As: 74.922,
   Sb: 121.76,
   Bi: 208.98,
   Mc: 290,
   S: 32.06,
   Se: 78.971,
   Te: 127.60,
   Po: 209,
   Lv: 293,
   F: 18.998,
   Cl: 35.45,
   Br: 79.904,
   I: 126.90,
   At: 210,
   Ts: 294,
   He: 4.0026,
   Ne: 20.180,
   Ar: 39.948,
   Kr: 83.798,
   Xe: 131.29,
   Rn: 222,
   Og: 294
}
let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function getList(molecule) {
   //get molecule thing
   let comps = [];
   let comp = ""
   for(let i=0; i<molecule.length; i++) {
      if (molecule[i] === molecule[i].toUpperCase() && !nums.includes(molecule[i])) {
         if (comp) {
            comps.push(comp);
         }
         comp = molecule[i];
      } else {
         comp += molecule[i];
      }
}
comps.push(comp);
return comps;
}

function getMolar(molecule) {
   let components = getList(molecule);
   let molarMass = 0;
   for(let i = 0; i<components.length; i++) {
     if(nums.includes(components[i][components[i].length-1])) {
         let isolMol = components[i].slice(0, -1);
         let amount = parseInt(components[i][components[i].length-1]);
         if(elements[isolMol]) {
            molarMass += (elements[isolMol] * amount);
         } else {
            window.alert('error: element not found');
            return false;
         }
      } else if (elements[components[i]]){
         molarMass += elements[components[i]];
      } else {
         window.alert('error: element not found');
      }
   }
   return molarMass;
}

function getGrams(molecule, moles) {
   let mass = getMolar(molecule);
   if(mass){
      return `molar mass: ${mass} \n GRAMS: ${mass * moles}`;
   }
}
//molButton.addEventListener('click', getGrams);

function getConc(molecule, concen, vol) {
   let mass = getMolar(molecule);
   if(mass){
      let moles = concen * vol;
      return `molar mass: ${mass} \n moles: ${moles} \nGRAMS: ${moles*mass}`;
   } 
}
//concButton.addEventListener('click', getConc);

function getMoles(grams, molecule) {
   let mass =getMolar(molecule);
   let gramsNum = parseInt(grams);

   console.log(mass);
   console.log(grams);
   console.log(molecule);
   console.log(gramsNum);

   if(mass){
      return `Molar mass: ${mass} \n number of moles: ${gramsNum/mass}`;
   }
}
//gramButton.addEventListener('click', getMoles);


export {getGrams, getConc, getMoles};