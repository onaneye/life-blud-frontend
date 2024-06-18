'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ProgressBar({ screen }) {
    const [progressContent, setProgressContent] = React.useState(false);
    const pathname = usePathname()
    const router = useRouter();
    React.useEffect(() => {
        if (pathname === '/complete-profile-medical-facility') {
            setProgressContent(true);
        }
    }, [pathname]);

    return (
        <div className="relative flex max-w-full justify-between">
            <div className="md:mt-8 relative">
                <p className="relative z-50 text-nowrap">
                    <span className="bg-[#F5EAE8] md:absolute bottom-full left-1/4 w-7 h-7 rounded-2xl grid items-center justify-center">
                        <span className={`bg-transparent w-6 h-6 rounded-xl border-[1.5px] ${screen < 1 ? 'border-[#FDF6F4]' : 'border-[#8B2613]'} items-center justify-center grid`}>
                            {screen <= 1 ? (
                                <span className={`w-2 h-2 ${screen < 1 ? 'bg-[#FDF6F4]' : 'bg-[#8B2613]'} rounded`}></span>
                            ) : (
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.096 0.390159L3.93602 7.30016L2.03602 5.27016C1.68602 4.94016 1.13602 4.92016 0.736015 5.20016C0.346015 5.49016 0.236015 6.00016 0.476015 6.41016L2.72602 10.0702C2.94602 10.4102 3.32601 10.6202 3.75601 10.6202C4.16601 10.6202 4.55602 10.4102 4.77602 10.0702C5.13602 9.60016 12.006 1.41016 12.006 1.41016C12.906 0.490159 11.816 -0.31984 11.096 0.38016V0.390159Z" fill="#8B2613"/>
                                </svg>
                            )}
                        </span>
                    </span>
                    <span className="md:block hidden text-sm lg:text-base">{progressContent ? 'Contact Information' : 'Your details'}</span>
                </p>
            </div>

            <div className={`md:mt-8 relative before:content-[''] before:z-30 before:absolute before:md:w-[22vw] before:w-[30vw] before:h-1 ${screen >= 2 ? 'before:bg-[#8B2613]' : 'before:bg-[#E8E8E8]'} before:top-[14px] before:md:-top-[14px] before:right-2/4`}>
                <p className="relative z-50 text-nowrap">
                    <span className="bg-[#F5EAE8] md:absolute bottom-full left-[37.5%] w-7 h-7 rounded-2xl grid items-center justify-center">
                        <span className={`bg-transparent w-6 h-6 rounded-xl border-[1.5px] ${screen < 2 ? 'border-[#FDF6F4]' : 'border-[#8B2613]'} items-center justify-center grid`}>
                            {screen <= 2 ? (
                                <span className={`w-2 h-2 ${screen < 2 ? 'bg-[#FDF6F4]' : 'bg-[#8B2613]'} rounded`}></span>
                            ) : (
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.096 0.390159L3.93602 7.30016L2.03602 5.27016C1.68602 4.94016 1.13602 4.92016 0.736015 5.20016C0.346015 5.49016 0.236015 6.00016 0.476015 6.41016L2.72602 10.0702C2.94602 10.4102 3.32601 10.6202 3.75601 10.6202C4.16601 10.6202 4.55602 10.4102 4.77602 10.0702C5.13602 9.60016 12.006 1.41016 12.006 1.41016C12.906 0.490159 11.816 -0.31984 11.096 0.38016V0.390159Z" fill="#8B2613"/>
                                </svg>
                            )}
                        </span>
                    </span>
                    <span className="md:block hidden text-sm lg:text-base">{progressContent ? 'Operation Details': 'Health info'}</span>
                </p>
            </div>

            <div className={`md:mt-8 relative before:content-[''] before:z-20 before:absolute before:md:w-[30vw] before:w-[30vw] before:h-1 ${screen >= 3 ? 'before:bg-[#8B2613]' : 'before:bg-[#E8E8E8]'} before:top-[14px] before:md:-top-[14px] before:right-2/4`}>
                <p className="relative text-nowrap z-50">
                    <span className="bg-[#F5EAE8] md:absolute bottom-full left-[37.5%] w-7 h-7 rounded-2xl grid items-center justify-center">
                        <span className={`bg-transparent w-6 h-6 rounded-xl border-[1.5px] ${screen < 3 ? 'border-[#FDF6F4]' : 'border-[#8B2613]'} items-center justify-center grid`}>
                            {screen <= 3 ? (
                                <span className={`w-2 h-2 ${screen < 3 ? 'bg-[#FDF6F4]' : 'bg-[#8B2613]'} rounded`}></span>
                            ) : (
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.096 0.390159L3.93602 7.30016L2.03602 5.27016C1.68602 4.94016 1.13602 4.92016 0.736015 5.20016C0.346015 5.49016 0.236015 6.00016 0.476015 6.41016L2.72602 10.0702C2.94602 10.4102 3.32601 10.6202 3.75601 10.6202C4.16601 10.6202 4.55602 10.4102 4.77602 10.0702C5.13602 9.60016 12.006 1.41016 12.006 1.41016C12.906 0.490159 11.816 -0.31984 11.096 0.38016V0.390159Z" fill="#8B2613"/>
                                </svg>
                            )}
                        </span>
                    </span>
                    <span className="md:block hidden text-sm lg:text-base">{progressContent ? 'Certificate and Accreditation': 'lifestyle Info'}</span>
                </p>
            </div>
            { progressContent ? "" : (
            <div className={`md:mt-8 relative before:content-[''] before:absolute before:md:w-[30vw] before:w-[30vw] before:h-1 ${screen >= 4 ? 'before:bg-[#8B2613]' : 'before:bg-[#E8E8E8]'} before:top-[14px] before:md:-top-[14px] before:right-2/4`}>
                <p className="relative text-nowrap z-50">
                    <span className="bg-[#F5EAE8] md:absolute bottom-full left-2/4 w-7 h-7 rounded-2xl grid items-center justify-center">
                        <span className={`bg-transparent w-6 h-6 rounded-xl border-[1.5px] ${screen < 4 ? 'border-[#FDF6F4]' : 'border-[#8B2613]'} items-center justify-center grid`}>
                            {screen <= 4 ? (
                                <span className={`w-2 h-2 ${screen < 4 ? 'bg-[#FDF6F4]' : 'bg-[#8B2613]'} rounded`}></span>
                            ) : (
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.096 0.390159L3.93602 7.30016L2.03602 5.27016C1.68602 4.94016 1.13602 4.92016 0.736015 5.20016C0.346015 5.49016 0.236015 6.00016 0.476015 6.41016L2.72602 10.0702C2.94602 10.4102 3.32601 10.6202 3.75601 10.6202C4.16601 10.6202 4.55602 10.4102 4.77602 10.0702C5.13602 9.60016 12.006 1.41016 12.006 1.41016C12.906 0.490159 11.816 -0.31984 11.096 0.38016V0.390159Z" fill="#8B2613"/>
                                </svg>
                            )}
                        </span>
                    </span>
                    <span className="md:block hidden text-sm lg:text-base">Blood Donation and History</span>
                </p>
            </div>)}
            <div className={`md:mt-8 relative before:content-[''] before:absolute before:md:w-[30vw] before:w-[30vw] before:h-1 ${screen >= 4 ? 'before:bg-[#8B2613]' : 'before:bg-[#E8E8E8]'} before:top-[14px] before:md:-top-[14px] before:right-2/4`}>
                <p className="relative text-nowrap z-50">
                    <span className="bg-[#F5EAE8] md:absolute bottom-full left-2/4 w-7 h-7 rounded-2xl grid items-center justify-center">
                        <span className={`bg-transparent w-6 h-6 rounded-xl border-[1.5px] ${screen < 4 ? 'border-[#FDF6F4]' : 'border-[#8B2613]'} items-center justify-center grid`}>
                            {screen <= 4 ? (
                                <span className={`w-2 h-2 ${screen < 4 ? 'bg-[#FDF6F4]' : 'bg-[#8B2613]'} rounded`}></span>
                            ) : (
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.096 0.390159L3.93602 7.30016L2.03602 5.27016C1.68602 4.94016 1.13602 4.92016 0.736015 5.20016C0.346015 5.49016 0.236015 6.00016 0.476015 6.41016L2.72602 10.0702C2.94602 10.4102 3.32601 10.6202 3.75601 10.6202C4.16601 10.6202 4.55602 10.4102 4.77602 10.0702C5.13602 9.60016 12.006 1.41016 12.006 1.41016C12.906 0.490159 11.816 -0.31984 11.096 0.38016V0.390159Z" fill="#8B2613"/>
                                </svg>
                            )}
                        </span>
                    </span>
                    <span className="md:block hidden text-sm lg:text-base">Consent and Confirmation</span>
                </p>
            </div>
        </div>
    );
}
