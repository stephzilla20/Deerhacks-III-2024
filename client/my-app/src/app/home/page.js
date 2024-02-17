'use client'
import {React, useCallback} from 'react';
import { useDropzone } from 'react-dropzone'

function Home(){


  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Upload Your PDF</h1>
      <div {...getRootProps()} className="max-w-md w-full">
        <input {...getInputProps()} />
        <div className={`bg-white border rounded-lg shadow-md p-8 ${isDragActive ? 'border-green-400' : 'border-gray-300'}`}>
          <div className="flex justify-center items-center h-64 border-dashed border-2 border-gray-300 rounded-lg">
            <svg
              className={`w-8 h-8 ${isDragActive ? 'text-green-400' : 'text-gray-400'} mr-2`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h6l2-3h5a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
            </svg>
            <span className={isDragActive ? 'text-green-400' : 'text-gray-400'}>{isDragActive ? 'Drop your PDF here' : 'Drop your PDF here'}</span>
          </div>
          <p className="text-sm text-gray-400 mt-4">Or click to select a file</p>
        </div>
      </div>
    </div>
  );
};




export default Home;
