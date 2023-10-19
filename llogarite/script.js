function blloka() {
  let a, b, c, d, f, x, y, z, h, s, q, k;

  a = parseFloat(document.getElementById("gjersia_bllokit").value);

  b = parseFloat(document.getElementById("lartesia_bllokit").value);
  c = parseFloat(document.getElementById("gjatesia_murit").value);
  d = parseFloat(document.getElementById("lartesia_murit").value);
  f = parseFloat(document.getElementById("humbja").value);
  q = parseFloat(document.getElementById("qmimi_bllok").value);

  if (!a || !b || !c || !d || !f || !q) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    x = (a / 100) * (b / 100); //metra katrore

    y = c * d; // hapsira

    y = Math.round(y * 100) / 100;

    z = y / x;

    z = Math.round(z);

    h = (f / 100) * z;

    s = z + h;

    s = Math.round(s);

    k = s * q;

    // k = Math.round(k * 100) / 100;

    document.getElementById("madhsia_murit").value = y;
    document.getElementById("numri_bllokit").value = z;
    document.getElementById("numri_bllokave_tersi").value = s;
    document.getElementById("kostoja").value = k;

    tabelaBllokat(y, z, s, k);
  }
}
function cigare() {
  let a, b, c, d, f;

  a = parseFloat(document.getElementById("numri_cigareve").value);

  b = parseFloat(document.getElementById("madhesia_paketimit").value);
  c = parseFloat(document.getElementById("qmimi_paketimit").value);

  if (!a || !b || !c) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    d = (a / b) * 365;

    d = Math.round(d * 100) / 100;

    f = c * d;
    f = Math.round(f * 100) / 100;

    document.getElementById("numri_paketimeve").value = d;
    document.getElementById("shpenzimet").value = f;

    ruajNeTabele(d, f);
    //krijoPDF(d, f);
  }
}
let b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, ii, jj;

function notat() {
  //let b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
  a = parseFloat(document.getElementById("numri_nxenesve").value);
  b = parseFloat(document.getElementById("shkelqyshem").value);
  c = parseFloat(document.getElementById("shummire").value);
  d = parseFloat(document.getElementById("mire").value);
  e = parseFloat(document.getElementById("mjfatueshem").value);
  f = parseFloat(document.getElementById("1mjaftueshem").value);
  g = parseFloat(document.getElementById("2mjaftueshem").value);
  h = parseFloat(document.getElementById("perserites").value);
  i = parseFloat(document.getElementById("mearsye").value);
  j = parseFloat(document.getElementById("paarsye").value);

  u = b + c + d + e + f + g + h;

  if (!i || !j) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni kolonat te mungesat!";
  } else if (!a) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti shkruani numrin e nxansave";
  } else if (a > u || a < u) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Numri i nxenesve nuk eshte i njejte me numrin qe e keni shkruar ne kolona! Ju lutem shikojeni kolonat<strong> Shkelqyeshem, Shume mire, Mire, Mjaftueshem, Me 1 Note Mjaftueshem, Me 2 Note Mjaftueshem, Perserites</strong>, sepse ketu keni gabuar!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    k = (b / a) * 100;
    k = k.toFixed(2);

    l = (c / a) * 100;
    l = l.toFixed(2);

    m = (d / a) * 100;
    m = m.toFixed(2);

    n = (e / a) * 100;
    n = n.toFixed(2);

    o = (f / a) * 100;
    o = o.toFixed(2);

    p = (g / a) * 100;
    p = p.toFixed(2);

    q = (h / a) * 100;
    q = q.toFixed(2);

    r = i + j;
    s = b + c + d + e;
    t = (s / a) * 100;
    t = t.toFixed(2);

    ii = (i / r) * 100;
    ii = ii.toFixed(2);

    jj = (j / r) * 100;
    jj = jj.toFixed(2);

    document.getElementById("shkelqyshem_").value = k + " %";
    document.getElementById("shummire_").value = l + " %";
    document.getElementById("mire_").value = m + " %";
    document.getElementById("mjfatueshem_").value = n + " %";
    document.getElementById("1mjaftueshem_").value = o + " %";
    document.getElementById("2mjaftueshem_").value = p + " %";
    document.getElementById("perserites_").value = q + " %";
    document.getElementById("gjithsej_").value = r;
    document.getElementById("gjithsej_pozitive").value = s;
    document.getElementById("gjithsej_pozitive_").value = t + " %";
    document.getElementById("mearsye_").value = ii + " %";
    document.getElementById("paarsye_").value = jj + " %";

    document.getElementById("numri_nxensave_").value = a;
    document.getElementById("shkelqyeshem1").value = b;
    document.getElementById("shummire1").value = c;
    document.getElementById("mire1").value = d;
    document.getElementById("mjfatueshem1").value = e;
    document.getElementById("1mjaftueshem1").value = f;
    document.getElementById("2mjaftueshem1").value = g;
    document.getElementById("perserites1").value = h;
    document.getElementById("mearsye1").value = i;
    document.getElementById("paarsye1").value = j;
  }
}

