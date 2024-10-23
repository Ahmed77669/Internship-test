import React, { useState } from 'react';
import Cropper, { PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<PixelCrop>({
    unit: 'px',
    x: 0,
    y: 0,
    width: 300,
    height: 300,
  });
  const [aspect, setAspect] = useState<number>(1); // Track aspect ratio separately
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false); // To toggle the modal

  const onImageSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Set the selected image
      setShowModal(true); // Open the modal when an image is selected
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

  const handleSave = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="w-[60%]">
          <input type="file" accept="image/*" onChange={onImageSelected} />

          {/* Display the cropped image after saving */}
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

      {/* Modal for cropping */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Crop Your Image</h2>

            {selectedImage && (
              <Cropper
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                onComplete={onCropComplete}
                aspect={aspect}
                style={{ width: '100%', height: '300px', marginBottom: '24px' }}
              >
                <img
                  src={selectedImage}
                  alt="Profile Avatar"
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </Cropper>
            )}

            <button onClick={handleSave} className="btn-save">
              Save
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .btn-save {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default ImageUploader;
