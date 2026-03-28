import { useState } from "react";
import { AiTwotoneCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";

function ResetPassword({ isOpen, onClose }) {
    const [isVisiblebtn, setIsVisisblebtn] = useState(false);
    const [value, setValue] = useState("");


    function checkInputField(e) {     
        e.preventDefault(); // stops navigation   
        setValue("");            // clear the input
        setIsVisisblebtn(false);  // hide the button
    }

    function validateInput(e){
        const val = e.target.value;
        setValue(val);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsVisisblebtn(emailRegex.test(val));

    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative flex flex-col justify-center items-center bg-white p-4 rounded-lg w-full max-w-xl h-auto">
                <p className="text-2xl font-bold font-openSans">{isVisiblebtn ? "Let's find your account" : "Reset your password"}</p>
                <p className="text-sm font-semibold font-openSans mt-2 text-center">What's your email or username?</p>
                <form className="relative flex flex-col my-4 w-3/4 h-auto">
                    <input type="email" placeholder="Search" className="w-full h-10 p-2 border border-gray-500 bg-transparent rounded-xl placeholder-gray-400 focus:outline-none" value={value}  onChange={(e) => validateInput(e) } />
                    <button  className={`absolute right-0 flex items-center pr-3 ${isVisiblebtn ? "top-[-71px] bottom-0" : "inset-y-0"}`} onClick={checkInputField}><AiOutlineCloseCircle className="w-[1.2rem] h-auto" /></button>
                    {isVisiblebtn && (<button className="flex justify-center h-auto text-white cursor-pointer my-4 p-2 rounded-lg bg-red-600 hover:bg-[#4cd137]">Send a password reset email</button>)}
                </form>
                <AiTwotoneCloseCircle className="absolute top-2 right-2 cursor-pointer w-7 h-auto" onClick={onClose} />
            </div>
        </div>
    );
}

function UpdateLoginMethod({ isOpen, onClose }) {
    
    const [isVisiblebtn, setIsVisisblebtn] = useState(false);
    const [value, setValue] = useState("");
    
    
    function checkInputField(e) {     
        e.preventDefault(); // stops navigation   
        setValue("");            // clear the input
        setIsVisisblebtn(false);  // hide the button
    }
    
    function validateInput(e){
        const val = e.target.value;
        setValue(val);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsVisisblebtn(emailRegex.test(val));
        
    }
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative flex flex-col justify-center items-center bg-white p-4 rounded-lg w-full max-w-xl h-auto">
                <p className="text-2xl font-bold font-openSans">Update your login method</p>
                <p className="text-sm font-semibold font-openSans mt-2 text-center">You'll need to recover your account.</p>
                <form className="relative flex flex-col my-4 w-3/4 h-auto">
                    <input type="email" placeholder="Search for your email or username" className="w-full h-10 p-2 border border-gray-500 bg-transparent rounded-xl placeholder-gray-400 focus:outline-none" value={value}  onChange={(e) => validateInput(e) } />
                    <button  className={`absolute right-0 flex items-center pr-3 ${isVisiblebtn ? "top-[-71px] bottom-0" : "inset-y-0"}`} onClick={checkInputField}><AiOutlineCloseCircle className="w-[1.2rem] h-auto" /></button>
                    {isVisiblebtn && (<button className="flex justify-center h-auto text-white cursor-pointer my-4 p-2 rounded-lg bg-red-600 hover:bg-[#4cd137]">Update</button>)}
                </form>
                <AiTwotoneCloseCircle className="absolute top-2 right-2 cursor-pointer w-7 h-auto" onClick={onClose} />
            </div>
        </div>
    );
}

function PasswordTips({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative flex flex-col justify-center bg-white p-4 rounded-lg w-full max-w-3xl h-auto">
                <p className="mb-2 font-bold text-xl">Password tips</p>
                <p className="my-2 p-2">A strong password helps keep your account safe. Use at least 8 letters, numbers and symbols.</p>

                <p className="mb-2 font-bold text-xl">What to avoid</p>
                <ol className="my-2 mx-8 list-disc">
                    <li className="py-2">Common passwords, words and names</li>
                    <li className="py-2">Recent dates or dates associated with you</li>
                    <li className="py-2">Simple patterns and repeated text</li>
                </ol>
                <AiTwotoneCloseCircle className="absolute top-2 right-2 cursor-pointer w-7 h-auto" onClick={onClose} />
            </div>
        </div>
    );
}

function QrLogin({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative flex flex-col items-center bg-white p-4 rounded-3xl w-full max-w-lg h-auto">
                <img src={`${process.env.PUBLIC_URL}/assets/brandlog.webp`} alt="brandlogo" loading="lazy" />
                <p className="mb-2 font-bold text-3xl">Scan with your phone</p>
                <ol className="flex flex-col items-center text-lg my-2 mx-8 list-decimal">
                    <li className="py-2">Log in to the app on your phone</li>
                    <li className="py-2">Scan the QR code with QR scanner</li>
                    <li className="py-2">Confirm login in the mobile app</li>
                </ol>
                <img src={`${process.env.PUBLIC_URL}/assets/qr-code.webp`} alt="qr" loading="lazy" />
                <AiTwotoneCloseCircle className="absolute top-2 right-2 cursor-pointer w-7 h-auto" onClick={onClose} />
            </div>
        </div>
    );
}

export default { ResetPassword, UpdateLoginMethod, PasswordTips, QrLogin };