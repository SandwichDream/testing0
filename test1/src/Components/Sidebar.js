import React from 'react'

import { FiArrowLeft } from "react-icons/fi";
import { PiHouseFill, PiChatsCircleFill } from "react-icons/pi";
import { BiWallet } from "react-icons/bi";
import { IoMdPricetag, IoMdSettings, IoIosGlobe } from "react-icons/io";
import { HiMiniClock } from "react-icons/hi2";
import { CgFileDocument } from "react-icons/cg";
import { RiVideoFill } from "react-icons/ri";

import ProfileImg from "../Images/Rectangle122.png";

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="ComeBack">
                <a><FiArrowLeft/> Вернуться на сайт</a>
            </div>
            <div className="Profile-info d-flex">
                <div className="Profile-image">
                    <img src={ProfileImg} alt="*-*"/>
                </div>
                <div className="Profile-description">
                    <h5 className="m-0">kris_anfalova</h5>
                    <p className="m-0">4 уровень</p>
                </div>
            </div>
            <div className="Sidebar__tags">
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <PiHouseFill/>
                    </div>
                    <div>Главная</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <BiWallet/>
                    </div>
                    <div>Пополнение кошелька</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <IoMdPricetag/>
                    </div>
                    <div>Пул ликвидности</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <IoIosGlobe/>
                    </div>
                    <div>Мои партнёры</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <PiHouseFill/>
                    </div>
                    <div>Вывод средств</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <CgFileDocument/>
                    </div>
                    <div>Партнёрские материалы</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <RiVideoFill/>
                    </div>
                    <div>Promo</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <HiMiniClock/>
                    </div>
                    <div>История операций</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <IoMdSettings/>
                    </div>
                    <div>Настройки</div>
                </a>
                <a className="d-flex align-items-center">
                    <div className="Sidebar__svg">
                        <PiChatsCircleFill/>
                    </div>
                    <div>Контакты</div>
                </a>
            </div>
        </div>
    )
}

export default Sidebar