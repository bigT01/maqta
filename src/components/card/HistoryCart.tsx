import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {useStore} from "../../store/useStore.ts";

const HistoryCart = () => {
    const SetIsPopUpHistory = useStore(state => state.SetIsPopUpHistory)
    return (
        <div className='flex items-center w-full justify-between' onClick={() => {SetIsPopUpHistory(true)}}>
            <div className='flex gap-2 items-center justify-between'>
                <div className='w-[64px] h-[64px] rounded-full bg-gray-500'></div>
                <div className='flex flex-col gap-y-0.5'>
                    <h5 className='font-semibold text-lg'>tap tatti</h5>
                    <p className={'font-light text-[#00000080]'}>вы забрали 15:00</p>
                    <p className={'text-[#32976C] font-bold'}>₸ 1500</p>
                </div>
            </div>
            <Link to={'/'}><IoIosArrowForward size={32}/></Link>
        </div>
    );
};

export default HistoryCart;