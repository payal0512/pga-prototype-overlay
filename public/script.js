function func(tab) {
  const stat1 = document.getElementById("stat");
  const bio1 = document.getElementById("bios");
  const bags1 = document.getElementById("bags");
  const ball1 = document.getElementById("ball1");
  const ball2 = document.getElementById("ball2");
  const ball3 = document.getElementById("ball3");

  const stat2 = document.getElementById("f1");
  const bio2 = document.getElementById("f2");
  const bags2 = document.getElementById("f3");

  const bac = document.getElementById("bac");
  const backoutline = document.getElementById("backout");

  const main = document.getElementById("main");

  if (tab === "stats") {
    stat1.style.display = "grid";
    bio1.style.display = "none";
    bags1.style.display = "none";
    ball1.style.display = "none";
    ball2.style.display = "none";
    ball3.style.display = "none";

    stat2.style.borderBottom = "3px solid #26A2DC";
    stat2.style.color = "#26A2DC";
    stat2.style.fontWeight = "Bold";
    bio2.style.borderBottom = "2px solid #707070";
    bio2.style.color = "white";
    bags2.style.borderBottom = "2px solid #707070";
    bags2.style.color = "white";

    bac.style.display = "none";
    backoutline.style.display = "none";
  } else if (tab === "bio") {
    stat1.style.display = "none";
    bio1.style.display = "grid";
    bags1.style.display = "none";
    ball1.style.display = "none";
    ball2.style.display = "none";
    ball3.style.display = "none";

    stat2.style.borderBottom = "2px solid #707070";
    stat2.style.color = "white";
    stat2.style.fontWeight = "normal";
    bio2.style.borderBottom = "3px solid #26A2DC";
    bio2.style.color = "#26A2DC";
    bio2.style.fontWeight = "Bold";
    bags2.style.borderBottom = "2px solid #707070";
    bags2.style.color = "white";

    bac.style.display = "none";
    backoutline.style.display = "none";
  } else if (tab === "bag") {
    stat1.style.display = "none";
    bio1.style.display = "none";
    bags1.style.display = "grid";
    ball1.style.display = "none";
    ball2.style.display = "none";
    ball3.style.display = "none";

    stat2.style.borderBottom = "2px solid #707070";
    stat2.style.color = "white";
    stat2.style.fontWeight = "normal";
    bio2.style.borderBottom = "2px solid #707070";
    bio2.style.color = "white";
    bio2.style.fontWeight = "normal";
    bags2.style.borderBottom = "3px solid #26A2DC";
    bags2.style.color = "#26A2DC";

    bac.style.display = "none";
    backoutline.style.display = "none";
    // bags2.style.fontWeight = "Bold";
  } else if (tab === "hole15") {
    stat1.style.display = "none";
    bio1.style.display = "none";
    bags1.style.display = "none";
    ball1.style.display = "grid";
    ball2.style.display = "none";
    ball3.style.display = "none";

    bac.style.display = "grid";
    backoutline.style.display = "grid";
  } else if (tab === "back") {
    stat1.style.display = "grid";
    bio1.style.display = "none";
    bags1.style.display = "none";
    ball1.style.display = "none";
    ball2.style.display = "none";
    ball3.style.display = "none";

    stat2.style.borderBottom = "3px solid #26A2DC";
    stat2.style.color = "#26A2DC";
    stat2.style.fontWeight = "Bold";
    bio2.style.borderBottom = "2px solid #707070";
    bio2.style.color = "white";
    bags2.style.borderBottom = "2px solid #707070";
    bags2.style.color = "white";

    bac.style.display = "none";
    backoutline.style.display = "none";
  } else if (tab === "hole16") {
    stat1.style.display = "none";
    bio1.style.display = "none";
    bags1.style.display = "none";
    ball1.style.display = "none";
    ball2.style.display = "grid";
    ball3.style.display = "none";

    bac.style.display = "grid";
    backoutline.style.display = "grid";
  } else if (tab === "hole17") {
    stat1.style.display = "none";
    bio1.style.display = "none";
    bags1.style.display = "none";
    ball1.style.display = "none";
    ball2.style.display = "none";
    ball3.style.display = "grid";

    bac.style.display = "grid";
    backoutline.style.display = "grid";
  } else if (tab === "close") {
    main.style.display = "none";
  }
}
