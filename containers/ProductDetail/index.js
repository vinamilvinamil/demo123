import {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {DataContext} from '../../store/GlobalStore';
import {addToCart} from '../../store/Actions';
import Cookies from 'js-cookie';
import {getData, handleFetchData} from '../../utils/fetchData';
import Player from './Player'
import dynamic from 'next/dynamic'
//import AudioPlayer from '../../components/AudioPlayer';

const AudioPlayer = dynamic(() => import('../../components/AudioPlayer'),{ ssr: false })



const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [state, dispatch] = useContext(DataContext);
    const {cart} = state;
    useEffect(async() => {
        //const data = getData(`product/616304e49e7759d73a21dbd2`, localStorage.getItem('accessToken'));
        //console.log(data);
    }, []); 

    if(!product) {
        return <AudioPlayer songs={songs} />
    }
    return (
        <div className='row detail_page'>
            <Head>
                <title>Detail DetailProduct</title>
            </Head>
            <Player url='http://localhost:3000/api/product/616304e49e7759d73a21dbd2'/>
            <div className='col-md-6'> 
                <Image alt='' width='100%' objectFit={'contain'} height={50} layout='responsive' src={product?.images?.length > 0 && product?.images[0].url ? product?.images[0].url : process.env.NEXT_PUBLIC_DEFAULT_IMAGE}></Image>
            </div>
            <div className='col-md-6 mt-3'>
                <h2 className='text-uppercase' >{product?.title}</h2>
                <h5 className='text-uppercase' >${product?.price}</h5>
                <div className='row mx-0 d-flex justify-content-between'>
                    {
                        product?.inStock > 0 ?
                        <h6 className='text-danger'>In stock: {product?.inStock}</h6>
                        : <h6 className='text-danger'>Out stock</h6>
                    }
                    <h6 className='text-danger'>Sold: {product?.sold}</h6>
                </div>
                <div className='my-2'>{product?.description}</div>
                <div className='my-2'>{product?.content}</div>

                <button type='button' className='btn btn-dark d-block my-3 px-5'
                onClick={() => dispatch(addToCart(product, cart))}
                disabled= {product.inStock == 0 ? true : false}>
                    Buy
                </button>
            </div>
        </div>
    )
}

export default DetailProduct;

const songs = [
    {
      url: `${NEXT_PUBLIC_BASE_URL}/api/product/616304e49e7759d73a21dbd2`,
      cover:
        'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
      artist: {
        name: 'Redfoo',
        song: 'New Thang',
      },
    },
    {
      url: 'http://claymore.france.free.fr/momo/summer love.mp3',
      cover:
        'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
      artist: {
        name: 'Justin Timberlake',
        song: 'Summer Love',
      },
    },
    {
      url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
      cover:
        'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
      artist: {
        name: 'Daft Punk',
        song: 'Get Lucky',
      },
    },
    {
      url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
      artist: {
        name: 'Michael Buble',
        song: 'Feeling Good',
      },
    },
    {
      url:
        'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
      cover:
        'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
      artist: {
        name: 'The Weekend',
        song: "Can't Fell My Face",
      },
    },
    {
      url:
        'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
      cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
      artist: {
        name: 'Metallica',
        song: 'Fuel',
      },
    },
  ];