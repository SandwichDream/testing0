import React from "react"

import ParnterSiteImg from "../Images/Frame_37612_1.png"

import { IoMdCopy } from "react-icons/io";

function PartnerSites() {
    return (<div className="partner-sites d-flex">
        <div className="partner-site">
            <h6 className="partner-site__title">Название партнерского сайта</h6>
            <div className="partner-site__content">
                <img src={ParnterSiteImg} alt="Pic"/>
            </div>
            <div className="partner-site__URL">
                <div className="input-group">
                    <div className="form-control copy-url-ps" aria-describedby="button-addon1">https://arbittroom.com/</div>
                    <button className="btn btn-outline-secondary copy-url-ps" type="button" id="button-addon1"><IoMdCopy/></button>
                </div>
            </div>
        </div>
        <div className="partner-site">
            <h6 className="partner-site__title">Название партнерского сайта</h6>
            <div className="partner-site__content blure">
                <img src={ParnterSiteImg} alt="Pic"/>
            </div>
            <div className="partner-site__URL">
                <div className="input-group">
                    <div className="form-control copy-url-ps" aria-describedby="button-addon1">https://arbittroom.com/</div>
                    <button className="btn btn-outline-secondary copy-url-ps" type="button" id="button-addon1"><IoMdCopy/></button>
                </div>
            </div>
        </div>
        <div className="partner-site">
            <h6 className="partner-site__title">Название партнерского сайта</h6>
            <div className="partner-site__content blure">
                <img src={ParnterSiteImg} alt="Pic"/>
            </div>
            <div className="partner-site__URL">
                <div className="input-group">
                    <div className="form-control copy-url-ps" aria-describedby="button-addon1">https://arbittroom.com/</div>
                    <button className="btn btn-outline-secondary copy-url-ps" type="button" id="button-addon1"><IoMdCopy/></button>
                </div>
            </div>
        </div>
    </div>)
}

export default PartnerSites