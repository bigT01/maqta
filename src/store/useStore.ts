import {create} from "zustand";
import {devtools} from "zustand/middleware";

interface Card {
    id: string
    price: number,
    address: string,
    startSale: string,
    endSale: string,
    name: string,
    bags: number,
    numberFav: number,
    logo: string,
    img: string,
    bio: string
}

// interface HistoryCart {
//
// }

interface CurrentCart {
    id: string,
    userId: string,
    getTime: string,
    price: number,
    image: string,
    address: string,
    name: string,
    createAt: string,
    orderCode: string
}

interface IState {
    Cards: Card[],
    isPopUp: boolean,
    setIsPopUp: (isPopUp: boolean) => void,
    duration: number,
    isAuth: boolean,
    CurrentCart: CurrentCart,
    setIsAuth: (isAuth: boolean) => void,
    setId: (id: string) => void,
    bagId: string,
    isPopUpHistory: boolean,
    SetIsPopUpHistory: (isPopUp: boolean) => void,
}

export const useStore = create<IState>()(
    devtools(
            (set) => ({
                Cards: [
                    {
                        id: '123',
                        price: 3000,
                        address: 'Республика 34/1',
                        startSale: '16:00',
                        endSale: '19:00',
                        name: 'Tap tatti',
                        bags: 10,
                        img: 'https://avatars.mds.yandex.net/get-altay/1595534/2a0000016d6f67de6cfe8780c36d8e0d13bf/L_height',
                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN66FZrmXxT_u42Mebpd6SkXkOxLtTibbfKZdTBSJCKw&s',
                        numberFav: 400,
                        bio: 'Тап Татти - это уютная кондитерская в Казахстане,\n' +
                            '                                        предлагающая своим гостям восхитительные десерты и выпечку, приготовленные с\n' +
                            '                                        любовью и вниманием к деталям. В нашем меню вы найдете разнообразные торты,\n' +
                            '                                        пирожные, печенье и другие сладости, которые станут идеальным дополнением к\n' +
                            '                                        вашему утреннему кофе или вечернему чаю. Мы используем только высококачественные\n' +
                            '                                        ингредиенты, чтобы наши десерты радовали вас не только вкусом, но и пользой. Тап\n' +
                            '                                        Татти - это место, где каждый найдет что-то по своему вкусу и сможет насладиться\n' +
                            '                                        атмосферой уюта и тепла.',

                    }
                ],
                CurrentCart: {
                    id: '456',
                    userId: '678',
                    getTime: '18:00:00',
                    price: 3000,
                    image: 'https://avatars.mds.yandex.net/get-altay/1595534/2a0000016d6f67de6cfe8780c36d8e0d13bf/L_height',
                    address: 'Республика 34/1',
                    name: 'Tap tatti',
                    createAt: '20.07.2024',
                    orderCode: '123kf'
                },
                duration: 2640,
                isPopUp: false,
                isAuth: false,
                bagId: '',
                isPopUpHistory: false,
                setIsPopUp: (isPopUp: boolean) => set(() => ({isPopUp: isPopUp})),
                setId: (id: string) => set(() => ({bagId: id})),
                setIsAuth: (isAuth: boolean) => set(() => ({isAuth: isAuth})),
                SetIsPopUpHistory: (isPopUp: boolean) => set(() => ({isPopUpHistory: isPopUp})),
            }),
            { name: 'store' },
    ),
)