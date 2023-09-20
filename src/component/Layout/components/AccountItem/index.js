import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/64aa5504782ff64a904aad0fd57717fe~c5_100x100.jpeg?x-expires=1695391200&x-signature=QYzKJswoN2U2fk%2BRhNexl0SGtPE%3D" alt='Image' className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;