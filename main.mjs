import sharp from "sharp";

(async () => {
  const metadata = await sharp("sammy.png")
    .resize({
      width: 150,
      height: 97
    })
    .grayscale()
    .toFile("sammy-resized.png");
  console.log(metadata);
})();
