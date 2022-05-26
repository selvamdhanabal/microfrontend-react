import { mount } from 'marketing/MarketingApp'
import React, {useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
    const ref = useRef(null)
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigation}  = mount(ref.current, {
            onNavigate: ({pathname: nextPathName}) => {
                const {pathname} = history.location;

                if(pathname !== nextPathName) {
                    history.push(nextPathName)
                }
            }
        });
        history.listen(onParentNavigation);
    }, [])

    return <div ref={ref} />;
}

export default MarketingApp