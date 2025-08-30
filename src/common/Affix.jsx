import React, { useEffect, useState, useRef } from "react";

const Affix = ({ children, top = 100, bottomOffset = 100 }) => {
    const [affixStyle, setAffixStyle] = useState({});
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.parentElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= top && rect.bottom > windowHeight - bottomOffset) {
                // Stick (fixed)
                setAffixStyle({
                    position: "fixed",
                    top: `${top}px`,
                    width: `${rect.width}px`,
                });
            } else if (rect.bottom <= windowHeight - bottomOffset) {
                // Stop at bottom (absolute)
                setAffixStyle({
                    position: "absolute",
                    bottom: `${bottomOffset}px`,
                    width: "100%",
                });
            } else {
                // Normal flow
                setAffixStyle({});
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [top, bottomOffset]);

    return (
        <div ref={containerRef} style={{ position: "relative" }}>
            <div style={affixStyle}>{children}</div>
        </div>
    );
};

export default Affix;
