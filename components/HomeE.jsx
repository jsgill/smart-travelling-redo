import React from 'react';
import { works_section } from '../utility/cardIcon';
import HomeEProps from './HomeEProps';
import styles from "../styles/Home.module.css";

const HomeE = () => {
    return (
        <>
            <div className='container pb-5'>
                <div className='row justify-content-center text-center'>
                    <div className={styles.home_works}><h1>How it works</h1></div>
                </div>
                <div className='row justify-content-center'>
                    {
                        works_section.map((works, ind) => {
                            const { path, title, para } = works
                            return (
                                <HomeEProps
                                    imgPath={path}
                                    title={title}
                                    para={para}
                                    indnum={ind}
                                    higCus={ind == 1 ? "400px" : "446px"}
                                    widCus={ind == 1 ? "300px" : "621px"}
                                    rowStru={ind == 1 ? "flex-row-reverse" : "flex-row"}
                                    cusCss={ind == 1 ? "text-end" : "text-start"}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default HomeE