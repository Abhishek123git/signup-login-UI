import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill, RiInformation2Line } from "react-icons/ri";
import Components from "../components/ModelPopup";
const SignupForm = () => {
    const [accepted, setAccepted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm();

    const submit = (e) => {
        if (!accepted) {
            alert("You must accept the terms and conditions.");
            return;
        }
        else {
            alert("form is submitted");
        }
    };

    return (
        <>
            <form className="flex flex-col gap-4 my-4 w-full" onSubmit={handleSubmit(submit)}>
                <div className="relative">
                    <input id="email" type="email" placeholder="Email" autoComplete="off" className={`w-full h-11 p-2 border bg-transparent rounded-xl placeholder-gray-400 focus:outline-none ${errors?.email ? "border-[#e55039]" : "border-gray-500"} `} {...register("email", { required: true, maxLength: { value: 30, message: "Email must be less than 30 characters" }, validate: (value) => /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com)$/.test(value) || "Please enter a valid email address (gmail.com or outlook.com only)" })} />
                    {touchedFields.email && (<span className="absolute inset-y-0 right-0 flex items-center pr-3">{errors.email ? (<RiErrorWarningFill className="w-[1.2rem] h-auto text-[#e55039]" />) : (<FaCircleCheck className="w-[1.2rem] h-auto text-[#009432]" />)}</span>)}
                </div>
                <div className="relative flex flex-col">
                    <input id="password" type="text" placeholder="Create a password" autoComplete="off" className={`w-full h-11 p-2 border bg-transparent rounded-xl placeholder-gray-400 focus:outline-none ${errors?.password ? "border-[#e55039]" : "border-gray-500"} `} {...register("password", { required: true, maxLength: { value: 8, message: "Password must be alpha-numeric and symbols" }, validate: (value) => /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com)$/.test(value) || "Please enter a valid email address (gmail.com or outlook.com only)" })} />
                    {touchedFields.password && (<span className="absolute top-[-4.5rem] bottom-1 right-0 flex items-center pr-3">{errors.password ? (<RiErrorWarningFill className="w-[1.2rem] h-auto text-[#e55039]" />) : (<FaCircleCheck className="w-[1.2rem] h-auto text-[#009432]" />)}</span>)}
                    <small className="mx-2 my-1 text-gray-500">Use 8 or more letters, numbers and symbols</small>
                    <button className="flex items-center justify-center font-semibold mx-2 my-1 p-2 rounded-xl w-40 hover:bg-gray-300" onClick={() => setIsOpen(true)}>Password tips <RiInformation2Line className="ml-1 font-normal" /></button>
                </div>

                <div className="flex items-center space-x-2">
                    <input id="accept" type="checkbox" className="w-4 h-4 accent-blue-600" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
                    <label htmlFor="accept" className="text-sm text-gray-700">I accepted all tearms and conditions.</label>
                </div>


                <button type="submit" className="bg-blue-500 text-black font-semibold rounded-xl p-2 mt-4 hover:bg-blue-600">Submit</button>
            </form>
            <Components.PasswordTips isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default SignupForm;