//document.getElementById("notat").addEventListener("click", createPDF());

function createPDF() {
  // Krijo një dokument PDF të zbrazët
  var doc = new jsPDF({
    orientation: "landscape",
  });

  // Shto të dhënat e tabelës në dokument
  // ...
  const tableData = [
    [
      "Numri i nxënësve",
      "Shkëlqyeshëm",
      "Shumë mirë",
      "Mirë",
      "Mjaftueshëm",
      "Gjithsej Pozitiv",
      "Me 1 Notë Mjaftueshëm",
      "Me 2 Notë Mjaftueshëm",
      "Përsëritës",
      "Mungesa të arsyeshme",
      "Mungesa të pa arsyeshme",
      "Gjithsej Mungesa",
    ],
    [a, b, c, d, e, s, f, g, h, i, j, r],
    [
      " ",
      k + "%",
      l + "%",
      m + "%",
      n + "%",
      t + "%",
      o + "%",
      p + "%",
      q + "%",
      ii + "%",
      jj + "%",
      " ",
    ],
    // Shtoni rreshtat e tabelës të tjerë sipas nevojës
  ];

  doc.autoTable({
    head: [tableData[0]],
    body: tableData.slice(1),
    startY: 35, // Pozicioni i fillimit të tabelës në PDF
    margin: { top: 35 }, // Margjina e tabelës në PDF
  });

  // Shkruaj emrin e dokumentit dhe ruaj PDF-në
  doc.text("Suksesi për klasën ___", 15, 15);
  doc.text("Mësimdhënësi _____________________", 177, 15);

  var currentDate = new Date();
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  var currentDateTime = currentDate.toLocaleDateString("de-DE", options);
  doc.text(`${currentDateTime}`, 15, doc.autoTable.previous.finalY + 140);

  doc.save("tabela.pdf");
}

function createPDFF() {
  // Krijoni dokumentin PDF dhe shtoni tabelën
  const doc = new jsPDF();
  doc.autoTable({
    head: [
      [
        "Numri nxenesve",
        "Shkelqyshem",
        "Shume mire",
        "Mire",
        "Mjaftueshem",
        "Me 1 Note Mjaftueshem",
        "Me 2 Note Mjaftueshem",
        "Perserites",
        "Mungesa te arsyshme",
        "Te pa arsyshme",
      ],
    ],
    body: [[a, b, c, d, e, f, g, h, i, j]],
    // Konfiguroni pozicionin dhe margjinat sipas dëshirës
    startY: 20,
    margin: { top: 20 },
  });
  // Ruani dokumentin PDF
  doc.save("tabela.pdf");
}

function karburanti() {
  let a, b, c, d, f, x;

  a = parseFloat(document.getElementById("distanca").value);

  b = parseFloat(document.getElementById("karburanti").value);
  d = parseFloat(document.getElementById("cmimikarburantit").value);

  if (!a || !b || !d) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    x = a / 100;

    c = b / x;
    c = Math.round(c * 100) / 100;

    f = d * b;
    f = Math.round(f * 100) / 100;

    document.getElementById("konsumikarburantit").value = c;
    document.getElementById("kostojakarburantit").value = f;

    karburantiTabela(c, f);
  }
}

