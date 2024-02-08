import { useState, useEffect } from 'react'

// Custom hook for handling loading state
export const useLoading = (initialState: boolean) => {
  const [loading, setLoading] = useState<boolean>(initialState)

  // Function to check if all images are loaded
  const checkAllImagesLoaded = (imageUrls: string[]) => {
    const images: HTMLImageElement[] = imageUrls.map((url) => {
      const img = new Image()
      img.src = url
      return img
    })

    let loadedImagesCount = 0

    const onLoad = () => {
      loadedImagesCount++
      if (loadedImagesCount === images.length) {
        setLoading(false)
      }
    }

    images.forEach((img) => {
      img.onload = onLoad
      img.onerror = onLoad
    })
  }

  return {
    loading,
    setLoading,
    checkAllImagesLoaded,
  }
}
