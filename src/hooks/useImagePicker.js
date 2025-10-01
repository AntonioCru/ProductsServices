import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { useCallback, useState } from 'react'

const useImagePicker = () => {
  const [image, setImage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const selectImage = useCallback(async () => {
    setErrorMessage(null)
    // Solicitar permisos de acceso a la galería
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      // console.log('Lo siento, necesitamos permisos para acceder a la galería.')
      setErrorMessage(
        'Lo siento, necesitamos permisos para acceder a la galería.',
      )
      return
    }

    //* Abrir el selector de imágenes
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    // Función para comprimir la imagen
    const compressImage = async (uri) => {
      try {
        const manipResult = await ImageManipulator.manipulateAsync(
          uri,
          [
            { resize: { width: 800 } }, // Ajustamos el tamaño de la imagen
          ],
          {
            compress: 0.1, // Establecemos la calidad de la compresión (70%)
            format: ImageManipulator.SaveFormat.JPEG, // Guardamos en formato JPEG
          },
        )

        return manipResult.uri
      } catch (error) {
        setErrorMessage('Error al comprimir la imagen.')
        return uri // Si falla, devolvemos la URI original
      }
    }

    //* Manejar la selección de la imagen
    if (!result.canceled) {
      const uri = result.assets[0].uri
      const fileInfo = await FileSystem.getInfoAsync(uri) //para ibtener el tamaño
      // Verificar el tamaño del archivo (1000 KB = 1,000,000 bytes)
      if (fileInfo.size > 1000000) {
        // console.log('La imagen no puede exceder 1000 KB.')
        setImage(null)
        setErrorMessage('La imagen no puede exceder 1 MB.')
        return
      }

      // Comprimir la imagen si es necesario
      const compressedUri = await compressImage(uri)

      setImage(compressedUri)
      setErrorMessage(null)
    }
  }, [])
  return [image, setImage, selectImage, errorMessage]
}

export default useImagePicker
