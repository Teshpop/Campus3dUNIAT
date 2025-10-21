const Welcome = () => {
    return(
        <>
            <div className="absolute w-full h-full top-0 left-0 flex justify-start items-center">
                <div className="w-[40%] h-[45%] bg-uniatBG flex justify-start items-center flex-col">
                    {/*
                    // Title
                    */}
                    <div className="flex items-center justify-center">
                        <h1 className="text-white text-[3.75rem] leading-15 font-bold uppercase text-center bg-black">
                            Bienvenido a
                            {/*Gradient*/}
                            {/*<span className="bg-gradient-to-r from-amber-500 to-slate-50 bg-clip-text text-transparent"> UNIAT</span>*/}

                            {/*Same tonality*/}
                            <br/>
                            <span className="text-[8.5rem] leading-22"> UNIAT</span>
                            <br/>
                            San Luis Potosí
                        </h1>
                    </div>

                    {/*
                    // Text
                    */}
                    <div className="flex items-center justify-center bg-blue-950">
                        <p className="text-white text-4xl">
                            El campus donde la imaginación se programa y los mundos se crean.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Welcome;