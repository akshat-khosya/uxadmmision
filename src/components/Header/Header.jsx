import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

import { Tooltip } from '@mui/material';
import AppBoxLink from './AppBoxLink';
import AppLinks from '../AppLinks.js';
 
function Header({sideBar,GoTo, onHelp}){
    const [appBoxExpand, setAppBoxExpand] = useState(false);
    return(
        <header className="header">
        <div className="header-left">
            <Tooltip title="Toggle Side Bar">
                <div className="header-left__burger" onClick={sideBar}>
                    <MenuIcon className="header-left__burger-icon" />
                </div>
            </Tooltip>
            <div className="header-left__title" onClick={() => { GoTo(-1) }}>
                <span className="header-left__title__text">Admisson Portal</span>
            </div>
        </div>
        
        {
            appBoxExpand && <div className="header-appbox">
                {
                    AppLinks.map(((AppLink, index) => (
                        <AppBoxLink
                            key={index}
                            icon={AppLink.icon}
                            label={AppLink.label}
                            GoToLink={() => {
                                setAppBoxExpand(false);
                                GoTo(index);
                            }}
                        />
                    )))
                }
            </div>
        }
    </header>
    )  
}
export default Header