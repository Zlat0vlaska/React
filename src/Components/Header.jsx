import React, { useState } from "react";

const Header = function () {

    const [now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000);
    return (
        <header>

            
            <span>
                Время сейчас: {now.toLocaleTimeString()}
            </span>
            
        </header>
    );
};

export default Header;
