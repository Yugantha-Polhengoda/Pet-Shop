import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import CustomerSwiper from "@/components/CustomerSwiper";
import MorePuppiesList from "@/components/MorePuppiesList";

const PetDetailPage = () => {
  const [pet, setPet] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchPet(id);
    }
  }, [id]);

  const fetchPet = async (id) => {
    try {
      const response = await fetch(
        `https://monitor-backend-rust.vercel.app/api/pets`
      );
      const data = await response.json();
      const petDetails = data.find((pet) => pet.id === id);
      setPet(petDetails);
    } catch (error) {
      console.error("Error fetching pet details:", error);
    }
  };

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-10 lg:px-8 xl:px-[130px] max-w-[1440px] mx-auto">
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row sm:p-4 border rounded-lg">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={pet.image}
            alt={pet.breed}
            className="rounded-lg w-screen lg:w-auto lg:h-[70%]"
          />
          {/* Thumbnails */}
          <div className="flex space-x-2 mt-4 px-4">
            <img
              src={pet.image}
              alt={pet.breed}
              className="w-20 h-20 rounded-md cursor-pointer"
            />
          </div>
          <div className="flex flex-col xl:flex-row bg-[#FCEED5] w-full mt-10 p-5 gap-4 text-sm text-[#002A48] font-bold rounded-lg">
            <div className="flex gap-2">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 7.94622C24.0004 8.35265 23.9783 8.75879 23.9338 9.16277C23.4 14.2111 19.531 19.52 12 21.9655C4.48139 19.5324 0.600009 14.24 0.0662161 9.16277C0.0215847 8.7588 -0.000518473 8.35265 9.2288e-06 7.94622C9.2288e-06 3.93243 2.44966 0.448291 6.00001 0.448291C7.15631 0.446049 8.29902 0.697475 9.3476 1.18484L15.2979 0.920015C16.1641 0.605973 17.0787 0.446312 18 0.448291C21.5504 0.448291 24 3.93243 24 7.94622Z" fill="#DF4D60"/>
              <path d="M24 7.94622C24.0004 8.35265 23.9783 8.75879 23.9338 9.16277C22.4524 12.9697 17.669 15.7586 12 15.7586C6.33104 15.7586 1.5476 12.9697 0.0662161 9.16277C0.0215847 8.7588 -0.000518473 8.35265 9.2288e-06 7.94622C9.2288e-06 3.93243 2.44966 0.448291 6.00001 0.448291C7.15631 0.446049 8.29902 0.697475 9.3476 1.18484L15.2979 0.920015C16.1641 0.605973 17.0787 0.446312 18 0.448291C21.5504 0.448291 24 3.93243 24 7.94622Z" fill="#FF5364"/>
              <path d="M21.2069 15.7835C19.4725 17.9915 17.2312 19.7487 14.6731 20.9062C14.4248 21.0262 14.1724 21.1421 13.9158 21.2455C13.3075 21.5103 12.6662 21.7503 12 21.9655C11.7186 21.8745 11.4413 21.7793 11.1724 21.68V17.4138C10.1374 16.2807 9.54917 14.8102 9.5172 13.2759C9.53983 11.8139 9.91456 10.3788 10.6096 9.09241C10.6565 8.9908 10.659 8.87429 10.6166 8.77073C10.5743 8.66717 10.4908 8.58585 10.3862 8.54621C9.18232 8.12991 7.9192 7.91054 6.64548 7.89655C4.66341 7.23448 4.52686 5.25242 4.55582 4.48276C4.56163 4.29954 4.68833 4.14242 4.86617 4.09793L7.26617 3.50207C7.66603 3.40062 8.01402 3.15437 8.24272 2.81104L9.21513 1.35448C9.25565 1.2952 9.29988 1.23853 9.34755 1.18483C9.55296 0.946192 9.82319 0.772267 10.1255 0.68414C11.2787 0.320894 12.4728 0.102664 13.68 0.0344849C14.3254 0.0698429 14.9202 0.395382 15.2979 0.920002C16.1596 2.1032 16.6088 3.53665 16.5765 5C16.5765 6.05931 16.1213 6.66759 15.4965 6.9531V6.96138L15.6165 7.79311L15.7075 8.43035C15.73 8.59428 15.8494 8.72835 16.0096 8.76966C16.705 9.00653 17.3277 9.41835 17.8179 9.96552C18.5834 10.7269 20.1269 13.2138 21.2069 15.7835Z" fill="#35495E"/>
              <path d="M15.6166 7.79309C15.2892 7.91908 14.9411 7.98225 14.5903 7.9793C14.1383 7.97629 13.6907 7.8893 13.2703 7.72275C12.7996 7.53221 12.4906 7.07611 12.4883 6.56827V3.75861C12.4883 3.53008 12.6735 3.34482 12.9021 3.34482C13.1306 3.34482 13.3159 3.53008 13.3159 3.75861V6.56827C13.3157 6.73784 13.419 6.89035 13.5766 6.95309C14.1554 7.20232 14.8087 7.21569 15.3972 6.99033C15.4289 6.97635 15.4623 6.96661 15.4966 6.96137L15.6166 7.79309Z" fill="#2C3E50"/>
              <path d="M18.6001 16.7186C18.5254 16.9343 18.2915 17.0504 18.0745 16.9793C17.2965 16.6753 16.4181 16.7793 15.7325 17.2565C14.9249 17.8918 14.4623 18.8693 14.4828 19.8965C14.4764 20.2426 14.5412 20.5863 14.6732 20.9062C14.4249 21.0262 14.1725 21.1421 13.9159 21.2455C13.7387 20.8181 13.65 20.3592 13.6552 19.8965C13.6361 18.604 14.2263 17.3777 15.2483 16.5862C16.1511 15.9542 17.3072 15.8072 18.3394 16.1931C18.5551 16.2678 18.6711 16.5017 18.6001 16.7186Z" fill="#2C3E50"/>
              <path d="M6.20684 3.76691V5.00001C6.20684 5.22854 6.02158 5.4138 5.79305 5.4138H4.61374C4.56348 5.10616 4.54408 4.79427 4.55581 4.48277C4.56161 4.29954 4.68831 4.14243 4.86615 4.09794L6.20684 3.76691Z" fill="#3F5C6C"/>
            </svg>
            <h1>100% health guarantee for pets</h1>
            </div>
            <div className="flex gap-2">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2387 6.23168L13.6665 5.87498C14.6106 5.73629 15.3322 4.96141 15.4034 4.00988L15.6653 0.511214C15.6934 0.13585 15.2945 -0.121441 14.9641 0.0589108L12.746 1.26985C11.9879 1.68371 11.4553 2.41556 11.2947 3.26416L10.8163 5.79135C10.7684 6.04437 10.984 6.26912 11.2387 6.23168Z" fill="#FFE07D"/>
                <path d="M14.9642 0.058912L13.9089 0.634982L13.6597 3.96532C13.5884 4.91686 12.8668 5.69168 11.9228 5.83043L10.8333 5.99053C10.8919 6.14878 11.0549 6.25868 11.2388 6.23163L13.6666 5.87488C14.6107 5.73619 15.3323 4.96131 15.4035 4.00977L15.6654 0.511109C15.6934 0.135851 15.2946 -0.12144 14.9642 0.058912Z" fill="#FFD064"/>
                <path d="M6.86684 15.9549L8.46527 15.6186C8.81484 15.6588 9.04297 16.0055 8.94156 16.3424L8.51278 17.7674L12.5037 23.3514H15.1574L25.1904 21.3855L19.5049 9.97888C18.6578 8.27941 17.6577 6.66062 16.5169 5.14261C14.778 2.53421 11.2567 1.82403 8.64267 3.55451L6.94921 4.67559C6.24636 5.14087 5.78673 5.89455 5.69476 6.73244L5.54252 8.11994C5.48815 8.61575 5.14801 9.03356 4.67356 9.18749L1.6117 10.1807L0.985107 12.6554L1.1672 13.0342C1.71991 14.1842 2.82406 14.9702 4.09169 15.1159L5.15371 15.238C5.1998 15.2433 5.24225 15.2675 5.26814 15.3059C5.61761 15.8257 6.24937 16.0848 6.86684 15.9549Z" fill="#FFD064"/>
                <path d="M19.5048 9.97888C18.6578 8.27941 17.6576 6.66062 16.5169 5.14261C15.0291 2.91094 12.2367 2.06904 9.82397 2.95614C10.9206 3.35676 11.9042 4.09699 12.6013 5.14261C13.7421 6.66062 14.7422 8.27941 15.5893 9.97888L22.0087 22.8577L25.1904 21.3855L19.5048 9.97888Z" fill="#FFC250"/>
                <path d="M19.6742 13.383L19.7186 12.7946C19.7858 11.9051 19.4194 11.0378 18.7347 10.466L16.716 8.78023C16.4747 8.57874 16.1131 8.78688 16.1661 9.09675L16.6361 11.8414C16.6756 12.0721 16.8116 12.2749 17.0099 12.3991L19.0691 13.6888C19.3215 13.847 19.6517 13.6802 19.6742 13.383Z" fill="#4A80AA"/>
                <path d="M18.7347 10.4661L16.716 8.7803C16.4747 8.5788 16.1131 8.78694 16.1661 9.09681L16.312 9.94862L17.0991 10.6059C17.7838 11.1777 18.1503 12.0449 18.083 12.9345L18.0732 13.0652L19.069 13.6889C19.3215 13.847 19.6517 13.6802 19.6742 13.3831L19.7186 12.7946C19.7858 11.9051 19.4194 11.0379 18.7347 10.4661Z" fill="#407093"/>
                <path d="M13.3879 17.6197C13.6837 17.9167 14.0466 18.1382 14.4459 18.2656C14.5011 18.2832 14.5453 18.3249 14.566 18.3791L14.7367 18.8268C14.8549 19.1368 15.1721 19.3358 15.4995 19.2818C15.516 19.2791 15.5325 19.2758 15.549 19.2719L16.4505 19.0621C16.8143 18.9774 17.0852 19.3935 16.8606 19.6919L15.9297 20.9284C15.4013 21.6303 15.1335 22.4858 15.1572 23.3513H26.1626C26.346 23.3513 26.4772 23.1728 26.4208 22.9983C26.3059 22.6426 26.2195 22.278 26.1632 21.9077L25.671 18.67C25.4794 17.4099 24.9459 16.2265 24.1287 15.2484L21.9996 12.7002C21.2931 11.8547 20.3172 11.2779 19.2358 11.0667L19.1225 11.0446C17.7087 10.7685 16.2456 11.1419 15.1371 12.0618L14.6597 12.4579C13.9695 13.0307 13.6572 13.9411 13.8506 14.8169L14.0082 15.5308L13.0896 16.5422L13.125 17.3557L13.3879 17.6197Z" fill="#407093"/>
                <path d="M7.71198 10.1504C8.09765 10.1504 8.41029 9.83773 8.41029 9.45206C8.41029 9.0664 8.09765 8.75375 7.71198 8.75375C7.32632 8.75375 7.01367 9.0664 7.01367 9.45206C7.01367 9.83773 7.32632 10.1504 7.71198 10.1504Z" fill="#707DD3"/>
                <path d="M0.696879 12.0555L0.985125 12.6553L1.13663 12.252C1.23451 11.9916 1.48768 11.8226 1.76575 11.8322L2.48141 11.8569C2.76797 11.8668 2.92027 11.5222 2.72003 11.317L1.61166 10.1806L1.48162 10.2228C0.719133 10.4701 0.349624 11.333 0.696879 12.0555Z" fill="#407093"/>
                <path d="M2.72002 11.317L1.61165 10.1806L1.4816 10.2228C1.22711 10.3054 1.0167 10.4568 0.861816 10.6483L1.78778 11.5977C1.85681 11.6684 1.89119 11.7525 1.89879 11.8368L2.48139 11.8569C2.76795 11.8668 2.92025 11.5222 2.72002 11.317Z" fill="#365E7D"/>
                <path d="M4.7724 12.9745C5.02531 12.9745 5.23034 12.7694 5.23034 12.5165C5.23034 12.2636 5.02531 12.0586 4.7724 12.0586C4.51948 12.0586 4.31445 12.2636 4.31445 12.5165C4.31445 12.7694 4.51948 12.9745 4.7724 12.9745Z" fill="#FFC250"/>
                <path d="M6.54242 12.9745C6.79533 12.9745 7.00036 12.7694 7.00036 12.5165C7.00036 12.2636 6.79533 12.0586 6.54242 12.0586C6.2895 12.0586 6.08447 12.2636 6.08447 12.5165C6.08447 12.7694 6.2895 12.9745 6.54242 12.9745Z" fill="#FFC250"/>
                <path d="M5.79803 14.2459C6.05095 14.2459 6.25598 14.0408 6.25598 13.7879C6.25598 13.535 6.05095 13.33 5.79803 13.33C5.54512 13.33 5.34009 13.535 5.34009 13.7879C5.34009 14.0408 5.54512 14.2459 5.79803 14.2459Z" fill="#FFC250"/>
                <path d="M16.0098 16.1798C16.3683 16.1798 16.6588 15.8892 16.6588 15.5308C16.6588 15.1724 16.3683 14.8818 16.0098 14.8818C15.6514 14.8818 15.3608 15.1724 15.3608 15.5308C15.3608 15.8892 15.6514 16.1798 16.0098 16.1798Z" fill="#95D6A4"/>
                <path d="M13.6433 16.5013L13.0897 16.5423L13.033 16.6047C12.8762 16.7773 12.8607 17.0359 12.9958 17.226L13.1251 17.3558L13.7035 17.3129C13.9276 17.2963 14.0959 17.1011 14.0793 16.877C14.0627 16.6529 13.8678 16.4852 13.6433 16.5013Z" fill="#E28086"/>
                <path d="M13.2494 6.65151L14.3001 6.70282L16.0543 6.47479C16.0543 6.47479 16.8545 6.56882 17.2516 6.16651C17.4899 5.92514 17.6701 5.62229 17.7653 5.27741L18.6991 1.89555C18.7993 1.53274 18.4578 1.20315 18.0988 1.31616L15.6882 2.07506C14.8644 2.33441 14.2002 2.94945 13.8784 3.7509L12.9201 6.13782C12.8242 6.37671 12.9923 6.63896 13.2494 6.65151Z" fill="#FFE07D"/>
                <path d="M18.0987 1.31614L16.6848 1.76127C16.6853 1.80499 16.6797 1.84997 16.6671 1.89554L15.7333 5.27739C15.5373 5.9872 14.9815 6.5185 14.3 6.7028L15.7004 6.7712C16.6534 6.81776 17.5113 6.19713 17.7652 5.27739L18.699 1.89554C18.7992 1.53272 18.4577 1.20308 18.0987 1.31614Z" fill="#FFD064"/>
                <path d="M16.7797 11.9067L16.893 11.9288C17.9744 12.14 18.9503 12.7168 19.6568 13.5623L21.786 16.1105C22.6033 17.0886 23.1367 18.2721 23.3283 19.5322L23.8206 22.7699C23.8503 22.9655 23.8892 23.1594 23.9354 23.3515H26.1628C26.3462 23.3515 26.4774 23.173 26.4211 22.9984C26.3062 22.6427 26.2197 22.2781 26.1634 21.9079L25.6711 18.6702C25.4795 17.4101 24.9461 16.2266 24.1289 15.2485L21.9997 12.7003C21.2932 11.8548 20.3173 11.278 19.2359 11.0668L19.1226 11.0447C17.8304 10.7924 16.4971 11.083 15.4309 11.8372C15.8768 11.7971 16.3307 11.819 16.7797 11.9067Z" fill="#365E7D"/>
                <path d="M21.0773 13.2973C21.0773 13.2973 21.6635 12.7126 21.6922 12.3657C21.7351 11.8473 21.6314 11.32 21.3817 10.8474L20.1533 8.52195C20.0065 8.24399 19.5929 8.29946 19.5245 8.60627L18.9184 11.3241C18.8674 11.5525 18.9163 11.7917 19.0527 11.9819L20.0496 13.3718L21.0773 13.2973Z" fill="#4A80AA"/>
                <path d="M21.3816 10.8475L20.1532 8.52198C20.0064 8.24402 19.5928 8.29949 19.5244 8.6063L19.3025 9.60129L19.9927 10.9078C20.3984 11.6758 20.4176 12.5882 20.0495 13.3719L20.4687 13.9563C20.6423 14.1984 21.0111 14.1693 21.1446 13.9028L21.4089 13.3753C21.8085 12.5776 21.7983 11.6362 21.3816 10.8475Z" fill="#407093"/>
                <path d="M21.8908 27C23.65 27 25.0761 25.5739 25.0761 23.8147C25.0761 22.0556 23.65 20.6295 21.8908 20.6295C20.1317 20.6295 18.7056 22.0556 18.7056 23.8147C18.7056 25.5739 20.1317 27 21.8908 27Z" fill="#B3E59F"/>
                <path d="M23.7585 21.2352C24.1392 21.76 24.3643 22.405 24.3643 23.1029C24.3643 24.8621 22.9382 26.2882 21.179 26.2882C20.4811 26.2882 19.8361 26.0631 19.3113 25.6824C19.8901 26.4805 20.8296 27 21.8908 27C23.6499 27 25.076 25.5739 25.076 23.8148C25.0761 22.7535 24.5566 21.8141 23.7585 21.2352Z" fill="#95D6A4"/>
                <path d="M21.5329 25.0129C21.425 25.0129 21.3215 24.97 21.2451 24.8937L20.4341 24.0827C20.2752 23.9237 20.2752 23.6661 20.4341 23.5071C20.593 23.3483 20.8508 23.3483 21.0096 23.5071L21.5329 24.0304L22.8689 22.6943C23.0278 22.5355 23.2855 22.5355 23.4444 22.6943C23.6034 22.8532 23.6034 23.1109 23.4444 23.2698L21.8206 24.8937C21.7443 24.97 21.6408 25.0129 21.5329 25.0129Z" fill="#F2FBFF"/>
                <path d="M12.781 22.4157C12.911 21.9771 12.5823 21.5369 12.1248 21.5369C11.6751 21.5369 11.3476 21.1105 11.4637 20.6759L11.5074 20.5121C11.6235 20.0776 11.296 19.6512 10.8462 19.6512H10.7546C10.3173 19.6512 9.99216 19.2466 10.0862 18.8195L10.1348 18.599C10.2289 18.172 9.90378 17.7674 9.46645 17.7674H8.5128L7.75875 20.2733C7.53875 21.0044 7.427 21.7637 7.427 22.5272V23.0801C7.427 23.23 7.54845 23.3515 7.69832 23.3515H12.5037L12.781 22.4157Z" fill="#F9F6F6"/>
                <path d="M19.7033 16.9414L21.0874 17.132C21.31 17.1626 21.5154 17.0071 21.5461 16.7844C21.5768 16.5618 21.4211 16.3564 21.1984 16.3257L19.8143 16.1351C19.045 16.0291 18.2725 16.1587 17.5784 16.5102L16.7242 16.9472C16.555 17.0339 16.451 17.2127 16.4595 17.4028C16.4679 17.5928 16.5873 17.7617 16.7638 17.8331L17.7131 18.2166C18.1247 18.3788 18.4905 18.6453 18.771 18.9872L19.244 19.5637C19.3245 19.6618 19.4412 19.7125 19.5589 19.7125C19.6497 19.7125 19.7411 19.6823 19.8168 19.6202C19.9906 19.4777 20.0159 19.2213 19.8733 19.0474L19.4003 18.471C19.2133 18.2431 18.9974 18.0409 18.7599 17.8692C19.083 17.9409 19.3938 18.0648 19.6792 18.2382L20.8929 18.9757C20.959 19.0159 21.0319 19.0349 21.1039 19.0349C21.2414 19.0349 21.3755 18.9653 21.4521 18.8392C21.5688 18.6471 21.5077 18.3968 21.3156 18.2801L20.1019 17.5427C19.6265 17.2538 19.096 17.0729 18.5471 17.0091C18.9218 16.9116 19.313 16.8878 19.7033 16.9414Z" fill="#4A80AA"/>
              </svg>
              <h1>100% guarantee of pet identification</h1>
            </div>
          </div>
          <div className="flex gap-6 mt-4 px-4  items-center">
            <div className="flex gap-2 items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 11.25L12.5 13.75M12.5 6.25L7.5 8.75M15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5ZM5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10C7.5 11.3807 6.38071 12.5 5 12.5ZM15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5C17.5 6.38071 16.3807 7.5 15 7.5Z" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h1>Share</h1>
            </div>

            <svg width="129" height="19" viewBox="0 0 129 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_108_1609)">
              <path d="M18.7692 9.38461C18.7692 4.20163 14.5676 0 9.38461 0C4.20163 0 0 4.20163 0 9.38461C0 14.0687 3.4318 17.9512 7.91827 18.6552V12.0974H5.53546V9.38461H7.91827V7.31707C7.91827 4.96505 9.31936 3.66587 11.463 3.66587C12.4894 3.66587 13.5637 3.84916 13.5637 3.84916V6.15865H12.3804C11.2146 6.15865 10.851 6.88211 10.851 7.625V9.38461H13.4537L13.0376 12.0974H10.851V18.6552C15.3374 17.9512 18.7692 14.0687 18.7692 9.38461Z" fill="#99A2A5"/>
              </g>
              <g clip-path="url(#clip1_108_1609)">
              <path d="M42.6483 17.0097C49.7292 17.0097 53.6033 11.1417 53.6033 6.05458C53.6033 5.88962 53.5997 5.72099 53.5923 5.55603C54.346 5.01101 54.9963 4.33594 55.5129 3.56253C54.811 3.8748 54.0658 4.07875 53.3027 4.1674C54.1062 3.68579 54.7078 2.9292 54.996 2.03789C54.2401 2.48585 53.4135 2.80184 52.5516 2.97232C51.9708 2.35525 51.203 1.94667 50.3667 1.80976C49.5305 1.67285 48.6724 1.81523 47.9252 2.2149C47.178 2.61456 46.5833 3.24924 46.2329 4.02082C45.8826 4.7924 45.7962 5.65789 45.9871 6.48349C44.4566 6.40669 42.9593 6.0091 41.5924 5.31651C40.2254 4.62392 39.0192 3.65179 38.052 2.46314C37.5604 3.31067 37.41 4.31357 37.6313 5.26802C37.8526 6.22247 38.429 7.05685 39.2434 7.60158C38.632 7.58217 38.034 7.41756 37.4988 7.12135V7.16901C37.4983 8.05842 37.8058 8.92059 38.369 9.60894C38.9322 10.2973 39.7165 10.7693 40.5884 10.9448C40.0221 11.0998 39.4276 11.1224 38.8512 11.0108C39.0972 11.7757 39.5759 12.4447 40.2205 12.9245C40.865 13.4042 41.6433 13.6708 42.4466 13.6869C41.0828 14.7582 39.3981 15.3393 37.6638 15.3366C37.3562 15.3361 37.049 15.3172 36.7437 15.2801C38.5055 16.4104 40.555 17.0107 42.6483 17.0097Z" fill="#99A2A5"/>
              </g>
              <g clip-path="url(#clip2_108_1609)">
              <path d="M82.8719 1.68996C85.3794 1.68996 85.6763 1.70096 86.6624 1.74495C87.5789 1.78528 88.0738 1.93924 88.4037 2.06755C88.8399 2.23618 89.1552 2.44147 89.4815 2.76773C89.8114 3.09766 90.013 3.40926 90.1817 3.84549C90.31 4.17542 90.4639 4.67398 90.5043 5.58678C90.5482 6.57656 90.5592 6.8735 90.5592 9.37728C90.5592 11.8847 90.5482 12.1817 90.5043 13.1678C90.4639 14.0843 90.31 14.5791 90.1817 14.9091C90.013 15.3453 89.8077 15.6606 89.4815 15.9868C89.1515 16.3168 88.8399 16.5184 88.4037 16.687C88.0738 16.8153 87.5752 16.9693 86.6624 17.0096C85.6726 17.0536 85.3757 17.0646 82.8719 17.0646C80.3645 17.0646 80.0675 17.0536 79.0814 17.0096C78.1649 16.9693 77.6701 16.8153 77.3401 16.687C76.9039 16.5184 76.5886 16.3131 76.2624 15.9868C75.9324 15.6569 75.7308 15.3453 75.5622 14.9091C75.4339 14.5791 75.2799 14.0806 75.2396 13.1678C75.1956 12.178 75.1846 11.8811 75.1846 9.37728C75.1846 6.86983 75.1956 6.5729 75.2396 5.58678C75.2799 4.67031 75.4339 4.17542 75.5622 3.84549C75.7308 3.40926 75.9361 3.09399 76.2624 2.76773C76.5923 2.4378 76.9039 2.23618 77.3401 2.06755C77.6701 1.93924 78.1686 1.78528 79.0814 1.74495C80.0675 1.70096 80.3645 1.68996 82.8719 1.68996ZM82.8719 0C80.3241 0 80.0052 0.0109976 79.0044 0.054988C78.0073 0.0989784 77.3218 0.260276 76.7279 0.491226C76.1084 0.733173 75.5842 1.0521 75.0636 1.57632C74.5394 2.09687 74.2205 2.62109 73.9785 3.23696C73.7476 3.8345 73.5863 4.51635 73.5423 5.51346C73.4983 6.51791 73.4873 6.83684 73.4873 9.38461C73.4873 11.9324 73.4983 12.2513 73.5423 13.2521C73.5863 14.2492 73.7476 14.9347 73.9785 15.5286C74.2205 16.1481 74.5394 16.6724 75.0636 17.1929C75.5842 17.7135 76.1084 18.0361 76.7243 18.2743C77.3218 18.5053 78.0037 18.6666 79.0008 18.7106C80.0015 18.7546 80.3205 18.7656 82.8683 18.7656C85.416 18.7656 85.735 18.7546 86.7357 18.7106C87.7329 18.6666 88.4184 18.5053 89.0122 18.2743C89.6281 18.0361 90.1523 17.7135 90.6729 17.1929C91.1934 16.6724 91.516 16.1481 91.7543 15.5323C91.9853 14.9347 92.1466 14.2529 92.1905 13.2558C92.2345 12.255 92.2455 11.9361 92.2455 9.38828C92.2455 6.84051 92.2345 6.52157 92.1905 5.52079C92.1466 4.52368 91.9853 3.83816 91.7543 3.24429C91.5234 2.62109 91.2044 2.09687 90.6802 1.57632C90.1597 1.05577 89.6354 0.733173 89.0196 0.494892C88.422 0.263942 87.7402 0.102644 86.7431 0.0586538C85.7386 0.0109976 85.4197 0 82.8719 0Z" fill="#99A2A5"/>
              <path d="M82.8719 4.564C80.2105 4.564 78.0513 6.72319 78.0513 9.38461C78.0513 12.046 80.2105 14.2052 82.8719 14.2052C85.5333 14.2052 87.6925 12.046 87.6925 9.38461C87.6925 6.72319 85.5333 4.564 82.8719 4.564ZM82.8719 12.5116C81.1453 12.5116 79.7449 11.1112 79.7449 9.38461C79.7449 7.65799 81.1453 6.25762 82.8719 6.25762C84.5985 6.25762 85.9989 7.65799 85.9989 9.38461C85.9989 11.1112 84.5985 12.5116 82.8719 12.5116Z" fill="#99A2A5"/>
              <path d="M89.0087 4.37335C89.0087 4.99654 88.5028 5.49877 87.8832 5.49877C87.26 5.49877 86.7578 4.99288 86.7578 4.37335C86.7578 3.75015 87.2637 3.24792 87.8832 3.24792C88.5028 3.24792 89.0087 3.75381 89.0087 4.37335Z" fill="#99A2A5"/>
              </g>
              <g clip-path="url(#clip3_108_1609)">
              <path d="M128.813 5.63082C128.813 5.63082 128.63 4.33677 128.065 3.76856C127.35 3.02072 126.551 3.01706 126.185 2.97307C123.56 2.78244 119.619 2.78244 119.619 2.78244H119.612C119.612 2.78244 115.671 2.78244 113.046 2.97307C112.68 3.01706 111.88 3.02072 111.166 3.76856C110.601 4.33677 110.421 5.63082 110.421 5.63082C110.421 5.63082 110.231 7.15215 110.231 8.66982V10.0922C110.231 11.6098 110.418 13.1312 110.418 13.1312C110.418 13.1312 110.601 14.4252 111.162 14.9934C111.877 15.7413 112.815 15.7156 113.233 15.7963C114.736 15.9392 119.615 15.9832 119.615 15.9832C119.615 15.9832 123.56 15.9759 126.185 15.7889C126.551 15.7449 127.35 15.7413 128.065 14.9934C128.63 14.4252 128.813 13.1312 128.813 13.1312C128.813 13.1312 129 11.6135 129 10.0922V8.66982C129 7.15215 128.813 5.63082 128.813 5.63082ZM117.676 11.8188V6.54362L122.746 9.19037L117.676 11.8188Z" fill="#99A2A5"/>
              </g>
              <defs>
              <clipPath id="clip0_108_1609">
              <rect width="18.7692" height="18.7692" fill="white"/>
              </clipPath>
              <clipPath id="clip1_108_1609">
              <rect width="18.7692" height="18.7692" fill="white" transform="translate(36.7437)"/>
              </clipPath>
              <clipPath id="clip2_108_1609">
              <rect width="18.7692" height="18.7692" fill="white" transform="translate(73.4873)"/>
              </clipPath>
              <clipPath id="clip3_108_1609">
              <rect width="18.7692" height="18.7692" fill="white" transform="translate(110.231)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="md:w-1/2 md:pl-8 p-4">
          <div className="text-zinc-500 text-sm py-2 sm:p-0">
            Home > Dog > {pet.breed} > {pet.breed}
          </div>
          <h1 className="text-3xl font-bold">{pet.breed}</h1>
          <p className="text-xl text-blue-600 font-semibold mt-2">
            {pet.price}
          </p>

          <div className="flex space-x-3 lg:space-x-4 mt-4">
            <button className="bg-[#003459] text-white px-4 py-2 rounded-full">
              Contact Us
            </button>
            <button className="border border-[#003459] text-[#003459] px-4 py-2 rounded-full">
              Chat with Montie
            </button>
          </div>

          <div className="mt-8">
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                AKU
              </h3>
              <p className="max-w-80 text-left">: #1000078</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Gender
              </h3>

              <p className="max-w-80 text-left">: Female</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Size
              </h3>

              <p className="max-w-80 text-left">: Small</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Color
              </h3>

              <p className="max-w-80 text-left">: Apricot & Tan</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Vaccinated
              </h3>

              <p className="max-w-80 text-left">: Yes</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Dewormed
              </h3>

              <p className="max-w-80 text-left">: Yes</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Cert
              </h3>

              <p className="max-w-80 text-left">: Yes (MKA)</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Microchip
              </h3>

              <p className="max-w-80 text-left">: Yes</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Location
              </h3>

              <p className="max-w-80 text-left">: Vietnam</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Published Date
              </h3>

              <p className="max-w-80 text-left">: 12-Oct-2022</p>
            </div>
            <div className="flex justify-between float-start mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Additional Information
              </h3>

              <p className="max-w-80 text-left">
                : Pure breed Shiba Inu. Good body structure with microchip and
                vaccinated.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <CustomerSwiper />
      </div>
      
      <MorePuppiesList />
    </div>
  );
};

export default PetDetailPage;
