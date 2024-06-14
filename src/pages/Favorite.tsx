import {useStore} from "../store/useStore.ts";
import Card from "../components/card";


const Favorite = () => {
    const Cards = useStore(state => state.Cards)
    return (
        <div className="w-[90%] mx-auto pb-28 pt-8">
            <h5 className={'mb-5 font-semibold text-2xl'}>Избранные</h5>
            <div className='flex flex-col gap-6'>
                {Cards.map(ele => (
                    <Card price={ele.price} address={ele.address} startSale={ele.startSale} endSale={ele.endSale}
                          name={ele.name} bags={ele.bags} numberFav={ele.numberFav} id={ele.id}
                          logo={ele.logo}
                          img={ele.img}/>
                ))}
            </div>
        </div>
    );
};

export default Favorite;