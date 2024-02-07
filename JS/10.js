function replaceCharacter(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar);
  }
  
  console.log(replaceCharacter("name","s","surname"));