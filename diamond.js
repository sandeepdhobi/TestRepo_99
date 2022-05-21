
function diamond(character, isBrawser) {
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  if (!isLetter(character)) {
    console.error("Please pass a alphabet");
    return "Please pass a alphabet";
  }

  var a = "A".charCodeAt(),
    frame,
    width = character.toUpperCase().charCodeAt() - a,
    i = 0,
    lines = [];

  function blanks(n) {
    const seperater = isBrawser ? "--" : " ";
    return new Array(n).join(seperater);
  }

  function makeLine() {
    return blanks(width + 1 - i) + frame + blanks(i * 2) + frame;
  }
  while (i++ < width) {
    frame = String.fromCharCode(a + i); // To get the Subsequent letter of upper Half
    lines.push(makeLine()); // To Draw full one line After A
  }
  if (lines.length) {
    lines.unshift(blanks(width + 1) + "A"); // To Draw A in case of character > A
    lines = lines.concat(lines.slice(0, lines.length - 1).reverse()); // To Draw the downpart as down half is mirror image of upper Half ( avoid middle line to repeat twise)
  } else {
    lines.push("A");
  }
  const lineSeperater = isBrawser ? "</br>" : "\n";
  return lines.join(lineSeperater);
}

console.log(diamond("0")); // Some console Error
console.log(diamond("A"));
console.log(diamond("C"));
console.log(diamond("M"));

document.getElementById("app").innerHTML = `${diamond("M", true)}`;
