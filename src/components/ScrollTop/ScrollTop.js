import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {useEffect, useState} from "react";
import { cyan } from '@mui/material/colors';


function ScrollTop () {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    },[])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {showTopBtn && (

                <ArrowUpwardIcon
                    sx={{ color: cyan[50] }}
                    onClick={goToTop}
                    style={{
                        position: 'fixed',
                        bottom: "50px",
                        right: "75px",
                        height: "50px",
                        width: "50px",
                        fontSize: "80px",
                    }}
                    fontSizeLarge
                />

            )}

        </>



    )
}
export default ScrollTop;