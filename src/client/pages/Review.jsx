import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/SpinnerComponent';
import LoadingReviewLayoutComponent from '../components/review/LoadingReviewLayoutComponent';
import GridHeaderComponent from '../components/review/GridHeaderComponent';
import { getReview } from '../data/api/DataReducer';


function Review() {
  const openai = useSelector((state) => state.OpenAi);
  const data = useSelector((state) => state.data);

  const queryParams = new URLSearchParams(location.search);
  const assignment = queryParams.get('assignment');
  if(assignment === null) {
    window.location.href = "/home";
  }

  const onClickGoBack = () => {
    window.location.href = "/home";
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if(assignment !== null) {
      dispatch(getReview({ assignmentId: assignment }));
    }
  }, []);

  return (
    <>
      { data.status === "loading" && <Spinner /> }
      { data.status === "loading" && <LoadingReviewLayoutComponent /> }
      { (data.status === "succeeded" || data.status === "idle") && data.currentReview && data.currentReview.feedback &&
        <>
          <div className="main-review">
            <a className='go-home' onClick={onClickGoBack}>
              <img src="left-arrow.png" alt="Left arrow" />
            </a>
            <div className="instructions-wrapper">
              <h2>Assignment</h2>
              {
                  data.currentReview.assignment.map((element, index) => (
                      typeof element === 'string'
                      ? <p key={index}>{element}</p>
                      : (
                        <ul key={index}>
                          {element.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      )
                  ))
                }
            </div>
            <div className="section-wrapper">
              <h2>Your version</h2>
              <div className="paragraph">
                {data.currentReview.feedback.original.map((message, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: message }} />
                ))}
              </div>
            </div>
            <div className="section-wrapper">
              <h2>How to improve it?</h2>
              <div className="feedback">
                {data.currentReview.feedback.comments.map((comment, index) => (
                  <div className='note' key={index}>{comment}</div>
                ))}
                <h3>Some rephrases</h3>
                {data.currentReview.feedback.rephrases.map((rephrase, index) => (
                  <div className='rephrase' key={index}>
                    <em>"{rephrase.unclear}"</em> could be rephrased to <em>"{rephrase.rephrased}</em>"
                  </div>
                ))}
              </div>
            </div>
              <h2>GPT Version</h2>
              <div className="rewrite">
                {data.currentReview.feedback.rewrite.map((message, index) => (
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
