import React, { Fragment } from "react";
import styled from 'styled-components'


const Field = styled.div`
  border-radius: 4px;

  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }

  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
`

const ReviewForm = (props) =>{
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input type="radio" value={score} checked={props.review.score == score} onChange={()=>console.log('onChange')} name="rating" id={`rating-${score}`}/>
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    <ReviewWrapper>
      <form onSubmit={props.handleSubmit}>
        <ReviewHeadline>Have An Experience with {props.name}? Add Your Review!</ReviewHeadline>
        <Field>
          <input onChange={props.handleChange} type="text" name="title" placeholder="Review Title" value={props.review.title}/>
        </Field>
        <Field>
          <input onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description}/>
        </Field>
        <Field>
          <RatingContainer>
            <RatingBoxTitle>Rate This Airline</RatingBoxTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="Submit">Create Review</SubmitBtn>
        {
          props.error &&
          <Error>{props.error}</Error>
        }
      </form>
    </ReviewWrapper>
  )
}

export default ReviewForm
