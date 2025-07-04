import React from 'react'

export default function BlogDetail() {
  return (
     <body className="font-inter">
  <nav
    className="py-5  transition-all duration-500 w-full bg-indigo-600 relative top-0 left-0 z-[99999] border-b border-indigo-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="w-full flex items-center justify-between flex-row">
        <div className=" flex justify-between  lg:flex-row">
          <a href="javascript:;" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="164" height="33" viewBox="0 0 164 33" fill="none">
              <path
                d="M47 24.7231V7H54.4171C54.5916 7 54.816 7.00821 55.0903 7.02462C55.3645 7.03282 55.618 7.05744 55.8507 7.09846C56.8895 7.25436 57.7455 7.59487 58.4186 8.12C59.1001 8.64513 59.6029 9.30974 59.927 10.1138C60.2594 10.9097 60.4256 11.7959 60.4256 12.7723C60.4256 13.7405 60.2594 14.6267 59.927 15.4308C59.5945 16.2267 59.0876 16.8872 58.4061 17.4123C57.733 17.9374 56.8812 18.2779 55.8507 18.4338C55.618 18.4667 55.3604 18.4913 55.0778 18.5077C54.8035 18.5241 54.5833 18.5323 54.4171 18.5323H50.0042V24.7231H47ZM50.0042 15.7631H54.2925C54.4587 15.7631 54.6457 15.7549 54.8534 15.7385C55.0612 15.7221 55.2523 15.6892 55.4268 15.64C55.9255 15.5169 56.3161 15.2995 56.5986 14.9877C56.8895 14.6759 57.0931 14.3231 57.2094 13.9292C57.3341 13.5354 57.3964 13.1497 57.3964 12.7723C57.3964 12.3949 57.3341 12.0092 57.2094 11.6154C57.0931 11.2133 56.8895 10.8564 56.5986 10.5446C56.3161 10.2328 55.9255 10.0154 55.4268 9.89231C55.2523 9.84308 55.0612 9.81436 54.8534 9.80615C54.6457 9.78974 54.4587 9.78154 54.2925 9.78154H50.0042V15.7631Z"
                fill="white" />
              <path
                d="M66.0975 25.0923C65.1252 25.0923 64.3024 24.9118 63.6293 24.5508C62.9561 24.1815 62.445 23.6933 62.096 23.0862C61.7553 22.479 61.5849 21.8103 61.5849 21.08C61.5849 20.44 61.6929 19.8656 61.909 19.3569C62.1251 18.84 62.4575 18.3969 62.9063 18.0277C63.355 17.6503 63.9368 17.3426 64.6515 17.1046C65.1917 16.9323 65.8233 16.7764 66.5463 16.6369C67.2776 16.4974 68.0671 16.3703 68.9148 16.2554C69.7707 16.1323 70.6641 16.001 71.5949 15.8615L70.5228 16.4646C70.5311 15.5456 70.3234 14.8687 69.8995 14.4338C69.4757 13.999 68.761 13.7815 67.7554 13.7815C67.1488 13.7815 66.5629 13.921 65.9978 14.2C65.4327 14.479 65.0379 14.959 64.8135 15.64L62.0711 14.7908C62.4035 13.6667 63.0351 12.7641 63.9659 12.0831C64.9049 11.4021 66.1681 11.0615 67.7554 11.0615C68.9522 11.0615 70.0034 11.2544 70.9093 11.64C71.8234 12.0256 72.5007 12.6574 72.9412 13.5354C73.1822 14.0031 73.3276 14.4831 73.3775 14.9754C73.4274 15.4595 73.4523 15.9887 73.4523 16.5631V24.7231H70.822V21.8431L71.2583 22.3108C70.6517 23.2708 69.9411 23.9764 69.1267 24.4277C68.3206 24.8708 67.3108 25.0923 66.0975 25.0923ZM66.6959 22.7292C67.3773 22.7292 67.9591 22.6103 68.4411 22.3723C68.9231 22.1344 69.3054 21.8431 69.5879 21.4985C69.8788 21.1538 70.0741 20.8297 70.1738 20.5262C70.3317 20.1487 70.419 19.7179 70.4356 19.2338C70.4605 18.7415 70.473 18.3436 70.473 18.04L71.3954 18.3108C70.4896 18.4503 69.7126 18.5733 69.0643 18.68C68.4161 18.7867 67.8593 18.8892 67.3939 18.9877C66.9286 19.0779 66.5172 19.1805 66.1598 19.2954C65.8108 19.4185 65.5158 19.5621 65.2748 19.7262C65.0338 19.8903 64.8468 20.079 64.7138 20.2923C64.5891 20.5056 64.5268 20.7559 64.5268 21.0431C64.5268 21.3713 64.6099 21.6626 64.7761 21.9169C64.9423 22.1631 65.1833 22.36 65.4991 22.5077C65.8233 22.6554 66.2222 22.7292 66.6959 22.7292Z"
                fill="white" />
              <path
                d="M82.1078 31C81.3598 31 80.641 30.8851 79.9512 30.6554C79.2698 30.4256 78.6548 30.0933 78.1063 29.6585C77.5578 29.2318 77.109 28.7149 76.76 28.1077L79.5274 26.7538C79.785 27.2379 80.1465 27.5949 80.6119 27.8246C81.0856 28.0626 81.5884 28.1815 82.1203 28.1815C82.7435 28.1815 83.3003 28.0708 83.7907 27.8492C84.281 27.6359 84.6591 27.3159 84.925 26.8892C85.1993 26.4708 85.3281 25.9456 85.3115 25.3138V21.5354H85.6855V11.4308H88.3157V25.3631C88.3157 25.6995 88.2991 26.0195 88.2659 26.3231C88.2409 26.6349 88.1952 26.9385 88.1287 27.2338C87.9293 28.0954 87.547 28.801 86.9819 29.3508C86.4168 29.9087 85.7145 30.3231 84.8752 30.5938C84.0441 30.8646 83.1217 31 82.1078 31ZM81.846 25.0923C80.6077 25.0923 79.5274 24.7846 78.6049 24.1692C77.6825 23.5538 76.9678 22.7169 76.4608 21.6585C75.9539 20.6 75.7004 19.4062 75.7004 18.0769C75.7004 16.7313 75.9539 15.5333 76.4608 14.4831C76.9761 13.4246 77.7032 12.5918 78.6423 11.9846C79.5814 11.3692 80.6867 11.0615 81.9582 11.0615C83.238 11.0615 84.3101 11.3692 85.1744 11.9846C86.047 12.5918 86.7076 13.4246 87.1564 14.4831C87.6052 15.5415 87.8296 16.7395 87.8296 18.0769C87.8296 19.3979 87.6052 20.5918 87.1564 21.6585C86.7076 22.7169 86.0387 23.5538 85.1494 24.1692C84.2602 24.7846 83.1591 25.0923 81.846 25.0923ZM82.3072 22.4338C83.1134 22.4338 83.7616 22.2533 84.2519 21.8923C84.7505 21.5231 85.112 21.0103 85.3364 20.3538C85.5691 19.6974 85.6855 18.9385 85.6855 18.0769C85.6855 17.2072 85.5691 16.4482 85.3364 15.8C85.112 15.1436 84.7588 14.6349 84.2768 14.2738C83.7948 13.9046 83.1715 13.72 82.407 13.72C81.6008 13.72 80.936 13.9169 80.4124 14.3108C79.8889 14.6964 79.5024 15.2215 79.2531 15.8862C79.0038 16.5426 78.8792 17.2728 78.8792 18.0769C78.8792 18.8892 78.9997 19.6277 79.2407 20.2923C79.49 20.9487 79.8681 21.4697 80.375 21.8554C80.882 22.241 81.5261 22.4338 82.3072 22.4338Z"
                fill="white" />
              <path
                d="M97.6827 25.0923C96.3198 25.0923 95.1231 24.801 94.0926 24.2185C93.0621 23.6359 92.256 22.8277 91.6743 21.7938C91.1008 20.76 90.8141 19.5703 90.8141 18.2246C90.8141 16.7723 91.0967 15.5128 91.6618 14.4462C92.2269 13.3713 93.0122 12.5385 94.0178 11.9477C95.0234 11.3569 96.1869 11.0615 97.5082 11.0615C98.9044 11.0615 100.089 11.3856 101.061 12.0338C102.042 12.6738 102.769 13.5805 103.242 14.7538C103.716 15.9272 103.895 17.3097 103.778 18.9015H100.799V17.8185C100.791 16.3744 100.533 15.32 100.026 14.6554C99.5194 13.9908 98.7216 13.6585 97.6329 13.6585C96.4029 13.6585 95.4888 14.0359 94.8904 14.7908C94.2921 15.5374 93.9929 16.6328 93.9929 18.0769C93.9929 19.4226 94.2921 20.4646 94.8904 21.2031C95.4888 21.9415 96.3614 22.3108 97.5082 22.3108C98.2479 22.3108 98.8836 22.1508 99.4155 21.8308C99.9557 21.5026 100.371 21.0308 100.662 20.4154L103.629 21.3015C103.114 22.4995 102.316 23.4308 101.235 24.0954C100.163 24.76 98.9792 25.0923 97.6827 25.0923ZM93.0455 18.9015V16.6615H102.308V18.9015H93.0455Z"
                fill="white" />
              <path
                d="M111.708 25.0923C110.47 25.0923 109.39 24.7846 108.467 24.1692C107.545 23.5538 106.83 22.7169 106.323 21.6585C105.816 20.6 105.563 19.4062 105.563 18.0769C105.563 16.7313 105.816 15.5333 106.323 14.4831C106.838 13.4246 107.565 12.5918 108.505 11.9846C109.444 11.3692 110.549 11.0615 111.82 11.0615C113.1 11.0615 114.172 11.3692 115.037 11.9846C115.909 12.5918 116.57 13.4246 117.019 14.4831C117.467 15.5415 117.692 16.7395 117.692 18.0769C117.692 19.3979 117.467 20.5918 117.019 21.6585C116.57 22.7169 115.901 23.5538 115.012 24.1692C114.122 24.7846 113.021 25.0923 111.708 25.0923ZM112.169 22.4338C112.976 22.4338 113.624 22.2533 114.114 21.8923C114.613 21.5231 114.974 21.0103 115.199 20.3538C115.431 19.6974 115.548 18.9385 115.548 18.0769C115.548 17.2072 115.431 16.4482 115.199 15.8C114.974 15.1436 114.621 14.6349 114.139 14.2738C113.657 13.9046 113.034 13.72 112.269 13.72C111.463 13.72 110.798 13.9169 110.275 14.3108C109.751 14.6964 109.365 15.2215 109.115 15.8862C108.866 16.5426 108.741 17.2728 108.741 18.0769C108.741 18.8892 108.862 19.6277 109.103 20.2923C109.352 20.9487 109.73 21.4697 110.237 21.8554C110.744 22.241 111.388 22.4338 112.169 22.4338ZM115.548 24.7231V15.3938H115.174V7H118.203V24.7231H115.548Z"
                fill="white" />
              <path
                d="M127.395 25.0923C126.049 25.0923 124.873 24.7928 123.867 24.1938C122.861 23.5949 122.08 22.7703 121.523 21.72C120.975 20.6615 120.701 19.4472 120.701 18.0769C120.701 16.6821 120.983 15.4595 121.548 14.4092C122.113 13.359 122.899 12.5385 123.904 11.9477C124.91 11.3569 126.073 11.0615 127.395 11.0615C128.749 11.0615 129.93 11.361 130.935 11.96C131.941 12.559 132.722 13.3877 133.279 14.4462C133.835 15.4964 134.114 16.7067 134.114 18.0769C134.114 19.4554 133.831 20.6738 133.266 21.7323C132.709 22.7826 131.928 23.6072 130.923 24.2062C129.917 24.7969 128.741 25.0923 127.395 25.0923ZM127.395 22.3108C128.592 22.3108 129.481 21.9169 130.062 21.1292C130.644 20.3415 130.935 19.3241 130.935 18.0769C130.935 16.7887 130.64 15.7631 130.05 15C129.46 14.2287 128.575 13.8431 127.395 13.8431C126.589 13.8431 125.924 14.0236 125.4 14.3846C124.885 14.7374 124.503 15.2338 124.253 15.8738C124.004 16.5056 123.879 17.24 123.879 18.0769C123.879 19.3651 124.174 20.3949 124.765 21.1662C125.363 21.9292 126.24 22.3108 127.395 22.3108Z"
                fill="white" />
              <path
                d="M145.923 24.7231V18.3231C145.923 17.9046 145.894 17.441 145.836 16.9323C145.778 16.4236 145.64 15.9354 145.424 15.4677C145.217 14.9918 144.901 14.6021 144.477 14.2985C144.061 13.9949 143.496 13.8431 142.782 13.8431C142.399 13.8431 142.021 13.9046 141.647 14.0277C141.273 14.1508 140.933 14.3641 140.625 14.6677C140.326 14.9631 140.085 15.3733 139.902 15.8985C139.719 16.4154 139.628 17.08 139.628 17.8923L137.845 17.1415C137.845 16.0092 138.065 14.9836 138.506 14.0646C138.955 13.1456 139.611 12.4154 140.475 11.8738C141.34 11.3241 142.403 11.0492 143.667 11.0492C144.664 11.0492 145.487 11.2133 146.135 11.5415C146.783 11.8697 147.298 12.2882 147.681 12.7969C148.063 13.3056 148.345 13.8472 148.528 14.4215C148.711 14.9959 148.827 15.5415 148.877 16.0585C148.936 16.5672 148.965 16.9815 148.965 17.3015V24.7231H145.923ZM136.586 24.7231V11.4308H139.266V15.5538H139.628V24.7231H136.586Z"
                fill="white" />
              <path
                d="M157.87 25.0923C156.507 25.0923 155.31 24.801 154.28 24.2185C153.249 23.6359 152.443 22.8277 151.861 21.7938C151.288 20.76 151.001 19.5703 151.001 18.2246C151.001 16.7723 151.284 15.5128 151.849 14.4462C152.414 13.3713 153.199 12.5385 154.205 11.9477C155.21 11.3569 156.374 11.0615 157.695 11.0615C159.091 11.0615 160.276 11.3856 161.248 12.0338C162.229 12.6738 162.956 13.5805 163.43 14.7538C163.903 15.9272 164.082 17.3097 163.966 18.9015H160.986V17.8185C160.978 16.3744 160.72 15.32 160.213 14.6554C159.706 13.9908 158.909 13.6585 157.82 13.6585C156.59 13.6585 155.676 14.0359 155.078 14.7908C154.479 15.5374 154.18 16.6328 154.18 18.0769C154.18 19.4226 154.479 20.4646 155.078 21.2031C155.676 21.9415 156.548 22.3108 157.695 22.3108C158.435 22.3108 159.071 22.1508 159.603 21.8308C160.143 21.5026 160.558 21.0308 160.849 20.4154L163.816 21.3015C163.301 22.4995 162.503 23.4308 161.423 24.0954C160.351 24.76 159.166 25.0923 157.87 25.0923ZM153.233 18.9015V16.6615H162.495V18.9015H153.233Z"
                fill="white" />
              <path
                d="M24.5473 11.8941C25.1905 12.5063 25.2068 13.5149 24.5837 14.1468L18.7585 20.054C18.1354 20.686 17.1087 20.702 16.4654 20.0898C15.8222 19.4776 15.8059 18.469 16.429 17.8371L22.2542 11.9299C22.8773 11.2979 23.904 11.2819 24.5473 11.8941Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z"
                fill="white" />
            </svg>

          </a>
          <button data-collapse-toggle="navbar-default" type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
          <li>
            <a href="javascript:;"
              className="text-gray-100 text-sm lg:text-base mb-2 block  font-medium hover:text-white transition-all duration-500 lg:mr-6 md:mb-0 lg:text-left text-center">Home</a>
          </li>
          <li>
            <a href="javascript:;"
              className="text-gray-100 text-sm lg:text-base mb-2 block  font-medium hover:text-white transition-all duration-500 lg:mr-6 md:mb-0 lg:text-left text-center">About
              us</a>
          </li>
          <li className="relative">
            <button data-dropdown-toggle="menu1"
              className="flex items-center justify-between text-gray-100 text-sm text-center lg:text-base font-medium hover:text-gray-100 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">Products
              <svg className="w-3 h-2 ml-1.5 " width="10" height="6" viewBox="0 0 10 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1"
                  stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            {/* < Dropdown menu  */}
            <div id="menu1"
              className="animate-fade z-10 absolute top-14 -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden">
              <div className="flex justify-between">
                <ul className="text-sm text-gray-700  w-1/2" aria-labelledby="dropdownLargeButton">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Features</h6>
                  <li className="">
                    <a href="javascript:;"
                      className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
                      <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z"
                            fill="#F59E0B"></path>
                          <path
                            d="M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z"
                            fill="#F59E0B"></path>
                        </svg>

                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Notification</h5>
                        <p className="text-xs font-medium text-gray-400">Real time notification
                          always keep you up to date in realtime</p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a href="javascript:;"
                      className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
                      <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M25.3333 6.84527C25.3333 5.62971 24.3452 4.6322 23.1365 4.76127C21.1735 4.97089 19.2468 5.46081 17.416 6.21916C14.9059 7.25888 12.6251 8.78283 10.704 10.704C8.78283 12.6251 7.25888 14.9059 6.21916 17.416C5.46081 19.2468 4.97089 21.1735 4.76127 23.1365C4.6322 24.3452 5.62971 25.3333 6.84526 25.3333H23.1324C24.3479 25.3333 25.3333 24.3479 25.3333 23.1324L25.3333 6.84527Z"
                            fill="#10B981"></path>
                          <path
                            d="M31.6668 13.1788C31.6668 11.9632 30.6787 10.9657 29.47 11.0948C27.507 11.3044 25.5803 11.7943 23.7495 12.5527C21.2394 13.5924 18.9586 15.1163 17.0375 17.0375C15.1163 18.9586 13.5924 21.2394 12.5527 23.7495C11.7943 25.5803 11.3044 27.507 11.0948 29.47C10.9657 30.6787 11.9632 31.6668 13.1788 31.6668H29.4659C30.6814 31.6668 31.6668 30.6814 31.6668 29.4659V13.1788Z"
                            fill="#10B981"></path>
                        </svg>

                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Analytics
                          <span
                            className="bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">New</span>
                        </h5>
                        <p className="text-xs font-medium text-gray-400">Analyze data to make
                          more informed and accurate business decision</p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a href="javascript:;"
                      className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
                      <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M4.75 22.1667C4.75 26.5389 8.29441 30.0833 12.6667 30.0833H22.0227C22.9767 30.0833 23.75 29.31 23.75 28.3561V15.9773C23.75 15.0233 22.9767 14.25 22.0227 14.25H12.6667C8.29441 14.25 4.75 17.7944 4.75 22.1667Z"
                            fill="#3B82F6"></path>
                          <path
                            d="M33.25 14.2502C33.25 18.6224 29.7056 22.1668 25.3333 22.1668H15.9773C15.0233 22.1668 14.25 21.3935 14.25 20.4396V8.06077C14.25 7.10682 15.0233 6.3335 15.9773 6.3335H25.3333C29.7056 6.3335 33.25 9.87791 33.25 14.2502Z"
                            fill="#3B82F6"></path>
                        </svg>

                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Integrations</h5>
                        <p className="text-xs font-medium text-gray-400">Get started by taking
                          advantage of integration with other services</p>
                      </div>
                    </a>
                  </li>

                </ul>
                <ul className="text-sm text-gray-700 dark:text-gray-400 w-1/2" aria-labelledby="dropdownLargeButton">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Services</h6>
                  <li className="">
                    <a href="javascript:;"
                      className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
                      <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M15.092 11.4813C16.0377 10.9509 17.2126 10.9509 18.1583 11.4813L25.4363 15.5637C26.3539 16.0783 26.9168 17.0148 26.9168 18.0265V26.3072C26.9168 27.3189 26.3539 28.2553 25.4363 28.77L18.1583 32.8523C17.2126 33.3828 16.0377 33.3828 15.092 32.8523L7.81401 28.77C6.89644 28.2553 6.3335 27.3189 6.3335 26.3072V18.0265C6.3335 17.0148 6.89644 16.0783 7.81401 15.5637L15.092 11.4813Z"
                            fill="#F43F5E"></path>
                          <path
                            d="M20.2043 4.82947C21.0987 4.30099 22.2098 4.30099 23.1041 4.82946L29.9869 8.8966C30.8547 9.40936 31.3871 10.3423 31.3871 11.3502V19.6001C31.3871 20.608 30.8547 21.541 29.9869 22.0537L23.1041 26.1209C22.2098 26.6494 21.0987 26.6494 20.2044 26.1209L13.3215 22.0537C12.4538 21.541 11.9214 20.608 11.9214 19.6001V11.3502C11.9214 10.3423 12.4538 9.40936 13.3215 8.8966L20.2043 4.82947Z"
                            fill="#F43F5E"></path>
                        </svg>

                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Security
                        </h5>
                        <p className="text-xs font-medium text-gray-400">To ensure your privacy
                          all information are highly encrypted </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a href="javascript:;"
                      className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
                      <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M11.1086 7.89499C11.4505 6.95739 12.342 6.3335 13.34 6.3335H23.5237C25.1727 6.3335 26.3199 7.97275 25.755 9.522L20.5597 23.772C20.2179 24.7096 19.3264 25.3335 18.3284 25.3335H8.14465C6.49564 25.3335 5.34848 23.6942 5.91332 22.145L11.1086 7.89499Z"
                            fill="#4F46E5"></path>
                          <path
                            d="M17.4416 14.228C17.7835 13.2904 18.675 12.6665 19.673 12.6665H29.8567C31.5057 12.6665 32.6529 14.3058 32.088 15.855L26.8927 30.105C26.5509 31.0426 25.6594 31.6665 24.6614 31.6665H14.4777C12.8286 31.6665 11.6815 30.0273 12.2463 28.478L17.4416 14.228Z"
                            fill="#4F46E5"></path>
                        </svg>

                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Documentation</h5>
                        <p className="text-xs font-medium text-gray-400">Organized documentation
                          will help you save tone of your time </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a href="javascript:;"
                      className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
                      <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M24.5114 33.2423C26.9097 33.0921 29.1569 32.0322 30.7847 30.2836C32.4125 28.535 33.2952 26.2325 33.249 23.856C33.2028 21.4795 32.2312 19.2123 30.5366 17.5269C28.842 15.8415 26.5553 14.868 24.1529 14.8091H16.5879C15.6055 14.8091 14.8096 15.5892 14.8096 16.568V24.0221C14.8075 25.2655 15.06 26.4965 15.5517 27.6408C16.0433 28.7851 16.7641 29.8192 17.6706 30.6806C18.5771 31.5421 19.6505 32.2132 20.8261 32.6534C22.0018 33.0937 23.2554 33.294 24.5114 33.2423Z"
                            fill="#06B6D4"></path>
                          <path
                            d="M13.4894 4.75796C11.091 4.90819 8.84381 5.96805 7.21604 7.71666C5.58826 9.46527 4.7055 11.7677 4.75173 14.1442C4.79795 16.5207 5.76959 18.7879 7.46415 20.4733C9.15872 22.1587 11.4455 23.1323 13.8479 23.1912H21.4129C21.8845 23.1912 22.3368 23.0059 22.6703 22.676C23.0038 22.3461 23.1912 21.8988 23.1912 21.4323V13.9781C23.1932 12.7347 22.9408 11.5038 22.4491 10.3595C21.9574 9.21514 21.2366 8.18109 20.3301 7.31962C19.4236 6.45815 18.3503 5.78708 17.1746 5.34683C15.9989 4.90659 14.7454 4.70628 13.4894 4.75796Z"
                            fill="#06B6D4"></path>
                        </svg>

                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Support
                        </h5>
                        <p className="text-xs font-medium text-gray-400">Need help? our customer
                          support is here to help you anytime</p>
                      </div>
                    </a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                             <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                 </svg></button>
                             <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                     <li>
                                         <a href="javascript:;" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                             downloads</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                     </li>
                                 </ul>
                             </div>
                         </li> 

                </ul>
              </div>
            </div>
          </li>
          <li className="relative">
            <button data-dropdown-toggle="menu2"
              className="flex items-center justify-between text-gray-100 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">Features
              <svg className="w-3 h-2 ml-1.5 " width="10" height="6" viewBox="0 0 10 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1"
                  stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            {/* Dropdown menu  */}
            <div id="menu2"
              className="dropdown-menu z-10 absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2 hidden">
              <ul className=" text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                <h6 className="text-sm text-gray-500 font-medium mb-2">Features</h6>
                <li>
                  <a href="javascript:;"
                    className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500">Notification</a>
                </li>
                <li>
                  <a href="javascript:;"
                    className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500">Analytics</a>
                </li>
                <li>
                  <a href="javascript:;"
                    className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500">Integrations</a>
                </li>
                <li>
                  <a href="javascript:;"
                    className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500">Security</a>
                </li>
                <li>
                  <a href="javascript:;"
                    className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500">Documentation</a>
                </li>
                <li>
                  <a href="javascript:;"
                    className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500">Support</a>
                </li>
              </ul>

            </div>
          </li>

        </ul>
        <div className="flex items-center justify-center gap-4">
          <button
            className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">Login
          </button>
          <button
            className="max-[450px]:hidden bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 border border-white py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">Sign
            up </button>

        </div>

      </div>
    </div>
  </nav>

  <section className="relative pt-20 pb-24 bg-indigo-600">
    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
      <h1 className="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8">Business Loans
        That Are Fast
        In Services</h1>
      <div className="flex items-center justify-between">
        <div className="data">
          <p className="font-medium text-xl leading-8 text-white mb-1">insights</p>
          <p className="font-normal text-lg leading-7 text-white">Jai Massari, Chief Legal Officer</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="javascript:;"><svg className="w-10 h-10 text-white group-hover:text-white" width="32" height="32"
              viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                fill="currentColor" />
            </svg></a>
          <a href="javascript:;">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4234 19.8791C15.4234 17.3223 17.526 15.2491 20.1203 15.2491C22.7146 15.2491 24.8183 17.3223 24.8183 19.8791C24.8183 22.4359 22.7146 24.5091 20.1203 24.5091C17.526 24.5091 15.4234 22.4359 15.4234 19.8791ZM12.8837 19.8791C12.8837 23.818 16.1235 27.0109 20.1203 27.0109C24.1171 27.0109 27.3569 23.818 27.3569 19.8791C27.3569 15.9402 24.1171 12.7473 20.1203 12.7473C16.1235 12.7473 12.8837 15.9402 12.8837 19.8791ZM25.9522 12.4646C25.9521 12.7942 26.0511 13.1165 26.2368 13.3906C26.4225 13.6648 26.6866 13.8785 26.9955 14.0048C27.3045 14.131 27.6445 14.1642 27.9726 14.1C28.3007 14.0358 28.6021 13.8772 28.8387 13.6442C29.0753 13.4112 29.2365 13.1143 29.3019 12.791C29.3673 12.4678 29.3339 12.1326 29.206 11.828C29.0781 11.5235 28.8615 11.2631 28.5835 11.0798C28.3054 10.8966 27.9785 10.7987 27.644 10.7986H27.6433C27.195 10.7988 26.7651 10.9743 26.448 11.2867C26.1309 11.5991 25.9526 12.0227 25.9522 12.4646ZM14.4267 31.1843C13.0527 31.1227 12.3059 30.8971 11.8096 30.7066C11.1517 30.4541 10.6822 30.1535 10.1886 29.6677C9.69501 29.1819 9.38947 28.7197 9.13445 28.0712C8.94098 27.5823 8.71211 26.8461 8.64965 25.492C8.58133 24.028 8.56768 23.5882 8.56768 19.8792C8.56768 16.1702 8.58245 15.7317 8.64965 14.2665C8.71222 12.9123 8.94278 12.1776 9.13445 11.6872C9.3906 11.0388 9.69568 10.5761 10.1886 10.0897C10.6815 9.60323 11.1505 9.30212 11.8096 9.05079C12.3057 8.86012 13.0527 8.63457 14.4267 8.57301C15.9123 8.50568 16.3585 8.49223 20.1203 8.49223C23.8821 8.49223 24.3288 8.50679 25.8155 8.57301C27.1896 8.63468 27.9351 8.8619 28.4327 9.05079C29.0906 9.30212 29.5601 9.6039 30.0537 10.0897C30.5473 10.5755 30.8517 11.0388 31.1078 11.6872C31.3013 12.1761 31.5302 12.9123 31.5926 14.2665C31.661 15.7317 31.6746 16.1702 31.6746 19.8792C31.6746 23.5882 31.661 24.0268 31.5926 25.492C31.5301 26.8461 31.3001 27.5821 31.1078 28.0712C30.8517 28.7197 30.5466 29.1823 30.0537 29.6677C29.5608 30.153 29.0906 30.4541 28.4327 30.7066C27.9366 30.8972 27.1896 31.1228 25.8155 31.1843C24.33 31.2517 23.8838 31.2651 20.1203 31.2651C16.3568 31.2651 15.9118 31.2517 14.4267 31.1843ZM14.3101 6.07435C12.8098 6.14168 11.7846 6.37612 10.8893 6.71946C9.9621 7.07401 9.17718 7.54968 8.39282 8.32146C7.60846 9.09323 7.12705 9.86801 6.76728 10.7818C6.4189 11.6647 6.18101 12.6745 6.11269 14.153C6.04324 15.6339 6.02734 16.1073 6.02734 19.8791C6.02734 23.6509 6.04324 24.1243 6.11269 25.6052C6.18101 27.0839 6.4189 28.0936 6.76728 28.9765C7.12705 29.8897 7.60857 30.6653 8.39282 31.4368C9.17706 32.2082 9.9621 32.6832 10.8893 33.0388C11.7863 33.3821 12.8098 33.6166 14.3101 33.6839C15.8135 33.7512 16.2931 33.768 20.1203 33.768C23.9475 33.768 24.4279 33.7523 25.9305 33.6839C27.4309 33.6166 28.4554 33.3821 29.3513 33.0388C30.2779 32.6832 31.0634 32.2086 31.8478 31.4368C32.6321 30.665 33.1125 29.8897 33.4733 28.9765C33.8217 28.0936 34.0607 27.0838 34.1279 25.6052C34.1962 24.1232 34.2121 23.6509 34.2121 19.8791C34.2121 16.1073 34.1962 15.6339 34.1279 14.153C34.0596 12.6743 33.8217 11.6641 33.4733 10.7818C33.1125 9.86857 32.6309 9.09446 31.8478 8.32146C31.0647 7.54846 30.2779 7.07401 29.3524 6.71946C28.4554 6.37612 27.4308 6.14057 25.9317 6.07435C24.429 6.00701 23.9486 5.99023 20.1214 5.99023C16.2942 5.99023 15.8135 6.0059 14.3101 6.07435Z"
                fill="white" />
            </svg>
          </a>
          <a href="javascript:;">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.7568 31.1112V15.7426H8.63583V31.1112H13.7574H13.7568ZM11.1974 13.6446C12.9828 13.6446 14.0944 12.4645 14.0944 10.9896C14.061 9.48118 12.9828 8.33398 11.2314 8.33398C9.47869 8.33398 8.33398 9.48118 8.33398 10.9895C8.33398 12.4643 9.44513 13.6445 11.1639 13.6445H11.197L11.1974 13.6446ZM16.5914 31.1112H21.712V22.5296C21.712 22.0709 21.7454 21.611 21.8807 21.2833C22.2507 20.3652 23.0933 19.4148 24.5083 19.4148C26.3609 19.4148 27.1024 20.8241 27.1024 22.8903V31.1112H32.2229V22.2993C32.2229 17.5789 29.6969 15.3822 26.3277 15.3822C23.5655 15.3822 22.3523 16.9223 21.6783 17.9712H21.7124V15.7431H16.5917C16.6585 17.1849 16.5913 31.1118 16.5913 31.1118L16.5914 31.1112Z"
                fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="relative py-10 lg:py-16 ">
    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3">
      <p className="font-normal text-lg leading-8 text-gray-500 mb-12">
        Certainly! A description for "Business Loans That Are Fast In Services" within a UI design system might be:
      </p>

      <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">
        Save up to 40% compared to a merchant cash advance and other online lenders.
      </h4>

      <p className="font-normal text-lg leading-8 text-gray-600 mb-8">
        "The 'Fast Services Business Loans' component in our UI design system embodies swift and efficient access to
        financial solutions tailored for businesses. This module integrates visually engaging elements and intuitive
        functionalities to streamline the process of acquiring loans with unparalleled speed. Offering a user-centric
        interface, it presents a seamless journey for businesses seeking rapid financial support. Through clear and
        concise layouts, optimized forms, and interactive tools, this component expedites the application and approval
        process, emphasizing agility without compromising on reliability or thoroughness. Designed to align with our
        brand's commitment to responsive services, this UI module serves as a catalyst for businesses in need, providing
        a quick and hassle-free avenue to secure vital financial assistance."
      </p>

      <p className="font-normal text-lg leading-8 text-gray-600 mb-16">
        This description aims to highlight the UI component's emphasis on speed, user-friendliness, and alignment with
        the brand's commitment to responsive services in facilitating business loans.
      </p>

      <div className="flex justify-between relative mb-16">
        <svg className="absolute top-0 left-0 w-8" width="32" height="30" viewBox="0 0 32 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.1556 29.4389L15.1556 15.7709L9.96491 15.7709C7.47307 10.3036 11.6949 6.83404 14.1173 5.78265L14.1173 1.23418e-06C-3.74082 1.26167 -0.937509 20.1517 2.69642 29.4389L15.1556 29.4389Z"
            fill="url(#paint0_linear_9284_62585)" />
          <path
            d="M31.9993 29.4389L31.9994 15.7709L26.8087 15.7709C24.3168 10.3036 28.5387 6.83404 30.9611 5.78265L30.9611 1.23418e-06C13.1029 1.26167 15.9062 20.1517 19.5402 29.4389L31.9993 29.4389Z"
            fill="url(#paint1_linear_9284_62585)" />
          <defs>
            <linearGradient id="paint0_linear_9284_62585" x1="15.1556" y1="1.68661" x2="-7.59931" y2="11.975"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#7C3AED" />
              <stop offset="0.993738" stop-color="#4F46E5" />
            </linearGradient>
            <linearGradient id="paint1_linear_9284_62585" x1="31.9994" y1="1.68661" x2="9.24444" y2="11.975"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#7C3AED" />
              <stop offset="0.993738" stop-color="#4F46E5" />
            </linearGradient>
          </defs>
        </svg>
        <h4 className="font-manrope font-semibold text-2xl leading-9 text-black max-w-[609px] mx-auto max-lg:px-8">
          It’s easy to get a loan unless you need it.
        </h4>
        <svg className="absolute right-0 bottom-0 w-8" width="32" height="30" viewBox="0 0 32 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.8444 0.00050603L16.8444 13.6686L22.0351 13.6686C24.5269 19.1358 20.3051 22.6054 17.8827 23.6568L17.8827 29.4395C35.7408 28.1778 32.9375 9.28779 29.3036 0.000507119L16.8444 0.00050603Z"
            fill="url(#paint0_linear_9553_63113)" />
          <path
            d="M0.000651072 0.00050603L0.000649877 13.6686L5.19134 13.6686C7.68318 19.1358 3.46132 22.6054 1.03891 23.6568L1.03891 29.4395C18.8971 28.1778 16.0938 9.28779 12.4598 0.000507119L0.000651072 0.00050603Z"
            fill="url(#paint1_linear_9553_63113)" />
          <defs>
            <linearGradient id="paint0_linear_9553_63113" x1="16.8444" y1="27.7528" x2="39.5993" y2="17.4644"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#7C3AED" />
              <stop offset="0.993738" stop-color="#4F46E5" />
            </linearGradient>
            <linearGradient id="paint1_linear_9553_63113" x1="0.000648535" y1="27.7528" x2="22.7556" y2="17.4644"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#7C3AED" />
              <stop offset="0.993738" stop-color="#4F46E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">Digital financial planner and
        management</h4>

      <p className="font-normal text-lg leading-8 text-gray-600 mb-12">This content aims to provide valuable information to
        users visiting the blog detail page within the UI design system, guiding them through various aspects of
        business loans in a clear and informative manner.
      </p>

      <ul className="list-disc list-outside flex flex-col gap-8 ml-5 mb-14">
        <li className="list-disc">
          <p className="font-medium text-xl leading-8 text-black">
            Types of Business Loans: <span className="font-normal text-base leading-7 text-black">
              Small Business Administration (SBA) Loans: Exploring government-backed options for small businesses.
              Term Loans vs. Lines of Credit: Understanding the differences and choosing the right fit for your business
              needs.
            </span>
          </p>
        </li>

        <li className="list-disc">
          <p className="font-medium text-xl leading-8 text-black">
            The Application Process: <span className="font-normal text-base leading-7 text-black"> Preparation: Steps to
              prepare your business and documents before applying.
              Application Walkthrough: A step-by-step guide through the loan application process.
              Tips for Approval: Insider tips to increase your chances of loan approval.</span>
          </p>
        </li>

        <li className="list-disc">
          <p className="font-medium text-xl leading-8 text-black">
            Business Loan Management : <span className="font-normal text-base leading-7 text-black"> Responsibly Managing
              Funds: Best practices for utilizing loan funds efficiently.
              Repayment Strategies: Formulating a repayment plan that suits your business.</span>
          </p>
        </li>

        <li className="list-disc">
          <p className="font-medium text-xl leading-8 text-black">
            Conclusion: <span className="font-normal text-base leading-7 text-black">Securing a business loan can be a
              pivotal moment for your company's growth. Armed with this guide, you're better equipped to navigate the
              complexities of the loan process. Remember, choosing the right loan and managing it wisely can set your
              business on a path to success.</span>
          </p>
        </li>
      </ul>

      <div className="img w-full mb-14">
        <img src="https://pagedone.io/asset/uploads/1702355938.png" alt="Blog tailwind page" className="object-cover"/>
      </div>

      <div className="head-1 mb-12">
        <h2 className="font-manrope font-semibold text-black mb-5 text-5xl leading-tight">Small Business Administration
          (SBA) Loans:</h2>
        <p className="font-normal text-lg leading-8 text-gray-600">SBA loans are government-backed loans designed to support
          small businesses. They offer flexible terms, lower down payments, and competitive rates. These loans cater to
          various business needs, including working capital, real estate purchase, or equipment financing, with longer
          repayment periods and favorable terms. </p>
      </div>

      <div className="head-2 mb-12">
        <h3 className="font-manrope font-medium text-black mb-5 text-4xl">Term Loans:</h3>
        <p className="font-normal text-lg leading-8 text-gray-600">Term loans involve borrowing a lump sum of money that is
          repaid over a specified period with a fixed or variable interest rate. These loans are suitable for specific
          purposes such as expansion, equipment purchases, or covering operational costs. They typically have set
          monthly payments and a defined repayment schedule.</p>
      </div>

      <div className="head-3 mb-12">
        <h4 className="font-manrope font-normal text-black mb-5 text-3xl leading-10">Lines of Credit:</h4>
        <p className="font-normal text-lg leading-8 text-gray-600">A business line of credit provides access to a set amount
          of funds that can be used as needed. Similar to a credit card, it offers flexibility in borrowing and
          repaying. Interest is charged only on the amount used, making it ideal for managing short-term expenses,
          covering gaps in cash flow, or handling unexpected costs. </p>
      </div>

      <div className="head-4 mb-14">
        <h5 className="font-manrope font-normal text-black mb-5 text-2xl leading-9">Equipment Financing:</h5>
        <p className="font-normal text-lg leading-8 text-gray-600">Equipment financing specifically covers the purchase or
          lease of machinery, vehicles, or other essential equipment. This loan allows businesses to acquire necessary
          assets without tying up large amounts of capital. The equipment itself serves as collateral, often leading to
          favorable terms.</p>
      </div>

      <div className="topics mb-14">
        <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-8">
          Views on Topics
        </h5>

        <ul className="list-decimal list-outside ml-5">
          <li className="font-normal text-lg leading-8 text-gray-600 pl-1">Loan Terms and Conditions</li>
          <li className="font-normal text-lg leading-8 text-gray-600 pl-1">Credit Scores and Requirements</li>
          <li className="font-normal text-lg leading-8 text-gray-600 pl-1">Financial Management</li>
          <li className="font-normal text-lg leading-8 text-gray-600 pl-1">Loan Repayment Strategies</li>
          <li className="font-normal text-lg leading-8 text-gray-600 pl-1">Risk Assessment and Contingency Planning</li>
        </ul>
      </div>

      <div className="comments">
        <h5 className="font-medium text-xl leading-8 text-gray-900 mb-8">Comments</h5>
        <div className="flex flex-col sm:flex-row gap-x-9 gap-y-4 w-full mb-7">
          <img src="https://pagedone.io/asset/uploads/1702355963.png" alt="William image" className="h-14 w-14 object-cover"/>
          <div className="data w-full">
            <div className="flex items-center justify-between w-full mb-5">
              <div className="user">
                <h6 className="font-medium text-xl leading-8 text-black mb-1">William Smith</h6>
                <p className="font-normal text-sm leading-6 text-gray-500">Product Designer</p>
              </div>
              <button
                className="rounded-full py-3 px-6 bg-indigo-600 shadow-md font-semibold text-sm text-white">Reply</button>
            </div>
            <p className="font-normal text-base leading-7 text-gray-600 ">
              I have been using pagedone for several months now, and I must say that it has made my life a
              lot easier. The platform's intuitive interface and ease of use have allowed me to manage my
              finances more effectively and make informed investment decisions.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-9 gap-y-4 w-full mb-16">
          <img src="https://pagedone.io/asset/uploads/1702355983.png" alt="Ankita image" className="h-14 w-14 object-cover"/>
          <div className="data w-full">
            <div className="flex items-center justify-between w-full mb-5">
              <div className="user">
                <h6 className="font-medium text-xl leading-8 text-black mb-1">Ankita Jha</h6>
                <p className="font-normal text-sm leading-6 text-gray-500">Product Designer</p>
              </div>
              <button
                className="rounded-full py-3 px-6 bg-indigo-600 shadow-md font-semibold text-sm text-white">Reply</button>
            </div>
            <p className="font-normal text-base leading-7 text-gray-600 ">
              I have been using pagedone for several months now, and I must say that it has made my life a
              lot easier. The platform's intuitive interface and ease of use have allowed me to manage my
              finances more effectively and make informed investment decisions.
            </p>
          </div>
        </div>
      </div>
      <h5 className="font-medium text-xl leading-8 text-gray-900 mb-6">Leave a comment</h5>
      <div className="reply bg-gray-100 rounded-xl p-5 border border-solid border-gray-300 w-full">
        <div className="flex items-center gap-x-9 gap-y-4 flex-col sm:flex-row mb-5">

          <textarea
            className="font-medium text-xl leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full h-28"
            placeholder="Type a comment here"></textarea>
        </div>
        <button
          className="rounded-full py-3 px-6 bg-indigo-600 shadow-md font-semibold text-sm text-white transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200">Post</button>
      </div>
    </div>
  </section>

  <section className="py-12 lg:py-20 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our popular blogs</h2>
      <div
        className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
        <div
          className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
          <div className="flex items-center mb-6">
            <img src="https://pagedone.io/asset/uploads/1696244553.png" alt="Harsh image" className="rounded-lg w-full object-cover"/>
          </div>
          <div className="block">
            <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech 101: Exploring the Basics of
              Electronic Payments</h4>
            <div className="flex items-center justify-between  font-medium">
              <h6 className="text-sm text-gray-500">By Harsh C.</h6>
              <span className="text-sm text-indigo-600">2 year ago</span>
            </div>
          </div>
        </div>
        <div
          className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
          <div className="flex items-center mb-6">
            <img src="https://pagedone.io/asset/uploads/1696244579.png" alt="John image " className="rounded-lg w-full object-cover"/>
          </div>
          <div className="block">
            <h4 className="text-gray-900 font-medium leading-8 mb-9">From Classroom to Cyberspace: The Growing
              Influence of EdTech in Fintech</h4>
            <div className="flex items-center justify-between  font-medium">
              <h6 className="text-sm text-gray-500">By John D.</h6>
              <span className="text-sm text-indigo-600">2 year ago</span>
            </div>
          </div>
        </div>
        <div
          className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
          <div className="flex items-center mb-6">
            <img src="https://pagedone.io/asset/uploads/1696244619.png" alt="Alexa image" className="rounded-lg w-full object-cover"/>
          </div>
          <div className="block">
            <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech Solutions for Student Loans: Easing
              the Burden of Education Debt</h4>
            <div className="flex items-center justify-between  font-medium">
              <h6 className="text-sm text-gray-500">By Alexa H.</h6>
              <span className="text-sm text-indigo-600">2 year ago</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View
        All</button>
    </div>
  </section>

  <footer className="w-full bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
        <a href="javascript:;" className="flex justify-center ">
          <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M47 24.7231V7H54.4171C54.5916 7 54.816 7.00821 55.0903 7.02462C55.3645 7.03282 55.618 7.05744 55.8507 7.09846C56.8895 7.25436 57.7455 7.59487 58.4186 8.12C59.1001 8.64513 59.6029 9.30974 59.927 10.1138C60.2594 10.9097 60.4256 11.7959 60.4256 12.7723C60.4256 13.7405 60.2594 14.6267 59.927 15.4308C59.5945 16.2267 59.0876 16.8872 58.4061 17.4123C57.733 17.9374 56.8812 18.2779 55.8507 18.4338C55.618 18.4667 55.3604 18.4913 55.0778 18.5077C54.8035 18.5241 54.5833 18.5323 54.4171 18.5323H50.0042V24.7231H47ZM50.0042 15.7631H54.2925C54.4587 15.7631 54.6457 15.7549 54.8534 15.7385C55.0612 15.7221 55.2523 15.6892 55.4268 15.64C55.9255 15.5169 56.3161 15.2995 56.5986 14.9877C56.8895 14.6759 57.0931 14.3231 57.2094 13.9292C57.3341 13.5354 57.3964 13.1497 57.3964 12.7723C57.3964 12.3949 57.3341 12.0092 57.2094 11.6154C57.0931 11.2133 56.8895 10.8564 56.5986 10.5446C56.3161 10.2328 55.9255 10.0154 55.4268 9.89231C55.2523 9.84308 55.0612 9.81436 54.8534 9.80615C54.6457 9.78974 54.4587 9.78154 54.2925 9.78154H50.0042V15.7631Z"
              fill="white" />
            <path
              d="M66.0975 25.0923C65.1252 25.0923 64.3024 24.9118 63.6293 24.5508C62.9561 24.1815 62.445 23.6933 62.096 23.0862C61.7553 22.479 61.5849 21.8103 61.5849 21.08C61.5849 20.44 61.6929 19.8656 61.909 19.3569C62.1251 18.84 62.4575 18.3969 62.9063 18.0277C63.355 17.6503 63.9368 17.3426 64.6515 17.1046C65.1917 16.9323 65.8233 16.7764 66.5463 16.6369C67.2776 16.4974 68.0671 16.3703 68.9148 16.2554C69.7707 16.1323 70.6641 16.001 71.5949 15.8615L70.5228 16.4646C70.5311 15.5456 70.3234 14.8687 69.8995 14.4338C69.4757 13.999 68.761 13.7815 67.7554 13.7815C67.1488 13.7815 66.5629 13.921 65.9978 14.2C65.4327 14.479 65.0379 14.959 64.8135 15.64L62.0711 14.7908C62.4035 13.6667 63.0351 12.7641 63.9659 12.0831C64.9049 11.4021 66.1681 11.0615 67.7554 11.0615C68.9522 11.0615 70.0034 11.2544 70.9093 11.64C71.8234 12.0256 72.5007 12.6574 72.9412 13.5354C73.1822 14.0031 73.3276 14.4831 73.3775 14.9754C73.4274 15.4595 73.4523 15.9887 73.4523 16.5631V24.7231H70.822V21.8431L71.2583 22.3108C70.6517 23.2708 69.9411 23.9764 69.1267 24.4277C68.3206 24.8708 67.3108 25.0923 66.0975 25.0923ZM66.6959 22.7292C67.3773 22.7292 67.9591 22.6103 68.4411 22.3723C68.9231 22.1344 69.3054 21.8431 69.5879 21.4985C69.8788 21.1538 70.0741 20.8297 70.1738 20.5262C70.3317 20.1487 70.419 19.7179 70.4356 19.2338C70.4605 18.7415 70.473 18.3436 70.473 18.04L71.3954 18.3108C70.4896 18.4503 69.7126 18.5733 69.0643 18.68C68.4161 18.7867 67.8593 18.8892 67.3939 18.9877C66.9286 19.0779 66.5172 19.1805 66.1598 19.2954C65.8108 19.4185 65.5158 19.5621 65.2748 19.7262C65.0338 19.8903 64.8468 20.079 64.7138 20.2923C64.5891 20.5056 64.5268 20.7559 64.5268 21.0431C64.5268 21.3713 64.6099 21.6626 64.7761 21.9169C64.9423 22.1631 65.1833 22.36 65.4991 22.5077C65.8233 22.6554 66.2222 22.7292 66.6959 22.7292Z"
              fill="white" />
            <path
              d="M82.1078 31C81.3598 31 80.641 30.8851 79.9512 30.6554C79.2698 30.4256 78.6548 30.0933 78.1063 29.6585C77.5578 29.2318 77.109 28.7149 76.76 28.1077L79.5274 26.7538C79.785 27.2379 80.1465 27.5949 80.6119 27.8246C81.0856 28.0626 81.5884 28.1815 82.1203 28.1815C82.7435 28.1815 83.3003 28.0708 83.7907 27.8492C84.281 27.6359 84.6591 27.3159 84.925 26.8892C85.1993 26.4708 85.3281 25.9456 85.3115 25.3138V21.5354H85.6855V11.4308H88.3157V25.3631C88.3157 25.6995 88.2991 26.0195 88.2659 26.3231C88.2409 26.6349 88.1952 26.9385 88.1287 27.2338C87.9293 28.0954 87.547 28.801 86.9819 29.3508C86.4168 29.9087 85.7145 30.3231 84.8752 30.5938C84.0441 30.8646 83.1217 31 82.1078 31ZM81.846 25.0923C80.6077 25.0923 79.5274 24.7846 78.6049 24.1692C77.6825 23.5538 76.9678 22.7169 76.4608 21.6585C75.9539 20.6 75.7004 19.4062 75.7004 18.0769C75.7004 16.7313 75.9539 15.5333 76.4608 14.4831C76.9761 13.4246 77.7032 12.5918 78.6423 11.9846C79.5814 11.3692 80.6867 11.0615 81.9582 11.0615C83.238 11.0615 84.3101 11.3692 85.1744 11.9846C86.047 12.5918 86.7076 13.4246 87.1564 14.4831C87.6052 15.5415 87.8296 16.7395 87.8296 18.0769C87.8296 19.3979 87.6052 20.5918 87.1564 21.6585C86.7076 22.7169 86.0387 23.5538 85.1494 24.1692C84.2602 24.7846 83.1591 25.0923 81.846 25.0923ZM82.3072 22.4338C83.1134 22.4338 83.7616 22.2533 84.2519 21.8923C84.7505 21.5231 85.112 21.0103 85.3364 20.3538C85.5691 19.6974 85.6855 18.9385 85.6855 18.0769C85.6855 17.2072 85.5691 16.4482 85.3364 15.8C85.112 15.1436 84.7588 14.6349 84.2768 14.2738C83.7948 13.9046 83.1715 13.72 82.407 13.72C81.6008 13.72 80.936 13.9169 80.4124 14.3108C79.8889 14.6964 79.5024 15.2215 79.2531 15.8862C79.0038 16.5426 78.8792 17.2728 78.8792 18.0769C78.8792 18.8892 78.9997 19.6277 79.2407 20.2923C79.49 20.9487 79.8681 21.4697 80.375 21.8554C80.882 22.241 81.5261 22.4338 82.3072 22.4338Z"
              fill="white" />
            <path
              d="M97.6827 25.0923C96.3198 25.0923 95.1231 24.801 94.0926 24.2185C93.0621 23.6359 92.256 22.8277 91.6743 21.7938C91.1008 20.76 90.8141 19.5703 90.8141 18.2246C90.8141 16.7723 91.0967 15.5128 91.6618 14.4462C92.2269 13.3713 93.0122 12.5385 94.0178 11.9477C95.0234 11.3569 96.1869 11.0615 97.5082 11.0615C98.9044 11.0615 100.089 11.3856 101.061 12.0338C102.042 12.6738 102.769 13.5805 103.242 14.7538C103.716 15.9272 103.895 17.3097 103.778 18.9015H100.799V17.8185C100.791 16.3744 100.533 15.32 100.026 14.6554C99.5194 13.9908 98.7216 13.6585 97.6329 13.6585C96.4029 13.6585 95.4888 14.0359 94.8904 14.7908C94.2921 15.5374 93.9929 16.6328 93.9929 18.0769C93.9929 19.4226 94.2921 20.4646 94.8904 21.2031C95.4888 21.9415 96.3614 22.3108 97.5082 22.3108C98.2479 22.3108 98.8836 22.1508 99.4155 21.8308C99.9557 21.5026 100.371 21.0308 100.662 20.4154L103.629 21.3015C103.114 22.4995 102.316 23.4308 101.235 24.0954C100.163 24.76 98.9792 25.0923 97.6827 25.0923ZM93.0455 18.9015V16.6615H102.308V18.9015H93.0455Z"
              fill="white" />
            <path
              d="M111.708 25.0923C110.47 25.0923 109.39 24.7846 108.467 24.1692C107.545 23.5538 106.83 22.7169 106.323 21.6585C105.816 20.6 105.563 19.4062 105.563 18.0769C105.563 16.7313 105.816 15.5333 106.323 14.4831C106.838 13.4246 107.565 12.5918 108.505 11.9846C109.444 11.3692 110.549 11.0615 111.82 11.0615C113.1 11.0615 114.172 11.3692 115.037 11.9846C115.909 12.5918 116.57 13.4246 117.019 14.4831C117.467 15.5415 117.692 16.7395 117.692 18.0769C117.692 19.3979 117.467 20.5918 117.019 21.6585C116.57 22.7169 115.901 23.5538 115.012 24.1692C114.122 24.7846 113.021 25.0923 111.708 25.0923ZM112.169 22.4338C112.976 22.4338 113.624 22.2533 114.114 21.8923C114.613 21.5231 114.974 21.0103 115.199 20.3538C115.431 19.6974 115.548 18.9385 115.548 18.0769C115.548 17.2072 115.431 16.4482 115.199 15.8C114.974 15.1436 114.621 14.6349 114.139 14.2738C113.657 13.9046 113.034 13.72 112.269 13.72C111.463 13.72 110.798 13.9169 110.275 14.3108C109.751 14.6964 109.365 15.2215 109.115 15.8862C108.866 16.5426 108.741 17.2728 108.741 18.0769C108.741 18.8892 108.862 19.6277 109.103 20.2923C109.352 20.9487 109.73 21.4697 110.237 21.8554C110.744 22.241 111.388 22.4338 112.169 22.4338ZM115.548 24.7231V15.3938H115.174V7H118.203V24.7231H115.548Z"
              fill="white" />
            <path
              d="M127.395 25.0923C126.049 25.0923 124.873 24.7928 123.867 24.1938C122.861 23.5949 122.08 22.7703 121.523 21.72C120.975 20.6615 120.701 19.4472 120.701 18.0769C120.701 16.6821 120.983 15.4595 121.548 14.4092C122.113 13.359 122.899 12.5385 123.904 11.9477C124.91 11.3569 126.073 11.0615 127.395 11.0615C128.749 11.0615 129.93 11.361 130.935 11.96C131.941 12.559 132.722 13.3877 133.279 14.4462C133.835 15.4964 134.114 16.7067 134.114 18.0769C134.114 19.4554 133.831 20.6738 133.266 21.7323C132.709 22.7826 131.928 23.6072 130.923 24.2062C129.917 24.7969 128.741 25.0923 127.395 25.0923ZM127.395 22.3108C128.592 22.3108 129.481 21.9169 130.062 21.1292C130.644 20.3415 130.935 19.3241 130.935 18.0769C130.935 16.7887 130.64 15.7631 130.05 15C129.46 14.2287 128.575 13.8431 127.395 13.8431C126.589 13.8431 125.924 14.0236 125.4 14.3846C124.885 14.7374 124.503 15.2338 124.253 15.8738C124.004 16.5056 123.879 17.24 123.879 18.0769C123.879 19.3651 124.174 20.3949 124.765 21.1662C125.363 21.9292 126.24 22.3108 127.395 22.3108Z"
              fill="white" />
            <path
              d="M145.923 24.7231V18.3231C145.923 17.9046 145.894 17.441 145.836 16.9323C145.778 16.4236 145.64 15.9354 145.424 15.4677C145.217 14.9918 144.901 14.6021 144.477 14.2985C144.061 13.9949 143.496 13.8431 142.782 13.8431C142.399 13.8431 142.021 13.9046 141.647 14.0277C141.273 14.1508 140.933 14.3641 140.625 14.6677C140.326 14.9631 140.085 15.3733 139.902 15.8985C139.719 16.4154 139.628 17.08 139.628 17.8923L137.845 17.1415C137.845 16.0092 138.065 14.9836 138.506 14.0646C138.955 13.1456 139.611 12.4154 140.475 11.8738C141.34 11.3241 142.403 11.0492 143.667 11.0492C144.664 11.0492 145.487 11.2133 146.135 11.5415C146.783 11.8697 147.298 12.2882 147.681 12.7969C148.063 13.3056 148.345 13.8472 148.528 14.4215C148.711 14.9959 148.827 15.5415 148.877 16.0585C148.936 16.5672 148.965 16.9815 148.965 17.3015V24.7231H145.923ZM136.586 24.7231V11.4308H139.266V15.5538H139.628V24.7231H136.586Z"
              fill="white" />
            <path
              d="M157.87 25.0923C156.507 25.0923 155.31 24.801 154.28 24.2185C153.249 23.6359 152.443 22.8277 151.861 21.7938C151.288 20.76 151.001 19.5703 151.001 18.2246C151.001 16.7723 151.284 15.5128 151.849 14.4462C152.414 13.3713 153.199 12.5385 154.205 11.9477C155.21 11.3569 156.374 11.0615 157.695 11.0615C159.091 11.0615 160.276 11.3856 161.248 12.0338C162.229 12.6738 162.956 13.5805 163.43 14.7538C163.903 15.9272 164.082 17.3097 163.966 18.9015H160.986V17.8185C160.978 16.3744 160.72 15.32 160.213 14.6554C159.706 13.9908 158.909 13.6585 157.82 13.6585C156.59 13.6585 155.676 14.0359 155.078 14.7908C154.479 15.5374 154.18 16.6328 154.18 18.0769C154.18 19.4226 154.479 20.4646 155.078 21.2031C155.676 21.9415 156.548 22.3108 157.695 22.3108C158.435 22.3108 159.071 22.1508 159.603 21.8308C160.143 21.5026 160.558 21.0308 160.849 20.4154L163.816 21.3015C163.301 22.4995 162.503 23.4308 161.423 24.0954C160.351 24.76 159.166 25.0923 157.87 25.0923ZM153.233 18.9015V16.6615H162.495V18.9015H153.233Z"
              fill="white" />
            <path
              d="M24.5473 11.8941C25.1905 12.5063 25.2068 13.5149 24.5837 14.1468L18.7585 20.054C18.1354 20.686 17.1087 20.702 16.4654 20.0898C15.8222 19.4776 15.8059 18.469 16.429 17.8371L22.2542 11.9299C22.8773 11.2979 23.904 11.2819 24.5473 11.8941Z"
              fill="url(#paint0_linear_9147_12012)" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z"
              fill="url(#paint1_linear_9147_12012)" />
            <defs>
              <linearGradient id="paint0_linear_9147_12012" x1="35" y1="1.89063" x2="1.11152" y2="33.4573"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7C3AED" />
                <stop offset="0.993738" stop-color="#4F46E5" />
              </linearGradient>
              <linearGradient id="paint1_linear_9147_12012" x1="35" y1="1.89063" x2="1.11152" y2="33.4573"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7C3AED" />
                <stop offset="0.993738" stop-color="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>

        </a>
        <ul className="text-lg  flex flex-col sm:flex-row items-center gap-6 lg:gap-14 transition-all duration-500">
          <li><a href="javascript:;" className="text-white hover:text-gray-400">Pagedone</a></li>
          <li><a href="javascript:;" className="text-white hover:text-gray-400">Products</a></li>
          <li><a href="javascript:;" className="text-white hover:text-gray-400">Resources</a></li>
          <li><a href="javascript:;" className="text-white hover:text-gray-400">Blog</a></li>
          <li><a href="javascript:;" className="text-white hover:text-gray-400">Support</a></li>
        </ul>
        <div className="flex  space-x-4 sm:justify-center  ">
          <a href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
            <svg className="w-5 h-5 text-white group-hover:text-white" width="32" height="32" viewBox="0 0 32 32"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                fill="currentColor" />
            </svg>

          </a>
          <a href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
            <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                fill="currentColor" />
            </svg>

          </a>
          <a href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
            <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                fill="currentColor" />
            </svg>

          </a>
          <a href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
            <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                fill="currentColor" />
            </svg>

          </a>
        </div>
      </div>
      {/* Grid */}
      <div className="py-7 border-t border-gray-700">
        <div className="flex items-center justify-center">
          <span className="text-gray-400 ">©pagedone 2024, All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</body>
                                            
  )
}
