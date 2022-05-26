import { range } from "../utils";
import { ProblemType } from "./Problem";

export class RoteSpeech {
  speechRecognition;
  synthesisEnabled;
  recognitionEnabled;

  constructor(synthesisEnabled, recognitionEnabled) {
    this.synthesisEnabled = synthesisEnabled;
    this.recognitionEnabled = recognitionEnabled;

    if (recognitionEnabled && !RoteSpeech.supportsSpeechRecognition()) {
      throw new Error(
        "Can't construct a speech recognition object when it's not supported."
      );
    }

    if (synthesisEnabled && !RoteSpeech.supportsSpeechSynthesis()) {
      throw new Error("Can't enable speech synthesis when it's not supported.");
    }

    if (RoteSpeech.supportsSpeechRecognition()) {
      let Recognition =
        window.webkitSpeechRecognition || window.SpeechRecognition;
      let GrammarList =
        window.webkitSpeechGrammarList || window.SpeechGrammarList;

      let numberWords = range(145)
        .map((n) => "" + n)
        .join(" | ");
      let grammar = `#JSGF V1.0; grammar numbers; public <number> = ${numberWords};`;
      this.speechRecognition = new Recognition();
      this.speechRecognition.continuous = false;

      if (GrammarList) {
        const speechRecognitionList = new GrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        this.speechRecognition.grammars = speechRecognitionList;
      }

      this.speechRecognition.maxAlternatives = 5;
    }
  }

  static getAnswerFromSpeechResults(resultList) {
    // this is annoying. why are some things implemented as array-like instead of arrays?
    let results = [];
    for (let i = 0; i < resultList[0].length; i++) {
      results.push(resultList[0][i].transcript);
    }

    let numberResults = results
      .map(RoteSpeech.pluckNumberFromPhrase)
      .filter((x) => x !== undefined);

    let gotNumber = !!numberResults.length;
    let number = gotNumber ? numberResults[0] : undefined;
    let word = results[0];

    let result = {
      gotNumber: gotNumber,
      number: number,
      word: word,
      alternatives: results,
    };

    console.log(result);
    return result;
  }

  speak(message, startRecognition = false) {
    // if recognition is enabled, we have to disable it so RoteMath doesn't talk to itself.
    // It is not a good conversationalist.
    if (this.recognitionEnabled) {
      this.speechRecognition.abort();
    }

    if (this.synthesisEnabled) {
      let synth = window.speechSynthesis;
      if (synth.speaking) {
        synth.cancel(); // stop current utterance. otherwise they queue up.
      }

      let utterance = new SpeechSynthesisUtterance(message);
      if (startRecognition && this.recognitionEnabled) {
        utterance.onend = () => this.speechRecognition.start();
      }
      synth.speak(utterance);
    } else if (startRecognition && this.recognitionEnabled) {
      this.speechRecognition.start();
    }
  }

  speakProblem(problem, startRecognition = false) {
    let operator;
    if (problem.type === ProblemType.Addition) {
      operator = "plus";
    } else {
      operator = "times";
    }
    let values = [problem.left, problem.right, problem.answer];
    values[problem.problemMode] = "something";
    let message = `${values[0]} ${operator} ${values[1]} equals ${values[2]}?`;
    this.speak(message, startRecognition);
  }

  static pluckNumberFromPhrase(phrase) {
    let numbers = phrase
      .split(" ")
      .filter((x) => !isNaN(+x))
      .map((x) => +x);
    return numbers.length ? numbers[0] : undefined;
  }

  static supportsSpeechRecognition() {
    return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  }

  static supportsSpeechSynthesis() {
    return "SpeechSynthesisUtterance" in window;
  }
}
