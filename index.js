function regexSearch(str) {
  const regex = /(^Web\S+\sname:\s([\S\u0020]*)\n*^Web\S+\sURL:\s([\S\u0020]*)\n*^Login\sname:\s([\S\u0020]*)\n*^Login:\s([\S\u0020]*)\n*^Password:\s([\S\u0020]*)\n*^Comment:\s([\S\u0020]*)$)/gm;

  let m;
  var output = "url,username,password,extra\n";
  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.

    output += `${m[3]},${m[5]},${m[6]}, ${m[7]}\n`;
  }
  document.querySelector(".output").value = output;
}

// Sort for url,username,password,extra(comment)

console.log(document.querySelector(".submit"));
document.querySelector(".submit").addEventListener("click", () => {
  var val = document.querySelector(".KPMFile").value;
  regexSearch(val);
});

document.querySelector(".copyOutput").addEventListener("click", () => {
  document.querySelector(".output").select();
  document.execCommand("copy");
  document.querySelector(".copyOutput").innerHTML = "Copied!";
  setTimeout(() => {
    document.querySelector(".copyOutput").innerHTML = "Copy!";
  }, 2000);
});
