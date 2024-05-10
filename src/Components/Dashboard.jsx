const Dashboard = () => {
  return (
    <div className="lg:px-20 lg:py-8 2xl:px-[200px]">
      <div className="flex justify-start text-gray-500 lg:text-[18px] p-4 text-xs md:text-md 2xl:text-2xl">
        <span className="mr-2 flex flex-col justify-center cursor-pointer">
          <svg
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[20px] lg:h-[21.5px] w-[16px] h-[18px]"
          >
            <path
              d="M21.5738 9.71747L12.8238 2.06123C12.5958 1.86151 12.3031 1.7514 12 1.7514C11.6969 1.7514 11.4042 1.86151 11.1763 2.06123L2.42625 9.71747C2.29221 9.83491 2.18483 9.97966 2.11132 10.142C2.0378 10.3043 1.99985 10.4805 2 10.6587V21.7487C2 22.0802 2.1317 22.3982 2.36612 22.6326C2.60054 22.867 2.91848 22.9987 3.25 22.9987H8.25C8.58152 22.9987 8.89946 22.867 9.13388 22.6326C9.3683 22.3982 9.5 22.0802 9.5 21.7487V16.7487C9.5 16.4172 9.6317 16.0993 9.86612 15.8648C10.1005 15.6304 10.4185 15.4987 10.75 15.4987H13.25C13.5815 15.4987 13.8995 15.6304 14.1339 15.8648C14.3683 16.0993 14.5 16.4172 14.5 16.7487V21.7487C14.5 22.0802 14.6317 22.3982 14.8661 22.6326C15.1005 22.867 15.4185 22.9987 15.75 22.9987H20.75C21.0815 22.9987 21.3995 22.867 21.6339 22.6326C21.8683 22.3982 22 22.0802 22 21.7487V10.6587C22.0002 10.4805 21.9622 10.3043 21.8887 10.142C21.8152 9.97966 21.7078 9.83491 21.5738 9.71747Z"
              stroke="#696671"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="mr-2 flex flex-col justify-center">
          <svg
            width="7.41"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
              fill="#06286E"
            />
          </svg>
        </span>
        <span className="mr-2 cursor-pointer flex items-center max-sm:text-[14px]">
          Flashcard
        </span>
        <span className="mr-2 flex flex-col justify-center">
          <svg
            width="7.41"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
              fill="#06286E"
            />
          </svg>
        </span>
        <span className="mr-2 cursor-pointer flex items-center max-sm:text-[14px]">
          Mathematics
        </span>
        <span className="mr-2 flex flex-col justify-center">
          <svg
            width="7.41"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
              fill="#06286E"
            />
          </svg>
        </span>
        <span className="mr-2 text-[#06286E] flex items-center max-sm:text-[14px]">
          Relations and Function
        </span>
      </div>
      <div className="lg:my-8 my-3 lg:mx-auto mx-3 text-[18px] md:text-[24px] lg:text-[32px] 2xl:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0] max-sm:text-center">
        <h1>{"Relations and Functions ( Mathematics )"}</h1>
      </div>

      <div className="flex justify-center">
        <div className="lg:my-8 my-6 text-[15px] lg:text-[20px] 2xl:text-[30px]">
          <span className="lg:mx-4 lg:px-4 py-2 mx-2 font-bold border-b-[3px] border-[#000000] text-[#06286E] max-sm:text-[18px]">
            Study
          </span>
          <span className="lg:mx-4 lg:px-4 mx-2 text-gray-500 cursor-pointer max-sm:text-[18px]">
            Quiz
          </span>
          <span className="lg:mx-4 lg:px-4 mx-2 text-gray-500 cursor-pointer max-sm:text-[18px]">
            Test
          </span>
          <span className="lg:mx-4 lg:px-4 mx-2 text-gray-500 cursor-pointer max-sm:text-[18px]">
            Game
          </span>
          <span className="lg:mx-4 lg:px-4 mx-2 text-gray-500 cursor-pointer max-sm:text-[18px]">
            Others
          </span>
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-center">
            <div className="mx-4 bg-gradient-linear rounded-3xl w-[420px] lg:w-[712px] 2xl:w-[1000px] md:h-[393.19px] 2xl:h-[500px] h-[270px] p-4 2xl:p-8">
              <div className="flex w-full h-[30px] justify-between">
                <svg
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer z-20 w-[20px] h-[30px] 2xl:w-[40px] 2xl:h-[50px]"
                >
                  <path
                    d="M5.75824 27.7612C5.75824 28.5405 6.39585 29.1781 7.17515 29.1781H12.8428C13.6221 29.1781 14.2597 28.5405 14.2597 27.7612V26.3443H5.75824V27.7612ZM10.009 0.839813C4.53969 0.839813 0.0905762 5.28893 0.0905762 10.7582C0.0905762 14.1305 1.77671 17.0918 4.34132 18.8913V22.0935C4.34132 22.8728 4.97893 23.5105 5.75824 23.5105H14.2597C15.039 23.5105 15.6766 22.8728 15.6766 22.0935V18.8913C18.2413 17.0918 19.9274 14.1305 19.9274 10.7582C19.9274 5.28893 15.4783 0.839813 10.009 0.839813ZM14.0472 16.5676L12.8428 17.4177V20.6766H7.17515V17.4177L5.97077 16.5676C5.03205 15.9168 4.26472 15.0486 3.73425 14.037C3.20378 13.0254 2.92593 11.9005 2.92441 10.7582C2.92441 6.84753 6.0983 3.67364 10.009 3.67364C13.9197 3.67364 17.0936 6.84753 17.0936 10.7582C17.0936 13.0678 15.96 15.2357 14.0472 16.5676Z"
                    fill="#F5F5F5"
                  />
                </svg>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer z-20 2xl:w-[40px] 2xl:h-[50px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.8249 3.50143V0.582581C21.5067 1.87197 25.7433 6.94453 25.7433 13.0089C25.7433 19.0733 21.5067 24.1459 15.8249 25.4353V22.5164C19.9198 21.2979 22.9094 17.5005 22.9094 13.0089C22.9094 8.51731 19.9198 4.71997 15.8249 3.50143ZM0.2388 8.75818V17.2597H5.90646L12.991 24.3443V1.67361L5.90646 8.75818H0.2388ZM19.3672 13.0089C19.3669 11.8217 19.0351 10.6582 18.4093 9.64934C17.7834 8.64049 16.8884 7.8264 15.8249 7.29876V18.7049C17.9219 17.6706 19.3672 15.5169 19.3672 13.0089Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <span className="flex flex-col justify-center h-full text-center md:text-[38.26px] text-[25px] 2xl:text-[50px] text-white font-[700px] transform -translate-y-8">
                9 + 6 + 7x - 2x - 3
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-between w-[340px] lg:w-[712px] 2xl:w-[1000px] sm:px-5 lg:px-9 2xl:px-8 py-5">
              <span className="flex flex-col justify-center">
                <svg
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-[20px] h-[20px] lg:w-[30px] lg:h-[31px] 2xl:w-[40px] 2xl:h-[50px]"
                >
                  <path
                    d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z"
                    fill="url(#paint0_linear_1_169)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_169"
                      x1="15"
                      y1="0.184647"
                      x2="15"
                      y2="30.2034"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#06286E" />
                      <stop offset="1" stopColor="#164EC0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <div className="flex justify-between">
                <span className="flex flex-col justify-center">
                  <svg
                    viewBox="0 0 60 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer w-[30px] h-[31px] lg:w-[60px] lg:h-[61px]"
                  >
                    <path
                      d="M30 0.194031C35.9334 0.194031 41.7336 1.9535 46.6671 5.24994C51.6006 8.54638 55.4457 13.2317 57.7164 18.7135C59.987 24.1953 60.5811 30.2273 59.4235 36.0467C58.266 41.8662 55.4088 47.2116 51.2132 51.4072C47.0176 55.6028 41.6721 58.46 35.8527 59.6176C30.0333 60.7751 24.0013 60.181 18.5195 57.9104C13.0377 55.6398 8.35235 51.7946 5.05591 46.8611C1.75947 41.9277 0 36.1275 0 30.194C0.0154533 22.2423 3.18112 14.6206 8.80386 8.99789C14.4266 3.37515 22.0482 0.209481 30 0.194031ZM20.3661 31.8956L31.9046 42.2802C32.3325 42.6651 32.8861 42.8806 33.4615 42.8863C33.782 42.8876 34.0991 42.8214 34.3922 42.6921C34.6854 42.5627 34.948 42.3731 35.1631 42.1356C35.3678 41.912 35.5265 41.6502 35.6301 41.3652C35.7336 41.0803 35.78 40.7777 35.7666 40.4748C35.7532 40.1719 35.6802 39.8747 35.5518 39.6C35.4234 39.3253 35.2422 39.0786 35.0185 38.874L25.3846 30.194L35.0185 21.511C35.4459 21.0922 35.6939 20.5237 35.7103 19.9255C35.7266 19.3274 35.5099 18.7462 35.106 18.3047C34.702 17.8633 34.1424 17.596 33.5451 17.5592C32.9478 17.5225 32.3596 17.7192 31.9046 18.1079L20.3661 28.4925C20.1302 28.7087 19.9417 28.9716 19.8128 29.2645C19.6839 29.5574 19.6174 29.874 19.6174 30.194C19.6174 30.5141 19.6839 30.8306 19.8128 31.1235C19.9417 31.4165 20.1302 31.6794 20.3661 31.8956Z"
                      fill="url(#paint0_linear_1_171)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_171"
                        x1="30"
                        y1="0.194031"
                        x2="30"
                        y2="60.194"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#06286E" />
                        <stop offset="1" stopColor="#164EC0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-[16px] md:text-[20px] lg:text-[24px] font-bold mx-10 flex flex-col justify-center">
                  01/10
                </span>
                <span className="flex flex-col justify-center">
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer w-[30px] h-[31px] lg:w-[60px] lg:h-[61px]"
                  >
                    <path
                      d="M30 0.194031C24.0666 0.194031 18.2664 1.9535 13.3329 5.24994C8.39943 8.54638 4.55426 13.2317 2.28363 18.7135C0.0129984 24.1953 -0.581101 30.2273 0.576455 36.0467C1.73401 41.8662 4.59123 47.2116 8.78681 51.4072C12.9824 55.6028 18.3279 58.46 24.1473 59.6176C29.9667 60.7751 35.9987 60.181 41.4805 57.9104C46.9623 55.6398 51.6476 51.7946 54.9441 46.8611C58.2405 41.9277 60 36.1275 60 30.194C59.9845 22.2423 56.8189 14.6206 51.1961 8.99789C45.5734 3.37515 37.9518 0.209481 30 0.194031ZM39.6339 31.8956L28.0954 42.2802C27.6675 42.6651 27.1139 42.8806 26.5385 42.8863C26.218 42.8876 25.9009 42.8214 25.6078 42.6921C25.3146 42.5627 25.052 42.3731 24.8369 42.1356C24.6322 41.912 24.4735 41.6502 24.3699 41.3652C24.2664 41.0803 24.22 40.7777 24.2334 40.4748C24.2468 40.1719 24.3198 39.8747 24.4482 39.6C24.5766 39.3253 24.7578 39.0786 24.9815 38.874L34.6154 30.194L24.9815 21.511C24.5541 21.0922 24.3061 20.5237 24.2897 19.9255C24.2734 19.3274 24.4901 18.7462 24.894 18.3047C25.298 17.8633 25.8576 17.596 26.4549 17.5592C27.0522 17.5225 27.6404 17.7192 28.0954 18.1079L39.6339 28.4925C39.8698 28.7087 40.0583 28.9716 40.1872 29.2645C40.3161 29.5574 40.3826 29.874 40.3826 30.194C40.3826 30.5141 40.3161 30.8306 40.1872 31.1235C40.0583 31.4165 39.8698 31.6794 39.6339 31.8956Z"
                      fill="url(#paint0_linear_1_173)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_173"
                        x1="30"
                        y1="0.194031"
                        x2="30"
                        y2="60.194"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#06286E" />
                        <stop offset="1" stopColor="#164EC0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <span className="flex flex-col justify-center">
                <svg
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-[20px] h-[19px] lg:w-[30px] lg:h-[31px] 2xl:w-[40px] 2xl:h-[50px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.28571 10.9083H0V0.194031H10.7143V4.47974H4.28571V10.9083ZM0 19.4797H4.28571V25.9083H10.7143V30.194H0V19.4797ZM25.7143 25.9083H19.2857V30.194H30V19.4797H25.7143V25.9083ZM19.2857 4.47974V0.194031H30V10.9083H25.7143V4.47974H19.2857Z"
                    fill="url(#paint0_linear_1_174)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_174"
                      x1="15"
                      y1="0.194031"
                      x2="15"
                      y2="30.194"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#06286E" />
                      <stop offset="1" stopColor="#164EC0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[20px] md:mt-[70px]">
        <div className="flex max-sm:gap-[10px]">
          <div className="flex h-[100%] justify-center flex-col pl-4 md:pl-auto">
            <svg
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-10 rounded-[50%] shadow-[0_0px_31px_rgba(8,_56,_153,_0.4)] md:w-[81px] md:h-[81px] w-[60px] h-[60px]"
            >
              <circle cx="50%" cy="50%" r="50%" fill="white" />
            </svg>
            <img
              src={"/logo-icon.png"}
              alt=""
              className="md:w-[44.69px] md:h-[34.54px] absolute z-20 md:ml-[23px] ml-[12px] max-sm:w-[40.25px] max-sm:h-[30.17px]"
            />
          </div>
          <div className="md:ml-[105px] ml-[60px]">
            <span className="text-[10px] md:text-[12.4px]">Published by</span>
            <div className="">
              <img
                src={"/logo-text.png"}
                alt=""
                className="md:w-[115.14px] md:h-[34.54px] w-[80px] h-[23px]"
              />
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <div className="flex h-[100%] justify-center flex-col">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[50px] md:h-[50px] w-[25px] h-[25px]"
            >
              <path
                d="M25.0001 -0.00019455C11.2001 -0.00019455 9.15527e-05 11.1998 9.15527e-05 24.9998C9.15527e-05 38.7998 11.2001 49.9998 25.0001 49.9998C38.8001 49.9998 50.0001 38.7998 50.0001 24.9998C50.0001 11.1998 38.8001 -0.00019455 25.0001 -0.00019455ZM37.5001 27.4998H27.5001V37.4998H22.5001V27.4998H12.5001V22.4998H22.5001V12.4998H27.5001V22.4998H37.5001V27.4998Z"
                fill="url(#paint0_linear_1_203)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_203"
                  x1="25.0001"
                  y1="-0.00019455"
                  x2="25.0001"
                  y2="49.9998"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#06286E" />
                  <stop offset="1" stopColor="#164EC0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-[18px] md:text-[28px] text-[#06286E] p-[14px] text-transparent bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0]">
            Create Flashcard
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
