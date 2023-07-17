import { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Doctors portal`;
    }, [title])
};
export default UseTitle;