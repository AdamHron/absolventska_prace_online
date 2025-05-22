const slovicka = [
{ en: "to be", cz: "být", PastSimple: "was, were", PastParticiple: "been", NepravidelnáSlovesa: 1 },
{ en: "to become", cz: "stát se", PastSimple: "became", PastParticiple: "become", NepravidelnáSlovesa: 1 },
{ en: "to begin", cz: "začít", PastSimple: "began", PastParticiple: "begun", NepravidelnáSlovesa: 1 },
{ en: "to bite", cz: "kousat", PastSimple: "bit", PastParticiple: "bitten", NepravidelnáSlovesa: 1 },
{ en: "to break", cz: "zlomit, rozbít", PastSimple: "broke", PastParticiple: "broken", NepravidelnáSlovesa: 1 },
{ en: "to bring", cz: "přinést", PastSimple: "brought", PastParticiple: "brought", NepravidelnáSlovesa: 1 },
{ en: "to build", cz: "stavět, postavit", PastSimple: "built", PastParticiple: "built", NepravidelnáSlovesa: 1 },
{ en: "to burn", cz: "spálit", PastSimple: "burnt", PastParticiple: "burnt", NepravidelnáSlovesa: 1 },
{ en: "to buy", cz: "koupit", PastSimple: "bought", PastParticiple: "bought", NepravidelnáSlovesa: 1 },
{ en: "to catch", cz: "chytit", PastSimple: "caught", PastParticiple: "caught", NepravidelnáSlovesa: 1 },
{ en: "to come", cz: "přijít, přijet", PastSimple: "came", PastParticiple: "come", NepravidelnáSlovesa: 1 },
{ en: "to cost", cz: "stát (cena)", PastSimple: "cost", PastParticiple: "cost", NepravidelnáSlovesa: 1 },
{ en: "to cut", cz: "stříhat, řezat", PastSimple: "cut", PastParticiple: "cut", NepravidelnáSlovesa: 1 },
{ en: "to dig", cz: "hloubit, kopat", PastSimple: "dug", PastParticiple: "dug", NepravidelnáSlovesa: 1 },
{ en: "to do", cz: "dělat", PastSimple: "did", PastParticiple: "done", NepravidelnáSlovesa: 1 },
{ en: "to draw", cz: "kreslit", PastSimple: "drew", PastParticiple: "drawn", NepravidelnáSlovesa: 1 },
{ en: "to drink", cz: "pít", PastSimple: "drank", PastParticiple: "drunk", NepravidelnáSlovesa: 1 },
{ en: "to drive", cz: "řídit", PastSimple: "drove", PastParticiple: "driven", NepravidelnáSlovesa: 1 },
{ en: "to eat", cz: "jíst", PastSimple: "ate", PastParticiple: "eaten", NepravidelnáSlovesa: 1 },
{ en: "to fall", cz: "padat", PastSimple: "fell", PastParticiple: "fallen", NepravidelnáSlovesa: 1 },
{ en: "to feel", cz: "cítit", PastSimple: "felt", PastParticiple: "felt", NepravidelnáSlovesa: 1 },
{ en: "to fight", cz: "bojovat, prát se", PastSimple: "fought", PastParticiple: "fought", NepravidelnáSlovesa: 1 },
{ en: "to find", cz: "najít", PastSimple: "found", PastParticiple: "found", NepravidelnáSlovesa: 1 },
{ en: "to fly", cz: "létat", PastSimple: "flew", PastParticiple: "flown", NepravidelnáSlovesa: 1 },
{ en: "to get", cz: "dostat, získat", PastSimple: "got", PastParticiple: "got", NepravidelnáSlovesa: 1 },
{ en: "to give", cz: "dát, věnovat", PastSimple: "gave", PastParticiple: "given", NepravidelnáSlovesa: 1 },
{ en: "to go", cz: "jít, jet", PastSimple: "went", PastParticiple: "been, gone", NepravidelnáSlovesa: 1 },
{ en: "to grow", cz: "růst", PastSimple: "grew", PastParticiple: "grown", NepravidelnáSlovesa: 1 },
{ en: "to have", cz: "mít", PastSimple: "had", PastParticiple: "had", NepravidelnáSlovesa: 1 },
{ en: "to hear", cz: "slyšet", PastSimple: "heard", PastParticiple: "heard", NepravidelnáSlovesa: 1 },
{ en: "to hide", cz: "schovat", PastSimple: "hid", PastParticiple: "hidden", NepravidelnáSlovesa: 1 },
{ en: "to hit", cz: "udeřit, narazit", PastSimple: "hit", PastParticiple: "hit", NepravidelnáSlovesa: 1 },
{ en: "to hold", cz: "držet", PastSimple: "held", PastParticiple: "held", NepravidelnáSlovesa: 1 },
{ en: "to hurt", cz: "(z)ranit se, bolet", PastSimple: "hurt", PastParticiple: "hurt", NepravidelnáSlovesa: 1 },
{ en: "to keep", cz: "udržet, chovat", PastSimple: "kept", PastParticiple: "kept", NepravidelnáSlovesa: 1 },
{ en: "to know", cz: "vědět, znát", PastSimple: "knew", PastParticiple: "known", NepravidelnáSlovesa: 1 },
{ en: "to learn", cz: "učit se, dozvědět se", PastSimple: "learnt", PastParticiple: "learnt", NepravidelnáSlovesa: 1 },
{ en: "to leave", cz: "odejít, opustit", PastSimple: "left", PastParticiple: "left", NepravidelnáSlovesa: 1 },
{ en: "to lie", cz: "ležet", PastSimple: "lay", PastParticiple: "lain", NepravidelnáSlovesa: 1 },
{ en: "to lose", cz: "ztratit", PastSimple: "lost", PastParticiple: "lost", NepravidelnáSlovesa: 1 },
{ en: "to make", cz: "dělat, vyrábět", PastSimple: "made", PastParticiple: "made", NepravidelnáSlovesa: 1 },
{ en: "to mean", cz: "znamenat", PastSimple: "meant", PastParticiple: "meant", NepravidelnáSlovesa: 1 },
{ en: "to pay", cz: "(za)platit", PastSimple: "paid", PastParticiple: "paid", NepravidelnáSlovesa: 1 },
{ en: "to put", cz: "dát, položit", PastSimple: "put", PastParticiple: "put", NepravidelnáSlovesa: 1 },
{ en: "to read", cz: "číst", PastSimple: "read", PastParticiple: "read", NepravidelnáSlovesa: 1 },
{ en: "to ride", cz: "jezdit (na)", PastSimple: "rode", PastParticiple: "ridden", NepravidelnáSlovesa: 1 },
{ en: "to ring", cz: "zvonit", PastSimple: "rang", PastParticiple: "rung", NepravidelnáSlovesa: 1 },
{ en: "to run", cz: "běhat", PastSimple: "ran", PastParticiple: "run", NepravidelnáSlovesa: 1 },
{ en: "to say", cz: "říci (něco)", PastSimple: "said", PastParticiple: "said", NepravidelnáSlovesa: 1 },
{ en: "to see", cz: "vidět", PastSimple: "saw", PastParticiple: "seen", NepravidelnáSlovesa: 1 },
{ en: "to sell", cz: "prodat", PastSimple: "sold", PastParticiple: "sold", NepravidelnáSlovesa: 1 },
{ en: "to send", cz: "poslat", PastSimple: "sent", PastParticiple: "sent", NepravidelnáSlovesa: 1 },
{ en: "to set", cz: "nastavit", PastSimple: "set", PastParticiple: "set", NepravidelnáSlovesa: 1 },
{ en: "to sing", cz: "zpívat", PastSimple: "sang", PastParticiple: "sung", NepravidelnáSlovesa: 1 },
{ en: "to sink", cz: "potopit (se)", PastSimple: "sank", PastParticiple: "sunk", NepravidelnáSlovesa: 1 },
{ en: "to sit", cz: "sedět", PastSimple: "sat", PastParticiple: "sat", NepravidelnáSlovesa: 1 },
{ en: "to smell", cz: "vonět, páchnout", PastSimple: "smelt", PastParticiple: "smelt", NepravidelnáSlovesa: 1 },
{ en: "to speak", cz: "mluvit", PastSimple: "spoke", PastParticiple: "spoken", NepravidelnáSlovesa: 1 },
{ en: "to spell", cz: "hláskovat", PastSimple: "spelt", PastParticiple: "spelt", NepravidelnáSlovesa: 1 },
{ en: "to spend", cz: "strávit, utratit", PastSimple: "spent", PastParticiple: "spent", NepravidelnáSlovesa: 1 },
{ en: "to stand", cz: "stát, postavit", PastSimple: "stood", PastParticiple: "stood", NepravidelnáSlovesa: 1 },
{ en: "to steal", cz: "krást", PastSimple: "stole", PastParticiple: "stolen", NepravidelnáSlovesa: 1 },
{ en: "to stick", cz: "(při)lepit", PastSimple: "stuck", PastParticiple: "stuck", NepravidelnáSlovesa: 1 },
{ en: "to sweep", cz: "zametat", PastSimple: "swept", PastParticiple: "swept", NepravidelnáSlovesa: 1 },
{ en: "to swim", cz: "plavat", PastSimple: "swam", PastParticiple: "swum", NepravidelnáSlovesa: 1 },
{ en: "to take", cz: "vzít", PastSimple: "took", PastParticiple: "taken", NepravidelnáSlovesa: 1 },
{ en: "to teach", cz: "učit", PastSimple: "taught", PastParticiple: "taught", NepravidelnáSlovesa: 1 },
{ en: "to tear", cz: "trhat", PastSimple: "tore", PastParticiple: "torn", NepravidelnáSlovesa: 1 },
{ en: "to tell", cz: "říci (komu)", PastSimple: "told", PastParticiple: "told", NepravidelnáSlovesa: 1 },
{ en: "to think", cz: "myslet", PastSimple: "thought", PastParticiple: "thought", NepravidelnáSlovesa: 1 },
{ en: "to throw", cz: "házet", PastSimple: "threw", PastParticiple: "thrown", NepravidelnáSlovesa: 1 },
{ en: "to understand", cz: "rozumět", PastSimple: "understood", PastParticiple: "understood", NepravidelnáSlovesa: 1 },
{ en: "to wake", cz: "(vz)budit (se)", PastSimple: "woke", PastParticiple: "woken", NepravidelnáSlovesa: 1 },
{ en: "to wear", cz: "nosit, mít na sobě", PastSimple: "wore", PastParticiple: "worn", NepravidelnáSlovesa: 1 },
{ en: "to win", cz: "vyhrát", PastSimple: "won", PastParticiple: "won", NepravidelnáSlovesa: 1 },
{ en: "to write", cz: "psát", PastSimple: "wrote", PastParticiple: "written", NepravidelnáSlovesa: 1 },

    { cz: "dům", en: "house", en_vyslovnost: "/haʊs/", trida: 1, unit: 1, subunit: "a" },
    { cz: "škola", en: "school", en_vyslovnost: "/skuːl/", trida: 2, unit: 2, subunit: "b" },
    { cz: "pes", en: "dog", en_vyslovnost: "/dɒɡ/", trida: 3, unit: 3, subunit: "c" },
    { cz: "kočka", en: "cat", en_vyslovnost: "/kæt/", trida: 4, unit: 4, subunit: "d" },
    { cz: "auto", en: "car", en_vyslovnost: "/kɑːr/", trida: 5, unit: 5, subunit: "a" },
    { cz: "kolo", en: "bike", en_vyslovnost: "/baɪk/", trida: 6, unit: 6, subunit: "b" },
    { cz: "kniha", en: "book", en_vyslovnost: "/bʊk/", trida: 7, unit: 1, subunit: "c" },
    { cz: "tužka", en: "pencil", en_vyslovnost: "/ˈpensl/", trida: 8, unit: 2, subunit: "d" },
    { cz: "jablko", en: "apple", en_vyslovnost: "/ˈæpl/", trida: 9, unit: 3, subunit: "a" },
    { cz: "banán", en: "banana", en_vyslovnost: "/bəˈnɑːnə/", trida: 1, unit: 4, subunit: "b" },
    { cz: "voda", en: "water", en_vyslovnost: "/ˈwɔːtər/", trida: 2, unit: 5, subunit: "c" },
    { cz: "mléko", en: "milk", en_vyslovnost: "/mɪlk/", trida: 3, unit: 6, subunit: "d" },
    { cz: "chléb", en: "bread", en_vyslovnost: "/brɛd/", trida: 4, unit: 1, subunit: "a" },
    { cz: "sýr", en: "cheese", en_vyslovnost: "/tʃiːz/", trida: 5, unit: 2, subunit: "b" },
    { cz: "míč", en: "ball", en_vyslovnost: "/bɔːl/", trida: 6, unit: 3, subunit: "c" },
    { cz: "slunce", en: "sun", en_vyslovnost: "/sʌn/", trida: 7, unit: 4, subunit: "d" },
    { cz: "měsíc", en: "moon", en_vyslovnost: "/muːn/", trida: 8, unit: 5, subunit: "a" },
    { cz: "hvězda", en: "star", en_vyslovnost: "/stɑːr/", trida: 9, unit: 6, subunit: "b" },
    { cz: "počítač", en: "computer", en_vyslovnost: "/kəmˈpjuːtər/", trida: 1, unit: 1, subunit: "c" },
    { cz: "telefon", en: "phone", en_vyslovnost: "/fəʊn/", trida: 2, unit: 2, subunit: "d" },
    { cz: "okno", en: "window", en_vyslovnost: "/ˈwɪndəʊ/", trida: 3, unit: 3, subunit: "a" },
    { cz: "dveře", en: "door", en_vyslovnost: "/dɔːr/", trida: 4, unit: 4, subunit: "b" },
    { cz: "stůl", en: "table", en_vyslovnost: "/ˈteɪbl/", trida: 5, unit: 5, subunit: "c" },
    { cz: "židle", en: "chair", en_vyslovnost: "/tʃeər/", trida: 6, unit: 6, subunit: "d" },
    { cz: "postel", en: "bed", en_vyslovnost: "/bɛd/", trida: 7, unit: 1, subunit: "a" }
  ];
  





