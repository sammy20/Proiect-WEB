

function open_Calc(mypage,myname,w,h,features) {
  var winl = (screen.width-w)/1.05;
  var wint = (screen.height-h)/1.55;
  if (winl < 0) winl = 0;
  if (wint < 0) wint = 0;
  var settings = 'height=' + h + ',';
  settings += 'width=' + w + ',';
  settings += 'top=' + wint + ',';
  settings += 'left=' + winl + ',';
  settings += features;
  win = window.open(mypage,myname,settings);
  win.window.focus();
}

function what(dir) {
if (event.button == 2) { Help(dir) }
}
function Help(dir) {
  var ex;
  if (dir == 'eq') { ex = ' = : Equals\n\n Calculeaza rezultatul ecuatiei.' }
  else if (dir == '/') { ex = ' ÷ : Division\n\n Imparte un numar la altul .\n\n\ i.e.: 8 / 2 = 4' }
  else if (dir == 'x') { ex = ' x : Multiplication\n\n Inmulteste doua numere.\n\n\ i.e.: 2 x 4 = 8' }
  else if (dir == '+') { ex = ' + : Addition\n\n Aduna doua numere.\n\n\ i.e.: 3 + 4 = 7' }
  else if (dir == '-') { ex = ' - : Subtraction\n\n Scade un numar din altul.\n\n\ i.e.: 7 - 4 = 3' }
  else if (dir == '%') { ex = ' % : Percent\n\n Afiseaza procentajul  unui numar.  }
  else if (dir == '.') { ex = ' . : Decimal\n\n Adauga punctul decimal.' }
  else if (dir == '1') { ex = ' 1 : Number 1\n\n Afiseaza pe display 1.' }
  else if (dir == '2') { ex = ' 2 : Number 2\n\n Afiseaza pe display 2.' }
  else if (dir == '3') { ex = ' 3 : Number 3\n\n Afiseaza pe display 3.' }
  else if (dir == '4') { ex = ' 4 : Number 4\n\n Afiseaza pe display 4.' }
  else if (dir == '5') { ex = ' 5 : Number 5\n\n Afiseaza pe display 5.' }
  else if (dir == '6') { ex = ' 6 : Number 6\n\n Afiseaza pe display 6.' }
  else if (dir == '7') { ex = ' 7 : Number 7\n\n Afiseaza pe display 7.' }
  else if (dir == '8') { ex = ' 8 : Number 8\n\n Afiseaza pe display 8.' }
  else if (dir == '9') { ex = ' 9 : Number 9\n\n Afiseaza pe display 9.' }
  else if (dir == '0') { ex = ' 0 : Zero\n\n Places the numerical value 0 onto DISPLAY screen.' }
  else if (dir == 'DZ') { ex = ' 00 : Double Zero\n\n Adds two zeros to any number.' }
  else if (dir == 'c') { ex = ' C : Clear\n\n Clears the DISPLAY screen\n Remember to clear after each calculation.' }
  else if (dir == 'Del') { ex = ' Del : Delete\n\n Clears the last digit entered.' }
  else if (dir == 'M') { ex = ' M : Memory \n\n Copies number in DISPLAY screen to MEMORY.' }
  else if (dir == 'RM') { ex = ' RM : Recall Memory\n\n Recalls number stored in MEMORY and places it onto\n the DISPLAY screen..' }
  else if (dir == 'M+') { ex = ' M+ : Memory Add\n\n Adds number in DISPLAY screen to MEMORY.' }
  else if (dir == 'M-') { ex = ' M- : Memory Subtract\n\n Subtracts number in DISPLAY screen  from MEMORY.' }
  else if (dir == 'MC') { ex = ' MC : Memory Clear \n\n Clears number stored in MEMORY.' }
  else if (dir == 'NW') { ex = ' New Window : \n\n Opens a popup window containing a new CALCULATOR.\n\nMultiple CALCULATORS can be open at the same time. This is useful in comparing different scenarios of calculations.\n\n\NOTE: If you have a popup stopper on your system, you will need to disable it to view the NEW WINDOW.' }
  else if (dir == 'H') { ex = 'BetterCalculator 1.2 is freeware Javascript. You may save the code to your computer or Web site as long as you do not change anything.\n\nRight click on any button for a description and help with that function. Left click to push a  button or key.\n\n\For instructions on how to add this Calculator to your desktop and info on more advanced versions of BetterCalculator featuring 2 manipulative MEMORY screens, a copy/printable  RECORD screen, plus much more. Go to http://BetterCalculator.com \n\n\Thank you\n\n\Jim Anderson \n'
}

alert(ex);
}
