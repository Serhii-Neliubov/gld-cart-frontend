import {Link, useNavigate} from "react-router-dom";
import React, { FC, useState } from "react";
import {t} from "i18next";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "store/store.ts";
import { logout, userDataSelector } from "store/slices/userDataSlice.ts";

import {useInput} from "@/hooks/useInput.tsx";
import {validate} from "@/utils/validate.ts";

import UiInput from "@/components/ui/UiInput.tsx";
import UiTextarea from "@/components/ui/UiTextarea.tsx";

// Order Details
import order_img1 from "@/assets/images/ProfilePage/order-details/img1.svg";
import order_img2 from "@/assets/images/ProfilePage/order-details/img2.svg";
import order_img3 from "@/assets/images/ProfilePage/order-details/img3.svg";
import order_img4 from "@/assets/images/ProfilePage/order-details/img4.svg";
import order_img5 from "@/assets/images/ProfilePage/order-details/img5.svg";
import IconPerson from "assets/icons/IconPerson.tsx";
import IconMobile from "assets/icons/IconMobile.tsx";
import IconLocation from "assets/icons/IconLocation.tsx";

const ProfilePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector(userDataSelector);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [selectedLabel, setSelectedLabel] = useState("Profile");
  const [selectedOrderLabel, setSelectedOrderLabel] = useState("All Orders");
  const [isAddressMenuOpen, setIsAddressMenuOpen] = useState(false);

  // Profile
  const name = useInput('');
  const surname = useInput('');
  const phone_number = useInput('');
  const address = useInput('');
  const bio = useInput('');

  // Change Password
  const oldPassword = useInput('');
  const newPassword = useInput('');
  const confirmPassword = useInput('');

  const updateProfileHandler = () => {
    const body = {
      name: name.value,
      surname: surname.value,
      phone_number: phone_number.value,
      address: address.value,
      bio: bio.value,
    };

    const errors = validate(body);

    if (errors.length > 0) {
      setErrorFields(errors);
      return;
    }

    try {
      console.log(body);
    } catch (e) {
      console.log(e);
    }
  }

  const changePasswordHandler = () => {
    if(newPassword.value !== confirmPassword.value) {
      return setErrorFields(['newPassword', 'confirmPassword']);
    }

    const body = {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value,
    };

    const errors = validate(body);

    if (errors.length > 0) {
      setErrorFields(errors);
      return;
    }

    try {
      console.log(body);
    } catch (e) {
      console.log(e);
    }
  }

  const editAddressHandler = () => {
    try {
      // Edit address
    } catch (e) {
      console.log(e);
    }
  }

  const createAddressHandler = () => {
    try {
      // Add new address
    } catch (e) {
      console.log(e);
    }
  }

  const openAddressEditMenu = () => {
    try {
      // Add new address
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={'max-w-[1240px] px-[20px] justify-between flex gap-[50px] mx-auto pt-[90px] pb-[160px]'}>
        <div className={'w-[360px]'}>
          <div className={'w-full h-full bg-white drop-shadow-lg'}>
            <div onClick={() => setSelectedLabel('Profile')}
                 className={selectedLabel === t('Profile') ? 'flex gap-4 items-center bg-gray-100 bg-opacity-80 cursor-pointer py-[20px] px-[30px]' : 'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 8.69565C7.7625 8.69565 6.75 8.28986 5.9625 7.47826C5.175 6.66667 4.78125 5.62319 4.78125 4.34783C4.78125 3.07246 5.175 2.02899 5.9625 1.21739C6.75 0.405797 7.7625 0 9 0C10.2375 0 11.25 0.405797 12.0375 1.21739C12.825 2.02899 13.2187 3.07246 13.2187 4.34783C13.2187 5.62319 12.825 6.66667 12.0375 7.47826C11.25 8.28986 10.2375 8.69565 9 8.69565ZM16.3125 18H1.6875C1.22344 18 0.826172 17.8297 0.495703 17.4891C0.165234 17.1486 0 16.7391 0 16.2609V15.2754C0 14.5411 0.178125 13.913 0.534375 13.3913C0.890625 12.8696 1.35 12.4734 1.9125 12.2029C3.16875 11.6232 4.37344 11.1884 5.52656 10.8986C6.67969 10.6087 7.8375 10.4638 9 10.4638C10.1625 10.4638 11.3156 10.6135 12.4594 10.913C13.6031 11.2126 14.8024 11.6444 16.0572 12.2085C16.644 12.4815 17.1146 12.8773 17.4687 13.3959C17.8229 13.9146 18 14.5411 18 15.2754V16.2609C18 16.7391 17.8348 17.1486 17.5043 17.4891C17.1738 17.8297 16.7766 18 16.3125 18ZM1.6875 16.2609H16.3125V15.2754C16.3125 14.9662 16.2234 14.6715 16.0453 14.3913C15.8672 14.1111 15.6469 13.9034 15.3844 13.7681C14.1844 13.1691 13.0875 12.7585 12.0937 12.5362C11.1 12.314 10.0687 12.2029 9 12.2029C7.93125 12.2029 6.89062 12.314 5.87812 12.5362C4.86562 12.7585 3.76875 13.1691 2.5875 13.7681C2.325 13.9034 2.10937 14.1111 1.94062 14.3913C1.77187 14.6715 1.6875 14.9662 1.6875 15.2754V16.2609ZM9 6.95652C9.73125 6.95652 10.3359 6.71015 10.8141 6.21739C11.2922 5.72464 11.5312 5.10145 11.5312 4.34783C11.5312 3.5942 11.2922 2.97101 10.8141 2.47826C10.3359 1.98551 9.73125 1.73913 9 1.73913C8.26875 1.73913 7.66406 1.98551 7.18594 2.47826C6.70781 2.97101 6.46875 3.5942 6.46875 4.34783C6.46875 5.10145 6.70781 5.72464 7.18594 6.21739C7.66406 6.71015 8.26875 6.95652 9 6.95652Z"
                    fill={selectedLabel === 'Profile' ? '#0989FF' : '#767A7D'}
                  />
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span
                  className={selectedLabel === 'Profile' ? 'text-[#0989FF]' : 'text-[#000000]'}>{t('Profile')}</span>
              </div>
            </div>
            <div onClick={() => setSelectedLabel('Address')}
                 className={selectedLabel === t('Address') ? 'flex gap-4 items-center bg-gray-100 bg-opacity-80 cursor-pointer py-[20px] px-[30px]' : 'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="20" height="22" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M10.2262 1.80576C9.11161 0.670199 7.60607 0.0223447 6.02978 0H5.97009C4.39367 0.02202 2.8879 0.669659 1.7731 1.80514C0.658306 2.94062 0.0224643 4.47434 0.000845409 6.08C-0.0185546 7.22 0.296323 8.34024 0.905186 9.29784L5.60298 19H6.39838L11.0947 9.29784C11.705 8.34024 12.0199 7.22 11.999 6.08C11.9771 4.47446 11.341 2.94099 10.2262 1.80576ZM5.88801 1.52L6.01038 1.5352L6.12081 1.52C7.29312 1.57201 8.40133 2.07946 9.21763 2.93805C10.0339 3.79664 10.4963 4.94113 10.5097 6.13624C10.5211 6.98444 10.278 7.81598 9.81279 8.5196L9.78294 8.57128L9.75757 8.62448L5.99993 16.3841L2.24379 8.63208L2.21842 8.5728L2.18857 8.52112C1.72339 7.8175 1.48025 6.98596 1.49166 6.13776C1.50439 4.94126 1.9673 3.79533 2.78498 2.93618C3.60266 2.07703 4.71278 1.57014 5.88652 1.52H5.88801ZM6.8013 4.81688C6.63835 4.7059 6.45554 4.62869 6.26329 4.58967C6.07105 4.55065 5.87314 4.55059 5.68087 4.58947C5.4886 4.62836 5.30573 4.70543 5.1427 4.8163C4.97968 4.92717 4.83968 5.06966 4.73072 5.23564C4.62176 5.40162 4.54596 5.58782 4.50766 5.78364C4.46935 5.97945 4.46928 6.18103 4.50746 6.37687C4.54564 6.57271 4.62131 6.75897 4.73016 6.92502C4.83901 7.09107 4.9789 7.23366 5.14186 7.34464C5.47095 7.56878 5.87399 7.65058 6.26229 7.57205C6.6506 7.49352 6.99238 7.26108 7.21244 6.92588C7.43249 6.59068 7.5128 6.18017 7.4357 5.78465C7.3586 5.38914 7.1304 5.04102 6.8013 4.81688ZM4.31362 3.55224C4.63923 3.31911 5.00734 3.15466 5.39627 3.06858C5.7852 2.9825 6.18711 2.97652 6.57835 3.051C6.96958 3.12548 7.34224 3.27891 7.6744 3.50227C8.00655 3.72562 8.29149 4.01438 8.51245 4.35157C8.73341 4.68875 8.88593 5.06754 8.96103 5.46566C9.03612 5.86377 9.03229 6.27316 8.94974 6.66974C8.8672 7.06632 8.70761 7.44208 8.48037 7.77491C8.25313 8.10773 7.96283 8.39091 7.62655 8.60776C6.9683 9.03225 6.17317 9.17774 5.41102 9.01316C4.64886 8.84858 3.9801 8.38698 3.54758 7.72695C3.11506 7.06692 2.95306 6.26079 3.0962 5.48075C3.23933 4.70071 3.67625 4.00859 4.31362 3.55224Z"
                        fill={selectedLabel === 'Address' ? '#0989FF' : '#767A7D'}
                  />
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span
                  className={selectedLabel === 'Address' ? 'text-[#0989FF]' : 'text-[#000000]'}>{t('Address')}</span>
              </div>
            </div>
            <div onClick={() => setSelectedLabel('My Orders')}
                 className={selectedLabel === t('My Orders') ? 'flex gap-4 items-center bg-gray-100 bg-opacity-80 cursor-pointer py-[20px] px-[30px]' : 'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.5 13.85C4.7 13.85 4.875 13.775 5.025 13.625C5.175 13.475 5.25 13.3 5.25 13.1C5.25 12.9 5.175 12.725 5.025 12.575C4.875 12.425 4.7 12.35 4.5 12.35C4.3 12.35 4.125 12.425 3.975 12.575C3.825 12.725 3.75 12.9 3.75 13.1C3.75 13.3 3.825 13.475 3.975 13.625C4.125 13.775 4.3 13.85 4.5 13.85ZM4.5 9.75C4.7 9.75 4.875 9.675 5.025 9.525C5.175 9.375 5.25 9.2 5.25 9C5.25 8.8 5.175 8.625 5.025 8.475C4.875 8.325 4.7 8.25 4.5 8.25C4.3 8.25 4.125 8.325 3.975 8.475C3.825 8.625 3.75 8.8 3.75 9C3.75 9.2 3.825 9.375 3.975 9.525C4.125 9.675 4.3 9.75 4.5 9.75ZM4.5 5.65C4.7 5.65 4.875 5.575 5.025 5.425C5.175 5.275 5.25 5.1 5.25 4.9C5.25 4.7 5.175 4.525 5.025 4.375C4.875 4.225 4.7 4.15 4.5 4.15C4.3 4.15 4.125 4.225 3.975 4.375C3.825 4.525 3.75 4.7 3.75 4.9C3.75 5.1 3.825 5.275 3.975 5.425C4.125 5.575 4.3 5.65 4.5 5.65ZM8.55 13.85H13.15C13.3625 13.85 13.5406 13.7777 13.6844 13.6331C13.8281 13.4885 13.9 13.3094 13.9 13.0956C13.9 12.8819 13.8281 12.7042 13.6844 12.5625C13.5406 12.4208 13.3625 12.35 13.15 12.35H8.55C8.3375 12.35 8.15938 12.4223 8.01562 12.5669C7.87188 12.7115 7.8 12.8906 7.8 13.1044C7.8 13.3181 7.87188 13.4958 8.01562 13.6375C8.15938 13.7792 8.3375 13.85 8.55 13.85ZM8.55 9.75H13.15C13.3625 9.75 13.5406 9.67771 13.6844 9.53313C13.8281 9.38853 13.9 9.20936 13.9 8.99563C13.9 8.78188 13.8281 8.60417 13.6844 8.4625C13.5406 8.32083 13.3625 8.25 13.15 8.25H8.55C8.3375 8.25 8.15938 8.32229 8.01562 8.46688C7.87188 8.61147 7.8 8.79064 7.8 9.00437C7.8 9.21812 7.87188 9.39583 8.01562 9.5375C8.15938 9.67917 8.3375 9.75 8.55 9.75ZM8.55 5.65H13.15C13.3625 5.65 13.5406 5.57771 13.6844 5.43313C13.8281 5.28853 13.9 5.10936 13.9 4.89563C13.9 4.68188 13.8281 4.50417 13.6844 4.3625C13.5406 4.22083 13.3625 4.15 13.15 4.15H8.55C8.3375 4.15 8.15938 4.22229 8.01562 4.36687C7.87188 4.51147 7.8 4.69064 7.8 4.90437C7.8 5.11812 7.87188 5.29583 8.01562 5.4375C8.15938 5.57917 8.3375 5.65 8.55 5.65ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.9 0 17.25 0.15 17.55 0.45C17.85 0.75 18 1.1 18 1.5V16.5C18 16.9 17.85 17.25 17.55 17.55C17.25 17.85 16.9 18 16.5 18H1.5ZM1.5 16.5H16.5V1.5H1.5V16.5Z"
                    fill={selectedLabel === 'My Orders' ? '#0989FF' : '#767A7D'}
                  />
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span
                  className={selectedLabel === 'My Orders' ? 'text-[#0989FF]' : 'text-[#000000]'}>{t('My Orders')}</span>
              </div>
            </div>
            <div onClick={() => navigate('/wishlist')}
                 className={'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.09 13.5586L9 13.6458L8.901 13.5586C4.626 9.80054 1.8 7.31553 1.8 4.79564C1.8 3.05177 3.15 1.74387 4.95 1.74387C6.336 1.74387 7.686 2.6158 8.163 3.80164H9.837C10.314 2.6158 11.664 1.74387 13.05 1.74387C14.85 1.74387 16.2 3.05177 16.2 4.79564C16.2 7.31553 13.374 9.80054 9.09 13.5586ZM13.05 0C11.484 0 9.981 0.706267 9 1.81362C8.019 0.706267 6.516 0 4.95 0C2.178 0 0 2.10136 0 4.79564C0 8.08283 3.06 10.7771 7.695 14.849L9 16L10.305 14.849C14.94 10.7771 18 8.08283 18 4.79564C18 2.10136 15.822 0 13.05 0Z"
                    fill='#767A7D'
                  />
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span className={'text-[#000000]'}>{t('Wishlist')}</span>
              </div>
            </div>
            <div onClick={() => setSelectedLabel('Change Password')}
                 className={selectedLabel === t('Change Password') ? 'flex gap-4 items-center bg-gray-100 bg-opacity-80 cursor-pointer py-[20px] px-[30px]' : 'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="19" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.40625 19C1.01953 19 0.688477 18.8671 0.413086 18.6013C0.137695 18.3356 0 18.0161 0 17.6429V7.82619C0 7.45298 0.137695 7.13348 0.413086 6.86771C0.688477 6.60193 1.01953 6.46905 1.40625 6.46905H3.04688V4.29762C3.04688 3.10861 3.4813 2.09509 4.35014 1.25705C5.21898 0.419018 6.26977 0 7.50248 0C8.7352 0 9.78516 0.419018 10.6523 1.25705C11.5195 2.09509 11.9531 3.10861 11.9531 4.29762V6.46905H13.5938C13.9805 6.46905 14.3115 6.60193 14.5869 6.86771C14.8623 7.13348 15 7.45298 15 7.82619V17.6429C15 18.0161 14.8623 18.3356 14.5869 18.6013C14.3115 18.8671 13.9805 19 13.5938 19H1.40625ZM1.40625 17.6429H13.5938V7.82619H1.40625V17.6429ZM7.50394 14.4762C8.00131 14.4762 8.42578 14.3101 8.77734 13.9779C9.12891 13.6457 9.30469 13.2463 9.30469 12.7798C9.30469 12.3274 9.12759 11.9165 8.77341 11.547C8.41922 11.1776 7.99344 10.9929 7.49606 10.9929C6.99869 10.9929 6.57422 11.1776 6.22266 11.547C5.87109 11.9165 5.69531 12.3312 5.69531 12.7911C5.69531 13.251 5.87241 13.6468 6.22659 13.9786C6.58078 14.3103 7.00656 14.4762 7.50394 14.4762ZM4.45312 6.46905H10.5469V4.29762C10.5469 3.48082 10.2509 2.78654 9.65902 2.21479C9.06709 1.64302 8.34834 1.35714 7.50277 1.35714C6.65717 1.35714 5.9375 1.64302 5.34375 2.21479C4.75 2.78654 4.45312 3.48082 4.45312 4.29762V6.46905Z"
                    fill={selectedLabel === 'Change Password' ? '#0989FF' : '#767A7D'}
                  />
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span
                  className={selectedLabel === 'Change Password' ? 'text-[#0989FF]' : 'text-[#000000]'}>{t('Change Password')}</span>
              </div>
            </div>
            <Link to={'/help-center'} className={'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="19" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.07144 13.5C9.26381 13.5 9.42375 13.4353 9.55125 13.3059C9.67875 13.1766 9.7425 13.0163 9.7425 12.825V8.775C9.7425 8.58375 9.67744 8.42344 9.54731 8.29406C9.41717 8.16469 9.25592 8.1 9.06356 8.1C8.87119 8.1 8.71125 8.16469 8.58375 8.29406C8.45625 8.42344 8.3925 8.58375 8.3925 8.775V12.825C8.3925 13.0163 8.45756 13.1766 8.58769 13.3059C8.71783 13.4353 8.87908 13.5 9.07144 13.5ZM8.9996 6.435C9.20987 6.435 9.38625 6.366 9.52875 6.228C9.67125 6.09 9.7425 5.919 9.7425 5.715C9.7425 5.49825 9.67139 5.31656 9.52916 5.16994C9.38691 5.02331 9.21066 4.95 9.00041 4.95C8.79014 4.95 8.61375 5.02331 8.47125 5.16994C8.32875 5.31656 8.2575 5.49825 8.2575 5.715C8.2575 5.919 8.32862 6.09 8.47085 6.228C8.61309 6.366 8.78934 6.435 8.9996 6.435ZM9.00599 18C7.76498 18 6.59872 17.7638 5.50724 17.2913C4.41574 16.8188 3.46125 16.1737 2.64375 15.3563C1.82625 14.5388 1.18125 13.5837 0.70875 12.4911C0.23625 11.3985 0 10.231 0 8.98875C0 7.74647 0.23625 6.57902 0.70875 5.48642C1.18125 4.39381 1.82625 3.4425 2.64375 2.6325C3.46125 1.8225 4.41631 1.18125 5.50892 0.70875C6.60152 0.23625 7.76897 0 9.01125 0C10.2535 0 11.421 0.23625 12.5136 0.70875C13.6062 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8188 4.395 17.2913 5.49C17.7638 6.585 18 7.75301 18 8.99402C18 10.235 17.7638 11.4013 17.2913 12.4928C16.8188 13.5843 16.1775 14.5374 15.3675 15.3521C14.5575 16.1669 13.605 16.8118 12.51 17.2871C11.415 17.7624 10.247 18 9.00599 18ZM9.01125 16.65C11.1338 16.65 12.9375 15.9038 14.4225 14.4113C15.9075 12.9188 16.65 11.1113 16.65 8.98875C16.65 6.86625 15.9089 5.0625 14.4267 3.5775C12.9445 2.0925 11.1356 1.35 9 1.35C6.885 1.35 5.08125 2.09109 3.58875 3.57327C2.09625 5.05547 1.35 6.86438 1.35 9C1.35 11.115 2.09625 12.9188 3.58875 14.4113C5.08125 15.9038 6.88875 16.65 9.01125 16.65Z"
                    fill="#767A7D"/>
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span className={'text-[#000000]'}>{t('Help & Support')}</span>
              </div>
            </Link>
            <div onClick={() => navigate('/terms-and-conditions')}
                 className={'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 11.5H11.5M4 14.5H14.5M4 17.5H8.5M19 19V8.5L11.5 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V19C1 19.7956 1.31607 20.5587 1.87868 21.1213C2.44129 21.6839 3.20435 22 4 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19Z"
                    stroke="#767A7D" strokeLinecap="round" strokeLinejoin="round"/>
                  <path
                    d="M11.5 1V5.5C11.5 6.29565 11.8161 7.05871 12.3787 7.62132C12.9413 8.18393 13.7044 8.5 14.5 8.5H19"
                    stroke="#767A7D" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span className={'text-[#000000]'}>{t('Terms & Conditions')}</span>
              </div>
            </div>
            <div onClick={() => navigate('/contact-us')}
                 className={'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9248 10.8739C10.6611 10.5748 10.3711 10.3109 10.0547 10.0821C9.73828 9.85337 9.39844 9.65689 9.03516 9.49267C8.67188 9.32845 8.30273 9.20821 7.92773 9.13196C7.55273 9.05572 7.16016 9.01466 6.75 9.0088C6.23438 9.0088 5.73633 9.07625 5.25586 9.21114C4.77539 9.34604 4.32715 9.53372 3.91113 9.77419C3.49512 10.0147 3.11719 10.3079 2.77734 10.654C2.4375 11 2.14453 11.3812 1.89844 11.7977C1.65234 12.2141 1.46191 12.6628 1.32715 13.1437C1.19238 13.6246 1.125 14.1232 1.125 14.6393H0C0 13.9355 0.102539 13.2581 0.307617 12.607C0.512695 11.956 0.808594 11.3548 1.19531 10.8035C1.58203 10.2522 2.03906 9.76246 2.56641 9.33431C3.09375 8.90616 3.69141 8.56892 4.35938 8.32258C3.69727 7.88856 3.18164 7.34311 2.8125 6.68622C2.44336 6.02933 2.25586 5.30205 2.25 4.5044C2.25 3.8827 2.36719 3.29912 2.60156 2.75367C2.83594 2.20821 3.15527 1.73021 3.55957 1.31965C3.96387 0.909091 4.44141 0.58651 4.99219 0.351906C5.54297 0.117302 6.12891 0 6.75 0C7.37109 0 7.9541 0.117302 8.49902 0.351906C9.04395 0.58651 9.52148 0.906158 9.93164 1.31085C10.3418 1.71554 10.6641 2.19355 10.8984 2.74487C11.1328 3.29619 11.25 3.8827 11.25 4.5044C11.25 4.8915 11.2031 5.26979 11.1094 5.6393C11.0156 6.0088 10.875 6.35777 10.6875 6.68622C10.5 7.01466 10.2803 7.31672 10.0283 7.59238C9.77637 7.86804 9.48047 8.11144 9.14062 8.32258C9.63281 8.51026 10.0957 8.75073 10.5293 9.04399C10.9629 9.33724 11.3584 9.68035 11.7158 10.0733L10.9248 10.8739ZM3.375 4.5044C3.375 4.97361 3.46289 5.41056 3.63867 5.81525C3.81445 6.21994 4.05469 6.57771 4.35938 6.88856C4.66406 7.19941 5.02148 7.44282 5.43164 7.61877C5.8418 7.79472 6.28125 7.8827 6.75 7.8827C7.21289 7.8827 7.64941 7.79472 8.05957 7.61877C8.46973 7.44282 8.82715 7.20235 9.13184 6.89736C9.43652 6.59238 9.67969 6.2346 9.86133 5.82405C10.043 5.41349 10.1309 4.97361 10.125 4.5044C10.125 4.04106 10.0371 3.60411 9.86133 3.19355C9.68555 2.78299 9.44531 2.42522 9.14062 2.12023C8.83594 1.81525 8.47559 1.57185 8.05957 1.39003C7.64355 1.20821 7.20703 1.12023 6.75 1.1261C6.28125 1.1261 5.84473 1.21408 5.44043 1.39003C5.03613 1.56598 4.67871 1.80645 4.36816 2.11144C4.05762 2.41642 3.81445 2.77713 3.63867 3.19355C3.46289 3.60997 3.375 4.04692 3.375 4.5044ZM16.2422 7.8827C16.4883 7.8827 16.7168 7.92669 16.9277 8.01466C17.1387 8.10264 17.3262 8.22287 17.4902 8.37537C17.6543 8.52786 17.7773 8.71261 17.8594 8.92962C17.9414 9.14663 17.9883 9.3783 18 9.62463C18 9.85337 17.9561 10.0762 17.8682 10.2933C17.7803 10.5103 17.6543 10.7009 17.4902 10.8651L11.1885 17.173L7.875 18L8.70117 14.6833L15.0029 8.38416C15.1729 8.21408 15.3633 8.08798 15.5742 8.00587C15.7852 7.92375 16.0078 7.8827 16.2422 7.8827ZM16.6904 10.0733C16.8135 9.95015 16.875 9.80059 16.875 9.62463C16.875 9.44281 16.8164 9.29619 16.6992 9.18475C16.582 9.07331 16.4297 9.01466 16.2422 9.0088C16.1602 9.0088 16.0811 9.02053 16.0049 9.04399C15.9287 9.06745 15.8613 9.11144 15.8027 9.17595L9.7207 15.2639L9.42188 16.4516L10.6084 16.1525L16.6904 10.0733Z"
                    fill="#767A7D"/>
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span className={'text-[#000000]'}>{t('Contact Us')}</span>
              </div>
            </div>
            <div onClick={() => dispatch(logout)}
                 className={'flex gap-4 items-center hover:bg-[#E9E9E9] cursor-pointer py-[20px] px-[30px]'}>
              <div className={'w-[20px]'}>
                <svg width="19" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 5V3C8 2.46957 8.21071 1.96086 8.58579 1.58579C8.96086 1.21071 9.46957 1 10 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H10C9.46957 17 8.96086 16.7893 8.58579 16.4142C8.21071 16.0391 8 15.5304 8 15V13"
                    stroke="#767A7D" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 9H1M1 9L4 6M1 9L4 12" stroke="#767A7D" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={'hidden sm:block'}>
                <span
                  className={'text-[#000000]'}>{t('Logout')}</span>
              </div>
            </div>
          </div>
        </div>

        {selectedLabel === 'Profile' &&
          <div className={'w-[800px]'}>
            <div className={'flex w-full flex-col'}>
              <h1 className={'text-[20px] sm:text-[30px] mt-0 mb-[20px]'}>{t('Welcome')} {user.name} {user.surname}</h1>
              <div className={'bg-white flex flex-col gap-[15px] drop-shadow-lg border-solid border-[1px] border-[#C5C6C7] p-[35px]'}>
                <span className={'font-semibold text-[26px]'}>{t('Personal Details')}</span>
                <div className={'flex gap-[25px]'}>
                  <UiInput
                    inputValue={name}
                    placeholder={'Eleonor'}
                    errorFields={errorFields}
                    name={'name'}
                    image={<IconPerson />}
                  />

                  <UiInput
                    inputValue={surname}
                    placeholder={'Pena'}
                    errorFields={errorFields}
                    name={'surname'}
                    image={<IconPerson />}
                  />
                </div>
                <UiInput
                  inputValue={phone_number}
                  type={'number'}
                  placeholder={'0123 456 7889'}
                  errorFields={errorFields}
                  name={'phone_number'}
                  image={<IconMobile />}
                />
                <UiInput
                  inputValue={address}
                  placeholder={'3304 Randall Drive'}
                  name={'address'}
                  image={<IconLocation />}
                  errorFields={errorFields}
                />
                <UiTextarea
                  placeholder={'Hi there, this is my bio...'}
                  errorFields={errorFields}
                  textareaValue={bio}
                  name={'bio'}
                />
                <div className={'w-full flex justify-end'}>
                  <button
                    onClick={updateProfileHandler}
                    className={'text-white hover:bg-[#313131] transition-all text-[19px] bg-black py-[15px] w-[200px]'}>Update
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        }

        {selectedLabel === 'Address' &&
          <div className={'flex flex-col w-full'}>
            <div
              className={'bg-white flex flex-col gap-[25px] drop-shadow-lg border-solid border-[1px] border-[#C5C6C7] p-[35px]'}>
              <div className={'flex items-center justify-between gap-[10px]'}>
                <h1 className={'mt-0 text-[30px] uppercase font-semibold'}>Address</h1>
                <button onClick={openAddressEditMenu}
                        className={'py-[5px] px-[15px] transition-all hover:bg-[#029292] bg-[#02A0A0] rounded'}>+ Add
                  new address
                </button>
              </div>
              <div
                className={'bg-white overflow-y-scroll max-h-[454px] drop-shadow-lg justify-between border-solid flex-wrap gap-[25px] flex border-[1px] border-[#C5C6C7] p-[30px]'}>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
                <div
                  className={'p-[20px] max-w-[350px] flex gap-[20px] items-start border-solid border-[1px] border-[#C5C6C7]'}>
                  <div className={'flex max-w-[260px] flex-col gap-3'}>
                    <span>Name Surname</span>
                    <span>Address with postcode</span>
                    <span>Phone number</span>
                  </div>
                  <button onClick={editAddressHandler} className={'text-[#2283DC] uppercase'}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        }

        {selectedLabel === 'My Orders' &&
          <div className={'flex flex-col w-full'}>
            <div
              className={'bg-white flex flex-col gap-[25px] drop-shadow-lg border-solid border-[1px] border-[#C5C6C7] p-[35px]'}>
              <h1 className={'mt-0 text-[30px] mb-[30px] uppercase font-semibold'}>Order details</h1>
              <div className={'flex justify-between gap-[50px] flex-wrap'}>
                <div
                  className={'hover:bg-gray-100 transition-all cursor-pointer p-[30px] gap-[20px] border-solid border-[#D1D1D1] border-[1px] flex flex-col justify-center items-center w-[180px]'}>
                  <div className={'relative'}>
                    <img src={order_img1} alt={'Icon'} className={'max-w-[60px]'}/>
                    <div
                      className={'absolute top-0 right-0 bg-blue-400 w-fit px-[7px] py-[5px] rounded-full text-white'}>0
                    </div>
                  </div>
                  <span className={'text-center text-[18px] font-medium'}>Total Order</span>
                </div>
                <div
                  className={'hover:bg-gray-100 transition-all cursor-pointer p-[30px] gap-[20px] border-solid border-[#D1D1D1] border-[1px] flex flex-col justify-center items-center w-[180px]'}>
                <div className={'relative'}>
                    <img src={order_img2} alt={'Icon'} className={'max-w-[60px]'}/>
                    <div
                      className={'absolute top-0 right-0 bg-blue-400 w-fit px-[7px] py-[5px] rounded-full text-white'}>0
                    </div>
                  </div>
                  <span className={'text-center text-[18px] font-medium'}>Pending Order</span>
                </div>
                <div
                  className={'hover:bg-gray-100 transition-all cursor-pointer p-[30px] gap-[20px] border-solid border-[#D1D1D1] border-[1px] flex flex-col justify-center items-center w-[180px]'}>
                  <div className={'relative'}>
                    <img src={order_img3} alt={'Icon'} className={'max-w-[60px]'}/>
                    <div
                      className={'absolute top-0 right-0 bg-blue-400 w-fit px-[7px] py-[5px] rounded-full text-white'}>0
                    </div>
                  </div>
                  <span className={'text-center text-[18px] font-medium'}>Track Your order</span>
                </div>
                <div
                  className={'hover:bg-gray-100 transition-all cursor-pointer p-[30px] gap-[20px] border-solid border-[#D1D1D1] border-[1px] flex flex-col justify-center items-center w-[180px]'}>
                  <div className={'relative'}>
                    <img src={order_img4} alt={'Icon'} className={'max-w-[60px]'}/>
                    <div
                      className={'absolute top-0 right-0 bg-blue-400 w-fit px-[7px] py-[5px] rounded-full text-white'}>0
                    </div>
                  </div>
                  <span className={'text-center text-[18px] font-medium'}>Processing Order</span>
                </div>
                <div
                  className={'hover:bg-gray-100 transition-all cursor-pointer p-[30px] gap-[20px] border-solid border-[#D1D1D1] border-[1px] flex flex-col justify-center items-center w-[180px]'}>
                  <div className={'relative'}>
                    <img src={order_img5} alt={'Icon'} className={'max-w-[60px]'}/>
                    <div
                      className={'absolute top-0 right-0 bg-blue-400 w-fit px-[7px] py-[5px] rounded-full text-white'}>0
                    </div>
                  </div>
                  <span className={'text-center text-[18px] font-medium'}>Complete Order</span>
                </div>
              </div>
            </div>
          </div>
        }

        {selectedLabel === 'Change Password' &&
          <div className={'flex flex-col w-full'}>
            <div className={'bg-white flex flex-col gap-[25px] drop-shadow-lg border-solid border-[1px] border-[#C5C6C7] p-[35px]'}>
              <span className={'font-semibold text-[26px]'}>{t('Please enter your current password')}</span>
              <div className={'flex flex-col gap-[15px] mt-[40px]'}>
                <UiInput
                  type={'text'}
                  placeholder={'Old password'}
                  errorText={'Field is required'}
                  errorFields={errorFields}
                  inputValue={oldPassword}
                  name={'oldPassword'}
                />
                <UiInput
                  type={'text'}
                  placeholder={'New password'}
                  errorText={'Field is required and must be match'}
                  errorFields={errorFields}
                  inputValue={newPassword}
                  name={'newPassword'}
                />
                <UiInput
                  type={'text'}
                  placeholder={'Confirm password'}
                  errorText={'Field is required and must be match'}
                  errorFields={errorFields}
                  inputValue={confirmPassword}
                  name={'confirmPassword'}
                />
              </div>
              <div className={'w-full items-end flex justify-end'}>
                <button
                  onClick={changePasswordHandler}
                  className={'text-white hover:bg-[#007E7E] bg-[#02A0A0] transition-all text-[19px] py-[15px] w-[200px]'}>Update
                </button>
              </div>
            </div>
          </div>
        }
      </div>
  );
};

export default ProfilePage;
