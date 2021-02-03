const select = document.querySelector('.content__select');
select.insertAdjacentHTML(
    "beforeend",
    `<div class="select">
        <div class="select__header">
            <div class="select__arrow">
                <span class="arrow-select"></span>
            </div>
            <span class="select__current select-value">
                <div class="select__icon">
                    <svg width="40" height="36" viewBox="0 0 40 36" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M19.9257 35.0685H40V10.0546L18.3562 8.49316L19.9257 35.0685Z"
                                fill="#03232E" />
                        <path d="M0 10.0546V35.0685H20V8.49316L0 10.0546Z"
                              fill="#07485E" />
                        <path
                                d="M19.9257 0L18.3562 4.93151L19.9257 9.86301H40V0H19.9257Z"
                                fill="#B4D2D7" />
                        <path d="M0 0H20V9.86301H0V0Z" fill="#E1EBF0" />
                        <path d="M3.56152 3.83569H6.02728V6.02747H3.56152V3.83569Z"
                              fill="#FF4A4A" />
                        <path d="M8.49316 3.83569H10.9589V6.02747H8.49316V3.83569Z"
                              fill="#FFD422" />
                        <path d="M13.6985 3.83569H16.1642V6.02747H13.6985V3.83569Z"
                              fill="#00CC76" />
                        <path d="M21.0959 18.9041H34.7946V21.0958H21.0959V18.9041Z"
                              fill="#00CC76" />
                        <path d="M4.93164 18.9041H18.6303V21.0958H4.93164V18.9041Z"
                              fill="#00FF94" />
                        <path d="M29.863 13.6987H34.7945V16.1645H29.863V13.6987Z"
                              fill="#00CC76" />
                        <path
                                d="M34.7946 23.8357H19.9198L18.3562 27.5345L19.9198 31.233H34.7946V23.8357Z"
                                fill="#EFE2DD" />
                        <path
                                d="M27.3972 13.6987H19.9563L19.178 14.9114L19.9563 16.1645H27.3972V13.6987Z"
                                fill="#00CC76" />
                        <path d="M4.93164 13.6987H9.86315V16.1645H4.93164V13.6987Z"
                              fill="#00FF94" />
                        <path d="M12.3289 13.6987H20.0001V16.1645H12.3289V13.6987Z"
                              fill="#00FF94" />
                        <path
                                d="M11.1619 23.8357L9.58911 27.5345L11.1619 31.233H20.0001V23.8357H11.1619Z"
                                fill="#FFF5F5" />
                        <path d="M4.93164 23.8357H10.959V31.233H4.93164V23.8357Z"
                              fill="#FFD422" />
                    </svg>
                </div>
                <p class="select__text">
                    Уникальность
                </p>
            </span>
        </div>
        <div class="select__body">
            <div class="select__arrow">
                <span class="arrow-select"></span>
            </div>
            <span class="select-option select-value">
                <div class="select__icon">
                    <svg width="40" height="36" viewBox="0 0 40 36" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M19.9257 35.0685H40V10.0546L18.3562 8.49316L19.9257 35.0685Z"
                                fill="#03232E" />
                        <path d="M0 10.0546V35.0685H20V8.49316L0 10.0546Z"
                              fill="#07485E" />
                        <path
                                d="M19.9257 0L18.3562 4.93151L19.9257 9.86301H40V0H19.9257Z"
                                fill="#B4D2D7" />
                        <path d="M0 0H20V9.86301H0V0Z" fill="#E1EBF0" />
                        <path d="M3.56152 3.83569H6.02728V6.02747H3.56152V3.83569Z"
                              fill="#FF4A4A" />
                        <path d="M8.49316 3.83569H10.9589V6.02747H8.49316V3.83569Z"
                              fill="#FFD422" />
                        <path d="M13.6985 3.83569H16.1642V6.02747H13.6985V3.83569Z"
                              fill="#00CC76" />
                        <path d="M21.0959 18.9041H34.7946V21.0958H21.0959V18.9041Z"
                              fill="#00CC76" />
                        <path d="M4.93164 18.9041H18.6303V21.0958H4.93164V18.9041Z"
                              fill="#00FF94" />
                        <path d="M29.863 13.6987H34.7945V16.1645H29.863V13.6987Z"
                              fill="#00CC76" />
                        <path
                                d="M34.7946 23.8357H19.9198L18.3562 27.5345L19.9198 31.233H34.7946V23.8357Z"
                                fill="#EFE2DD" />
                        <path
                                d="M27.3972 13.6987H19.9563L19.178 14.9114L19.9563 16.1645H27.3972V13.6987Z"
                                fill="#00CC76" />
                        <path d="M4.93164 13.6987H9.86315V16.1645H4.93164V13.6987Z"
                              fill="#00FF94" />
                        <path d="M12.3289 13.6987H20.0001V16.1645H12.3289V13.6987Z"
                              fill="#00FF94" />
                        <path
                                d="M11.1619 23.8357L9.58911 27.5345L11.1619 31.233H20.0001V23.8357H11.1619Z"
                                fill="#FFF5F5" />
                        <path d="M4.93164 23.8357H10.959V31.233H4.93164V23.8357Z"
                              fill="#FFD422" />
                    </svg>
                </div>
                <p class="select__text">
                    Уникальность
                </p>
            </span>
            <span class="select-disable select-value">
                <div class="select__icon">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M32.3071 36.0001L22.1917 25.704L25.8844 21.9453L35.9999 32.2414L32.3071 36.0001Z"
                                fill="#87A0AF" />
                        <path
                                d="M15.7111 0L14.3013 15.4458L15.7111 31.0685C24.3152 31.0685 31.315 24.1 31.315 15.5342C31.315 6.96881 24.3152 0 15.7111 0Z"
                                fill="#B4D2D7" />
                        <path
                                d="M0 15.5342C0 24.1 7.07928 31.0685 15.7808 31.0685V0C7.07928 0 0 6.96881 0 15.5342Z"
                                fill="#E1EBF0" />
                        <path
                                d="M15.7119 3.69873L14.3013 15.4459L15.7119 27.37C22.2763 27.37 27.6163 22.0608 27.6163 15.5343C27.6163 9.00821 22.2763 3.69873 15.7119 3.69873Z"
                                fill="#212CBB" />
                        <path
                                d="M3.69873 15.5343C3.69873 22.0608 9.1187 27.37 15.7809 27.37V3.69873C9.1187 3.69873 3.69873 9.00821 3.69873 15.5343Z"
                                fill="#005FE1" />
                        <path
                                d="M21.6799 10.8494L15.7482 16.7465L15.0413 18.9209L15.7482 19.7261L23.1782 12.339L21.6799 10.8494Z"
                                fill="#EFE2DD" />
                        <path
                                d="M14.1665 18.418L9.87555 14.0547L8.38379 15.5718L14.1665 21.4519L15.781 19.81V16.776L14.1665 18.418Z"
                                fill="#FFF5F5" />
                    </svg>
                </div>
                <p class="select__text">
                    Повторы
                </p>
            </span>
            <span class="select-disable select-value">
                <div class="select__icon">
                    <svg width="37" height="32" viewBox="0 0 37 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M36.4719 0H18.2927L16.8713 20.8411L36.4719 19.4375V0Z"
                                fill="#03232E" />
                        <path d="M0 0V19.4375L18.1119 20.8411V0L0 0Z"
                              fill="#07485E" />
                        <path
                                d="M24.3146 30.0213V25.4888L16.8713 24.0667L18.2894 30.0213H24.3146Z"
                                fill="#87A0AF" />
                        <path
                                d="M12.1572 30.0213H18.1118V24.0667L12.1572 25.4888V30.0213Z"
                                fill="#B4D2D7" />
                        <path
                                d="M27.5401 31.0137V29.0288H18.3108L17.6157 30.0212L18.3108 31.0137H27.5401Z"
                                fill="#B4D2D7" />
                        <path d="M8.93188 29.0288H18.1119V31.0137H8.93188V29.0288Z"
                              fill="#E1EBF0" />
                        <path
                                d="M18.2927 19.6006L16.8713 22.5782L18.2927 25.5552H36.4719V19.6006H18.2927Z"
                                fill="#B4D2D7" />
                        <path d="M0 19.6006H18.1119V25.5552H0V19.6006Z"
                              fill="#E1EBF0" />
                        <path
                                d="M21.5648 3.22534L23.0742 4.73481L20.6137 7.19508L19.1045 5.6859L21.5648 3.22534Z"
                                fill="#FF4A4A" />
                        <path d="M20.593 8.68384H24.0665V10.6687H20.593V8.68384Z"
                              fill="#FF4A4A" />
                        <path d="M12.5034 8.64941H15.9656V10.7734H12.5034V8.64941Z"
                              fill="#FF9F22" />
                        <path
                                d="M14.93 3.24438L17.378 5.69246L15.876 7.19415L13.428 4.74608L14.93 3.24438Z"
                                fill="#FF9F22" />
                        <path
                                d="M15.876 12.2283L17.378 13.73L14.93 16.178L13.428 14.6763L15.876 12.2283Z"
                                fill="#FF9F22" />
                        <path
                                d="M20.6137 12.1572L23.0742 14.6177L21.5648 16.127L19.1045 13.6665L20.6137 12.1572Z"
                                fill="#FF4A4A" />
                        <path
                                d="M18.2815 4.71411L16.8713 9.67629L18.2815 14.6385C20.1031 14.6385 21.5854 13.1579 21.5854 11.338V8.01481C21.5854 6.19468 20.1031 4.71411 18.2815 4.71411Z"
                                fill="#FF9F22" />
                        <path
                                d="M14.8865 8.01481V11.338C14.8865 13.1579 16.3335 14.6385 18.1119 14.6385V4.71411C16.3335 4.71411 14.8865 6.19468 14.8865 8.01481Z"
                                fill="#FFD422" />
                    </svg>
                </div>
                <p class="select__text">
                    Опечатки
                </p>
            </span>
            <span class="select-disable select-value">
                <div class="select__icon">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M34 20.3872V13.6128H31.3607C30.9895 12.0437 30.3662 10.5705 29.5359 9.23799L31.4066 7.37447L26.5984 2.58414L24.7277 4.44766C23.3902 3.6207 21.9119 2.99944 20.3367 2.62979V0H16.9369L15.6028 17L16.9369 34H20.3367V31.3705C21.9116 31.0006 23.3902 30.3796 24.7277 29.5523L26.5982 31.4161L31.4063 26.6258L29.5359 24.762C30.3659 23.4295 30.9895 21.9566 31.3605 20.3872H34Z"
                                fill="#B4D2D7" />
                        <path
                                d="M13.6128 0V2.62953C12.0437 2.99944 10.5705 3.62044 9.23799 4.44766L7.37447 2.58388L2.58414 7.37421L4.44766 9.23799C3.6207 10.5705 2.99944 12.0434 2.62979 13.6128H0V20.3872H2.62953C2.99944 21.9563 3.62044 23.4295 4.44766 24.762L2.58388 26.6255L7.37421 31.4159L9.23799 29.5523C10.5705 30.3793 12.0434 31.0003 13.6128 31.3702V34H17V0L13.6128 0Z"
                                fill="#E1EBF0" />
                        <path
                                d="M12.172 23.2877L7.21924 17.0001L12.172 10.7124L13.7398 11.9446L9.75769 17.0001L13.7398 22.0555L12.172 23.2877Z"
                                fill="#07485E" />
                        <path
                                d="M21.5951 23.2877L20.0273 22.0555L24.0094 17.0001L20.0273 11.9446L21.5951 10.7124L26.5479 17.0001L21.5951 23.2877Z"
                                fill="#03232E" />
                        <path d="M15.8357 10.4795H17.9316V23.2877H15.8357V10.4795Z"
                              fill="#07485E" />
                    </svg>

                </div>
                <p class="select__text">
                    Валидация
                </p>
            </span>
        </div>
    </div>`
)

document.querySelector('.select__header').addEventListener('click', () => {
    document.querySelector('.select__body').classList.toggle('active');
    document.querySelector('.select__header').classList.toggle('active');
}) ;

document.querySelector('.select-option').addEventListener('click',() => {
    document.querySelector('.select__body').classList.remove('active');
});

