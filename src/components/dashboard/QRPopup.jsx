import React from 'react';
import { Modal } from '@mui/material';
import { RxCross2 } from "react-icons/rx";
import Tooltip from '@mui/material/Tooltip';

const QRPopup = ({ qrOpen, setQrOpen, qrImageUrl }) => {
    return (
        <Modal
            open={qrOpen}
            onClose={() => setQrOpen(false)}
            aria-labelledby="qr-modal-title"
            aria-describedby="qr-modal-description"
        >
            <div className="flex justify-center items-center h-full w-full">
                <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] sm:w-[350px] flex flex-col items-center">
                    <h2 id="qr-modal-title" className="text-lg font-semibold text-gray-800 mb-4">
                        QR Code
                    </h2>

                    <img
                        src={qrImageUrl}
                        alt="QR Code"
                        className="w-[200px] h-[200px] mb-4 border border-gray-300 rounded-md"
                    />

                    <button
                        onClick={() => setQrOpen(false)}
                        className=" bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-semibold transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default QRPopup;
