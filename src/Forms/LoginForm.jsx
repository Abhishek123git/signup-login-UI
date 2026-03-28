// import { useForm } from "react-hook-form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuRefreshCw } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { PiEyeClosedBold, PiEyeBold} from "react-icons/pi";
import Components from "../components/ModelPopup";

const LoginForm = () => {
    const [captcha, setCaptcha] = useState(generateUniqueCaptcha());
    const [isOpen, setIsOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({ mode: "all" });


    function generateUniqueCaptcha() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        return code;
    }

    const refreshCaptcha = (e) => {
        e.preventDefault(); // stops navigation
        setCaptcha(generateUniqueCaptcha()); // updates state, no page reload
    };

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };


    return (
        <>
            <form className="flex flex-col gap-4 my-2 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    <input id="Username" type="email" placeholder="Enter your email address" className={`w-full h-11 p-2 border bg-transparent rounded-xl placeholder-gray-400 focus:outline-none ${errors?.username ? "border-[#e55039]" : "border-gray-500"}`} {...register("username", { required: true, validate: (value) => /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com)$/.test(value) || "Please enter a valid email address (gmail.com or outlook.com only)" })} />
                    {touchedFields.username && (<span className={`absolute ${errors.username?.message ? "top-[-46px] bottom-0" : "inset-y-0"} right-0 flex items-center pr-3`}>{errors.username ? (<RiErrorWarningFill className="w-[1.2rem] h-auto text-[#e55039]" />) : (<FaCircleCheck className="w-[1.2rem] h-auto text-[#009432]" />)}</span>)}
                    {errors.username && (<small className="text-red-700 font-semibold">{errors.username.message}</small>)}
                </div>

                <div className="relative">
                    <input id="Password" type={isShow ? "text" : "password"} placeholder="Enter your password" autoComplete="off" className={`w-full h-11 p-2 border bg-transparent rounded-xl placeholder-gray-400 focus:outline-none ${errors?.password ? "border-[#e55039]" : "border-gray-500"}`} {...register("password", { required: true, validate: (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/.test(value) || "Invalid password, please try again" })} />
                    {touchedFields.password && (<span className={`absolute ${errors.password?.message ? "top-[-26px] bottom-0" : "inset-y-0"} right-0 flex items-center pr-3`}>{errors.password ? (<RiErrorWarningFill className="w-[1.2rem] h-auto text-[#e55039]" />) : isShow ? (<PiEyeBold className="w-[1.2rem] h-auto" onClick={() => setIsShow(false)} />) : (<PiEyeClosedBold className="w-[1.2rem] h-auto" onClick={() => setIsShow(true)} />)}</span>)}
                    {errors.password && (<small className="text-red-700 font-semibold">{errors.password.message}</small>)}
                </div>

                <div className="flex flex-row gap-4">
                    <p className="basis-1/3 h-20 text-3xl p-2 flex items-center justify-center bg-[#F8EFBA]">{captcha}</p>
                    <span className="flex "><button onClick={refreshCaptcha} ><LuRefreshCw /></button></span>
                </div>

                <div className="relative">
                    <input id="capture" type="text" placeholder="Enter above code as you see" autoComplete="off" className={`w-full h-11 p-2 border bg-transparent rounded-xl placeholder-gray-400 focus:outline-none ${errors?.capture ? "border-[#e55039]" : "border-gray-500"}`} {...register("capture", {required: true, validate: (value) => value === captcha || "Captcha not matched, try again"})}/>
                    {touchedFields.capture && (<span className={`absolute ${errors.capture?.message ? "top-[-46px] bottom-0" : "inset-y-0"} right-0 flex items-center pr-3`}>{errors.capture ? (<RiErrorWarningFill className="w-[1.2rem] h-auto text-[#e55039]" />) : (<FaCircleCheck className="w-[1.2rem] h-auto text-[#009432]" />)}</span>)}
                    {errors.capture && (<small className="text-red-700 font-semibold">{errors.capture.message}</small>)}
                </div>

                <button type="button" className="flex text-sm font-semibold text-sky-500" onClick={() => setIsOpen(true)}>Forgot your password ?</button>
                <button type="submit" className="bg-blue-500 text-white rounded-xl p-2 mt-4 hover:bg-blue-600">Login in</button>
            </form>
            <Components.ResetPassword isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default LoginForm;