import {FaFilter} from "react-icons/fa";
import Card from "../components/card";
import {useStore} from "../store/useStore.ts";


const Dashboard = () => {
    const Cards = useStore(state => state.Cards)

    return (
        <main className={'w-full'}>
            <header className={'w-[90%] mx-auto flex py-10 justify-between items-center'}>
                <img src="../../public/logo.webp" alt="img:logo" className='rounded-full object-cover'
                     style={{width: 56, height: 56}}/>
                <button><FaFilter color={'#004225'} size={24}/></button>
            </header>
            <div className="w-[90%] mx-auto pb-28">
                <div className='flex flex-col gap-6'>
                    {Cards.map(ele => (
                        <Card price={ele.price} address={ele.address} startSale={ele.startSale} endSale={ele.endSale}
                              name={ele.name} bags={ele.bags} numberFav={ele.numberFav} id={ele.id}
                              logo={ele.logo}
                              img={ele.img}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;