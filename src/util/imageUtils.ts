export interface ImageDimensions {
  width: number,
  height: number
}
  
export interface GalleryImage {
  src: string,
  thumbnail: string,
  width: number,
  height: number
}
  
export const getImageDimensions = (src: string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      resolve({ width: img.width, height: img.height })
    }

    img.onerror = (error) => {
      reject(error)
    }
  })
}