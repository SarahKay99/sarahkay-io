/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-empty-pattern */
import { useTogglePopups } from "../../@context/togglePopups";
import React from "react"
import { useNavigate } from "react-router-dom";
import { Mask, HeaderWrapper } from "./index.style";

interface HeaderProps {

}

function Header({}: HeaderProps) {
    const navigate = useNavigate();

    const { toggleShowingSettings } = useTogglePopups();

    return <Mask>
        <HeaderWrapper>
            <div className="image">
                <a onClick={(e) => {navigate('/about', {replace: true})}}>ABOUT</a>
            </div>

            <div className="image">
                <a onClick={(e) => {navigate('/blog', {replace: true})}}>BLOG</a>
            </div>
            
            <div className="image">
                <a onClick={(e) => {navigate('/portfolio', {replace: true})}}>PORTFOLIO</a>
            </div>

            <div className="image">
                <a onClick={(e) => {navigate('/contact', {replace: true})}}>CONTACT</a>
            </div>

            <div className="image">
                <a onClick={(e) => {toggleShowingSettings(e)}}>
                    <img src="settings.png" />
                </a>
            </div>
        </HeaderWrapper>
    </Mask>
}

export default Header;