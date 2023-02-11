import React, { useState, useEffect } from "react"

const StickyElement = () => {
    const [isSticky, setSticky] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const elementTop = elementRef.current.getBoundingClientRect().top
            const isTop = elementTop <= 0

            if (isTop && !isSticky) {
                setSticky(true)
            } else if (!isTop && isSticky) {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isSticky])

    return (
        <div ref={elementRef} className={`sticky-element ${isSticky ? "sticky" : ""}`}>
            <p>I am a sticky element!</p>
        </div>
    )
}

export default StickyElement
