import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/SpinnerComponent';
import LoadingReviewLayoutComponent from '../components/review/LoadingReviewLayoutComponent';


function Review() {
  const openAiSelector = useSelector((state) => state.OpenAi)
  console.log("Review status: ", openAiSelector.status);

  // useEffect(() => {
  //   if (reviewStatus === "succeeded") {
  //   }
  // }, [reviewStatus]);

  return (
    <>
      { openAiSelector.status === "loading" && <Spinner /> && <LoadingReviewLayoutComponent /> }
    </>
  );
}

export default Review;
