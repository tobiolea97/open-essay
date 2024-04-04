import { useState } from "react";
import OriginalWritingComponent from "../components/OriginalWritingComponent";

function Review() {
  return (
    <main className="main-review">
        <div></div>
        <div className="title">
          <h2>Your version</h2>
        </div>
        <div className="title">
          <h2>GPT version</h2>
        </div>
        <div className="title">
          <h2>Some feedback</h2>
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #1</h4>
        </div>
        <div className="paragraph">
        As population increases and cities becomes bigger, so do the traffic in the streets. That is why <wrong>cityzens</wrong> <right>citizens</right> of big metropolies are trying to replace their cars with alternatives means of transport. On this count, <wrong>bycicle</wrong> <right>bicycle</right> has become on recent years a popular and cheap alternative for traveling to work. This essay will develop different aspects about the subject and provide an opinion about whether it is or not a good alternative for commuting.
        </div>
        <div className="rewrite">
          As the population increases and cities grow larger, so does the traffic on the streets. That is why citizens of big metropolises are trying to replace their cars with alternative means of transport. In recent years, the bicycle has become a popular and affordable option for commuting to work. This essay will explore different aspects of the subject and offer an opinion on whether cycling is a suitable alternative for commuting.
        </div>
        <div className="feedback">
          <p>The introduction provides a clear overview of the topic. However, there are some misspelled words and errors in prepositions that need to be corrected to enhance clarity.</p>
          <ul>
            <li>Consider revising the misspelled words and prepositions to improve the coherence of the text.</li>
            <li>Provide a smoother transition between the introduction and the body of the essay to enhance the flow of ideas.</li>
            <li>Try to include a stronger thesis statement at the end of the introduction to clearly outline the writer's position on the topic.</li>
          </ul>
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #2</h4>
        </div>
        <div className="paragraph">
        As mentioned before, the amount of cars in the street (and therefore the traffic) seems to increase all the time. This has as a consequence that every week we spend around one extra shift just commuting; recent studies have shown that people from big <wrong>towns</wrong> <right>cities</right> who travell to work by car spent an average of 9hs per week stuck in traffic.
        </div>
        <div className="rewrite">
          The escalation of cars on the streets (and consequently, traffic) appears to be perpetual. As a result, we find ourselves spending an additional shift each week just commuting. Recent studies have revealed that individuals from major cities who travel to work by car spend an average of 9 hours per week trapped in traffic.
        </div>
        <div className="feedback">
          <p>The second paragraph addresses the issue of traffic congestion effectively. However, there are some inaccuracies and unclear expressions that could be revised for better cohesion and clarity.</p>
          <ul>
            <li>Consider rephrasing the sentence 'This has as a consequence that every week we spend around one extra shift just commuting' for better clarity.</li>
            <li>Specify the source of the recent studies mentioned to provide credibility to the argument.</li>
            <li>Provide more specific examples or statistics to support the claim about the time spent in traffic congestion.</li>
          </ul>
        </div>
    </main>
  );
}

export default Review;
