import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const SuccessColor = "#83D78C";
const DeleteColor = "#E25454";
const DarkColor = "#282C34";

const Title = styled.div`
  font-family: Fredoka One;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.8em;
  max-width: 900px;
`;

const SubTitle = styled.div`
  font-family: Fredoka One;
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 0.8em;
  max-width: 900px;
`;

const YesButton = styled.div`
  background: ${SuccessColor};
  color: ${DarkColor};
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 80px;
  padding: 1em;
  margin: 1em;
  cursor: pointer;
`;

const NoButton = styled.div`
  background: ${DeleteColor};
  color: ${DarkColor};
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 80px;
  padding: 1em;
  margin: 1em;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function App() {
  const [sleep, setSleep] = useState(false);
  const [excercise, setExcercise] = useState(false);
  const [caffein, setCaffein] = useState(false);
  const [midnight, setMidnight] = useState(false);

  const [slides, setSlides] = useState("main");

  const resetState = () => {
    setSleep(false);
    setExcercise(false);
    setCaffein(false);
    setSlides("main");
  };

  return (
    <div className="App">
      {/* main page */}
      {slides == "main" && (
        <section className="App-header">
          <Title>Sleep Deprived Expert System🌙</Title>
          <SubTitle>Are you having trouble sleeping?😴</SubTitle>
          <YesButton
            onClick={() => {
              setSlides("1");
            }}
          >
            I can't sleep! Help me out!
          </YesButton>
        </section>
      )}

      {/* Q.1 */}
      {slides == "1" && (
        <section className="App-header">
          <Title>I took in average 8 hours of sleep this week</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setSleep(true);
                setSlides("2");
              }}
            >
              Yes
            </YesButton>
            <NoButton
              onClick={() => {
                setSlides("2");
              }}
            >
              Less than 8 hours
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* Q. 2 */}
      {slides == "2" && (
        <section className="App-header">
          <Title>I do regular excercises in this week</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setExcercise(true);
                setSlides("3");
              }}
            >
              Yes
            </YesButton>
            <NoButton
              onClick={() => {
                setSlides("3");
              }}
            >
              No, I don't
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* Q. 3 */}
      {slides == "3" && (
        <section className="App-header">
          <Title>I drink coffee 1 ~ 2 cups this week</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setSlides("4");
              }}
            >
              I drank less
            </YesButton>
            <NoButton
              onClick={() => {
                setCaffein(true);
                setSlides("4");
              }}
            >
              I drank more
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* Q. 4 */}
      {slides == "4" && (
        <section className="App-header">
          <Title>I go to sleep before 12 midnight</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setSlides("result");
              }}
            >
              Yes
            </YesButton>
            <NoButton
              onClick={() => {
                setMidnight(true);
                setSlides("result");
              }}
            >
              No
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* RESULT PAGE */}
      {slides == "result" && (
        <section className="App-header">
          {sleep && excercise && !caffein && !midnight && (
            <>
              <Title>
                I think you are fine. Try to close your eyes and go back to
                sleep 🙂
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && excercise && !caffein && !midnight && (
            <>
              <Title>
                I think you are lacking some sleep hours. Make sure to get 7 ~ 8
                hours of quality sleep. 🤔
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && !excercise && !caffein && !midnight && (
            <>
              <Title>
                I think you are lacking some sleep hours and some excercise.
                Make sure to get 7 ~ 8 hours of quality sleep and short
                excercise at least twice a week.
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && !excercise && caffein && !midnight && (
            <>
              <SubTitle>
                Ugh... Too much caffein intake and no excercise will make your
                body weary but not tired. Which will disturb your brain to set
                the timer for you to sleep. Try to reduce caffein intake, and do
                short push ups (running in place) before going to sleep
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && !excercise && caffein && midnight && (
            <>
              <Title>
                The worst condition you could get. Call a doctor for help. 🩺💉
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && !excercise && !caffein && !midnight && (
            <>
              <Title>
                Regular excercises are important. 10 ~ 15 mins of jogging or
                doing light pushups will significantly increase your sleep
                quality. You should try it. 🏃‍♀️🏃‍♂️
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && !excercise && caffein && !midnight && (
            <>
              <SubTitle>
                Ugh... Too much caffein intake and no excercise will make your
                body weary but not tired. Which will disturb your brain to set
                the timer for you to sleep. Try to reduce caffein intake, and do
                short push ups (running in place) before going to sleep
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && !excercise && caffein && midnight && (
            <>
              <SubTitle>
                Staying up late after 12 midnight will seriously affect your
                body clock. I suggest you to take some light excercise before
                bed, tire your body, so it will trigger the brain to sleep. And
                don't reduce caffein intake for the mean time.
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && excercise && caffein && !midnight && (
            <>
              <Title>Reduce caffein intake. It helps.</Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && excercise && caffein && !midnight && (
            <>
              <Title>
                Your body should be very tired right now. Try closing your eyes
                get in a comfortable position go to sleep.
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && excercise && caffein && midnight && (
            <>
              <Title>
                You can try to fix your sleeping schedule by waking up early,
                and reduce caffein intake
              </Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && excercise && !caffein && midnight && (
            <>
              <Title>Try to sleep earlier to fix your sleep schedule.</Title>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && excercise && caffein && midnight && (
            <>
              <SubTitle>
                Caffein causes you to stay awake longer. Sleeping after 12
                midnight might ruin your sleeping schedule. Try to reduce
                caffein and sleep early
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && !excercise && caffein && midnight && (
            <>
              <SubTitle>
                Caffein causes you to stay awake longer. Sleeping after 12
                midnight might ruin your sleeping schedule. Try to reduce
                caffein, do some light excercise before going to sleep early.
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {sleep && !excercise && !caffein && midnight && (
            <>
              <SubTitle>
                Not doing excercise won't make your body tired, thus you will be
                able to stay awake more. The problem lies when you sleep after
                12 midnigt, it might ruin your sleeping schedule. Try to do some
                light excercise before going to bed, and early in the morning
                after you wake up.
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}

          {!sleep && !excercise && !caffein && midnight && (
            <>
              <SubTitle>
                Not doing excercise won't make your body tired, thus you will be
                able to stay awake more. The problem lies when you sleep after
                12 midnigt, it might ruin your sleeping schedule. Try to do some
                light excercise before going to bed, and get at least 7 hours of
                in total of quality sleep.
              </SubTitle>
              <SubTitle>Not satisfied? Try again.</SubTitle>
              <YesButton onClick={resetState}>Retry</YesButton>
            </>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
