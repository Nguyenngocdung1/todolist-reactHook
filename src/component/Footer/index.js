import React, { } from 'react';
import {Button} from 'reactstrap';

function Footer() {
    return (
        <div className="footer">
            <Button>Đã hoàn thành</Button>
            <Button>Chưa hoàn thành</Button>
            <Button>Hoàn thành nhanh</Button>
        </div>
    )
}

export default Footer;