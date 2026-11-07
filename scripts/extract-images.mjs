import fs from "fs";
import path from "path";

const htmlPath = path.join(
  process.cwd(),
  ".contoh",
  "Dae Young Textile – Company Profile.html",
);
const html = fs.readFileSync(htmlPath, "utf8");
const alts = [...html.matchAll(/alt="([^"]+)"/g)].map((m) => m[1]);
const imgs = [
  ...html.matchAll(/src="(data:image\/([a-zA-Z0-9+]+);base64,([^"]+))"/g),
];

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

const used = {};
const map = [];

imgs.forEach((m, i) => {
  const ext =
    m[2] === "jpeg" ? "jpg" : m[2] === "svg+xml" ? "svg" : m[2];
  let name = slug(alts[i] || `img-${i}`) || `img-${i}`;
  if (used[name]) {
    used[name] += 1;
    name = `${name}-${used[name]}`;
  } else {
    used[name] = 1;
  }

  const folder =
    i < 4
      ? "hero"
      : i === 4
        ? "about"
        : i < 8
          ? "timeline"
          : i < 19
            ? "produk"
            : i < 23
              ? "produksi"
              : i < 27
                ? "lokasi"
                : "sustainability";

  const dir = path.join("public", "images", folder);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${name}.${ext}`);
  fs.writeFileSync(file, Buffer.from(m[3], "base64"));
  map.push({
    alt: alts[i] || "",
    file: `/images/${folder}/${name}.${ext}`,
  });
});

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync("src/data/images.json", JSON.stringify(map, null, 2));
console.log(`extracted ${imgs.length} images`);
map.forEach((x) => console.log(x.file));
