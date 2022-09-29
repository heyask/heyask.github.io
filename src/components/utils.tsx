export const getRandomCatImage = () => {
  const images = ["/assets/images/cat0.jpg", "/assets/images/cat1.jpg", "/assets/images/cat2.jpg"];
  return images[Math.floor(new Date().getTime() / 10000) % images.length];
};