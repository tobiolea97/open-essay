import { useState } from "react";
import OriginalWritingComponent from "../components/OriginalWritingComponent";

function Review() {
  return (
    <main className="main-review">
        <div></div>
        <div className="feedback">
            <div className="note left">The introduction needs to be more engaging and concise</div>
            <div className="note right">The essay lacks smooth transitions</div>
            <div className="note left">The conclusion could be stronger and more impactful</div>
            <div className="note right">Avoid repetition and redundancy in your writing</div>
            <div className="note left">Ensure correct usage of tenses throughout the essay</div>
        </div>
        <div className="title">
          <h2>Your version</h2>
        </div>
        <div className="title">
          <h2>How to improve it?</h2>
        </div>
        <div className="title">
          <h2>GPT version</h2>
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #1</h4>
        </div>
        <div className="paragraph">
        As technology grows bigger, we become stiller. It seems that most of our daily tasks requires to be sitting in front of a computer, and people do not include excersise on their schedule. This essay will develop the aspects of nowaday lifestyle, the benefits of including regular excersise, and provide an opinion on how we can implement it
        </div>
        <div className="rewrite">
          As the population increases and cities grow larger, so does the traffic on the streets. That is why citizens of big metropolises are trying to replace their cars with alternative means of transport. In recent years, the bicycle has become a popular and affordable option for commuting to work. This essay will explore different aspects of the subject and offer an opinion on whether cycling is a suitable alternative for commuting.
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #2</h4>
        </div>
        <div className="paragraph">
        Modern economy has taken us to a sedentary lifestyle. Both when working and studying we spent a significant amount of time sitting at a desktop. This lead us to make a lot of mental work, without doing any physical effort. The problem is that after of long hours of thinking, people are often too tired to engage in outdoors activities or sports, and they search for more screen-based activities.
        </div>
        <div className="rewrite">
          The escalation of cars on the streets (and consequently, traffic) appears to be perpetual. As a result, we find ourselves spending an additional shift each week just commuting. Recent studies have revealed that individuals from major cities who travel to work by car spend an average of 9 hours per week trapped in traffic.
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #3</h4>
        </div>
        <div className="paragraph">
        However, is not an unknown fact that doing exercise regularly has a lot of benefits. Studies have shown that people who runs twice or thre times a weeks have a deeper sleep during night, which help them to rest better. On the other hand, people who started practicing some kind of sport assert to have had their self esteem improved after some months of trainning.
        </div>
        <div className="rewrite">
          The escalation of cars on the streets (and consequently, traffic) appears to be perpetual. As a result, we find ourselves spending an additional shift each week just commuting. Recent studies have revealed that individuals from major cities who travel to work by car spend an average of 9 hours per week trapped in traffic.
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #4</h4>
        </div>
        <div className="paragraph">
        One point to remark is that taking up some sport activities is easier than what people think. A common belief is that doing regular excersise implies hard work at gym, or running several kilometers per day. However, a simple 10-minutes walk is enough as a starting point; what is important finding an activity that appeals to us and, little by little, increase the amount of time we spent practising it.
        </div>
        <div className="rewrite">
          The escalation of cars on the streets (and consequently, traffic) appears to be perpetual. As a result, we find ourselves spending an additional shift each week just commuting. Recent studies have revealed that individuals from major cities who travel to work by car spend an average of 9 hours per week trapped in traffic.
        </div>
        <div className="paragraph-number">
          <h4>Paragraph #5</h4>
        </div>
        <div className="paragraph">
        As a conclusion, it is clear that both students and think workers spent a lot of time sitting on they chairs, and that including some sports on their agenda is a must do. The good think is that finding an free-time activities that does not imply stay sitting in front of a screen will always be up to us.
        </div>
        <div className="rewrite">
          The escalation of cars on the streets (and consequently, traffic) appears to be perpetual. As a result, we find ourselves spending an additional shift each week just commuting. Recent studies have revealed that individuals from major cities who travel to work by car spend an average of 9 hours per week trapped in traffic.
        </div>
    </main>
  );
}

export default Review;
