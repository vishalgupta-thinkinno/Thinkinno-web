import {useSelector} from 'react-redux';
import FetchContent from './fetchContent';

const ContentData= () => {

  const textContent = useSelector(store => store.textContentSlice);
  
  return (
    <>
      <FetchContent/>
    </>
  )
}

export default ContentData;