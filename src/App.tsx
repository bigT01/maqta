import './App.css'
import {MdOutlinePlace} from "react-icons/md";
import {TiStarFullOutline, TiStarHalfOutline, TiStarOutline} from "react-icons/ti";
import {useStore} from "./store/useStore.ts";

function App() {
    const setIsPopUp = useStore(state => state.setIsPopUp)

    return (
        <main className={'w-full'}>
            <h3 className='font-bold text-3xl text-center pt-12 mb-5'>Maqta</h3>
            <div className="w-[90%] mx-auto">
                <div className="flex w-full bg-white rounded-2xl items-center relative mb-5">
                    <input type="text"
                           className='w-[90%] outline-none placeholder:text-black placeholder:font-light  h-[48px] px-4 rounded-2xl'
                           placeholder={'Заказать в'}/>
                    <span className='absolute left-[6.5rem] text-[#2E7420] underline font-medium'>Толе би 11а</span>
                    <button className={'w-[10%]'}><MdOutlinePlace size={32}/></button>
                </div>
            </div>
            <div className={'w-[95%] ml-[5%] mb-8'}>
                <div className="flex gap-x-6 overflow-x-scroll no-scrollbar">
                    <div className='flex flex-col items-center'>
                        <div className="p-[2px] w-[100px] h-[100px] rounded-2xl mb-2"
                             style={{border: '1px solid #2E7420'}}>
                            <img className={'w-full h-full object-cover rounded-2xl '}
                                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
                                 alt="img:cafe"/>
                        </div>
                        <p className={'text-xs font-semibold whitespace-nowrap'}>система бонустов</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="p-[2px] w-[100px] h-[100px] rounded-2xl mb-2"
                             style={{border: '1px solid #2E7420'}}>
                            <img className={'w-full h-full object-cover rounded-2xl '}
                                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
                                 alt="img:cafe"/>
                        </div>
                        <p className={'text-xs font-semibold whitespace-nowrap'}>система бонустов</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="p-[2px] w-[100px] h-[100px] rounded-2xl mb-2"
                             style={{border: '1px solid #2E7420'}}>
                            <img className={'w-full h-full object-cover rounded-2xl '}
                                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
                                 alt="img:cafe"/>
                        </div>
                        <p className={'text-xs font-semibold whitespace-nowrap'}>система бонустов</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="p-[2px] w-[100px] h-[100px] rounded-2xl mb-2"
                             style={{border: '1px solid #2E7420'}}>
                            <img className={'w-full h-full object-cover rounded-2xl '}
                                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
                                 alt="img:cafe"/>
                        </div>
                        <p className={'text-xs font-semibold whitespace-nowrap'}>система бонустов</p>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto pb-28">
                <h5 className='font-bold text-3xl mb-4'>Кофейни по близости</h5>
                <div className='flex flex-col gap-6'>
                    <div className='relative' onClick={() => setIsPopUp(true)} >
                        <img className={'rounded-t-2xl object-cover h-[144px] w-full'}
                             src="https://avatars.mds.yandex.net/get-altay/1595534/2a0000016d6f67de6cfe8780c36d8e0d13bf/L_height"
                             alt="img:card"/>
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
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN66FZrmXxT_u42Mebpd6SkXkOxLtTibbfKZdTBSJCKw&s"
                                 alt="img:logo"/>
                        </div>
                        <div className='bg-white h-[78px] rounded-b-2xl p-2'>
                            <div className="flex justify-between items-center mb-1">
                                <h5 className='font-semibold text-base'>Tap tatti</h5>
                                <h5 className='font-normal text-sm'>1500₸ ~ 3500₸</h5>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div className='flex gap-2 items-center'>
                                    <p className='font-semibold text-xs'>4.5</p>
                                    <div className='flex gap-1'>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarHalfOutline color={'#F1AF65'} size={10}/>
                                        <TiStarOutline color={'#F1AF65'} size={10}/>
                                    </div>
                                </div>
                                <p className='font-light text-xs'>в продаже с 16:00 до 18:00</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className='font-normal text-xs text-[#ADADAD]'>(1.2 km)</p>
                                <p className='font-normal text-xs'>Республика 34/1 </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative' onClick={() => setIsPopUp(true)} >
                        <img className={'rounded-t-2xl object-cover h-[144px] w-full'}
                             src="https://franchise-capital.com/wp-content/uploads/2024/01/franshyza-global-coffee.-franchise-global-coffee.franshyza-global-kofy-21.jpg"
                             alt="img:card"/>
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
                                 src="https://franchise-capital.com/wp-content/uploads/2023/12/franshyza-global-coffee-franchajzyng-global-coffee-franchise-global-coffee.png"
                                 alt="img:logo"/>
                        </div>
                        <div className='bg-white h-[78px] rounded-b-2xl p-2'>
                            <div className="flex justify-between items-center mb-1">
                                <h5 className='font-semibold text-base'>Global Coffee</h5>
                                <h5 className='font-normal text-sm'>2000₸ ~ 5000₸</h5>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div className='flex gap-2 items-center'>
                                    <p className='font-semibold text-xs'>4.0</p>
                                    <div className='flex gap-1'>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarOutline color={'#F1AF65'} size={10}/>
                                    </div>
                                </div>
                                <p className='font-light text-xs'>в продаже с 16:00 до 18:00</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className='font-normal text-xs text-[#ADADAD]'>(2.2 km)</p>
                                <p className='font-normal text-xs'>Иманова 5/1 </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative' onClick={() => setIsPopUp(true)} >
                        <img className={'rounded-t-2xl object-cover h-[144px] w-full'}
                             src="https://avatars.mds.yandex.net/get-altay/1871297/2a00000185b72892f7ff13422820c1d6dc83/orig"
                             alt="img:card"/>
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
                                 src="https://images.satu.kz/114029139_w640_h640_114029139.jpg"
                                 alt="img:logo"/>
                        </div>
                        <div className='bg-white h-[78px] rounded-b-2xl p-2'>
                            <div className="flex justify-between items-center mb-1">
                                <h5 className='font-semibold text-base'>Zebra Coffee</h5>
                                <h5 className='font-normal text-sm'>1000₸ ~ 4000₸</h5>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div className='flex gap-2 items-center'>
                                    <p className='font-semibold text-xs'>3.5</p>
                                    <div className='flex gap-1'>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarFullOutline color={'#F1AF65'} size={10}/>
                                        <TiStarHalfOutline color={'#F1AF65'} size={10}/>
                                        <TiStarOutline color={'#F1AF65'} size={10}/>
                                        <TiStarOutline color={'#F1AF65'} size={10}/>
                                    </div>
                                </div>
                                <p className='font-light text-xs'>в продаже с 16:00 до 18:00</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className='font-normal text-xs text-[#ADADAD]'>(4.1 km)</p>
                                <p className='font-normal text-xs'>Женис 10/6 </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default App