function qeramike() {
  let a, b, c, d, f, x, y, z, h, s, q, k;

  a = parseFloat(document.getElementById("gjatesia_qeramikes").value);

  b = parseFloat(document.getElementById("gjeresia_qeramikes").value);
  c = parseFloat(document.getElementById("gjatesia_hapsires").value);
  d = parseFloat(document.getElementById("gjeresia_hapsires").value);
  f = parseFloat(document.getElementById("humbja").value);
  q = parseFloat(document.getElementById("qmimi_qeramike").value);

  if (!a || !b || !c || !d || !f || !q) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    x = (a / 100) * (b / 100); //metra katrore

    y = c * d; // hapsira

    y = Math.round(y * 100) / 100;

    z = y / x;

    z = Math.round(z);

    h = (f / 100) * z;

    s = z + h;

    s = Math.round(s);

    k = s * q;
    k = Math.round(k * 100) / 100;

    document.getElementById("Hapsira").value = y;
    document.getElementById("numri_qeramikave").value = z;
    document.getElementById("numri_qeramike_tersi").value = s;
    document.getElementById("kostoja").value = k;

    qeramikeTabela(y, z, s, k);
  }
}

function rryma() {
  let tarifa_lart,
    tarifa_ult,
    totali,
    t_lart,
    t_ulte,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    s,
    t_energjis,
    neto,
    t_fikse,
    tvsh,
    shuma_fakture,
    t_gjithsej_lart,
    t_gjithsej_ulte,
    gjithsej_kwh;

  tarifa_lart = parseFloat(document.getElementById("tarifa_lart_").value);

  tarifa_ult = parseFloat(document.getElementById("tarifa_ulte_").value);

  if (!tarifa_lart || !tarifa_ult) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    totali = tarifa_lart + tarifa_ult;

    if (totali > 800) {
      t_lart = tarifa_lart / totali;
      t_ulte = 1 - t_lart;
      g = 800 * t_lart;
      g = Math.round(g * 100) / 100;

      h = 800 - g;
      h = Math.round(h * 100) / 100;

      i = g + h;
      j = g * 0.0779;
      j = Math.round(j * 100) / 100;
      k = h * 0.0334;
      k = Math.round(k * 100) / 100;

      l = j + k;
      l = Math.round(l * 100) / 100;

      m = (totali - 800) * t_lart;
      m = Math.round(m * 100) / 100;
      n = (totali - 800) * t_ulte;
      n = Math.round(n * 100) / 100;
      q = m + n;
      o = m * 0.1445;
      o = Math.round(o * 100) / 100;
      p = n * 0.0681;
      p = Math.round(p * 100) / 100;
      s = o + p;
      s = Math.round(s * 100) / 100;

      t_gjithsej_lart = g + m;
      t_gjithsej_ulte = h + n;
      t_energjis = l + s;
      t_energjis = Math.round(t_energjis * 100) / 100;

      gjithsej_kwh = t_gjithsej_lart + t_gjithsej_ulte;
      t_fikse = 2;
      neto = t_energjis + t_fikse;
      neto = Math.round(neto * 100) / 100;

      tvsh = neto * 0.08;
      tvsh = Math.round(tvsh * 100) / 100;
      shuma_fakture = neto + tvsh;
      shuma_fakture = Math.round(shuma_fakture * 100) / 100;
    } else {
      g = tarifa_lart;
      g = Math.round(g * 100) / 100;

      h = tarifa_ult;
      h = Math.round(h * 100) / 100;

      i = g + h;
      j = g * 0.0779;
      j = Math.round(j * 100) / 100;
      k = h * 0.0334;
      k = Math.round(k * 100) / 100;

      l = j + k;
      l = Math.round(l * 100) / 100;

      m = "/////////";
      n = "/////////";
      q = "/////////";
      o = "/////////";
      p = "/////////";
      s = o + p;
      s = Math.round(s * 100) / 100;
      if (!s) {
        s = "/////////";
      }

      t_gjithsej_lart = g;
      t_gjithsej_ulte = h;
      t_energjis = l;
      t_energjis = Math.round(t_energjis * 100) / 100;

      gjithsej_kwh = t_gjithsej_lart + t_gjithsej_ulte;
      t_fikse = 2;
      neto = t_energjis + t_fikse;
      neto = Math.round(neto * 100) / 100;

      tvsh = neto * 0.08;
      tvsh = Math.round(tvsh * 100) / 100;
      shuma_fakture = neto + tvsh;
      shuma_fakture = Math.round(shuma_fakture * 100) / 100;
    }

    document.getElementById("tarifa_lart_kwh_1").value = g;
    document.getElementById("tarifa_lart_euro_1").value = j;
    document.getElementById("tarifa_ulte_kwh_1").value = h;
    document.getElementById("tarifa_ulte_euro_1").value = k;
    document.getElementById("totali_kwh_1").value = i;
    document.getElementById("totali_euro").value = l;
    document.getElementById("tarifa_lart_kwh_2").value = m;
    document.getElementById("tarifa_lart_euro_2").value = o;
    document.getElementById("tarifa_ulte_kwh_2").value = n;
    document.getElementById("tarifa_ulte_euro_2").value = p;
    document.getElementById("totali_kwh_2").value = q;
    document.getElementById("totali_euro_2").value = s;
    document.getElementById("totali_gjithsej_lart_kwh").value = t_gjithsej_lart;
    document.getElementById("totali_gjithsej_ulte_kwh").value = t_gjithsej_ulte;
    document.getElementById("totali_gjithsej_kwh").value = gjithsej_kwh;
    document.getElementById("tarifa_fikse").value = t_fikse;
    document.getElementById("tarifa_energjise").value = t_energjis;
    document.getElementById("neto").value = neto;
    document.getElementById("tvsh").value = tvsh;
    document.getElementById("shuma_faktures").value = shuma_fakture;

    rrymaTabela(t_gjithsej_lart, t_gjithsej_ulte, shuma_fakture);
  }
}

