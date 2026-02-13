import React from "react";
import "../../wizard/wizard.css";
import DMVHeader from "../common/DMVHeader";
import SignaturePadField from "../common/SignaturePadField";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export default function Step3({ onPrev, onNext }: Props) {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <DMVHeader />

        {/* Stepper */}
        <div className="card stepperCard">
          <div className="stepperRow">
            <StepDot done label="Personal Info" />
            <StepLine active />
            <StepDot done label="History" />
            <StepLine active />
            <StepDot active number={3} label="Preferences" />
            <StepLine />
            <StepDot number={4} label="Registration" />
          </div>
          <div className="stepperCaption">Step 3 of 4: Preferences &amp; medical practitioner</div>
        </div>

        {/* Section E */}
        <fieldset className="fieldset">
          <legend className="legend">E. Tell us about your preferences</legend>

          <div className="eRow">
            <div className="eText">
              1. All males 18-26 years old will be registered with Selective Service. To opt out,
              complete the opt-out form.
            </div>
          </div>

          <div className="eRow eRowYes">
            <div className="eText">
              2. I would like to add a Veteran designation to my license/ID card.
              <div className="eHint">If yes, provide proof of your status.</div>
            </div>
            <label className="rightYes">
              <input type="checkbox" />
              <span>Yes</span>
            </label>
          </div>

          <div className="eRow eRowYes">
            <div className="eText">3. I would like to be an organ and tissue donor.</div>
            <label className="rightYes">
              <input type="checkbox" />
              <span>Yes</span>
            </label>
          </div>

          <div className="eRow">
            <div className="eText">
              4. What language should we use to communicate with you?
              <div className="eLineWrap">
                <input className="lineInputPlain" type="text" aria-label="Preferred language" />
              </div>
            </div>
          </div>

          <div className="eDivider" />

          <div className="specialTitle">
            Special Designations (Optional): Add to my Driver License or ID Card
          </div>

          <div className="specialRow">
            <label className="checkLabel">
              <input type="checkbox" />
              <span>Autism</span>
            </label>

            <label className="checkLabel">
              <input type="checkbox" />
              <span>Intellectual Disability</span>
            </label>

            <label className="checkLabel">
              <input type="checkbox" />
              <span>Visually Impaired</span>
            </label>

            <label className="checkLabel">
              <input type="checkbox" />
              <span>Hearing Impaired</span>
            </label>
          </div>
        </fieldset>

        {/* Section F */}
        <fieldset className="fieldset">
          <legend className="legend">
            F. If you are 70+ years of age, your licensed medical practitioner MUST complete this
            section
          </legend>

          <div className="fGrid3">
            <LineField label="PRACTITIONER'S NAME (PRINT)" />
            <LineField label="PRACTITIONER'S IDENTIFICATION NUMBER" />
            <LineField label="PHONE NUMBER" />
          </div>

          <div className="fQuestion">
            <div className="fQText">Does the applicant have the ability to safely drive a vehicle?</div>

            <div className="fRadios">
              <label className="radioLabel">
                <input type="radio" name="safeDrive" value="Yes" />
                <span>Yes, the applicant can safely drive a vehicle.</span>
              </label>
              <label className="radioLabel">
                <input type="radio" name="safeDrive" value="No" />
                <span>No, the applicant cannot safely drive a vehicle.</span>
              </label>
            </div>
          </div>

          <div className="fDivider" />

          <div className="fGrid2">
            <SignaturePadField label="PRACTITIONER'S SIGNATURE" />
            <LineField label="DATE" />
          </div>
        </fieldset>

        {/* Footer */}
        <div className="card footerCard">
          <button className="btnGhostActive" onClick={onPrev} type="button">
            ‹ Previous
          </button>

          <div className="pageIndicator">3 / 4</div>

          <button className="btnPrimary" onClick={onNext} type="button">
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

/** Helpers */
function StepDot({
  number,
  label,
  active,
  done,
}: {
  number?: number;
  label: string;
  active?: boolean;
  done?: boolean;
}) {
  return (
    <div className="stepDotWrap">
      <div className={done ? "stepDot done" : active ? "stepDot active" : "stepDot"}>
        {done ? "✓" : number}
      </div>
      <div className={active || done ? "stepLabel active" : "stepLabel"}>{label}</div>
    </div>
  );
}

function StepLine({ active }: { active?: boolean }) {
  return <div className={active ? "stepLine active" : "stepLine"} />;
}

function LineField({ label }: { label: string }) {
  return (
    <div className="lineField">
      <div className="lineFieldLabel">{label}</div>
      <input className="lineFieldInput" type="text" aria-label={label} />
    </div>
  );
}