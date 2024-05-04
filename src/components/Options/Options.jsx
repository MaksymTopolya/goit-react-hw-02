
export default function Options({ OnFeedback, totalFeedbacks, onReset}) {
    return (
       <div>
            <button onClick={() => OnFeedback('good')}>Good</button>
            <button onClick={() => OnFeedback('neutral')}>Neutral</button>
            <button onClick={() => OnFeedback('bad')}>Bad</button>  
          {totalFeedbacks > 0 && (
                <button onClick={onReset}>Reset</button>
            )}
        </div>
    );
}
