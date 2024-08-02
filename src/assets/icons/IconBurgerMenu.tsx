export const IconBurgerMenu = () => {
    return (
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[35px] h-[35px] transform transition-all bg-[#2283DC] ring-0 ring-gray-300">
                <div
                    className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                        className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                    <div
                        className="bg-white h-[2px] w-7 transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                    <div
                        className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                    <div
                        className="absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                        <div
                            className="absolute bg-white h-[2px] w-4 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                        <div
                            className="absolute bg-white h-[2px] w-4 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                    </div>
                </div>
            </div>
    );
}