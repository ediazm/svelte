
export async function load({ fetch }) {
  const trendingPhotos =  await fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(
    res => res.json());  
  
  return {
    trendingPhotos
  }
}