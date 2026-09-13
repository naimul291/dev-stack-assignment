import { use, type Dispatch, type SetStateAction } from "react";
import type { iTechnology } from "../Type/Technologies";
import { IoIosStar} from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

interface iTechnologyProps {
    technologiesPromise: Promise<iTechnology[]>;
    cart: iTechnology[];
    setCart: Dispatch<SetStateAction<iTechnology[]>>;
}

    const Technologies = ({technologiesPromise, cart, setCart,}: iTechnologyProps) => {

    const data = use(technologiesPromise);
    const handleAddToCart = (technology: iTechnology) => {


        const addedToCart = cart.filter(
            (item) => item.id === technology.id
        ).length > 0;

        if (addedToCart) {
            return;
        }

        setCart((PreviousCart) => [...PreviousCart, technology,]);

        toast.success(`${technology.name} added to stack`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
            });
        };

        const handleRemoveFromStack = (id: number) => {
            const technology = cart.filter(
                (item) => item.id === id
            )[0];
            setCart((PreviousCart) =>PreviousCart.filter((item) => item.id !== id)
                );
                    toast.warn(`${technology.name} Removed from stack`, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
            });
        };
        
        const handleRemoveAllFromStack = () => {
            setCart([]);
        };

    return (
        <div className="container mx-auto">

            <h1 className="text-4xl font-bold my-5 text-center md:text-left">Explore the{" "}<span className="text-[#D91B7E]">Technologies</span></h1>

            <p className="pb-5 text-[#64748B] text-center md:text-left">Pick one technology per category to build your ideal stack.</p>


            <div className="grid grid-cols-12 gap-5">

                {/*All Technologies Section  */}
                <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {data.map((technology) => {
                            const isAdded = cart.filter(
                            (item) => item.id === technology.id
                            ).length > 0;

                        return (
                            <div key={technology.id} className="border border-gray-100 rounded-xl p-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.30)] transition-all duration-300">

                                <div className="flex items-start justify-between">

                                    {/* Technology Icon */}
                                    <img src={technology.icon} alt={technology.name} className="w-7 h-7 object-contain"/>

                                    {/* Badge */}
                                    {technology.badge && (
                                        <span className="bg-sky-50 text-sky-500 text-[9px] font-medium px-2.5 py-1 rounded-full">
                                            {technology.badge}
                                        </span>
                                    )}

                                </div>
                                
                                {/* Technology Name */}
                                <h4 className="text-[15px] text-gray-900 mt-3 font-bold">{technology.name}</h4>

                                {/* Technology Description */}
                                <p className="text-[11px] leading-4 text-gray-600 mt-2 min-h-[32px]">{technology.description}</p>

                                <div className="flex items-center justify-between mt-4">

                                    {/* Technology Category and  Level*/}
                                    <div className="flex items-center gap-2">
                                        <span className="bg-gray-100 text-black text-[8px] px-2 py-1 rounded">
                                            {technology.category}
                                        </span>
                                        <span className="text-gray-500 text-[10px]">
                                            {technology.level}
                                        </span>
                                    </div>

                                    {/* Technology Rating */}
                                    <div className="flex items-center gap-1"> 

                                        <span className="text-yellow-500 text-[13px]">
                                            <IoIosStar />
                                        </span>
                                        <span className="text-gray-600 text-[11px] font-medium">
                                            {technology.rating}
                                        </span>

                                    </div>

                                </div>

                                {/* Technology Add to Stack Button */}
                                <button type="button" onClick={() => handleAddToCart(technology)} 
                                className={`w-full text-[10px] font-medium py-2.5 rounded-md mt-3 transition duration-200 ${isAdded ? "bg-gray-200 text-gray-500 cursor-default" : "bg-gray-950 text-white cursor-pointer hover:bg-[#D91B7E]"}`}>{isAdded ? "Added to Stack" : "Add to Stack"}
                                </button>
                            </div>
                        );
                    })}

                </div>

                {/* Your Stack Section  */}
                <div className="col-span-12 lg:col-span-3">

                    <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">

                        <h3 className="font-bold text-xl text-black">Your Stack</h3>

                        <p className="text-sm text-gray-400 mt-2">
                            {cart.length === 0 ? "No technologies selected yet." : `${cart.length} technologies selected`}
                        </p>

                        {cart.length === 0 ? (

                            <div className="mt-5 min-h-[126px] border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center">
                                <p className="text-sm text-slate-400">Your stack is empty.</p>
                            </div>

                        ) : (

                            <div>

                                {/* Selected Technologies */}
                                <div className="mt-5 space-y-3">
                                    
                                    {cart.map((technology) => (
                                        <div key={technology.id}className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                                            <div className="flex items-center gap-3">

                                                {/* Technology Icon */}
                                                <img src={technology.icon} alt={technology.name} className="w-8 h-8 object-contain"/>

                                                {/* Technology Name and Category */}
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-900">{technology.name}</h4>
                                                    <p className="text-[10px] text-gray-400">{technology.category}</p>
                                                </div>

                                            </div>

                                            {/* Remove Single Technology */}
                                            <button type="button" onClick={() => handleRemoveFromStack(technology.id)}
                                                className="text-gray-400 hover:text-red-500 cursor-pointer transition duration-200">
                                                <RxCross2 size={18} />
                                            </button>

                                        </div>

                                    ))}

                                </div>

                                {/* Remove All Technology Button */}
                                <button type="button" onClick={handleRemoveAllFromStack}
                                    className="w-full mt-4 py-2.5 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition duration-200">
                                    Remove All
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Technologies;