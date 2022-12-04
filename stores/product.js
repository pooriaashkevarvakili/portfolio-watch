import {
    defineStore
} from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: [{
                    id: 1,
                    name: 'T500-Smart watch',
                    price: '300',
                    img: 'https://dkstatics-public.digikala.com/digikala-products/9a2f4ba8aaad117cbe779f75a7c785354aef7f90_1656931870.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
                },
                {
                    id: 2,
                    name: 'Galaxy Watch4 44mm',
                    price: '400',
                    img: 'https://dkstatics-public.digikala.com/digikala-products/a48de6a051009d34fe458ce768d30f800dc8e595_1656934101.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
                },
                {
                    id: 3,
                    price: '500',
                    name: 'HW16',
                    img: 'https://dkstatics-public.digikala.com/digikala-products/9358fa069a5583b348e3bf723b4c57884a715cb9_1656998863.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
                },
                {
                    id: 4,
                    price: '600',
                    name: 'Redmi Watch 2 Lite',
                    img: 'https://dkstatics-public.digikala.com/digikala-products/8c7d843d1d143250d7eb02fff08e10c149ac1dd6_1656931467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
                },
                {
                    id: 5,
                    price: '600',
                    name: 'Series 8 Aluminum 45mm',
                    img: 'https://dkstatics-public.digikala.com/digikala-products/be65552a8c3e709a7d49d2f1eb35b3882b1fdf18_1662792408.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
                },
                {
                    id: 6,
                    price: '600',
                    name: 'Ultra 49 mm Alpine Loop',
                    img: 'https://dkstatics-public.digikala.com/digikala-products/b0af2ec78668c85506c1edc260b42ff447f019c8_1667201885.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
                }
            ],

        }

    },
    getters: {
        allProducts(state) {
            return state.product
        }
    },
    actions: {

    }


})