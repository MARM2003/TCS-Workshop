function removeDuplicates(str) {
    return str
      .split('')
      .filter((char, index, array) => array.indexOf(char) === index)
      .join('');
  }

  console.log(removeDuplicates("maarmm"));
