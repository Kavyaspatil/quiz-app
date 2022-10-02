import {useState} from "react"
function App(){
  const questions=[
    {
      questionsText:"Which is JavaScript front-end framework used for creating single-page web applications?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Angular js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
      ]
    },
    {
      questionsText:"Which among these is the Node js framework?",
      answerOption:[
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"Angular js",isCorrect:false},
        {answerText:"Vue js",isCorrect:false},
      ]
    },
    {
      questionsText:"Which is the Premier JS web server?",
      answerOption:[
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Angular js",isCorrect:false},
        {answerText:"Node js",isCorrect:true},
      ]
    },
    {
      questionsText:"Which among these will be in MERN architecture",
      answerOption:[
        {answerText:"frontend",isCorrect:false},
        {answerText:"backend",isCorrect:false},
        {answerText:"database",isCorrect:false},
        {answerText:"all of these",isCorrect:true},
      ]
    },
    {
      questionsText:"Which framework wraps HTTP requests & responses, makes easy to map to server side functions?",
      answerOption:[
        {answerText:"Express js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Angular js",isCorrect:false},
        {answerText:"Node js",isCorrect:false},
      ]
    },
    {
      questionsText:"Which array method is used to return new array & also generate lists?",
      answerOption:[
        {answerText:"both b & c are wrong",isCorrect:false},
        {answerText:"prop() method",isCorrect:false},
        {answerText:"map() method",isCorrect:true},
        {answerText:"both b& c are correct",isCorrect:false},
      ]
    },
    {
      questionsText:"Which is among these are javascript extensions?",
      answerOption:[
        {answerText:"JSX",isCorrect:true},
        {answerText:"RFX",isCorrect:false},
        {answerText:"AFX",isCorrect:false},
        {answerText:"SFX",isCorrect:false},
      ]
    },
    {
      questionsText:"What do you mean by 'props' in MERN?",
      answerOption:[
        {answerText:"data",isCorrect:false},
        {answerText:"properties",isCorrect:true},
        {answerText:"tag",isCorrect:false},
        {answerText:"attribute",isCorrect:false},
      ]
    },
    {
      questionsText:"Select any one of the correct advantage of Express js",
      answerOption:[
        {answerText:"It makes development slow",isCorrect:false},
        {answerText:"hard to customize",isCorrect:false},
        {answerText:"doesn't allow for error handling",isCorrect:false},
        {answerText:"Easy to connect with databases",isCorrect:true},
      ]
    },
    {
      questionsText:"Which method is used to delete the file in nodejs FS?",
      answerOption:[
        {answerText:"delete()",isCorrect:false},
        {answerText:"link()",isCorrect:false},
        {answerText:"unlink()",isCorrect:true},
        {answerText:"none of these",isCorrect:false},
      ]
    },
    {
      questionsText:"Which methods are used in both creating & updating files in FS?",
      answerOption:[
        {answerText:"appendFile()",isCorrect:false},
        {answerText:"none of these",isCorrect:false},
        {answerText:"writeFile()",isCorrect:false},
        {answerText:"both a & c",isCorrect:true},
      ]
    },
    {
      questionsText:"Select the correct Applications of Node js",
      answerOption:[
        {answerText:"I/O bound Applic applications",isCorrect:false},
        {answerText:"Data streaming applications",isCorrect:false},
        {answerText:"Both a & b are wrong",isCorrect:false},
        {answerText:"Both a & b are correct",isCorrect:true},
      ]
    },
    {
      questionsText:"which function we can use to include module?",
      answerOption:[
        {answerText:"read(modulename)",isCorrect:false},
        {answerText:"write(modulename)",isCorrect:false},
        {answerText:"require(modulename)",isCorrect:true},
        {answerText:"reset(modulename)",isCorrect:false},
      ]
    },
    {
      questionsText:"Which among is the Built-in modules in Node.js?",
      answerOption:[
        {answerText:"events",isCorrect:false},
        {answerText:"path",isCorrect:false},
        {answerText:"net",isCorrect:false},
        {answerText:"All of the above",isCorrect:true},
      ]
    },
    {
      questionsText:"____ allows us to work with the file system on our computer in node js.",
      answerOption:[
        {answerText:"Node js File System",isCorrect:true},
        {answerText:"File Folder",isCorrect:false},
        {answerText:"Both a &  b are wrong",isCorrect:false},
        {answerText:"none of these",isCorrect:false},
      ]
    },
    ]
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);
  const handle=(isCorrect)=>
  {
    if(isCorrect){
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion)
    }
    else{
      setShowScore(true)
    }
  }
    return(   <>
   <h1>We Are Counducting The "MERN STACK" Quiz.</h1>
         <div className="quiz">
      {showScore ?(
        <div className="scoresec">
          YOU HAVE SCORED {score} OUT OF {questions.length} !!!
           </div>
      ):(
        <>
        <div className="questionsec">
          <div className="q"><span>Question {currentQuestion+1}</span>/{questions.length}</div>
          <div className="questiontext">
            {questions[currentQuestion].questionsText}
          </div>
          <div className="answersec">
            {questions[currentQuestion].answerOption.map((answerOption)=>(
              <button onClick={() =>handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}</div></div>
             </>
              )}
            </div> 
             </>
              )}
export default App