document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("slovnicek-body");
  const tridaSelect = document.getElementById("trida");
  const unitSelect = document.getElementById("unit");
  const subunitSelect = document.getElementById("subunit");
  const button = document.getElementById("button");
  const nepravidelnáButton = document.getElementById("nepravidelna-button");
  const thead = document.querySelector("#slovnicek thead tr");

  let nepravidelnáRežim = false;

  const updateTableHead = (zobrazSlovesa) => {
    thead.innerHTML = "";
    if (zobrazSlovesa) {
      thead.innerHTML = `
        <th width="100">anglické slovo</th>
        <th width="100">české slovo</th>
        <th width="100">Past simple</th>
        <th width="100">Past participle</th>
      `;
    } else {
      thead.innerHTML = `
        <th width="100">anglické slovo</th>
        <th width="100">české slovo</th>
        <th width="100">výslovnost</th>
      `;
    }
  };

  const renderTable = (data, zobrazSlovesa = false) => {
    tbody.innerHTML = "";
    updateTableHead(zobrazSlovesa);
    data.forEach(slovo => {
      const row = document.createElement("tr");
      if (zobrazSlovesa) {
        row.innerHTML = `
          <td>${slovo.en}</td>
          <td>${slovo.cz}</td>
          <td>${slovo.PastSimple || ""}</td>
          <td>${slovo.PastParticiple || ""}</td>
        `;
      } else {
        row.innerHTML = `
          <td>${slovo.en}</td>
          <td>${slovo.cz}</td>
          <td>${slovo.en_vyslovnost || ""}</td>
        `;
      }
      tbody.appendChild(row);
    });
  };

  const filterSlovicka = () => {
    document.getElementById("zpráva").innerHTML = "";
    nepravidelnáRežim = false;
    updateTableHead(false);

    const tridaValue = tridaSelect.value;
    const unitValue = unitSelect.value;
    const subunitValue = subunitSelect.value;

    if (tridaValue === "0") {
      document.getElementById("zpráva").innerHTML = "Žádná slova pro toto vyhledávání.";
      renderTable(slovicka.filter(slovo => !slovo.NepravidelnáSlovesa));
      return;
    }

    if (unitValue === "0" && subunitValue !== "0") {
      document.getElementById("zpráva").innerHTML = "Žádná slova pro toto vyhledávání.";
      renderTable(slovicka.filter(slovo => !slovo.NepravidelnáSlovesa));
      return;
    }

    const filtered = slovicka.filter(slovo => {
      if (slovo.NepravidelnáSlovesa === 1) return false; // skryj nepravidelná
      const matchesTrida = slovo.trida == tridaValue;
      const matchesUnit = unitValue === "0" || slovo.unit == unitValue;
      const matchesSubunit = subunitValue === "0" || slovo.subunit === subunitValue;
      return matchesTrida && matchesUnit && matchesSubunit;
    });

    renderTable(filtered);
  };

  const zobrazNepravidelnáSlovesa = () => {
    nepravidelnáRežim = true;
    const nepravidelná = slovicka.filter(slovo => slovo.NepravidelnáSlovesa === 1);
    renderTable(nepravidelná, true);
  };

  renderTable(slovicka.filter(slovo => !slovo.NepravidelnáSlovesa));

  button.addEventListener("click", (event) => {
    event.preventDefault();
    filterSlovicka();
  });

  nepravidelnáButton.addEventListener("click", (event) => {
    event.preventDefault();
    zobrazNepravidelnáSlovesa();
  });
});
