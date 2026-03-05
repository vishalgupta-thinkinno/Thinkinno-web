import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { textSliceActions } from '../store/textContentSlice';

const FetchContent = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/content.json', {signal})
    .then(res => res.json())
    .then(result => {
      console.log(result);
      dispatch(textSliceActions.addInitialText(result));
    })
    
    return ()=> {
      controller.abort();
    }
  }, []);

  return null;
};

export default FetchContent;