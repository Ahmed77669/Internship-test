'use client'
import React, { useState } from 'react';
import Cropper, { PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageUploader = () => {
  // Crop state with 'px' units since 'PixelCrop' does not support '%'
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<PixelCrop>({
    unit: 'px', // 'px' is required for PixelCrop
    x: 0,
    y: 0,
    width: 300,
    height: 300,
  });
  const [aspect, setAspect] = useState<number>(1); // Track aspect ratio separately
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

  const onImageSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Set the selected image
    }
  };

  const onCropComplete = (crop: PixelCrop) => {
    if (selectedImage && crop.width && crop.height) {
      const croppedImageUrl = getCroppedImage(selectedImage, crop);
      setCroppedImageUrl(croppedImageUrl); // Save the cropped image URL
    }
  };

  const getCroppedImage = (imageSrc: string, crop: PixelCrop): string => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.src = imageSrc;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return canvas.toDataURL('image/jpeg');
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="w-[60%]">
          <input type="file" accept="image/*" onChange={onImageSelected} />

          {selectedImage && (
            <Cropper
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={onCropComplete}
              aspect={aspect} // Set aspect ratio here if needed
              style={{ width: '100%', height: '300px', marginBottom: '24px' }}
            >
              <img
                src={selectedImage}
                alt="Profile Avatar"
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </Cropper>
          )}

          {croppedImageUrl && (
            <>
              <h3>Cropped Image:</h3>
              <img
                src={croppedImageUrl}
                alt="Cropped Image"
                style={{
                  width: '300px',
                  height: '300px',
                  marginBottom: '24px',
                  borderRadius: '300px',
                  objectFit: 'cover',
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