function myDel() {
  var elements = document.getElementsByTagName("input");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type === "text") {
      elements[i].value = "";
    }
  }
}

var data = new Date();

// Merrni vitin aktual
var viti = data.getFullYear();

// Gjej elementin <p> me ID "viti-aktual"
var pElement = document.getElementById("viti-aktual");

// Vendos vitin aktual si tekst në elementin <p>
pElement.textContent = "\u00A9 " + viti + " Edmond Kastrati";

document.getElementById("cigare").addEventListener("click", cigare);
//ocument.getElementById("cigare").addEventListener("click", function () {
//cigare();
//});
function ruajNeTabele(numriPaketimeve, shpenzimet) {
  var tabela = document.getElementById("historiaa");
  var rreshti = tabela.insertRow(-1);

  var numri = tabela.rows.length - 1;

  var kolumne1 = rreshti.insertCell(0);
  var kolumne2 = rreshti.insertCell(1);
  var kolumne3 = rreshti.insertCell(2);

  kolumne1.innerHTML = numri;
  kolumne2.innerHTML = numriPaketimeve;
  kolumne3.innerHTML = shpenzimet;
}

document.getElementById("karburanti").addEventListener("click", karburanti);

function karburantiTabela(konsumikarburantit, kostojakarburantit) {
  var tabela = document.getElementById("historia_karburanti");
  var rreshti = tabela.insertRow(-1);

  var numri = tabela.rows.length - 1;

  var kolumne1 = rreshti.insertCell(0);
  var kolumne2 = rreshti.insertCell(1);
  var kolumne3 = rreshti.insertCell(2);

  kolumne1.innerHTML = numri;
  kolumne2.innerHTML = konsumikarburantit + " L/100km";
  kolumne3.innerHTML = kostojakarburantit + " \u20AC";
}

document.getElementById("qeramike").addEventListener("click", qeramike);

function qeramikeTabela(
  hapsira,
  numri_qeramikave,
  numri_qeramike_tersi,
  kostoja
) {
  var tabela = document.getElementById("historia_qeramike");
  var rreshti = tabela.insertRow(-1);

  var numri = tabela.rows.length - 1;

  var kolona1 = rreshti.insertCell(0);
  var kolona2 = rreshti.insertCell(1);
  var kolona3 = rreshti.insertCell(2);
  var kolona4 = rreshti.insertCell(3);
  var kolona5 = rreshti.insertCell(4);

  kolona1.innerHTML = numri;
  kolona2.innerHTML = hapsira + " m²";
  kolona3.innerHTML = numri_qeramikave + " Cope";
  kolona4.innerHTML = numri_qeramike_tersi + " Cope";
  kolona5.innerHTML = kostoja + " \u20AC";
}

