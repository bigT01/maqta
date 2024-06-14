import {IoIosArrowForward} from "react-icons/io";
import {IoExit, IoInformationCircleOutline} from "react-icons/io5";

const Profile = () => {
    return (
        <div>
            <div className="w-[90%] mx-auto pt-4 flex justify-between items-center mb-10">
                <button className='w-[48px] h-[48px] justify-center items-center shadow-2xl bg-white rounded-xl flex'>
                    <IoInformationCircleOutline size={24}/>
                </button>
                <h5 className='font-bold text-xl'>+7 700 777 76 78</h5>
                <button className='w-[48px] h-[48px] justify-center items-center shadow-2xl bg-white rounded-xl flex'>
                    <IoExit size={24}/>
                </button>
            </div>
            <div className="w-[90%] mx-auto">
                <p className='mb-2 text-sm '>Выберите город</p>
                <div className='flex justify-between w-full bg-white items-center py-2 rounded-xl px-4 mb-24'>
                    <p>Астана</p>
                    <button><IoIosArrowForward /></button>
                </div>
                <div className='w-full flex justify-center'>
                    <button className='bg-red-700 text-white rounded-xl py-2 px-4 mx-auto'>удалить аккаунт</button>
                </div>

            </div>
        </div>
    );
};

export default Profile;