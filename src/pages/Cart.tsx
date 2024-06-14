import HistoryCart from "../components/card/HistoryCart.tsx";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import Timer from "../components/timer";
import {useEffect, useState} from "react";
import {useStore} from "../store/useStore.ts";

const Cart = () => {
    const CurrentCart = useStore(state => state.CurrentCart)
    const [sec, setSec] = useState(100)

    useEffect(() => {
        console.log(CurrentCart.getTime)
    }, []);
    return (
        <div className={'w-full'}>
            <div className="w-[90%] mx-auto mb-10 pt-8">
                <h5 className={'mb-5 font-semibold text-2xl'}>Текущая покупка</h5>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center w-full justify-between'>
                        <div className='flex gap-2 items-center justify-between'>
                            <div className='w-[64px] h-[64px] rounded-full bg-gray-500'></div>
                            <div className='flex flex-col gap-y-0.5'>
                                <h5 className='font-semibold text-lg'>tap tatti</h5>
                                <Timer render={(second: any) => setSec(second.second)}/>
                                <p className={'text-[#32976C] font-bold'}>₸ 1500</p>
                            </div>
                        </div>
                        <Link to={'/'}><IoIosArrowForward size={32}/></Link>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto pb-28">
                <h5 className={'mb-5 font-semibold text-2xl'}>История покупок</h5>
                <div className='flex flex-col gap-6'>
                    <HistoryCart/>
                </div>
            </div>
        </div>
    );
};

export default Cart;