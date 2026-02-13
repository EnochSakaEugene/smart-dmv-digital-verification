import React from "react";
import "../../wizard/wizard.css";
import DMVHeader from "../common/DMVHeader";

export default function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <DMVHeader />

        {/* Stepper */}
        <div className="card stepperCard">
          <div className="stepperRow">
            <StepDot active number={1} label="Personal Info" />
            <StepLine />
            <StepDot number={2} label="History" />
            <StepLine />
            <StepDot number={3} label="Preferences" />
            <StepLine />
            <StepDot number={4} label="Registration" />
          </div>

          <div className="stepperCaption">Step 1 of 4: Application type &amp; personal details</div>
        </div>

        {/* Section A */}
        <fieldset className="fieldset">
          <legend className="legend">A. What do you need?</legend>

          <div className="checkRow">
            <label className="checkLabel">
              <input type="checkbox" />
              <span>Driver License</span>
            </label>

            <label className="checkLabel">
              <input type="checkbox" />
              <span>Identification Card</span>
            </label>

            <label className="checkLabel">
              <input type="checkbox" />
              <span>Motorcycle Endorsement</span>
            </label>
          </div>
        </fieldset>

        {/* Section B */}
        <fieldset className="fieldset">
          <legend className="legend">B. Tell us about yourself</legend>

          {/* Row 1 */}
          <div className="grid4">
            <FormLine label="LAST NAME" />
            <FormLine label="FIRST NAME" />
            <FormLine label="MIDDLE NAME" />
            <FormLine label="JR./SR./III, ETC." />
          </div>

          {/* Row 2 */}
          <div className="grid3">
            <FormLine label="ADDRESS WHERE YOU LIVE (A MAILING ONLY ADDRESS CANNOT BE USED)" wide />
            <FormLine label="APT/UNIT #" />
            <FormLine label="CITY & STATE" placeholder="Washington, DC" />
          </div>

          {/* Row 3 */}
          <div className="grid1">
            <FormLine label="ZIP CODE" />
          </div>

          {/* Row 4 */}
          <div className="grid4">
            <FormLine label="DATE OF BIRTH" placeholder="MM / DD / YYYY" />
            <FormLine label="SOCIAL SECURITY #" />
            <RadioGroup label="US CITIZEN" options={["Yes", "No"]} />
            <RadioGroup label="GENDER" options={["Male", "Female", "Unspecified"]} />
          </div>

          {/* Row 5 */}
          <div className="grid6">
            <FormLine label="WEIGHT" suffix="LBS" small />
            <FormLine label="HEIGHT" suffix="FT" small />
            <FormLine label="" suffix="IN" small />
            <FormLine label="HAIR COLOR" />
            <FormLine label="EYE COLOR" />
            <FormLine label="OTHER NAMES YOU HAVE USED ON A DRIVER LICENSE OR ID CARD" wide />
          </div>

          {/* Row 6 */}
          <div className="grid4 bottomRow">
            <PhoneLine label="CELL PHONE" />
            <PhoneLine label="ALTERNATE PHONE" />
            <CheckboxInline label="TEXT NOTIFICATION" note="Standard rates apply" />
            <FormLine label="EMAIL" />
          </div>
        </fieldset>

        {/* Bottom nav */}
        <div className="card footerCard">
          <button className="btnGhost" type="button" disabled>
            ‹ Previous
          </button>

          <div className="pageIndicator">1 / 4</div>

          <button className="btnPrimary" type="button" onClick={onNext}>
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

/** Small UI pieces */
function StepDot({
  number,
  label,
  active,
}: {
  number: number;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="stepDotWrap">
      <div className={active ? "stepDot active" : "stepDot"}>{number}</div>
      <div className={active ? "stepLabel active" : "stepLabel"}>{label}</div>
    </div>
  );
}

function StepLine() {
  return <div className="stepLine" />;
}

function FormLine({
  label,
  placeholder,
  suffix,
  wide,
  small,
}: {
  label: string;
  placeholder?: string;
  suffix?: string;
  wide?: boolean;
  small?: boolean;
}) {
  return (
    <div className={wide ? "field wide" : "field"}>
      {label ? (
        <div className="fieldLabel">{label}</div>
      ) : (
        <div className="fieldLabel">&nbsp;</div>
      )}

      <div className="lineWrap">
        <input className={small ? "lineInput small" : "lineInput"} placeholder={placeholder} />
        {suffix ? <span className="suffix">{suffix}</span> : null}
      </div>
    </div>
  );
}

function PhoneLine({ label }: { label: string }) {
  return (
    <div className="field">
      <div className="fieldLabel">{label}</div>

      <div className="phoneWrap">
        <span className="paren">(</span>
        <input className="phoneBox" />
        <span className="paren">)</span>
        <input className="phoneBoxWide" />
      </div>

      <div className="lineUnder" />
    </div>
  );
}

function RadioGroup({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="field">
      <div className="fieldLabel">{label}</div>

      <div className="radioRow">
        {options.map((o) => (
          <label key={o} className="radioLabel">
            <input type="radio" name={label} />
            <span>{o}</span>
          </label>
        ))}
      </div>

      <div className="lineUnder" />
    </div>
  );
}

function CheckboxInline({ label, note }: { label: string; note?: string }) {
  return (
    <div className="field">
      <div className="fieldLabel">{label}</div>

      <div className="checkInline">
        <label className="checkLabel">
          <input type="checkbox" />
          <span>Yes</span>
        </label>

        {note ? <span className="tinyNote">{note}</span> : null}
      </div>

      <div className="lineUnder" />
    </div>
  );
}