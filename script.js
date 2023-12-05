const extendHex = (shortHex) => {
  // Remove the # (if present) and convert to lowercase
  shortHex = shortHex.replace("#", "").toLowerCase();

  // Check if the input is a valid short hex code
  if (/^[0-9a-f]{3}$/.test(shortHex)) {
    // Convert each short component to a full component
    const fullHex = shortHex
      .split("")
      .map((char) => char.repeat(2))
      .join("");

    // Add the # prefix to the full hex code
    return "#" + fullHex;
  } else {
    // Handle invalid input
    alert("Invalid short hex code.");
  }
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