document.getElementById("rryma").addEventListener("click", rryma());

function rrymaTabela(t_gjithsej_lart, t_gjithsej_ulte, shuma_fakture) {
  var tabela = document.getElementById("historia_rryma");
  var rreshti = tabela.insertRow(-1);

  var numri = tabela.rows.length - 1;

  var kolona1 = rreshti.insertCell(0);
  var kolona2 = rreshti.insertCell(1);
  var kolona3 = rreshti.insertCell(2);
  var kolona4 = rreshti.insertCell(3);

  kolona1.innerHTML = numri;
  kolona2.innerHTML = t_gjithsej_lart + " kWh";
  kolona3.innerHTML = t_gjithsej_ulte + " kWh ";
  kolona4.innerHTML = shuma_fakture + " \u20AC";
}

document.getElementById("blloka").addEventListener("click", blloka());

function tabelaBllokat(
  madhsia_murit,
  numri_bllokit,
  numri_bllokave_tersi,
  kostoja
) {
  var tabela = document.getElementById("historia_bllokat");
  var rreshti = tabela.insertRow(-1);

  var numri = tabela.rows.length - 1;

  var kolona1 = rreshti.insertCell(0);
  var kolona2 = rreshti.insertCell(1);
  var kolona3 = rreshti.insertCell(2);
  var kolona4 = rreshti.insertCell(3);
  var kolona5 = rreshti.insertCell(4);

  kolona1.innerHTML = numri;
  kolona2.innerHTML = madhsia_murit + " m²";
  kolona3.innerHTML = numri_bllokit + " Cope ";
  kolona4.innerHTML = numri_bllokave_tersi + " Cope";
  kolona5.innerHTML = kostoja + " \u20AC";
}

// Përfshini skriptën e jspdf
document.getElementById("cigare").addEventListener("click", krijoPDF);

// Krijo një funksion për të krijuar PDF-në dhe për të shtuar të dhënat nga tabela
function krijoPDFcigare() {
  var doc = new jsPDF();
  var tabela = document.getElementById("historiaa");
  var rreshtat = tabela.getElementsByTagName("tr");
  var numriRreshtave = rreshtat.length;

  doc.setFontSize(17);
  doc.setTextColor(40);
  doc.setFontStyle("bold");
  doc.text(
    "Numri i Cigareve i llogaritur per 1 vite, se sa ka shpenzuar",
    18,
    10
  );
  doc.setFontStyle("normal");

  var numriRreshtaveFaqja = 0; // Numri i rreshtave të shtuar në faqen aktuale
  doc.setFontSize(12);

  doc.setFontStyle("bold");
  doc.text("Nr: ", 30, 20); // Vendosni vlerat e numrit, paketimeve dhe shpenzimeve në titull të PDF-së
  doc.text("Numri Paketimeve: ", 85, 20);
  doc.text("Shpenzimet: ", 140, 20);

  for (var i = 1; i < numriRreshtave; i++) {
    if (numriRreshtaveFaqja >= 26) {
      doc.addPage();
      numriRreshtaveFaqja = 0;
    }

    var rreshti = rreshtat[i];
    var kolonat = rreshti.getElementsByTagName("td");
    var vlera1 = kolonat[0].textContent;
    var vlera2 = kolonat[1].textContent;
    var vlera3 = kolonat[2].textContent;

    doc.setFillColor(255, 255, 255);
    doc.rect(10, 30 + numriRreshtaveFaqja * 10, 190, 10, "F");

    doc.setFontStyle("normal");
    doc.text(vlera1, 30, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera2 + " Vite", 85, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera3 + " €", 140, 37 + numriRreshtaveFaqja * 10);

    numriRreshtaveFaqja++;
  }

  doc.save("historia.pdf");
}

document.getElementById("qeramike").addEventListener("click", krijoPDFqeramike);

