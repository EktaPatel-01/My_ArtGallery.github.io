const productData=[
    {
        index:'01',
        Name:'Maa Durga',
        image:'Maa.jpeg',
        des:'She is associated with protection, strength, motherhood, destruction, and wars. Durga legend centres around combating evils and demonic forces that threaten peace, prosperity, and dharma, representing the power of good over evil.'
    },
    {
        index:'02',
        Name:'Utkarsh Sharma',
        image:'utkarsh.jpeg',
        des:'Utkarsh Sharma is an Indian actor. The son of director Anil Sharma. As an adult and lead actor, he made his debut with action thriller film Genius'
    },
    {
        index:'03',
        Name:'Virat & Anushka',
        image:'virushka.jpeg',
        des:'Virat Kohli and Anushka Sharma virushka pencil sketch'
    },
    {
        index:'04',
        Name:'Radha Krishna',
        image:'radhaKrishna.jpeg',
        des:'Happiness is a state of mind that has nothing to do with the external world Lord Krishna'
    },
    {
        index:'05',
        Name:'RADHA KRISHNA',
        image:'coloredRK.jpeg',
        des:'Colored Sketch of Radha Krishna '
    },
    {
        index:'06',
        Name:'Sushant Singh Rajput',
        image:'sushant.jpeg',
        des:'Pencil sketch of Sushant Singh Rajput was an Indian actor known for his work in Hindi cinema. '
    },
    {
        index:'07',
        Name:'Krishna',
        image:'krishna.jpeg',
        des:'The Key to happiness is the reduction of desires –Lord Krishna. '
    },
    {
        index:'08',
        Name:'Radha Rani',
        image:'radha.jpeg',
        des:'Radha Rani is also known as Sarva-kanti , which indicates that all beauty, and all the Lakshmis derive their beauty.'
    },
    {
        index:'09',
        Name:'Innocence',
        image:'baby.jpeg',
        des:'Pencil Sketching of baby refers Childs innocence and purity'
    },
    {
        index:'10',
        Name:'Little Radha',
        image:'littleR.jpeg',
        des:'Pencli Sketch of Little Radha Rani'
    },
]
const nxtbtn= document.querySelector('.nxt-btn');
let class3=document.querySelector('.class3');
let class4=document.querySelector('.class4');
let class2=document.querySelector('.class2');
let class5=document.querySelector('.class5');

let PimgContainer=document.querySelector('.Pimg-container');
let pimg=document.querySelector('.pimg');
let backdropImg=document.querySelector('.backdrop-img');

let product =document.querySelector('.product ');
let prodname=document.querySelector('.prodname');
let proddes=document.querySelector('.proddes');

let currentProduct=0;

nxtbtn.addEventListener('click',()=>{
    if(currentProduct>=productData.length-1){
        currentProduct=0;
    }else{
        currentProduct++;
    }

    class2.innerHTML=productData[currentProduct].index;
    class5.innerHTML=productData[currentProduct].des.slice(0,80);

    class3.classList.add('slide');
    PimgContainer.classList.add('slide');
    backdropImg.classList.add('fade');
    product.classList.add('fade');

    setInterval(()=>{
        prodname.innerHTML=productData[currentProduct].Name;
        proddes.innerHTML=productData[currentProduct].des;
        class4.src=pimg.src=backdropImg.src=`${productData[currentProduct].image}`
    },400)

    setTimeout(()=>{
        class3.classList.remove('slide');
        PimgContainer.classList.remove('slide');
        backdropImg.classList.remove('fade');
        product.classList.remove('fade');
    },800);
})