// Converteste data in format '12-Oct-1984' 
function getDateString(dt) {
  return dt.getDate() + '-' + 
    ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][dt.getMonth()] + 
    '-' + dt.getFullYear();
}

// Converteste data in format 'July 2010' 
function getMonthYearString(dt) {
  return ['January','February','March','April','May','June','July',
          'August','September','October','November','December'][dt.getMonth()] +
         ' ' + dt.getFullYear();
}

// Functie apelata cand userul da click pe orice buton
function chooseDate(e) {
  var targ; 
	if (!e) var e = window.event;
	if (e.target) targ = e.target;
	else if (e.srcElement) targ = e.srcElement;
	if (targ.nodeType == 3) targ = targ.parentNode; 

  var div = targ.parentNode.parentNode.parentNode.parentNode.parentNode; // Gasesti div
  var idOfTextbox = div.getAttribute('datepickertextbox'); // Ia textbox id-ul salvat in div
  var textbox = document.getElementById(idOfTextbox); // gaseste text-boxul
  if (targ.value=='<' || targ.value=='>') { 
    createCalendar(div, new Date(targ.getAttribute('date')));
    return;
  }
  textbox.value = targ.getAttribute('date'); // Seteaza data selectata
  div.parentNode.removeChild(div); 
}

// Converteste data in format d-MMM-yyyy 
function parseMyDate(d) {
  if (d=="") return new Date('NotADate'); // PT safari
  var a = d.split('-');
  if (a.length!=3) return new Date(d); 
  var m = -1; 
  if (a[1]=='Jan') m=0;
  if (a[1]=='Feb') m=1;
  if (a[1]=='Mar') m=2;
  if (a[1]=='Apr') m=3;
  if (a[1]=='May') m=4;
  if (a[1]=='Jun') m=5;
  if (a[1]=='Jul') m=6;
  if (a[1]=='Aug') m=7;
  if (a[1]=='Sep') m=8;
  if (a[1]=='Oct') m=9;
  if (a[1]=='Nov') m=10;
  if (a[1]=='Dec') m=11;
  if (m<0) return new Date(d); // Nu s-a gasit luna
  return new Date(a[2],m,a[0],0,0,0,0);
}

// Creaza calendarul pentru o luna data
function createCalendar(div, month) {
  var idOfTextbox = div.getAttribute('datepickertextbox'); 
  var textbox = document.getElementById(idOfTextbox); 
  var tbl = document.createElement('table');
  var topRow = tbl.insertRow(-1);
  var td = topRow.insertCell(-1);
  var lastMonthBn = document.createElement('input');
  lastMonthBn.type='button'; 
  td.appendChild(lastMonthBn);
  lastMonthBn.value='<';
  lastMonthBn.onclick=chooseDate;
  lastMonthBn.setAttribute('date',new Date(month.getFullYear(),month.getMonth()-1,1,0,0,0,0).toString());
  var td = topRow.insertCell(-1);
  td.colSpan=5;
  var mon = document.createElement('input');
  mon.type='text';
  td.appendChild(mon);
  mon.value = getMonthYearString(month);
  mon.size=15;
  mon.disabled='disabled';
  var td = topRow.insertCell(-1);
  var nextMonthBn = document.createElement('input');
  nextMonthBn.type='button';
  td.appendChild(nextMonthBn);
  nextMonthBn.value = '>';
  nextMonthBn.onclick=chooseDate;
  nextMonthBn.setAttribute('date',new Date(month.getFullYear(),month.getMonth()+1,1,0,0,0,0).toString());
  var daysRow = tbl.insertRow(-1);
  daysRow.insertCell(-1).innerHTML="Mon";
  daysRow.insertCell(-1).innerHTML="Tue";
  daysRow.insertCell(-1).innerHTML="Wed";
  daysRow.insertCell(-1).innerHTML="Thu";
  daysRow.insertCell(-1).innerHTML="Fri";
  daysRow.insertCell(-1).innerHTML="Sat";
  daysRow.insertCell(-1).innerHTML="Sun";
  
  // Realizarea calendarului
  var selected = parseMyDate(textbox.value); // Converteste data
  var today = new Date();
  date = new Date(month.getFullYear(),month.getMonth(),1,0,0,0,0); // Incepe cu prima zi a lunii
  var extras = (date.getDay() + 6) % 7; //Cate zile din luna precedenta includem?
  date.setDate(date.getDate()-extras);
  while (1) { 
    var tr = tbl.insertRow(-1);
    for (i=0;i<7;i++) { 
      var td = tr.insertCell(-1);
      var inp = document.createElement('input');
      inp.type = 'button';
      td.appendChild(inp);
      inp.value = date.getDate();
      inp.onclick = chooseDate;
      inp.setAttribute('date',getDateString(date));
      if (date.getMonth() != month.getMonth()) {
        if (inp.className) inp.className += ' ';
        inp.className+='othermonth';
      }
      if (date.getDate()==today.getDate() && date.getMonth()==today.getMonth() && date.getFullYear()==today.getFullYear()) {
        if (inp.className) inp.className += ' ';
        inp.className+='today';
      }
      if (!isNaN(selected) && date.getDate()==selected.getDate() && date.getMonth()==selected.getMonth() && date.getFullYear()==selected.getFullYear()) {
        if (inp.className) inp.className += ' ';
        inp.className+='selected';
      }
      date.setDate(date.getDate()+1); // incrementeaza cu o zi
    }
    // Daca am trecut la luna urmatoare, incheiem.
    if (date.getMonth() != month.getMonth()) {
      break;
    }
  }
  
  
  if (div.hasChildNodes()) { 
    div.replaceChild(tbl, div.childNodes[0]);
  } else { // Pentru a crea calendarul
    div.appendChild(tbl);
  }
}