// Krijo një funksion për të krijuar PDF-në dhe për të shtuar të dhënat nga tabela
function krijoPDFqeramike() {
  var doc = new jsPDF();
  var tabela = document.getElementById("historia_qeramike");
  var rreshtat = tabela.getElementsByTagName("tr");
  var numriRreshtave = rreshtat.length;

  doc.setFontSize(17);
  doc.setTextColor(40);
  doc.setFontStyle("bold");
  doc.text(
    "Llogaritja e hapsirës për m², sasitë e qeramikave dhe çmimi",
    18,
    10
  );
  doc.setFontStyle("normal");

  var numriRreshtaveFaqja = 0; // Numri i rreshtave të shtuar në faqen aktuale
  doc.setFontSize(12);

  doc.setFontStyle("bold");
  doc.text("Nr", 15, 20); // Vendosni vlerat e numrit, paketimeve dhe shpenzimeve në titull të PDF-së
  doc.text("Hapsira", 27, 20);
  doc.text("Numri Qeramikave", 65, 20);
  doc.text("Numri Qeramikave në Tërsi", 105, 20);
  doc.text("Kostoja", 167, 20);

  for (var i = 1; i < numriRreshtave; i++) {
    if (numriRreshtaveFaqja >= 26) {
      doc.addPage();
      numriRreshtaveFaqja = 0;
    }

    var rreshti = rreshtat[i];
    var kolonat = rreshti.getElementsByTagName("td");
    var vlera1 = kolonat[0].textContent;
    var vlera2 = kolonat[1].textContent;
    var vlera3 = kolonat[2].textContent;
    var vlera4 = kolonat[3].textContent;
    var vlera5 = kolonat[4].textContent;

    doc.setFillColor(255, 255, 255);
    doc.rect(10, 30 + numriRreshtaveFaqja * 10, 190, 10, "F");

    doc.setFontStyle("normal");
    doc.text(vlera1, 15, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera2, 27, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera3, 65, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera4, 105, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera5, 167, 37 + numriRreshtaveFaqja * 10);

    numriRreshtaveFaqja++;
  }

  doc.save("historia.pdf");
}

document.getElementById("karburanti").addEventListener("click", krijoPDF);

// Krijo një funksion për të krijuar PDF-në dhe për të shtuar të dhënat nga tabela
function krijoPDFkarburanti() {
  var doc = new jsPDF();
  var tabela = document.getElementById("historia_karburanti");
  var rreshtat = tabela.getElementsByTagName("tr");
  var numriRreshtave = rreshtat.length;

  doc.setFontSize(17);
  doc.setTextColor(40);
  doc.setFontStyle("bold");
  doc.text("Llogarit shpenzimet dhe mesataren për km/h", 18, 10);
  doc.setFontStyle("normal");

  var numriRreshtaveFaqja = 0; // Numri i rreshtave të shtuar në faqen aktuale
  doc.setFontSize(12);

  doc.setFontStyle("bold");
  doc.text("Nr", 30, 20); // Vendosni vlerat e numrit, paketimeve dhe shpenzimeve në titull të PDF-së
  doc.text("Konsumi Karburantit", 85, 20);

  doc.text("Kostoja", 148, 20);

  for (var i = 1; i < numriRreshtave; i++) {
    if (numriRreshtaveFaqja >= 26) {
      doc.addPage();
      numriRreshtaveFaqja = 0;
    }

    var rreshti = rreshtat[i];
    var kolonat = rreshti.getElementsByTagName("td");
    var vlera1 = kolonat[0].textContent;
    var vlera2 = kolonat[1].textContent;
    var vlera3 = kolonat[2].textContent;

    doc.setFillColor(255, 255, 255);
    doc.rect(10, 30 + numriRreshtaveFaqja * 10, 190, 10, "F");

    doc.setFontStyle("normal");
    doc.text(vlera1, 30, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera2 + " ", 85, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera3 + " ", 148, 37 + numriRreshtaveFaqja * 10);

    numriRreshtaveFaqja++;
  }

  doc.save("historia.pdf");
}

document.getElementById("qeramike").addEventListener("click", krijoPDFbllokat);

