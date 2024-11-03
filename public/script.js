document.getElementById("A").addEventListener("change", function () {
  document.getElementById("aBit").textContent = this.checked ? "1" : "0";
});

document.getElementById("B").addEventListener("change", function () {
  document.getElementById("bBit").textContent = this.checked ? "1" : "0";
});

document.getElementById("C").addEventListener("change", function () {
  document.getElementById("cBit").textContent = this.checked ? "1" : "0";
});

document.getElementById("D").addEventListener("change", function () {
  document.getElementById("dBit").textContent = this.checked ? "1" : "0";
});