// Se apeleaza cand se face click pe iconita de langa input box
function showDatePicker(idOfTextbox) {
  var textbox = document.getElementById(idOfTextbox);
  
  // Vezi daca date-pickerul este deja acolo
  x = textbox.parentNode.getElementsByTagName('div');
  for (i=0;i<x.length;i++) {
    if (x[i].getAttribute('class')=='datepickerdropdown') {
      textbox.parentNode.removeChild(x[i]);
      return false;
    }
  }

  
  var date = parseMyDate(textbox.value);
  if (isNaN(date)) date = new Date();

  // Creaza boxul
  var div = document.createElement('div');
  div.className='datepickerdropdown';
  div.setAttribute('datepickertextbox', idOfTextbox); 
  createCalendar(div, date); // Cream calendarul
  insertAfter(div, textbox); // Adauga boxul pe ecran imediat dupa textbox
  return false;
}

// Adauga un item dupa unul existent
function insertAfter(newItem, existingItem) {
  if (existingItem.nextSibling) { 
    existingItem.parentNode.insertBefore(newItem, existingItem.nextSibling); 
  } else { 
    existingItem.parentNode.appendChild(newItem);
  }
}

// Se apeleaza cand pagina se incarca. Cauta inputuri pentru care clasa este 'datepicker' 
function datePickerInit() {
  // Cauta elemente dupa clasa
  var allElements = document.getElementsByTagName("*");
  for (i=0; i<allElements.length; i++) {
    var className = allElements[i].className;
    if (className=='datepicker' || className.indexOf('datepicker ') != -1 || className.indexOf(' datepicker') != -1) {
      // Gasit. Adaugam un datepicker langa ea
      var a = document.createElement('a');
      a.href='#';
      a.className="datepickershow"
      a.setAttribute('onclick','return showDatePicker("' + allElements[i].id + '")');
      var img = document.createElement('img');
      img.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAAK/INwWK6QAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAdtJREFUOE+Vj+9PUnEUxvPvar3xja96Q1hGEKG0ubZqbfHCNqIVA4eYLAwFp0LYD4iIJEdeRGGZwDAEcUOn9oNIvPcGgjBQfHE69/YFihe1zs59du7d83nOuR0AcOq/CgEqWbaHDqaD+clF1rLAmija6MsZ5vb0s9nB1xm168s9x67y6Y7q2TaXjo8tVKjUTv7Zt61pAkwt/UA3zFwFuxysV2BKAuYeMAnBcBaGukDdCaozaLg5sUGAiQDLA3IIDIBfAfO34N118PaDRwYvRfBcCMrTaLg2liTAOEW3NjzpBZsMpqUwKQaLCMYvwGMhjArQIDfGCTDqy3EAX47lfVTnCo3qCnOzJ8IpW6pJR2IEGHn7/bBaR5MLO8y8CtPuKO2J0nMfGdKr+5uZ4kVdhAD6N99K1bo7ynB5vHpj3AZ0NxWBbs0KAbTur8VKfTbGeFcbkc1sfnBHuA1CzTIB7js/H5SPffFW3q9sau2PDdLhxkl3X+wiQCVYf4Jt3h1Itmb8iBvEusZJd2a2CuXjxXUWU5dSnAZ5/b0QkOobgMKWzh8eMcXaXr6aYSqfcuXtbAkdbS3RfSD/MGDfvGFO9ZuSfY/ilx/GLumi57Vhgfp9W597ECJA2/a/v/4ENLpYKsDo3kgAAAAASUVORK5CYII=';
      img.title='Show calendar';
      a.appendChild(img);
      insertAfter(a, allElements[i]);
    }
  }
}


if (window.addEventListener) { // W3C standard
  window.addEventListener('load', datePickerInit, false);
} else if (window.attachEvent) { // Microsoft
  window.attachEvent('onload', datePickerInit);
}
