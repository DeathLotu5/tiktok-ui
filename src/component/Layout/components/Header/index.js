import classNames from "classnames/bind";
import {useEffect, useState} from "react";
import Tippy from "@tippyjs/react/headless";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

import images from '~/assets/image'
import styles from './Header.module.scss'
import {Wrapper as PopperWrapper} from "~/component/Layout/components/Popper";
import AccountItem from "~/component/Layout/components/AccountItem";
import Button from "~/component/Button";

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 100)
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"/>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>

                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type='text'
                            placeholder='Search accounts and videos'
                            spellCheck='false'
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>

                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>


                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button
                        text
                    >
                        Upload
                    </Button>
                    <Button
                        primary
                        rounded
                    >
                        Log in
                    </Button>

                    <Tippy
                        interactive
                        placement='bottom-end'
                        render={attrs => (
                            <div className={cx('menu-items')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>

                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>

                            </div>
                        )}
                    >

                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Tippy>


                </div>
            </div>
        </header>
    );
}

export default Header;