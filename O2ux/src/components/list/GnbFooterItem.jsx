import React from 'react';

export default function GnbFooterItem({ dt, dd, dd2 }) {
    return (
        <dl className="footer-item">
            <dt>{dt}</dt>
            <dd>{dd}</dd>
            <dd>{dd2}</dd>
        </dl>
    );
}
