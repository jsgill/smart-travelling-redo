import React from 'react'
import { dream_call } from '../utility/cardIcon';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeCProps from './HomeCProps';
import styles from "../styles/Home.module.css"

const HomeC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className={styles.home_dream}>
                    <div className={styles.home_div_1}>Don’t call it a dream,</div>
                    <div className={styles.home_div_2}>call it a plan</div>
                    <p className='pt-2 pb-5'>Check out these trending attractions</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <Carousel responsive={responsive} keyBoardControl={styles.arrow} >
                        {
                            dream_call.map((dream) => {
                                const { link, para, imgPath, title, id } = dream;
                                return (
                                    <div className={styles.home_carousal_card} key={id}>
                                        <HomeCProps imgPath={imgPath} title={title} link={link} para={para} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HomeC