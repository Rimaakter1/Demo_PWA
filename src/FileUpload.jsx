import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile && selectedFile.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewUrl(reader.result);
            reader.readAsDataURL(selectedFile);
        } else {
            setPreviewUrl('');
        }
    };

    const handleUpload = () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        console.log('Uploading file:', file.name);


        alert(`File "${file.name}" ready to be uploaded.`);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <h2>Upload a File</h2>
            <input type="file" onChange={handleChange} />
            {previewUrl && <img src={previewUrl} alt="Preview" style={{ marginTop: '10px', maxWidth: '100%' }} />}
            <button onClick={handleUpload} style={{ marginTop: '10px' }}>Upload</button>
        </div>
    );
};

export default FileUpload;
