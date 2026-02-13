import React from "react";
import "../../wizard/wizard.css";
import DMVHeader from "../common/DMVHeader";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export default function Step2({ onPrev, onNext }: Props) {
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
            <StepDot active number={2} label="History" />
            <StepLine />
            <StepDot number={3} label="Preferences" />
            <StepLine />
            <StepDot number={4} label="Registration" />
          </div>
          <div className="stepperCaption">Step 2 of 4: Driving &amp; medical history</div>
        </div>

        {/* Section C */}
        <fieldset className="fieldset">
          <legend className="legend">C. Tell us about your driving history</legend>

          <div className="qRow">
            <div className="qText">
              1. Have you ever had a Driver License? If yes, write from what country, state, or
              jurisdiction?
            </div>
            <YesNo name="c1" />
          </div>

          <div className="qInputLine">
            <input className="lineInputPlain" placeholder="Country, state, or jurisdiction" />
          </div>

          <div className="qDivider" />

          <div className="qRow">
            <div className="qText">2. Has your license ever been suspended or revoked?</div>
            <YesNo name="c2" />
          </div>

          <div className="qRow">
            <div className="qText">
              3. Has your application for a Driver License been denied in another country or state?
            </div>
            <YesNo name="c3" />
          </div>

          <div className="importantBox">
            <div className="importantTitle">IMPORTANT:</div>
            <div className="importantText">
              Upon issuance of a driver license or identification card in the District of Columbia,
              any driver license or identification card previously issued by another state will be
              cancelled.
            </div>
          </div>
        </fieldset>

        {/* Section D */}
        <fieldset className="fieldset">
          <legend className="legend">D. Tell us about your medical history</legend>

          <div className="smallItalic">Skip this section if you are only here for an ID card.</div>

          <div className="qRow">
            <div className="qText">
              1. Do you require corrective lenses or glasses for the vision screening test?
            </div>
            <YesNo name="d1" />
          </div>

          <div className="qRow">
            <div className="qText">2. Are you required to wear a hearing device while driving?</div>
            <YesNo name="d2" />
          </div>

          <div className="qDivider" />

          <div className="subTextBold">
            In the past 5 years, have you had or been treated for any of the following? If yes, to
            an item, please complete the Medical/Eye form.
          </div>

          <div className="qRow">
            <div className="qText">1. Alzheimer&apos;s Disease</div>
            <YesNo name="d3" />
          </div>

          <div className="qRow">
            <div className="qText">2. Insulin Dependent Diabetes</div>
            <YesNo name="d4" />
          </div>

          <div className="qRow">
            <div className="qText">3. Glaucoma, Cataracts, or Eye Diseases</div>
            <YesNo name="d5" />
          </div>

          <div className="qRow">
            <div className="qText">4. Seizure or Loss of Consciousness</div>
            <YesNo name="d6" />
          </div>

          <div className="qRow">
            <div className="qText">
              5. Do you have other mental or physical conditions that would impair your ability to
              drive?
            </div>
            <YesNo name="d7" />
          </div>
        </fieldset>

        {/* Footer */}
        <div className="card footerCard">
          <button className="btnGhostActive" onClick={onPrev} type="button">
            ‹ Previous
          </button>

          <div className="pageIndicator">2 / 4</div>

          <button className="btnPrimary" onClick={onNext} type="button">
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

/** Yes/No radios on the right */
function YesNo({ name }: { name: string }) {
  return (
    <div className="yesNo">
      <label className="radioLabel">
        <input type="radio" name={name} value="Yes" />
        <span>Yes</span>
      </label>

      <label className="radioLabel">
        <input type="radio" name={name} value="No" />
        <span>No</span>
      </label>
    </div>
  );
}

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