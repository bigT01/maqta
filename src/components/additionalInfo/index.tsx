import {AiFillHeart, AiOutlineCloseCircle} from "react-icons/ai";
import {GrTarget} from "react-icons/gr";
import {LuDessert} from "react-icons/lu";
import {GoDotFill} from "react-icons/go";
import {Link} from "react-router-dom";
import {useStore} from "../../store/useStore.ts";
import {IoLink} from "react-icons/io5";
import {RiInstagramFill} from "react-icons/ri";

type AdditionalInfoProps = {
    isAnimation: boolean,
    setIsAnimation: ((isAnimation: boolean) => void),
    setIsClose: ((isClose: boolean) => void),
    setLiked: ((liked: boolean) => void),
    liked: boolean
}


const AdditionalInfo = ({isAnimation, setIsAnimation, setIsClose, setLiked, liked}:AdditionalInfoProps) => {
    const bagId = useStore(state => state.bagId)
    const data = useStore(state => state.Cards).filter(card => card.id === bagId)[0]


    return (
        <div
            className={`fixed z-50 bg-white top-0 left-0 w-full h-screen overflow-y-hidden ${isAnimation ? 'fade-in-bottom' : 'fade-in-top'}`}>
            {data ? (
                <div className='relative w-full h-full'>
                    <button className={'absolute right-5 top-5 bg-[#ADADAD] rounded-full'} onClick={() => {
                        setIsClose(true)
                        setIsAnimation(true)
                    }}><AiOutlineCloseCircle size={32}/></button>
                    <img className='w-full h-[322px] object-cover'
                         src="https://restoran.kz/neofiles/serve-image/63c11364dd1c0d247f0e690c"
                         alt="img:popUp"/>
                    <div className={'h-[70vh] absolute bottom-0 w-full bg-[#E5EBBE] rounded-t-3xl '}>
                        <div className='flex justify-between py-4 w-[90%] mx-auto'>
                            <div className='flex-col flex items-center gap-1'>
                                <GrTarget size={32}/>
                                <p className='font-normal text-base'>10 ~ метр</p>
                            </div>
                            <div className='flex-col flex items-center gap-1'>
                                <LuDessert size={32}/>
                                <p className='font-normal text-base'>100+ десертов</p>
                            </div>
                            <div className='flex-col flex items-center gap-1' onClick={() => setLiked(liked)}>
                                <AiFillHeart size={32} color={liked ? 'red' : '#919191'}/>
                                <p className='font-normal text-base'>90+ отзывов</p>
                            </div>
                        </div>
                        <div className='w-full bg-white rounded-t-2xl overflow-y-scroll px-4 py-6'
                             style={{height: 'calc(100% - 92px)'}}>
                            <h1 className='flex gap-1 font-bold text-2xl items-center mb-6'><span><GoDotFill/></span>{data.name}</h1>
                            <div className='flex flex-col gap-4'>
                                <div className='justify-between flex items-center'>
                                    <h5 className='text-lg font-semibold'>Цена:</h5>
                                    <p className='text-base font-semibold'>{data.price} ₸</p>
                                </div>
                                <div className='justify-between flex items-center'>
                                    <h5 className='text-lg font-semibold'>Вид доставки:</h5>
                                    <p className='text-base font-semibold'>самовывоз</p>
                                </div>
                                <div className='justify-between flex items-center'>
                                    <div className="flex gap-2 items-center">
                                        <IoLink size={24}/>
                                        <p className='underline'>taptatti.kz</p>
                                    </div>

                                    <RiInstagramFill size={32}/>
                                </div>
                                <div className='justify-between flex items-center'>
                                    <h5 className='text-lg font-semibold'>Отзывы:</h5>
                                    <div className='flex relative w-[60px]'>
                                        <div className='w-[24px] h-[24px] bg-gray-500 rounded-full'></div>
                                        <div
                                            className='w-[24px] h-[24px] bg-green-500 rounded-full absolute left-[12px]'></div>
                                        <div
                                            className='w-[24px] h-[24px] bg-red-500 rounded-full absolute left-[24px]'></div>
                                        <div
                                            className='w-[24px] h-[24px] bg-orange-500 rounded-full absolute left-[36px]'></div>
                                    </div>
                                </div>
                                <div className='gap-4 flex flex-col'>
                                    <h5 className='text-lg font-semibold'>Описание:</h5>
                                    <p className='text-base '>Тап Татти - это уютная кондитерская в Казахстане,
                                        предлагающая своим гостям восхитительные десерты и выпечку, приготовленные с
                                        любовью и вниманием к деталям. В нашем меню вы найдете разнообразные торты,
                                        пирожные, печенье и другие сладости, которые станут идеальным дополнением к
                                        вашему утреннему кофе или вечернему чаю. Мы используем только высококачественные
                                        ингредиенты, чтобы наши десерты радовали вас не только вкусом, но и пользой. Тап
                                        Татти - это место, где каждый найдет что-то по своему вкусу и сможет насладиться
                                        атмосферой уюта и тепла.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className='absolute flex items-center justify-center bottom-5 w-[90%] z-50 left-[50%] bg-[#C7E60C20] rounded-full h-[54px]'
                            style={{transform: 'translateX(-50%)'}}>
                            <Link to={'https://wa.me/77002132703'}
                                  className={'bg-[#C7E60C] rounded-full py-2 w-[90%] flex justify-center'}>Заказать</Link>
                        </div>
                    </div>
                </div>
            ) : 'null'}

        </div>
    );
};

export default AdditionalInfo;