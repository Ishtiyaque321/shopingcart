import React from "react";
import "../styles/PreFooter.css";
import "../styles/Footer.css";

const repeatIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
    </svg>
);

const shieldIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
    </svg>
);

const mapIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
    </svg>
);

const githubIcon = (
    <img
        src="https://cdn-icons-png.flaticon.com/512/889/889111.png?w=740&t=st=1678108476~exp=1678109076~hmac=9d27d25e58882dcf5c1d2fb9aa9fa08d0f41228b55cd00216e36e88c17adb1dc"
        width="24"
        height="24"
    />
);

const linkedinIcon = (
    <img
        src="https://cdn-icons-png.flaticon.com/512/185/185964.png?w=740&t=st=1678109203~exp=1678109803~hmac=879da133ce190f4dc0e5cb8a456364e11cc553423de4cfd1942b4fa667f00241"
        width="24"
        height="24"
    />
);

const facebookIcon = (
    <img
        src="https://cdn-icons-png.flaticon.com/512/179/179319.png?w=740&t=st=1678108802~exp=1678109402~hmac=12d0517a68bf2ac9c2499f49f86624ea25d038e4f3307ab7509a7bbba1ebeac3"
        width="24"
        height="24"
    />
);

const instagramIcon = (
    <img
        src="https://cdn-icons-png.flaticon.com/512/355/355975.png?w=740&t=st=1678109017~exp=1678109617~hmac=e9e6221d6f766c82d48e6704bb2500512dbbd9f995e7fde06356801984c1949b"
        width="24"
        height="24"
    />
);

const Footer = () => {
    return (
        <>
            <div className="PreFooter">
                <div>
                    {repeatIcon}
                    <p>
                        <b>Hassle-free replacement</b> <br />
                        10-day easy replacement policy on mi.com
                    </p>
                </div>
                <div>
                    {shieldIcon}
                    <p>
                        <b>100% secure payments</b> <br /> We support Cards,
                        Wallets, EMI and COD
                    </p>
                </div>
                <div>
                    {mapIcon}
                    <p>
                        <b>Vast service network</b> <br /> 1000 Mi
                        service-centers across 600 cities
                    </p>
                </div>
            </div>

            <div className="PreFooter2">
                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales specials and more</span>
                </div>

                <div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                        />
                        <button>›</button>
                    </div>
                    <span>
                        Thanks. You're on our email list for special offers.
                    </span>
                </div>

                <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
                </div>

                <div>
                    <a href="https://github.com/tushar-upadhya/mi-store">
                        {githubIcon}
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100008185626112">
                        {facebookIcon}
                    </a>

                    <a href="https://www.instagram.com/_tusharupadhyay/">
                        {instagramIcon}
                    </a>

                    <a href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/">
                        {linkedinIcon}
                    </a>
                </div>
            </div>

            <div className="footerBorder">
                <div> Copyright © 2023 Xiaomi. All Rights Reserved</div>
            </div>
        </>
    );
};

export default Footer;
