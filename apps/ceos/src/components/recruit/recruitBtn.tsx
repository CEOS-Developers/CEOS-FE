import { theme } from '@ceos-fe/ui';
import { useWindowResize } from '@ceos-fe/utils';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

interface BtnProps {
  text: string;
}

export const PMBtn = (props: BtnProps) => {
  const isMobile = useWindowResize();

  return (
    <div css={BtnCss}>
      {isMobile ? (
        <svg
          viewBox="0 0 346 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_620_9254)">
            <rect width="346" height="160" rx="10" fill="#5ED8FF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M192.145 151.881C192.145 145.069 190.057 138.744 186.486 133.51C188.324 133.83 190.215 133.997 192.145 133.997C210.211 133.997 224.856 119.371 224.856 101.328C224.856 83.2862 210.211 68.6601 192.145 68.6601C184.093 68.6601 176.721 71.5654 171.022 76.3836C171.095 75.4881 171.133 74.5823 171.133 73.6678C171.133 55.6257 156.488 40.9996 138.422 40.9996C120.356 40.9996 105.711 55.6257 105.711 73.6678C105.711 80.0225 107.528 85.9534 110.671 90.9707C109.054 90.7251 107.397 90.5976 105.711 90.5976C87.6453 90.5976 73 105.224 73 123.266C73 141.308 87.6453 155.934 105.711 155.934C113.811 155.934 121.223 152.994 126.936 148.124C126.795 149.357 126.723 150.61 126.723 151.881C126.723 169.923 141.368 184.549 159.434 184.549C177.499 184.549 192.145 169.923 192.145 151.881Z"
              fill="white"
            />
            <rect x="275" y="87" width="50" height="50" rx="25" fill="white" />
            <path
              d="M287.5 112.781L309.375 112.781"
              stroke="#5ED8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M301.595 102.234L311.946 112.586L301.595 122.937"
              stroke="#5ED8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M43.3246 30.2661H41.1354V47.9043H43.3246V30.2661ZM28.7044 43.0493L29.8439 44.7896C36.018 41.8545 38.0552 37.3932 38.0622 32.1377H29.6022V33.8573H35.8522C35.4655 37.8766 33.3246 40.8531 28.7044 43.0493ZM56.9357 31.675H52.7921V30.1556H50.6236V31.675H46.5006V33.2703H56.9357V31.675ZM45.9481 40.0728L46.2382 41.7371C49.3736 41.7371 53.5517 41.6819 57.3363 41.0396L57.1774 39.5617C55.7755 39.7413 54.2838 39.8587 52.7921 39.9346V38.9885C54.7741 38.7399 56.0586 37.8145 56.0724 36.4264C56.0586 34.7965 54.3045 33.7606 51.7285 33.7675C49.0904 33.7606 47.3639 34.7965 47.3777 36.4264C47.3639 37.8076 48.6208 38.7399 50.6236 38.9816V40.0175C48.9592 40.0659 47.357 40.0728 45.9481 40.0728ZM48.4481 44.5893H58.3998V47.9043H60.5959V42.9043H48.4481V44.5893ZM49.4564 36.4264C49.4564 35.6529 50.3404 35.2316 51.7285 35.2316C53.0752 35.2316 53.9868 35.6529 53.9937 36.4264C53.9868 37.1584 53.0752 37.5797 51.7285 37.5728C50.3404 37.5797 49.4564 37.1584 49.4564 36.4264ZM58.3998 42.1653H60.5959V30.3076H58.3998V42.1653ZM29.3191 76.1777H31.8536V71.3918H34.5746C37.8412 71.3918 39.5953 69.4305 39.5953 66.7164C39.5953 64.0161 37.8619 62.0341 34.6091 62.0341H29.3191V76.1777ZM31.8536 69.2993V64.1612H34.2224C36.1423 64.1612 36.9986 65.2109 36.9986 66.7164C36.9986 68.2219 36.1423 69.2993 34.2362 69.2993H31.8536ZM41.6628 76.1777H44.1973V70.9913H46.8355L49.6117 76.1777H52.457L49.3907 70.57C51.062 69.9001 51.9391 68.4775 51.9391 66.5576C51.9391 63.8573 50.2056 62.0341 46.9529 62.0341H41.6628V76.1777ZM44.1973 68.878V64.1612H46.5661C48.486 64.1612 49.3424 65.052 49.3424 66.5576C49.3424 68.0631 48.486 68.878 46.5799 68.878H44.1973ZM66.7607 69.1059C66.7607 64.5341 63.9706 61.8407 60.269 61.8407C56.5466 61.8407 53.7773 64.5341 53.7773 69.1059C53.7773 73.6639 56.5466 76.3711 60.269 76.3711C63.9706 76.3711 66.7607 73.6777 66.7607 69.1059ZM56.3325 69.1059C56.3325 65.8739 57.9554 64.1266 60.269 64.1266C62.5756 64.1266 64.1985 65.8739 64.1985 69.1059C64.1985 72.338 62.5756 74.0852 60.269 74.0852C57.9554 74.0852 56.3325 72.338 56.3325 69.1059ZM73.812 76.1777C78.1214 76.1777 80.6628 73.512 80.6628 69.0921C80.6628 64.686 78.1214 62.0341 73.9018 62.0341H69.0261V76.1777H73.812ZM71.5606 73.9747V64.2371H73.7637C76.6435 64.2371 78.1421 65.8462 78.1421 69.0921C78.1421 72.3449 76.6435 73.9747 73.6877 73.9747H71.5606ZM91.8481 62.0341V71.0672C91.8481 72.8421 90.6188 74.1197 88.6644 74.1197C86.71 74.1197 85.4669 72.8421 85.4669 71.0672V62.0341H82.9323V71.2744C82.9323 74.3131 85.2044 76.3918 88.6644 76.3918C92.1105 76.3918 94.3964 74.3131 94.3964 71.2744V62.0341H91.8481ZM106.544 66.8062H109.12C108.678 63.657 106.26 61.8407 103.139 61.8407C99.4372 61.8407 96.6679 64.5341 96.6679 69.1059C96.6679 73.6639 99.4027 76.3711 103.139 76.3711C106.488 76.3711 108.726 74.2026 109.12 71.5023L106.544 71.4885C106.212 73.146 104.858 74.0852 103.167 74.0852C100.874 74.0852 99.2231 72.3587 99.2231 69.1059C99.2231 65.9084 100.86 64.1266 103.18 64.1266C104.9 64.1266 106.254 65.1073 106.544 66.8062ZM110.683 64.175H115.054V76.1777H117.582V64.175H121.947V62.0341H110.683V64.175ZM124.693 76.3297C125.508 76.3297 126.198 75.6529 126.205 74.8172C126.198 73.9885 125.508 73.3186 124.693 73.3186C123.857 73.3186 123.167 73.9885 123.18 74.8172C123.167 75.6529 123.857 76.3297 124.693 76.3297Z"
              fill="#232527"
            />
          </g>
          <defs>
            <clipPath id="clip0_620_9254">
              <rect width="346" height="160" rx="10" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 328 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2836_13157)">
            <rect width="328" height="198" rx="20" fill="#5ED8FF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M184.638 194.619C184.638 187.042 182.315 180.007 178.34 174.184C180.386 174.54 182.49 174.726 184.638 174.726C204.747 174.726 221.048 158.457 221.048 138.387C221.048 118.318 204.747 102.048 184.638 102.048C175.676 102.048 167.47 105.28 161.127 110.639C161.209 109.643 161.251 108.636 161.251 107.619C161.251 87.5494 144.95 71.28 124.841 71.28C104.733 71.28 88.4313 87.5494 88.4313 107.619C88.4313 114.688 90.4536 121.285 93.9523 126.866C92.1519 126.593 90.3082 126.451 88.4313 126.451C68.3227 126.451 52.0215 142.72 52.0215 162.79C52.0215 182.859 68.3227 199.129 88.4313 199.129C97.4472 199.129 105.698 195.858 112.057 190.441C111.899 191.812 111.819 193.206 111.819 194.619C111.819 214.689 128.12 230.958 148.228 230.958C168.337 230.958 184.638 214.689 184.638 194.619Z"
              fill="white"
            />
            <rect
              x="245.118"
              y="110.88"
              width="56.4301"
              height="56.32"
              rx="28.16"
              fill="white"
            />
            <path
              d="M259.226 139.92L283.914 139.92"
              stroke="#5ED8FF"
              stroke-width="7.40408"
              stroke-linecap="round"
            />
            <path
              d="M275.133 128.04L286.816 139.7L275.133 151.36"
              stroke="#5ED8FF"
              stroke-width="6.30952"
              stroke-linecap="round"
            />
            <path
              d="M50.5931 36.0084V53.6466H48.4039V36.0084H50.5931ZM35.973 48.7916C40.5931 46.5955 42.734 43.6189 43.1208 39.5996H36.8708V37.88H45.3307C45.3238 43.1355 43.2865 47.5968 37.1125 50.5319L35.973 48.7916ZM64.2043 37.4173V39.0126H53.7692V37.4173H57.8921V35.8979H60.0606V37.4173H64.2043ZM53.2167 45.8151C54.6255 45.8151 56.2277 45.8082 57.8921 45.7598V44.7239C55.8893 44.4822 54.6324 43.5499 54.6463 42.1687C54.6324 40.5388 56.359 39.5029 58.9971 39.5098C61.573 39.5029 63.3272 40.5388 63.341 42.1687C63.3272 43.5568 62.0427 44.4822 60.0606 44.7308V45.6769C61.5523 45.601 63.044 45.4836 64.446 45.304L64.6048 46.7819C60.8203 47.4242 56.6421 47.4794 53.5067 47.4794L53.2167 45.8151ZM55.7167 50.3316V48.6466H67.8645V53.6466H65.6684V50.3316H55.7167ZM56.725 42.1687C56.725 42.9007 57.609 43.322 58.9971 43.3151C60.3438 43.322 61.2554 42.9007 61.2623 42.1687C61.2554 41.3952 60.3438 40.9739 58.9971 40.9739C57.609 40.9739 56.725 41.3952 56.725 42.1687ZM65.6684 47.9076V36.0499H67.8645V47.9076H65.6684ZM36.5876 81.92V67.7764H41.8777C45.1304 67.7764 46.8639 69.7584 46.8639 72.4587C46.8639 75.1728 45.1097 77.1341 41.8431 77.1341H39.1221V81.92H36.5876ZM39.1221 75.0416H41.5047C43.4108 75.0416 44.2672 73.9642 44.2672 72.4587C44.2672 70.9532 43.4108 69.9035 41.4909 69.9035H39.1221V75.0416ZM48.9314 81.92V67.7764H54.2214C57.4742 67.7764 59.2076 69.5996 59.2076 72.2999C59.2076 74.2198 58.3305 75.6424 56.6593 76.3123L59.7256 81.92H56.8803L54.104 76.7336H51.4659V81.92H48.9314ZM51.4659 74.6203H53.8485C55.7546 74.6203 56.6109 73.8054 56.6109 72.2999C56.6109 70.7944 55.7546 69.9035 53.8347 69.9035H51.4659V74.6203ZM74.0292 74.8482C74.0292 79.42 71.2392 82.1134 67.5375 82.1134C63.8151 82.1134 61.0458 79.4062 61.0458 74.8482C61.0458 70.2764 63.8151 67.583 67.5375 67.583C71.2392 67.583 74.0292 70.2764 74.0292 74.8482ZM63.6011 74.8482C63.6011 78.0803 65.224 79.8275 67.5375 79.8275C69.8442 79.8275 71.4671 78.0803 71.4671 74.8482C71.4671 71.6162 69.8442 69.8689 67.5375 69.8689C65.224 69.8689 63.6011 71.6162 63.6011 74.8482ZM81.0806 81.92H76.2946V67.7764H81.1703C85.39 67.7764 87.9314 70.4283 87.9314 74.8344C87.9314 79.2543 85.39 81.92 81.0806 81.92ZM78.8292 79.717H80.9562C83.9121 79.717 85.4107 78.0872 85.4107 74.8344C85.4107 71.5886 83.9121 69.9794 81.0322 69.9794H78.8292V79.717ZM99.1166 67.7764H101.665V77.0167C101.665 80.0554 99.3791 82.1341 95.9329 82.1341C92.473 82.1341 90.2009 80.0554 90.2009 77.0167V67.7764H92.7354V76.8095C92.7354 78.5844 93.9785 79.862 95.9329 79.862C97.8874 79.862 99.1166 78.5844 99.1166 76.8095V67.7764ZM113.812 72.5485C113.522 70.8496 112.168 69.8689 110.449 69.8689C108.128 69.8689 106.492 71.6507 106.492 74.8482C106.492 78.101 108.142 79.8275 110.435 79.8275C112.127 79.8275 113.481 78.8883 113.812 77.2308L116.388 77.2446C115.994 79.9449 113.757 82.1134 110.407 82.1134C106.671 82.1134 103.936 79.4062 103.936 74.8482C103.936 70.2764 106.706 67.583 110.407 67.583C113.529 67.583 115.946 69.3993 116.388 72.5485H113.812ZM117.951 69.9173V67.7764H129.215V69.9173H124.851V81.92H122.323V69.9173H117.951ZM131.961 82.072C131.126 82.072 130.435 81.3952 130.449 80.5595C130.435 79.7308 131.126 79.0609 131.961 79.0609C132.776 79.0609 133.467 79.7308 133.474 80.5595C133.467 81.3952 132.776 82.072 131.961 82.072Z"
              fill="#232527"
            />
          </g>
          <defs>
            <clipPath id="clip0_2836_13157">
              <rect width="328" height="198" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <p
        css={css`
          margin-left: 8px;
        `}
      >
        {props.text}
      </p>
    </div>
  );
};

export const DesginBtn = (props: BtnProps) => {
  const isMobile = useWindowResize();

  return (
    <div css={BtnCss}>
      {isMobile ? (
        <svg
          viewBox="0 0 346 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_620_9273)">
            <rect width="346" height="160" rx="10" fill="#FFC466" />
            <path
              d="M123.303 17.6104C129.092 26.7517 133.024 36.9437 134.874 47.6045C136.724 58.2653 136.456 69.1861 134.086 79.7435C131.716 90.3009 127.289 100.288 121.059 109.135C114.829 117.981 106.918 125.514 97.7765 131.303C88.6352 137.092 78.4432 141.024 67.7824 142.875C57.1216 144.725 46.2008 144.457 35.6434 142.087C25.086 139.717 15.0989 135.29 6.25227 129.06C-2.59438 122.83 -10.1273 114.918 -15.9164 105.777L30.4468 76.4156C32.38 79.4684 34.8957 82.1104 37.8501 84.191C40.8044 86.2715 44.1396 87.7498 47.6653 88.5413C51.191 89.3329 54.838 89.4223 58.3982 88.8044C61.9584 88.1865 65.3621 86.8734 68.4148 84.9401C71.4676 83.0069 74.1096 80.4912 76.1902 77.5368C78.2707 74.5825 79.749 71.2472 80.5405 67.7216C81.3321 64.1959 81.4215 60.5489 80.8036 56.9887C80.1857 53.4285 78.8726 50.0248 76.9393 46.9721L123.303 17.6104Z"
              fill="white"
            />
            <rect x="275" y="87" width="50" height="50" rx="25" fill="white" />
            <path
              d="M287.5 112.781L309.375 112.781"
              stroke="#FFC466"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M301.595 102.234L311.946 112.586L301.595 122.937"
              stroke="#FFC466"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M43.2762 30.2661H41.087V47.9457H43.2762V30.2661ZM29.6851 43.6846H31.1768C34.913 43.6777 37.192 43.581 39.7196 43.1045L39.5124 41.3159C37.1575 41.7371 35.1133 41.82 31.8605 41.8338V33.6432H38.1934V31.8614H29.6851V43.6846ZM52.205 35.273V33.7882H55.8929V32.0065H46.1829V33.7882H50.0296V35.273C50.0227 38.215 48.31 41.523 45.4992 42.849L46.7769 44.5617C48.8003 43.581 50.3404 41.5092 51.1415 39.0852C51.9357 41.2951 53.4067 43.1943 55.3957 44.1197L56.6111 42.407C53.828 41.1087 52.1912 38.0078 52.205 35.273ZM57.5227 47.9043H59.6981V38.954H62.4191V37.1308H59.6981V30.2661H57.5227V47.9043ZM77.8535 30.2799H75.678V43.0355H77.8535V30.2799ZM63.475 35.8462C63.4681 38.4567 65.5468 40.2799 68.2333 40.273C70.9198 40.2799 72.9847 38.4567 72.9847 35.8462C72.9847 33.2772 70.9198 31.4402 68.2333 31.4402C65.5468 31.4402 63.4681 33.2772 63.475 35.8462ZM65.5952 35.8462C65.5883 34.32 66.7209 33.3324 68.2333 33.3324C69.7043 33.3324 70.8507 34.32 70.8507 35.8462C70.8507 37.4139 69.7043 38.3808 68.2333 38.3808C66.7209 38.3808 65.5883 37.4139 65.5952 35.8462ZM66.1753 47.5728H78.3507V45.8117H68.3645V41.7371H66.1753V47.5728ZM34.105 76.1777C38.4144 76.1777 40.9558 73.512 40.9558 69.0921C40.9558 64.686 38.4144 62.0341 34.1948 62.0341H29.3191V76.1777H34.105ZM31.8536 73.9747V64.2371H34.0566C36.9365 64.2371 38.4351 65.8462 38.4351 69.0921C38.4351 72.3449 36.9365 73.9747 33.9807 73.9747H31.8536ZM43.2253 76.1777H52.4587V74.0369H45.7598V70.1625H51.927V68.0286H45.7598V64.175H52.4104V62.0341H43.2253V76.1777ZM62.5455 65.9222H64.9972C64.9488 63.5327 62.9115 61.8407 59.9074 61.8407C56.9378 61.8407 54.714 63.5051 54.7278 66.0051C54.7209 68.0355 56.1643 69.2095 58.4916 69.8034L60.1007 70.2178C61.6201 70.6114 62.6422 71.088 62.6491 72.186C62.6422 73.4015 61.4889 74.2164 59.8107 74.2164C58.2085 74.2164 56.9585 73.4913 56.848 72.0134H54.348C54.4585 74.8172 56.5441 76.3918 59.8314 76.3918C63.2223 76.3918 65.1905 74.6929 65.1905 72.2067C65.1905 69.7482 63.1532 68.6363 61.04 68.1391L59.714 67.8076C58.5469 67.5313 57.29 67.0341 57.3038 65.8531C57.3038 64.7827 58.2637 64.0023 59.8728 64.0023C61.406 64.0023 62.4212 64.7067 62.5455 65.9222ZM69.8614 62.0341H67.3269V76.1777H69.8614V62.0341ZM81.9709 66.5507H84.5676C84.1325 63.7744 81.7223 61.8407 78.6007 61.8407C74.8991 61.8407 72.1366 64.5686 72.1366 69.1197C72.1366 73.5949 74.7748 76.3711 78.6836 76.3711C82.1781 76.3711 84.685 74.1128 84.685 70.4733V68.7813H78.946V70.7772H82.2195C82.1781 72.8007 80.8245 74.0852 78.6905 74.0852C76.3148 74.0852 74.6919 72.3034 74.6919 69.0921C74.6919 65.9015 76.3493 64.1266 78.6353 64.1266C80.3411 64.1266 81.5082 65.0451 81.9709 66.5507ZM98.604 62.0341H96.0763V71.7026H95.952L89.2808 62.0341H86.9948V76.1777H89.5294V66.5161H89.6468L96.3457 76.1777H98.604V62.0341ZM102.642 76.3297C103.457 76.3297 104.147 75.6529 104.154 74.8172C104.147 73.9885 103.457 73.3186 102.642 73.3186C101.806 73.3186 101.116 73.9885 101.13 74.8172C101.116 75.6529 101.806 76.3297 102.642 76.3297Z"
              fill="#232527"
            />
          </g>
          <defs>
            <clipPath id="clip0_620_9273">
              <rect width="346" height="160" rx="10" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 328 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2836_13170)">
            <rect width="328" height="198" rx="20" fill="#FFC466" />
            <path
              d="M135.046 28.306C142.274 39.6973 147.184 52.398 149.494 65.683C151.804 78.9679 151.47 92.5768 148.51 105.733C145.551 118.889 140.024 131.334 132.245 142.358C124.467 153.383 114.588 162.77 103.175 169.984C91.7612 177.198 79.0357 182.098 65.7248 184.403C52.4139 186.709 38.7783 186.375 25.5966 183.422C12.4149 180.468 -0.0548342 174.952 -11.1006 167.188C-22.1464 159.425 -31.5518 149.566 -38.78 138.175L19.1082 101.586C21.5221 105.39 24.6631 108.682 28.3518 111.275C32.0406 113.868 36.2049 115.71 40.607 116.696C45.009 117.683 49.5627 117.794 54.0079 117.024C58.4531 116.254 62.7028 114.618 66.5144 112.209C70.326 109.799 73.6249 106.665 76.2226 102.983C78.8203 99.3015 80.666 95.1453 81.6544 90.7518C82.6427 86.3583 82.7543 81.8136 81.9828 77.377C81.2113 72.9405 79.5719 68.699 77.158 64.8949L135.046 28.306Z"
              fill="white"
            />
            <rect
              x="245.118"
              y="110.88"
              width="56.4301"
              height="56.32"
              rx="28.16"
              fill="white"
            />
            <path
              d="M259.226 139.92L283.914 139.92"
              stroke="#FFC466"
              stroke-width="7.40408"
              stroke-linecap="round"
            />
            <path
              d="M275.133 128.04L286.816 139.7L275.133 151.36"
              stroke="#FFC466"
              stroke-width="6.30952"
              stroke-linecap="round"
            />
            <path
              d="M50.5448 36.0084V53.688H48.3556V36.0084H50.5448ZM36.9536 49.4269V37.6037H45.4619V39.3855H39.1291V47.5761C42.3818 47.5623 44.426 47.4794 46.781 47.0582L46.9882 48.8468C44.4605 49.3234 42.1815 49.42 38.4454 49.4269H36.9536ZM59.4736 41.0153C59.4598 43.7502 61.0965 46.851 63.8797 48.1493L62.6642 49.862C60.6753 48.9366 59.2043 47.0374 58.4101 44.8275C57.609 47.2515 56.0689 49.3234 54.0454 50.304L52.7678 48.5913C55.5786 47.2653 57.2913 43.9573 57.2982 41.0153V39.5305H53.4515V37.7488H63.1614V39.5305H59.4736V41.0153ZM64.7913 53.6466V36.0084H66.9667V42.8731H69.6877V44.6963H66.9667V53.6466H64.7913ZM85.122 36.0223V48.7778H82.9466V36.0223H85.122ZM70.7436 41.5886C70.7367 39.0195 72.8154 37.1825 75.5019 37.1825C78.1883 37.1825 80.2532 39.0195 80.2532 41.5886C80.2532 44.199 78.1883 46.0223 75.5019 46.0153C72.8154 46.0223 70.7367 44.199 70.7436 41.5886ZM72.8637 41.5886C72.8568 43.1562 73.9894 44.1231 75.5019 44.1231C76.9728 44.1231 78.1193 43.1562 78.1193 41.5886C78.1193 40.0623 76.9728 39.0747 75.5019 39.0747C73.9894 39.0747 72.8568 40.0623 72.8637 41.5886ZM73.4438 53.3151V47.4794H75.6331V51.554H85.6193V53.3151H73.4438ZM41.3735 81.92H36.5876V67.7764H41.4633C45.6829 67.7764 48.2244 70.4283 48.2244 74.8344C48.2244 79.2543 45.6829 81.92 41.3735 81.92ZM39.1221 79.717H41.2492C44.205 79.717 45.7036 78.0872 45.7036 74.8344C45.7036 71.5886 44.205 69.9794 41.3252 69.9794H39.1221V79.717ZM50.4939 81.92V67.7764H59.6789V69.9173H53.0284V73.7709H59.1955V75.9049H53.0284V79.7792H59.7273V81.92H50.4939ZM69.814 71.6645C69.6897 70.449 68.6745 69.7446 67.1414 69.7446C65.5323 69.7446 64.5723 70.525 64.5723 71.5955C64.5585 72.7764 65.8154 73.2736 66.9826 73.5499L68.3085 73.8814C70.4218 74.3786 72.4591 75.4905 72.4591 77.949C72.4591 80.4352 70.4908 82.1341 67.1 82.1341C63.8127 82.1341 61.727 80.5595 61.6165 77.7557H64.1165C64.227 79.2336 65.477 79.9587 67.0792 79.9587C68.7574 79.9587 69.9107 79.1438 69.9176 77.9283C69.9107 76.8303 68.8886 76.3537 67.3693 75.9601L65.7602 75.5457C63.4328 74.9518 61.9895 73.7778 61.9964 71.7474C61.9826 69.2474 64.2063 67.583 67.1759 67.583C70.1801 67.583 72.2174 69.275 72.2657 71.6645H69.814ZM77.13 67.7764V81.92H74.5954V67.7764H77.13ZM89.2394 72.293C88.7767 70.7874 87.6096 69.8689 85.9038 69.8689C83.6179 69.8689 81.9604 71.6438 81.9604 74.8344C81.9604 78.0457 83.5834 79.8275 85.9591 79.8275C88.093 79.8275 89.4466 78.543 89.4881 76.5195H86.2146V74.5236H91.9535V76.2156C91.9535 79.8551 89.4466 82.1134 85.9521 82.1134C82.0433 82.1134 79.4052 79.3372 79.4052 74.862C79.4052 70.3109 82.1676 67.583 85.8693 67.583C88.9908 67.583 91.401 69.5167 91.8361 72.293H89.2394ZM105.873 67.7764V81.92H103.614L96.9153 72.2584H96.7979V81.92H94.2634V67.7764H96.5493L103.221 77.4449H103.345V67.7764H105.873ZM109.911 82.072C109.075 82.072 108.384 81.3952 108.398 80.5595C108.384 79.7308 109.075 79.0609 109.911 79.0609C110.725 79.0609 111.416 79.7308 111.423 80.5595C111.416 81.3952 110.725 82.072 109.911 82.072Z"
              fill="#232527"
            />
          </g>
          <defs>
            <clipPath id="clip0_2836_13170">
              <rect width="328" height="198" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <p
        css={css`
          margin-left: 8px;
        `}
      >
        {props.text}
      </p>
    </div>
  );
};

export const DevBtn = (props: BtnProps) => {
  const isMobile = useWindowResize();
  return (
    <div css={BtnCss}>
      {isMobile ? (
        <svg
          viewBox="0 0 346 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_620_9266)">
            <rect width="346" height="160" rx="10" fill="#01D1A8" />
            <path
              d="M235.199 98.125L239.18 80.3136L256.333 73.7982L250.855 56.498L262.539 42.3576L249.072 30.2042L252.156 12.2276L234.306 8.47751L227.964 -8.51841L210.516 -2.86035L196.446 -14.3216L184.074 -0.771429L166.048 -3.62692L162.067 14.1845L144.914 20.6999L150.391 38.0001L138.707 52.1405L152.175 64.2939L149.091 82.2705L166.94 86.0206L173.283 103.017L190.731 97.3584L204.8 108.82L217.173 95.2695L235.199 98.125Z"
              fill="white"
            />
            <rect x="275" y="87" width="50" height="50" rx="25" fill="white" />
            <path
              d="M287.5 112.781L309.375 112.781"
              stroke="#01D1A8"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M301.595 102.234L311.946 112.586L301.595 122.937"
              stroke="#01D1A8"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M43.7459 30.2661H41.6533V37.0893H39.7541V30.7357H37.7307V47.0893H39.7541V38.8504H41.6533V47.9043H43.7459V30.2661ZM28.4489 42.7109L29.7058 44.2233C34.7127 41.3573 36.2182 37.2551 36.232 32.4761H29.2638V34.2371H34.1119C33.8011 37.7661 32.2058 40.5562 28.4489 42.7109ZM48.6208 31.0396H46.473V38.733H54.9053V31.0396H52.7368V33.2841H48.6208V31.0396ZM48.2479 41.6957H57.6332V43.0493H48.2755V47.7592H60.3542V46.0327H50.4164V44.6239H59.8017V40.0037H48.2479V41.6957ZM48.6208 37.0134V34.9346H52.7368V37.0134H48.6208ZM57.6194 39.2924H59.8017V35.5976H62.2672V33.8297H59.8017V30.2661H57.6194V39.2924ZM34.105 76.1777C38.4144 76.1777 40.9558 73.512 40.9558 69.0921C40.9558 64.686 38.4144 62.0341 34.1948 62.0341H29.3191V76.1777H34.105ZM31.8536 73.9747V64.2371H34.0566C36.9365 64.2371 38.4351 65.8462 38.4351 69.0921C38.4351 72.3449 36.9365 73.9747 33.9807 73.9747H31.8536ZM43.2253 76.1777H52.4587V74.0369H45.7598V70.1625H51.927V68.0286H45.7598V64.175H52.4104V62.0341H43.2253V76.1777ZM56.7237 62.0341H53.9267L58.9129 76.1777H62.0483L67.0344 62.0341H64.2444L60.5565 73.1874H60.4115L56.7237 62.0341ZM68.7331 76.1777H77.9665V74.0369H71.2677V70.1625H77.4348V68.0286H71.2677V64.175H77.9182V62.0341H68.7331V76.1777ZM80.3737 76.1777H89.1514V74.0369H82.9083V62.0341H80.3737V76.1777ZM103.265 69.1059C103.265 64.5341 100.475 61.8407 96.7729 61.8407C93.0505 61.8407 90.2812 64.5341 90.2812 69.1059C90.2812 73.6639 93.0505 76.3711 96.7729 76.3711C100.475 76.3711 103.265 73.6777 103.265 69.1059ZM92.8364 69.1059C92.8364 65.8739 94.4593 64.1266 96.7729 64.1266C99.0795 64.1266 100.702 65.8739 100.702 69.1059C100.702 72.338 99.0795 74.0852 96.7729 74.0852C94.4593 74.0852 92.8364 72.338 92.8364 69.1059ZM105.53 76.1777H108.065V71.3918H110.786C114.052 71.3918 115.806 69.4305 115.806 66.7164C115.806 64.0161 114.073 62.0341 110.82 62.0341H105.53V76.1777ZM108.065 69.2993V64.1612H110.433C112.353 64.1612 113.21 65.2109 113.21 66.7164C113.21 68.2219 112.353 69.2993 110.447 69.2993H108.065ZM117.874 62.0341V76.1777H120.318V66.4125H120.436L124.365 76.1363H126.189L130.111 66.4471H130.243V76.1777H132.687V62.0341H129.573L125.36 72.3103H125.194L120.988 62.0341H117.874ZM135.335 76.1777H144.568V74.0369H137.869V70.1625H144.036V68.0286H137.869V64.175H144.52V62.0341H135.335V76.1777ZM158.584 62.0341H156.057V71.7026H155.932L149.261 62.0341H146.975V76.1777H149.51V66.5161H149.627L156.326 76.1777H158.584V62.0341ZM160.585 64.175H164.957V76.1777H167.484V64.175H171.849V62.0341H160.585V64.175ZM174.595 76.3297C175.41 76.3297 176.101 75.6529 176.108 74.8172C176.101 73.9885 175.41 73.3186 174.595 73.3186C173.759 73.3186 173.069 73.9885 173.083 74.8172C173.069 75.6529 173.759 76.3297 174.595 76.3297Z"
              fill="#232527"
            />
          </g>
          <defs>
            <clipPath id="clip0_620_9266">
              <rect width="346" height="160" rx="10" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 328 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2836_13178)">
            <rect width="328" height="198" rx="20" fill="#01D1A8" />
            <path
              d="M228.192 116.914L232.9 95.8903L253.186 88.1997L246.709 67.779L260.527 51.088L244.599 36.7425L248.246 15.5234L227.136 11.0969L219.635 -8.96467L198.999 -2.28603L182.36 -15.8146L167.728 0.179675L146.408 -3.19088L141.7 17.8333L121.414 25.5239L127.891 45.9446L114.073 62.6356L130.001 76.9812L126.353 98.2002L147.464 102.627L154.965 122.688L175.601 116.01L192.24 129.538L206.872 113.544L228.192 116.914Z"
              fill="white"
            />
            <rect
              x="245.118"
              y="110.88"
              width="56.4301"
              height="56.32"
              rx="28.16"
              fill="white"
            />
            <path
              d="M259.226 139.92L283.914 139.92"
              stroke="#01D1A8"
              stroke-width="7.40408"
              stroke-linecap="round"
            />
            <path
              d="M275.133 128.04L286.816 139.7L275.133 151.36"
              stroke="#01D1A8"
              stroke-width="6.30952"
              stroke-linecap="round"
            />
            <path
              d="M51.0144 36.0084V53.6466H48.9219V44.5927H47.0227V52.8316H44.9992V36.4781H47.0227V42.8316H48.9219V36.0084H51.0144ZM35.7174 48.4532C39.4744 46.2985 41.0697 43.5084 41.3804 39.9794H36.5324V38.2184H43.5006C43.4868 42.9974 41.9813 47.0996 36.9744 49.9656L35.7174 48.4532ZM55.8893 36.7819V39.0264H60.0054V36.7819H62.1739V44.4753H53.7416V36.7819H55.8893ZM55.5164 47.438V45.746H67.0703V50.3662H57.6849V51.775H67.6228V53.5015H55.544V48.7916H64.9018V47.438H55.5164ZM55.8893 42.7557H60.0054V40.6769H55.8893V42.7557ZM64.888 45.0347V36.0084H67.0703V39.572H69.5358V41.3399H67.0703V45.0347H64.888ZM41.3735 81.92H36.5876V67.7764H41.4633C45.6829 67.7764 48.2244 70.4283 48.2244 74.8344C48.2244 79.2543 45.6829 81.92 41.3735 81.92ZM39.1221 79.717H41.2492C44.205 79.717 45.7036 78.0872 45.7036 74.8344C45.7036 71.5886 44.205 69.9794 41.3252 69.9794H39.1221V79.717ZM50.4939 81.92V67.7764H59.6789V69.9173H53.0284V73.7709H59.1955V75.9049H53.0284V79.7792H59.7273V81.92H50.4939ZM63.9922 67.7764L67.6801 78.9297H67.8251L71.5129 67.7764H74.303L69.3168 81.92H66.1815L61.1953 67.7764H63.9922ZM76.0017 81.92V67.7764H85.1868V69.9173H78.5362V73.7709H84.7033V75.9049H78.5362V79.7792H85.2351V81.92H76.0017ZM87.6423 81.92V67.7764H90.1768V79.7792H96.4199V81.92H87.6423ZM110.533 74.8482C110.533 79.42 107.743 82.1134 104.041 82.1134C100.319 82.1134 97.5497 79.4062 97.5497 74.8482C97.5497 70.2764 100.319 67.583 104.041 67.583C107.743 67.583 110.533 70.2764 110.533 74.8482ZM100.105 74.8482C100.105 78.0803 101.728 79.8275 104.041 79.8275C106.348 79.8275 107.971 78.0803 107.971 74.8482C107.971 71.6162 106.348 69.8689 104.041 69.8689C101.728 69.8689 100.105 71.6162 100.105 74.8482ZM112.799 81.92V67.7764H118.089C121.341 67.7764 123.075 69.7584 123.075 72.4587C123.075 75.1728 121.321 77.1341 118.054 77.1341H115.333V81.92H112.799ZM115.333 75.0416H117.716C119.622 75.0416 120.478 73.9642 120.478 72.4587C120.478 70.9532 119.622 69.9035 117.702 69.9035H115.333V75.0416ZM125.142 67.7764H128.257L132.463 78.0526H132.628L136.841 67.7764H139.956V81.92H137.511V72.1894H137.38L133.457 81.8786H131.634L127.704 72.1549H127.587V81.92H125.142V67.7764ZM142.603 81.92V67.7764H151.788V69.9173H145.138V73.7709H151.305V75.9049H145.138V79.7792H151.837V81.92H142.603ZM165.853 67.7764V81.92H163.595L156.896 72.2584H156.778V81.92H154.244V67.7764H156.53L163.201 77.4449H163.325V67.7764H165.853ZM167.854 69.9173V67.7764H179.118V69.9173H174.753V81.92H172.225V69.9173H167.854ZM181.864 82.072C181.028 82.072 180.337 81.3952 180.351 80.5595C180.337 79.7308 181.028 79.0609 181.864 79.0609C182.679 79.0609 183.369 79.7308 183.376 80.5595C183.369 81.3952 182.679 82.072 181.864 82.072Z"
              fill="#232527"
            />
          </g>
          <defs>
            <clipPath id="clip0_2836_13178">
              <rect width="328" height="198" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <p
        css={css`
          margin-left: 8px;
        `}
      >
        {props.text}
      </p>
    </div>
  );
};

const BtnCss = css`
  width: 328px;
  word-break: keep-all;
  typo: ${theme.typo.Web.Body2};

  :hover{
    cursor:pointer;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
  
  @media (max-width: 390px) {
    typo : ${theme.typo.Mobile.Body1};
    width : 346px;
    aspect radio : 346 /160;
  }
`;

export const BtnWrapper = css`
  display: flex;
  gap: 24px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
