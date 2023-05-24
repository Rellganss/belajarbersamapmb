var warnaTersedia = ['blue', 'green', 'red', 'orange'];
var indeksWarna = 0;

function ubahWarna() {
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');

  header.style.backgroundColor = warnaTersedia[indeksWarna];
  footer.style.backgroundColor = warnaTersedia[indeksWarna];

  indeksWarna = (indeksWarna + 1) % warnaTersedia.length;
}