// Krijo një funksion për të krijuar PDF-në dhe për të shtuar të dhënat nga tabela
function krijoPDFbllokat() {
  var doc = new jsPDF();
  var tabela = document.getElementById("historia_bllokat");
  var rreshtat = tabela.getElementsByTagName("tr");
  var numriRreshtave = rreshtat.length;
  doc.setFontSize(17);
  doc.setTextColor(40);
  doc.setFontStyle("bold");
  doc.text("Llogarite hapsirën për m², sasitë e bllokave dhe çmimin", 18, 10);
  doc.setFontStyle("normal");

  var numriRreshtaveFaqja = 0; // Numri i rreshtave të shtuar në faqen aktuale
  doc.setFontSize(12);

  doc.setFontStyle("bold");
  doc.text("Nr ", 15, 20); // Vendosni vlerat e numrit, paketimeve dhe shpenzimeve në titull të PDF-së
  doc.text("Madhësia Murit ", 27, 20);
  doc.text("Numri Bllokave ", 65, 20);
  doc.text("Numri Bllokave në Tersi	 ", 105, 20);
  doc.text("Kostoja", 167, 20);

  for (var i = 1; i < numriRreshtave; i++) {
    if (numriRreshtaveFaqja >= 26) {
      doc.addPage();
      numriRreshtaveFaqja = 0;
    }

    var rreshti = rreshtat[i];
    var kolonat = rreshti.getElementsByTagName("td");
    var vlera1 = kolonat[0].textContent;
    var vlera2 = kolonat[1].textContent;
    var vlera3 = kolonat[2].textContent;
    var vlera4 = kolonat[3].textContent;
    var vlera5 = kolonat[4].textContent;

    doc.setFillColor(255, 255, 255);
    doc.rect(10, 30 + numriRreshtaveFaqja * 10, 190, 10, "F");

    doc.setFontStyle("normal");
    doc.text(vlera1, 15, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera2, 27, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera3, 65, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera4, 105, 37 + numriRreshtaveFaqja * 10);
    doc.text(vlera5, 167, 37 + numriRreshtaveFaqja * 10);

    numriRreshtaveFaqja++;
  }

  doc.save("historia.pdf");
}

document.getElementById("rryma").addEventListener("click", krijoPDFrryma);

function krijoPDFrryma() {
  var doc = new jsPDF();
  var tabela = document.getElementById("historia_rryma");
  var rreshtat = tabela.getElementsByTagName("tr");
  var numriRreshtave = rreshtat.length;
  doc.setFontSize(17);
  doc.setTextColor(40);
  doc.setFontStyle("bold");
  doc.text("Llogaritja e shpenzimeve te rrymës elektrike  ", 37, 20);
  doc.setFontStyle("normal");

  var numriRreshtaveFaqja = 0; // Numri i rreshtave të shtuar në faqen aktuale
  doc.setFontSize(12);

  doc.setFontStyle("bold");
  doc.text("Nr ", 15, 28); // Vendosni vlerat e numrit, paketimeve dhe shpenzimeve në titull të PDF-së
  doc.text("Tarifa Larte", 47, 28);
  doc.text("Tarifa Ulet", 95, 28);
  doc.text("Kostoja", 157, 28);

  for (var i = 1; i < numriRreshtave; i++) {
    if (numriRreshtaveFaqja >= 26) {
      doc.addPage();
      numriRreshtaveFaqja = 0;
    }

    var rreshti = rreshtat[i];
    var kolonat = rreshti.getElementsByTagName("td");
    var vlera1 = kolonat[0].textContent;
    var vlera2 = kolonat[1].textContent;
    var vlera3 = kolonat[2].textContent;
    var vlera4 = kolonat[3].textContent;

    doc.setFillColor(255, 255, 255);
    doc.rect(10, 30 + numriRreshtaveFaqja * 10, 190, 10, "F");

    doc.setFontStyle("normal");
    doc.text(vlera1, 15, 40 + numriRreshtaveFaqja * 10);
    doc.text(vlera2, 47, 40 + numriRreshtaveFaqja * 10);
    doc.text(vlera3, 95, 40 + numriRreshtaveFaqja * 10);
    doc.text(vlera4, 157, 40 + numriRreshtaveFaqja * 10);

    numriRreshtaveFaqja++;
  }

  doc.save("historia.pdf");
}
