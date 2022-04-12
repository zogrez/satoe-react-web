import './App.css';
import logo from './static/satoelagi.png';
import logoPrimary from './static/satoelagi-primary.png';
import bannerMain from './static/banner/banner-main.png';
import bannerSecondaryOne from './static/banner/banner-secondary-1.png';
import bannerSecondaryTwo from './static/banner/banner-secondary-2.png';
import CardCategory from './components/cards/Category';
import CardProduct from './components/cards/Product';

function App() {
  const categories = [
    {
      name: 'Electronic',
      image:
        'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg',
    },
    {
      name: 'Fashion Pria',
      image:
        'https://cdn.shopify.com/s/files/1/0543/0037/7279/products/championlewisblacklifestyle_1000x.jpg?v=1625236795',
    },
    {
      name: 'Fashion Wanita',
      image:
        'https://lzd-img-global.slatic.net/g/p/6bbe61cd6e720e25317ffe2299ffcd99.jpg_720x720q80.jpg_.webp',
    },
    {
      name: 'Kesehatan',
      image:
        'https://rsudpemangkat.id/wp-content/uploads/2019/02/THUMBNAIL_Fotolia_131224316_Subscription_Monthly_M.jpg',
    },
    {
      name: 'Hobi dan koleksi',
      image: 'https://cf.shopee.co.id/file/9bffcbe6413778fc9f3d478a8eec8b81',
    },
    {
      name: 'Makanan',
      image:
        'https://cdn-brilio-net.akamaized.net/news/2020/06/01/185556/1239110-resep-makanan-kaki-lima.jpg',
    },
    {
      name: 'Kecantikan',
      image:
        'https://woop.sgp1.cdn.digitaloceanspaces.com/woop/storage/20190910/160424-rekomendasi-klinik-kecantikan-webp-large.jpg',
    },
    {
      name: 'Bayi dan anak',
      image:
        'https://s1.bukalapak.com/img/63459753321/large/Stroler_Baby_Does_Brea_Stroller_Anak_Bayi_Kereta_Dorong_Bayi.jpg',
    },
    {
      name: 'Otomotif',
      image:
        'https://domoacademy.com/wp-content/uploads/2020/04/belajar-otomotif-bagi-pemula1.jpg',
    },
    {
      name: 'Olahraga',
      image: 'https://cf.shopee.co.id/file/1178dbec8a54b6d18f9f5239911486fd',
    },
    {
      name: 'Buku dan Alat Tulis',
      image:
        'https://cdn.pixabay.com/photo/2017/10/20/08/52/stationery-2870482_960_720.jpg',
    },
    {
      name: 'Fotography',
      image:
        'https://awsimages.detik.net.id/community/media/visual/2019/12/12/46fc3e6c-7ec3-44ef-ac14-ca193c2e1ad1_43.jpeg?w=700&q=90',
    },
  ];

  const products = [
    {
      name: 'Smartphone can flight, when flight mode on',
      image:
        'https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_green_new_1_8.jpg',
      country: 'Indonesia',
    },
    {
      name: 'Ipad 9',
      image:
        'https://cdn.antaranews.com/cache/800x533/2021/09/15/Apple_iPad-10-2-inch_Ninth-Gen_09142021_big.jpg.large.jpg',
      country: 'Indonesia',
    },
    {
      name: 'Mac',
      image:
        'https://www.mega.tn/assets/uploads/img/pr_ordinateur_bureau/1537529712_803.jpg',
      country: 'Indonesia',
    },
    {
      name: 'Jacket',
      image:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      country: 'Indonesia',
    },
    {
      name: 'Kaos',
      image:
        'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2020/10/10/c0af31dd-78be-4c4c-85bd-f50d3835b4c8.jpg',
      country: 'Indonesia',
    },
    {
      name: 'Celana',
      image: 'https://cf.shopee.co.id/file/af1d1483e3af909ca694e70c6f359eb3',
      country: 'Indonesia',
    },
    {
      name: 'Kemeja',
      image: 'https://cf.shopee.co.id/file/c04e1cca910e9ea4d464c3f7d221733a',
      country: 'Indonesia',
    },
    {
      name: 'Kacamata',
      image:
        'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/435370/item/goods_09_435370.jpg?width=1008&impolicy=quality_75',
      country: 'Indonesia',
    },
    {
      name: 'Topi',
      image:
        'https://dynamic.zacdn.com/NF-9cnjv3-oMjFbmisCz_-G5nJw=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/baellerry-8631-9984802-1.jpg',
      country: 'Indonesia',
    },
    {
      name: 'Gelang',
      image:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/2/7/c435ba1b-1ab3-4b42-a604-25956e0bca9b.jpg',
      country: 'Indonesia',
    },
  ];

  return (
    <div>
      <div className='py-4 px-8 bg-primary flex justify-between'>
        <div className='flex items-center'>
          <img className='w-8 h-5 mr-4' src={logo} alt='Logo' />
          <span className='text-white font-bold tracking-wider font-poppins'>
            Satoelagi
          </span>
        </div>
        <div className='ml-8 flex-1 items-center justify-center flex self-center'>
          <input
            className='w-4/12 mx-auto px-4 py-1.5 rounded-lg'
            type='text'
            placeholder='Cari apapun di satoelagi'
          />
        </div>
        <div>
          <div className='flex items-center h-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='28'
              viewBox='0 0 33 28'
              className='w-6 h-6 mr-4'
              fill='none'
            >
              <path
                d='M28.7638 4.12177C28.0552 3.44911 27.2139 2.9155 26.2879 2.55144C25.3619 2.18738 24.3694 2 23.367 2C22.3647 2 21.3722 2.18738 20.4462 2.55144C19.5202 2.9155 18.6788 3.44911 17.9702 4.12177L16.4996 5.51714L15.029 4.12177C13.5977 2.76368 11.6564 2.0007 9.63223 2.0007C7.60804 2.0007 5.66675 2.76368 4.23543 4.12177C2.80411 5.47987 2 7.32185 2 9.24249C2 11.1631 2.80411 13.0051 4.23543 14.3632L5.70602 15.7586L16.4996 26L27.2932 15.7586L28.7638 14.3632C29.4728 13.6909 30.0351 12.8926 30.4188 12.0139C30.8025 11.1353 31 10.1936 31 9.24249C31 8.29142 30.8025 7.34967 30.4188 6.47104C30.0351 5.59241 29.4728 4.79412 28.7638 4.12177V4.12177Z'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 28 28'
              className='w-6 h-6 mr-4'
              fill='none'
            >
              <path
                d='M26 13.3334C26.0046 15.0932 25.5934 16.8292 24.8 18.4C23.8592 20.2823 22.413 21.8656 20.6232 22.9724C18.8335 24.0792 16.771 24.6659 14.6666 24.6667C12.9068 24.6713 11.1708 24.2601 9.59999 23.4667L2 26L4.53333 18.4C3.73991 16.8292 3.32874 15.0932 3.33333 13.3334C3.33415 11.229 3.92081 9.16649 5.02762 7.37676C6.13443 5.58703 7.71766 4.14079 9.59999 3.20004C11.1708 2.40661 12.9068 1.99545 14.6666 2.00004H15.3333C18.1124 2.15336 20.7374 3.32638 22.7055 5.29451C24.6736 7.26264 25.8466 9.88756 26 12.6667V13.3334Z'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='30'
              className='w-6 h-6 mr-4'
              viewBox='0 0 28 30'
              fill='none'
            >
              <path
                d='M21.8757 9.75081C21.8757 7.65499 21.0381 5.64501 19.5471 4.16304C18.0561 2.68107 16.034 1.84851 13.9254 1.84851C11.8169 1.84851 9.79469 2.68107 8.30372 4.16304C6.81276 5.64501 5.97514 7.65499 5.97514 9.75081C5.97514 18.9702 2 21.6043 2 21.6043H25.8508C25.8508 21.6043 21.8757 18.9702 21.8757 9.75081Z'
                stroke='white'
                stroke-width='3'
                className='w-6 h-6 mr-4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M16.2177 26.8725C15.9848 27.2717 15.6504 27.603 15.2481 27.8333C14.8458 28.0636 14.3897 28.1849 13.9254 28.1849C13.4611 28.1849 13.005 28.0636 12.6027 27.8333C12.2004 27.603 11.866 27.2717 11.6331 26.8725'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='30'
              viewBox='0 0 32 30'
              className='w-6 h-6 mr-4'
              fill='none'
            >
              <path
                d='M12.3289 28.1848C13.0345 28.1848 13.6066 27.6233 13.6066 26.9307C13.6066 26.2381 13.0345 25.6766 12.3289 25.6766C11.6232 25.6766 11.0511 26.2381 11.0511 26.9307C11.0511 27.6233 11.6232 28.1848 12.3289 28.1848Z'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M26.3837 28.1848C27.0894 28.1848 27.6614 27.6233 27.6614 26.9307C27.6614 26.2381 27.0894 25.6766 26.3837 25.6766C25.678 25.6766 25.106 26.2381 25.106 26.9307C25.106 27.6233 25.678 28.1848 26.3837 28.1848Z'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M2.10693 1.84851H7.21783L10.6421 18.6411C10.759 19.2185 11.079 19.7372 11.5462 20.1063C12.0134 20.4754 12.5979 20.6715 13.1976 20.6602H25.6171C26.2167 20.6715 26.8013 20.4754 27.2685 20.1063C27.7357 19.7372 28.0557 19.2185 28.1725 18.6411L30.2169 8.11909H8.49556'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='32'
              viewBox='0 0 33 32'
              className='w-6 h-6 mr-4'
              fill='none'
            >
              <path
                d='M16.7365 30C24.614 30 31 23.732 31 16C31 8.26801 24.614 2 16.7365 2C8.85891 2 2.4729 8.26801 2.4729 16C2.4729 23.732 8.85891 30 16.7365 30Z'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12.5858 11.7999C12.9212 10.8642 13.5831 10.0752 14.4543 9.57264C15.3255 9.07008 16.3498 8.88637 17.3458 9.05405C18.3418 9.22174 19.2452 9.72999 19.896 10.4888C20.5468 11.2476 20.903 12.208 20.9015 13.1999C20.9015 15.9999 16.6224 17.3999 16.6224 17.3999'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M16.7365 23H16.7508'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </div>
        <div>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt=''
          />
        </div>
      </div>
      <div className='container py-6 font-inter '>
        <div className='flex w-full items-center justify-start mb-4'>
          <span className='font-semibold'> Urutkan Negara</span>
          <button className='bg-primary py-1 px-4 ml-4 rounded-md text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='w-7 h-7 p-1  rounded-md '
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-globe'
            >
              <circle cx='12' cy='12' r='10' />
              <line x1='2' y1='12' x2='22' y2='12' />
              <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
            </svg>
          </button>
        </div>
        <div className='flex items-center justify-center  '>
          <img
            className='py-8 h-96 first-letter w-fit mr-2'
            src={bannerMain}
            alt=''
          />
          <div className='w-1/2 object-contain overflow-hidden'>
            <img
              className='h-36 w-full object-fill mb-4'
              src={bannerSecondaryOne}
              alt=''
            />
            <img
              className='h-40 w-full object-fill'
              src={bannerSecondaryTwo}
              alt=''
            />
          </div>
        </div>
        <div className='bg-white mb-4'>
          <div className='p-4 border-b border-[#C4C4C4]'>
            <h2 className='text-primary font-bold uppercase'>Kategori</h2>
          </div>
          <div className='flex overflow-x-scroll pb-10 no-scrollbar'>
            <div className='flex p-6 flex-nowrap'>
              {categories.map((category) => (
                <CardCategory name={category.name} image={category.image} />
              ))}
            </div>
          </div>
        </div>
        <div className='bg-white mb-8 w-full'>
          <div className='p-4 border-b border-[#C4C4C4]'>
            <h2 className='text-primary font-bold uppercase'>
              Pilihan Top Minggu ini
            </h2>
          </div>
          <div className='flex overflow-x-auto py-8 px-4 snap-x no-scrollbar'>
            {products.map((product) => (
              <CardProduct
                name={product.name}
                image={product.image}
                country={product.country}
              />
            ))}
          </div>
        </div>
        <div className='bg-white mb-8 w-full'>
          <div className='p-4 border-b border-[#C4C4C4]'>
            <h2 className='text-primary font-bold uppercase'>
              Rekomendasi untukmu
            </h2>
          </div>
          <div className='flex overflow-x-auto py-8 px-4 snap-x no-scrollbar'>
            {products.reverse().map((product) => (
              <CardProduct
                name={product.name}
                image={product.image}
                country={product.country}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='w-full h-2 bg-primary'></div>
        <div className='container'>
          <div className='p-4 text-[#949494] flex '>
            <div className='mx-8'>
              <h3 className='text-primary font-bold mb-4 '>
                Layanan Pelanggan
              </h3>
              <ol>
                <li>Bantuan</li>
                <li>Metode Pembayaran</li>
                <li>Lacak pesanan pembeli</li>
                <li>Lacak pengiriman pembeli</li>
                <li>Pengembalian Barang dan dana</li>
                <li>Garansi</li>
              </ol>
            </div>
            <div className='mx-8'>
              <h3 className='text-primary font-bold mb-4'>SATOELAGI</h3>
              <ol>
                <li>Tentang kami</li>
                <li>Kebijakan satoelagi</li>
                <li>Kebijakan privasi</li>
                <li>Saller Centre</li>
                <li>Hubungi Kami</li>
              </ol>
            </div>
            <div className='mx-8'>
              <h3 className='text-primary font-bold mb-4'>Pembayaran Lokal</h3>
              <ol>
                <li className='flex'>
                  <img
                    className='w-16 object-contain mr-4'
                    src='https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg'
                    alt=''
                  />
                  <img
                    className='w-16 object-contain'
                    src='https://images.bisnis-cdn.com/posts/2019/03/26/904416/130718_mandiri-logo.jpg'
                    alt=''
                  />
                </li>
                <li className='flex'>
                  <img
                    className='w-16 object-contain mr-4'
                    src='https://infobanknews.com/wp-content/uploads/2018/05/logo-BNI-46-1.png'
                    alt=''
                  />
                  <img
                    className='w-16 object-contain'
                    src='https://image.cermati.com/v1428073851/brands/l5fdlu3ynhgxwnoqg0i5.jpg'
                    alt=''
                  />
                </li>
                <li className='flex'>
                  <img
                    className='w-16 object-contain mr-4'
                    src='https://image.cermati.com/v1526457033/uznq5nq6fgzszynnta7h.jpg'
                    alt=''
                  />
                  <img
                    className='w-16 object-contain'
                    src='https://media.suara.com/pictures/970x544/2014/04/18/BTN.jpg'
                    alt=''
                  />
                </li>
              </ol>
            </div>
            <div className='mx-8'>
              <h3 className='text-primary font-bold mb-4'>
                Pembayaran Internasional
              </h3>
              <ol>
                <li className='flex'>
                  <img
                    className='w-8 object-contain mr-4'
                    src='https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png'
                    alt=''
                  />
                  <img
                    className='w-16 object-contain mr-4'
                    src='https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png'
                    alt=''
                  />
                  <img
                    className='w-8 object-contain mr-4'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
                    alt=''
                  />
                  <img
                    className='w-8 object-contain mr-4'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/2560px-UnionPay_logo.svg.png'
                    alt=''
                  />
                </li>
                <li className='flex'>
                  <img
                    className='w-8 object-contain mr-4'
                    src='https://media.cdnandroid.com/item_images/911037/imagen-tez-a-a-new-payments-app-by-google-0ori.jpg'
                    alt=''
                  />
                  <img
                    className='w-16 object-contain mr-4'
                    src='https://www.deltavcapital.com/wp-content/uploads/2017/12/bitpay-logo.png'
                    alt=''
                  />
                  <img
                    className='w-8 object-contain mr-4'
                    src='https://play-lh.googleusercontent.com/oP2wGrbJftSW-_5RRbhE48NOI7KSRdsrvH_PRaMcuZtGuW28FR2Do9rSqlstQa5kC7U'
                    alt=''
                  />
                </li>
              </ol>
            </div>
            <div className='mx-8'>
              <h3 className='text-primary font-bold mb-4'>Ikuti Kami</h3>
              <ol>
                <li className='flex mb-3'>
                  <img
                    className='w-6 object-contain mr-4'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
                    alt=''
                  />
                  <img
                    className='w-6 object-contain mr-4'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/292px-Twitter-logo.svg.png'
                    alt=''
                  />
                  <img
                    className='w-8 object-contain mr-4'
                    src='https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg'
                    alt=''
                  />
                </li>
                <li className='flex'>
                  <img
                    className='w-6 object-contain mr-4'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHNR8Z4q9jR80z4EyLCwgeCCsm-sZEoeN2rYA8q1JlKBI9yfJUjmgmvyr-KgmwGDIBpo&usqp=CAU'
                    alt=''
                  />
                  <img
                    className='w-6 object-contain mr-4'
                    src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
                    alt=''
                  />
                </li>
              </ol>
            </div>
            <div className='mx-8 self-center'>
              <img src={logoPrimary} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
