"use client"
import { useState } from "react";
import CustomInput from "../Components/CustomInput";
import CustomTextArea from "../Components/CustomTextArea";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/ProgressBar";
import CustomCheckBox from "../Components/CustomCheckBox";
import { useRouter } from "next/navigation";

const contactInputs = [
    {
        label: 'Name of Primary Contact',
        placeholder: 'Rita',
        type: 'text',

    },
    {
        label: 'Position of Primary Contact',
        placeholder: 'Jane'
    },
    {
        label: 'Primary Contacts Phone Number',
        placeholder: 'Rich'
    },
    {
        label: 'Primary Contacts Email Address',
        placeholder: 'Between 18-65'
    },
    {
        label: 'Facility Emergency Contact',
        placeholder: '0808080808'
    },
]

const operationInputs = [
    {
        label: 'Facility Operation Days',
        placeholder: '0808080808'
    },
    {
        label: 'Facility Operation Hours',
        placeholder: '0808080808'
    },
    {
        label: 'Blood Donation Services',
        placeholder: '0808080808'
    },
    {
        label: 'Blood Storage Capacity',
        placeholder: '0808080808'
    },
    {
        label: 'Patient Capacity',
        placeholder: '0808080808'
    },
    {
        label: 'Special Requirements or Notes',
        placeholder: '0808080808',
        textarea: true
    },
]

const accreditationInputs = [
    {
        label: 'Accreditation Body',
        placeholder: '0808080808',
    },
    {
        label: 'Accreditation Number',
        placeholder: '0808080808',
    },
    {
        label: 'Upload Certificate Image',
        placeholder: 'Upload Image',
        type: "file"
    },
]

const consentInputs = [
    {
        label: 'I confirm that all information provided is accurate and complete',
        // placeholder: '0808080808',
        tick: true
    },
    {
        label: 'I agree to be contacted for blood donation',
        // placeholder: '0808080808',
        tick: true
    },
]

export default function CompleteProfile() {
    const [screen, setScreen] = useState(1)
    const router = useRouter()

    const nextStep = () => {
        if (screen < 4){
        setScreen(screen + 1)
        }
    }

    const previousStep = () => {
        if (screen > 1){
        setScreen(screen - 1)
        }
    }

    const complete = () => {
        router.push('/dashboard')
    }
    return (
        <div>
            <Navbar />
            <div className="pt-32 pl-4 pr-4 md:pl-8 md:pr-8 lg:pr-16 lg:pl-16">
                <div>
                    <h1 className="text-lg md:text-3xl">Welcome, Please complete your profile</h1>
                    <p className="text-sm md:text-base text-[#6B6B6B]">Complete your profile to streamline your blood requets, manage inventory, and connect with a networkof qualified blood donors.</p>
                </div>
                <div className="mt-12 mb-12">
                    <ProgressBar screen={screen} />
                    {/* <p className="text-white"><span></span>Testing</p>
                    <p className="text-white">Testing</p>
                    <p className="text-white">Testing</p>
                    <p className="text-white">Testing</p> */}
                </div>
                <div className="max-w-96 grid gap-5 mb-5">
                    {screen == 1 ? contactInputs.map((input) => (
                        <CustomInput label={input.label} placeholder={input.placeholder} />
                    ))
                    : screen == 2 ? operationInputs.map((input) => (
                        input.textarea ? <CustomTextArea label={input.label} placeholder={input.placeholder} /> : <CustomInput label={input.label} placeholder={input.placeholder} />
                    ))
                    : screen == 3 ? accreditationInputs.map((input) => (
                        <CustomInput label={input.label} placeholder={input.placeholder} type={input.type} />
                    ))
                    : consentInputs.map((input) => (
                        <CustomCheckBox label={input.label} />
                    ))}
                </div>
                <div className="md:self-start flex gap-8 mb-10">
                <div onClick={previousStep} className="bg-[#FAEEEC] flex-1 md:flex-none pt-2 pb-2 pl-4 pr-4 cursor-pointer">
                        <p className="text-[#992A15] text-xs md:text-base text-center">Back</p>
                    </div>
                    <div onClick={screen == 4 ? complete : nextStep} className="bg-[#992A15] flex-1 md:flex-none pt-2 pb-2 pl-4 pr-4 cursor-pointer">
                        <p className="text-white text-xs md:text-base text-center">{screen == 4 ? 'Complete Profile' : 'Next'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}