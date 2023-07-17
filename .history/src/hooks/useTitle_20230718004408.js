import { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Jerins Parlour`;
    }, [title])
};
export default UseTitle;