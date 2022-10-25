import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { footer_logo, mmw_logo, footer_insta, footer_linkden } from "../public/imagesList/list"

const Footer = () => {
    return (
        <div className="footer">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-3'>
                        <div className="footer_image">
                            <Image src={footer_logo} height="130px" width="130p" alt="footer" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="footer_image">
                            <h4>Experience</h4>
                            <h4>My Trip</h4>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="footer_image">
                            <Link href="/contact"><h4>Contact Us</h4></Link>
                            <h4>Blog</h4>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="footer_image3">
                            <h4>Follow us on</h4>
                            <div>
                                <Link href="https://instagram.com/thesmartraveller.in?igshid=YmMyMTA2M2Y="><a target="_blank" className="home_insta"><Image src={footer_insta} width="60px" height="60px" alt="media" /></a></Link>
                                <Link href="https://www.linkedin.com/company/the-smart-traveller/?viewAsMember=true"><a target="_blank" className="home_facebook"><Image src={footer_linkden} width="60px" height="60px" alt="media1" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="footer_copyright">
                        <p>Copyright © 2022 Travel Company. All Rights Reserved</p>
                        <Link href="https://www.makemywebsite.com.au/">
                            <div className='d-flex justify-content-center'>
                                <Image src={mmw_logo} alt="mmw_logo" height={10} width="50px" className=".mmw" /> <p className="web_design">Web Design Melbourne  Make My Website</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;