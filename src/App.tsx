import React from "react";
import Step1 from "./components/Step1/step1";
import Step2 from "./components/Step2/step2";
import Step3 from "./components/Step3/step3";
import Step4 from "./components/Step4/step4";

export default function App() {
  const [step, setStep] = React.useState<1 | 2 | 3 | 4>(1);

  if (step === 1) return <Step1 onNext={() => setStep(2)} />;
  if (step === 2) return <Step2 onPrev={() => setStep(1)} onNext={() => setStep(3)} />;
  if (step === 3) return <Step3 onPrev={() => setStep(2)} onNext={() => setStep(4)} />;

  return <Step4 onPrev={() => setStep(3)} onSubmit={() => alert("Submitted!")} />;
}