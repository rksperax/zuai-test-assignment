"use client";

import Image from "next/image";
import { ChangeEvent, DragEvent, useRef, useState } from "react";

const FileDropZone = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleDragEnter = () => {
        setIsDragging(true);
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event?.preventDefault();
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files[0]) {
            const fileUrl = URL.createObjectURL(files[0]);

            setFilePreview(fileUrl);
        }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        setIsDragging(false);

        const files = event.dataTransfer.files;

        if (files && files.length && fileInputRef.current) {
            const dataTransfer = new DataTransfer();

            dataTransfer.items.add(files[0]);

            fileInputRef.current.files = dataTransfer.files;

            const fileUrl = URL.createObjectURL(files[0]);

            setFilePreview(fileUrl);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`w-full h-[200px] flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl overflow-hidden svg-dashed-border ${isDragging ? "" : ""}`} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <input accept="application/pdf,.pdf" multiple={false} type="file" tabIndex={-1} ref={fileInputRef} className="hidden" onChange={handleFileInputChange} />

            {
                filePreview
                    ?
                    <></>
                    :
                    <div role="presentation" tabIndex={0}>
                        <div className="flex flex-col items-center justify-center gap-[20px]">
                            <div className="flex flex-col items-center justify-center gap-[9px]">
                                <Image src="../file.svg" alt="File Logo" width={38} height={48} priority={true} />

                                <div className="text-center">
                                    <p className="text-base font-['Mont-Bold'] font-bold text-neutrals-600 ">
                                        Drag and drop a PDF
                                    </p>
                                    <p className="text-xs font-['Mont-SemiBold'] font-semibold text-neutrals-600">
                                        *Limit 25 MB per file.
                                    </p>
                                </div>
                            </div>

                            <button type="button" className="w-[173px] font-['Mont-ExtraBold'] cursor-pointer rounded-2xl border border-neutrals-200 px-3 py-2 text-center text-[15px] font-extrabold text-brand-primary shadow-[0_2px_12px_0_rgba(0,0,0,0.06)]" onClick={handleUploadClick}>
                                Upload your file
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default FileDropZone;