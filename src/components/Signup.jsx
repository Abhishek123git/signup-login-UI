import { useState } from "react";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import Components from "../components/ModelPopup";
import { BsQrCodeScan } from "react-icons/bs";

const Signup = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAppLogin, setIsOpenAppLogin] = useState(false);

    return (
        <div className="w-screen h-screen my-4 flex items-center justify-center font-serif">
            <div className="w-full max-w-md shadow-2xl rounded-xl p-4">
                <div className="flex justify-center w-full h-auto ">
                    <img src={`${process.env.PUBLIC_URL}/assets/brandlog.webp`} width={65} height={65} alt="brandlogo" loading="lazy" />
                </div>
                <p className="text-2xl font-bold mb-4 text-center">{isLogin ? "Log in to see more" : "Sign Up"}</p>
                <p className="text-base text-center font-semibold">{isLogin ? "Hello! Please log in with your account details to continue." : "Hello! please tell us a little bit about youself."}</p>
                {isLogin ? <LoginForm /> : <SignupForm />}
                {isLogin ?
                    <p className="flex flex-col justify-center items-center gap-1 text-base"> OR
                        <button className="flex justify-between items-center w-2/3 h-auto p-2 my-3 border border-gray-400 rounded-md hover:bg-[#f1f2f6] ">
                            <BsQrCodeScan />
                            <span className="flex-1 text-center" onClick={() => setIsOpenAppLogin(true)}>Use QR code</span>
                        </button>
                    </p> : null
                }
                {isLogin && ( <button className="flex w-full justify-center my-2 text-xs font-semibold" onClick={() => setIsOpen(true)}> Update login method </button> )}
                <span className="flex justify-center items-center gap-1 text-xs font-semibold">{isLogin ? "Need an account ?" : "Already have an account ? "}
                    <button onClick={() => setIsLogin(!isLogin)} className="font-semibold underline underline-offset-2 hover:decoration-[#0652DD] hover:text-[#009432]">{isLogin ? "Register" : "Login"}</button>
                </span>
                <p className="text-sm text-gray-500 text-center my-2">By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection.</p>
            </div>
            {/* Model */}
            <Components.UpdateLoginMethod isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <Components.QrLogin isOpen={isOpenAppLogin} onClose={() => setIsOpenAppLogin(false)} />
        </div>
    );
};

export default Signup;