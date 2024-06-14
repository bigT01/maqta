import {useStore} from "../../store/useStore.ts";
import {FaRegStar} from "react-icons/fa";
import {RiShoppingBag4Line} from "react-icons/ri";


type cardProps = {
    img: string,
    name: string,
    logo: string,
    bags: number,
    id: string,
    numberFav: number,
    endSale: string,
    startSale: string,
    address: string,
    price: number,
}

const Card = ({img, id, bags, numberFav, name, logo, address, startSale, price, endSale}: cardProps) => {
    const setId = useStore(state => state.setId)
    const setIsPopUp = useStore(state => state.setIsPopUp)
    return (
        <div className='relative' onClick={() => {
            setIsPopUp(true)
            setId(id)
        }} id={id}>
            <div className='h-[144px] w-full relative'>
                <img className={'absolute left-0 top-0 rounded-t-2xl object-cover h-[144px] w-full'}
                     src={img}
                     alt="img:card"/>
                <div className="w-full h-full absolute left-0 top-0 bg-[#00000070] rounded-t-2xl"></div>
                <div className='flex gap-1 justify-end pt-2 pr-2 relative z-50 items-center'><span
                    className={'text-white text-[18px]'}>{numberFav}</span> <FaRegStar color={'#ffffff'} size={18}/>
                </div>
                <div className='flex gap-1 justify-end pt-16 pr-2 relative z-50 items-center'><span
                    className={'text-white text-[18px]'}>{bags}</span> <RiShoppingBag4Line color={'#ffffff'} size={18}/>
                </div>
            </div>

            <div className="absolute top-[120px] left-4">
                <svg width="49" height="32" viewBox="0 0 49 32" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="16" r="16" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 24C4.41828 24 8 20.4183 8 16C8 20.7788 10.095 25.0682 13.4167 28H0V24Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M48.5833 24C43.8428 24 39.9995 20.4206 39.997 16.0044C39.9956 20.7814 37.7473 25.0691 34.1833 28H48.5833V24Z"
                          fill="white"/>
                </svg>
                <img className={'absolute left-3 top-[4px] w-[24px] h-[24px] rounded-full'}
                     src={logo}
                     alt="img:card-logo"/>
            </div>
            <div className='bg-white h-[78px] rounded-b-2xl p-2'>
                <div className="flex justify-between items-center mb-1">
                    <h5 className='font-semibold text-base'>{name}</h5>
                    <h5 className='font-normal text-sm'>{price}₸</h5>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between items-baseline mb-1">
                        <p className='font-light text-xs'>в продаже с {startSale} до {endSale}</p>
                        <div className="flex gap-2 items-center">
                            <p className='font-normal text-xs text-[#ADADAD]'>(1.2 km)</p>
                            <p className='font-normal text-xs'>{address}</p>
                        </div>
                    </div>
                    <button className='text-sm py-2 px-4 bg-[#004225] rounded-lg text-white' >Заказать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;