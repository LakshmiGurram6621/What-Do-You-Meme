export const Players=[
    {Name:'Lakshmi',Score:0,isDealer:false}
];
export const MyCards=[]
export const PictureDeck=[
    'http://i.huffpost.com/gen/2686060/images/o-FLORIDA-facebook.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gorges-de-la-Nesque-DSC_0266.jpg/495px-Gorges-de-la-Nesque-DSC_0266.jpg'
];
export const CaptionsDeck=[
    'hello',
    'hello1',
    'hello2'
      
];
export let CurrentPicture='';

export const CardsInPlay=[];
//Has we have not created object here we have to export properties,so
//export{list of properties}
//other way is add export key to every where
export function Init(){
    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1])
    CurrentPicture=PictureDeck[0]
}