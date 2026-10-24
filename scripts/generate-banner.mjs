import fs from "node:fs";
// Self-contained SVGs: no external fonts, scripts, image services, or animation.
const themes = {
  light: {
    bg: "#F8F9FF",
    panel: "#FFFFFF",
    text: "#151C25",
    muted: "#434655",
    line: "#C4C5D7",
    accent: "#1D4ED8",
    coral: "#B94B33",
    soft: "#EEF4FF",
    warm: "#FFF0E8",
  },
  dark: {
    bg: "#101216",
    panel: "#202631",
    text: "#F1F3F7",
    muted: "#AAB4C3",
    line: "#343D4B",
    accent: "#60A5FA",
    coral: "#FF9E83",
    soft: "#171B22",
    warm: "#382720",
  },
};
for (const [theme, c] of Object.entries(themes)) {
  const dots = Array.from(
    { length: 14 },
    (_, i) =>
      `<circle cx="${725 + ((i * 23) % 104)}" cy="${236 + ((i * 17) % 44)}" r="3" fill="${c.accent}"/>`,
  ).join("");
  const warmDots = Array.from(
    { length: 10 },
    (_, i) =>
      `<circle cx="${932 + ((i * 19) % 72)}" cy="${236 + ((i * 13) % 44)}" r="3" fill="${c.coral}"/>`,
  ).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 380" width="1100" height="380" role="img" aria-labelledby="title desc">
<title id="title">R V Abhishek — Patterns, signals, and systems.</title>
<desc id="desc">Portfolio showcase with a conceptual waveform and clusters. Explore machine learning, music, and useful software.</desc>
<rect width="1100" height="380" rx="6" fill="${c.bg}"/>
<rect x=".5" y=".5" width="1099" height="379" rx="6" fill="none" stroke="${c.line}"/>
<text x="44" y="47" font-family="monospace" font-size="13" letter-spacing="3" fill="${c.accent}">R V ABHISHEK</text>
<text x="42" y="133" font-family="Georgia,serif" font-size="65" fill="${c.text}">Patterns, signals,</text>
<text x="42" y="205" font-family="Georgia,serif" font-size="65" font-style="italic" fill="${c.accent}">and systems.</text>
<text x="44" y="252" font-family="Arial,sans-serif" font-size="18" fill="${c.muted}">Machine learning · music · useful software.</text>
<rect x="44" y="288" width="239" height="46" rx="2" fill="#1D4ED8"/>
<text x="63" y="317" font-family="Arial,sans-serif" font-size="16" fill="#FFFFFF">Explore the portfolio</text>
<path d="M251 318l12-12m-11 0h11v11" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
<rect x="675" y="46" width="381" height="288" fill="${c.panel}" stroke="${c.line}"/>
<text x="695" y="75" font-family="monospace" font-size="11" letter-spacing="1" fill="${c.accent}">SIGNAL → STRUCTURE</text>
<path d="M695 91h341 M695 150h341 M695 200h341" stroke="${c.line}" stroke-width=".7"/>
<path d="M695 151C712 151 717 115 736 115S762 181 783 181S811 108 833 108S862 183 885 183S913 121 936 121S969 168 990 168S1021 132 1036 143" stroke="${c.accent}" stroke-width="2" fill="none"/>
<path d="M695 163C754 163 775 130 823 141S890 173 939 146S997 143 1036 151" stroke="${c.coral}" stroke-width="1.5" fill="none"/>
<ellipse cx="778" cy="258" rx="68" ry="38" fill="${c.soft}" stroke="${c.accent}" stroke-dasharray="3 5"/>
<ellipse cx="970" cy="258" rx="58" ry="38" fill="${c.warm}" stroke="${c.coral}" stroke-dasharray="3 5"/>
${dots}${warmDots}<path d="M851 258h54" stroke="${c.line}"/>
<text x="695" y="317" font-family="monospace" font-size="10" fill="${c.muted}">LISTEN CLOSELY. LOOK FOR CONNECTIONS.</text>
</svg>\n`;
  fs.writeFileSync(`assets/portfolio-${theme}.svg`, svg);
}
console.log("Generated light and dark portfolio banners.");
