export const getRandomCatImage = () => {
  const images = ["/assets/images/cat0.jpg", "/assets/images/cat1.jpg", "/assets/images/cat2.jpg", "/assets/images/cat3.jpg"];
  return images[Math.floor(Math.random() * images.length)];
};