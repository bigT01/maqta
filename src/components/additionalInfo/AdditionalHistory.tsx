import {IoIosArrowBack} from "react-icons/io";
import {IoInformationCircleOutline} from "react-icons/io5";

type AdditionalHistoryProps = {
    isAnimation: boolean,
    setIsAnimation: ((isAnimation: boolean) => void),
    setIsClose: ((isClose: boolean) => void),
}
const AdditionalHistory = ({isAnimation, setIsAnimation, setIsClose}: AdditionalHistoryProps) => {
    return (
        <div
            className={`fixed z-50 bg-gray-200 top-0 left-0 w-full h-screen overflow-y-hidden ${isAnimation ? 'fade-in-Left' : 'fade-in-right'}`}>
            <div className="w-[90%] mx-auto pt-4 flex justify-between items-center mb-10">
                <button className='w-[48px] h-[48px] justify-center items-center shadow-2xl bg-white rounded-xl flex' onClick={() => {
                    setIsClose(true);
                    setIsAnimation(true)
                }}>
                    <IoIosArrowBack size={24}/>
                </button>
                <h5 className='font-bold text-xl'>История</h5>
                <button className='w-[48px] h-[48px] justify-center items-center shadow-2xl bg-white rounded-xl flex'>
                    <IoInformationCircleOutline size={24}/>
                </button>
            </div>
            <div className="shadow-2xl bg-white rounded-xl w-[90%] mx-auto py-4 px-2">
                <div className='flex gap-2 text-gray-700 mb-5'>
                    <div className='rounded-lg w-[86px] h-[86px] bg-gray-500'></div>
                    <div className='flex justify-between w-8/12'>
                        <div className='flex flex-col justify-between'>
                            <p className='text-lg mb-2'>Tap tatti</p>
                            <span className='text-sm'>Количество</span>
                            <span className='text-sm'>Цена</span>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p className='text-lg mb-2 text-end opacity-0'>Tap tatti</p>
                            <span className='text-sm text-end'>1</span>
                            <span className='text-sm text-end'>1500 ₸</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[2px] bg-gray-200 mb-5'>
                </div>
                <div className='flex justify-between mb-4 w-full text-gray-700'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-base'>Всего к оплате</p>
                        <p className='text-base'>Заказ создан</p>
                        <p className='text-base'>График работы</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='text-base text-end'>1500 ₸</p>
                        <p className='text-base text-end'>12 июня, 21:13</p>
                        <p className='text-base text-end'>С 08:00 до 23:59</p>
                    </div>
                </div>
                <p className='text-center text-gray-700 text-sm mb-4'>Заказ необходимо забрать сегодня до закрытия
                    заведения</p>
                <div className='w-full h-[2px] bg-gray-200 mb-5'>
                </div>
                <div className='flex justify-between w-full text-gray-700 mb-4'>
                    <div className='flex flex-col'>
                        <p className='text-xs'>Адрес</p>
                        <p>Проспект Туран 5/5</p>
                    </div>
                </div>
                <div className='w-full h-[2px] bg-gray-200 mb-5'>
                </div>
                <div className='flex justify-between w-full text-gray-700'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-base'>Номер заказа</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='text-base text-end'>MDVP2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalHistory;