
let args = process.argv.slice(2);
oldPass = args.join();

const obfuscate = function (input) {
  let password = '';
  for (let i = 0; i < oldPass.length; i++) {
  if (oldPass[i] === "a"){
      password = password + "4";

    } else if (oldPass[i] === "e") { 
      password = password + "3";

    }else if (oldPass[i] === "o") { 
      password = password + "0";

    } else if (oldPass[i] === "l") { 
      password = password + "1";

    }

    else { 
      password = password + oldPass[i];
    }
   
  }
 return password;
}



console.log(obfuscate(args));
