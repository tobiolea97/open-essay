import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/SpinnerComponent';
import LoadingReviewLayoutComponent from '../components/review/LoadingReviewLayoutComponent';
import GridHeaderComponent from '../components/review/GridHeaderComponent';


function Review() {
  const openai = useSelector((state) => state.OpenAi)

  // useEffect(() => {
  //   if (reviewStatus === "succeeded") {
  //   }
  // }, [reviewStatus]);

  return (
    <>
      { openai.status === "loading" && <Spinner /> }
      { openai.status === "loading" && <LoadingReviewLayoutComponent /> }
      { openai.status === "succeeded" && 
        <>
          <div className="main-review">
            <GridHeaderComponent />
            <div className="paragraph">
              {openai.writingReview.original.map((message, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: message }} />
              ))}
            </div>
            <div className="feedback">
              {openai.writingReview.comments.map((comment, index) => (
                <div className='note' key={index}>{comment}</div>
              ))}
              <h3>Some rephrases</h3>
              {openai.writingReview.rephrases.map((rephrase, index) => (
                <div className='rephrase' key={index}>
                  <em>"{rephrase.unclear}"</em> could be rephrased to <em>"{rephrase.rephrased}</em>"
                </div>
              ))}
            </div>
            <div className="rewrite">
              {openai.writingReview.rewrite.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Review;
