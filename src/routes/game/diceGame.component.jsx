import { useRef } from "react";
import { useNavigate } from "react-router";
import "./dicegame.scss";

export const Game = () => {
  const navigate = useNavigate();

  const dice1Ref = useRef(null);
  const dice2Ref = useRef(null);

  const waitTime = 3000;

  const randomDice = () => {
    const random1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    const random2 = Math.floor(Math.random() * 6) + 1;

    rollDice1(random1);
    rollDice2(random2);
  };

  const generateRandomRotation = () => {
    const ans = {
      x: Math.floor(Math.random() * 3600) + 3600, // Random rotation on X-axis
      y: Math.floor(Math.random() * 3600) + 3600, // Random rotation on Y-axis
    };
    console.log("gen", ans);
    return ans;
  };

  const rollDice1 = (random) => {
    const rotation = generateRandomRotation();
    dice1Ref.current.style.animation = `none`; // Reset animation
    dice1Ref.current.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`; // Random rotation
    dice1Ref.current.style.transition = "transform 6s ease-out";

    setTimeout(() => {
      dice1Ref.current.style.transition = "none"; // "transform 1s ease-out";
      dice1Ref.current.style.animation = "none";
      showFinalFace(dice1Ref, random);
    }, waitTime);
  };

  const rollDice2 = (random) => {
    const rotation = generateRandomRotation();
    // const transValue = dice2.style.transition;
    dice2Ref.current.style.animation = `none`; // Reset animation
    dice2Ref.current.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`; // Random rotation
    dice2Ref.current.style.transition = "transform 6s ease-out";

    setTimeout(() => {
      dice2Ref.current.style.transition = "none";
      // console.log(transValue);
      dice2Ref.current.style.animation = "none";
      showFinalFace(dice2Ref, random);
    }, waitTime);
  };

  function showFinalFace(diceInstance, random) {
    switch (random) {
      case 1:
        diceInstance.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 6:
        diceInstance.current.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
      case 2:
        diceInstance.current.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 5:
        diceInstance.current.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 3:
        diceInstance.current.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        diceInstance.current.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      default:
        break;
    }
  }

  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source
          src="/istockphoto-1124809881-640_adpp_is.mp4"
          type="video/mp4"
        />
      </video>

      <div className="container2">
        <div className="dices">
          <div className="dice dice1" ref={dice1Ref}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face right"></div>
            <div className="face left"></div>
          </div>

          <div className="dice dice2" ref={dice2Ref}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face right"></div>
            <div className="face left"></div>
          </div>
        </div>

        <button className="roll" onClick={() => randomDice()}>
          Play
        </button>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
